const mongoose = require("mongoose");

const trackLinkSchema = new mongoose.Schema(
  {
    linkId: { type: String, required: true, unique: true },
    label: { type: String, default: "Untitled link" }, // e.g. "Suspect - refund scam"
    createdBy: { type: String, default: "investigator" }, // who generated this link
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TrackLink", trackLinkSchema);
