const express = require("express");
const TrackLink = require("../models/TrackLink");
const Hit = require("../models/Hit");

const router = express.Router();

// All links created so far
router.get("/links", async (req, res) => {
  const links = await TrackLink.find().sort({ createdAt: -1 });
  res.json({ success: true, links });
});

// All hits for one link (who clicked it, when, from where)
router.get("/hits/:linkId", async (req, res) => {
  const hits = await Hit.find({ linkId: req.params.linkId }).sort({ createdAt: -1 });
  res.json({ success: true, hits });
});

// Every hit across every link (global feed)
router.get("/hits", async (req, res) => {
  const hits = await Hit.find().sort({ createdAt: -1 }).limit(200);
  res.json({ success: true, hits });
});

// Deactivate a link once the case is closed
router.patch("/links/:linkId/deactivate", async (req, res) => {
  const link = await TrackLink.findOneAndUpdate(
    { linkId: req.params.linkId },
    { active: false },
    { new: true }
  );
  res.json({ success: true, link });
});

module.exports = router;
