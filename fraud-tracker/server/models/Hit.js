const mongoose = require("mongoose");

const hitSchema = new mongoose.Schema(
  {
    linkId: { type: String, required: true, index: true },
    ip: String,
    city: String,
    region: String,
    country: String,
    isp: String,
    approxLat: Number,
    approxLon: Number,
    preciseLat: Number, // filled only if user granted GPS permission
    preciseLon: Number,
    accuracyMeters: Number,
    userAgent: String,
    device: String,
    browser: String,
    os: String,
    gpsConsent: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hit", hitSchema);
