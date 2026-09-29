const express = require("express");
const axios = require("axios");
const { nanoid } = require("nanoid");
const useragent = require("useragent");
const TrackLink = require("../models/TrackLink");
const Hit = require("../models/Hit");

const router = express.Router();

// 1. Create a new tracking link (investigator side)
router.post("/create", async (req, res) => {
  try {
    const { label, createdBy } = req.body;
    const linkId = nanoid(8);
    const link = await TrackLink.create({ linkId, label, createdBy });
    const fullUrl = `${process.env.CLIENT_URL}/t/${linkId}`;
    res.json({ success: true, link, fullUrl });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 2. Called by the frontend the instant the tracking page loads (silent, IP-based)
router.post("/hit/:linkId", async (req, res) => {
  try {
    const { linkId } = req.params;

    const link = await TrackLink.findOne({ linkId, active: true });
    if (!link) return res.status(404).json({ success: false, error: "Invalid or inactive link" });

    // Get the real client IP (works behind most proxies too)
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.socket.remoteAddress;

    // Free IP geolocation lookup (city-level accuracy only)
    let geo = {};
    try {
      const { data } = await axios.get(`http://ip-api.com/json/${ip}`);
      geo = data;
    } catch (e) {
      geo = {};
    }

    const agent = useragent.parse(req.headers["user-agent"]);

    const hit = await Hit.create({
      linkId,
      ip,
      city: geo.city,
      region: geo.regionName,
      country: geo.country,
      isp: geo.isp,
      approxLat: geo.lat,
      approxLon: geo.lon,
      userAgent: req.headers["user-agent"],
      device: agent.device.toString(),
      browser: agent.toAgent(),
      os: agent.os.toString(),
    });

    res.json({ success: true, hitId: hit._id });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 3. Called only if the visitor explicitly allows GPS permission in the browser
router.post("/gps/:hitId", async (req, res) => {
  try {
    const { hitId } = req.params;
    const { lat, lon, accuracy } = req.body;

    const hit = await Hit.findByIdAndUpdate(
      hitId,
      {
        preciseLat: lat,
        preciseLon: lon,
        accuracyMeters: accuracy,
        gpsConsent: true,
      },
      { new: true }
    );

    res.json({ success: true, hit });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
