import React, { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL || "http://localhost:5000";

export default function AdminDashboard() {
  const [hits, setHits] = useState([]);

  useEffect(() => {
    const load = async () => {
      const { data } = await axios.get(`${API}/api/admin/hits`);
      setHits(data.hits);
    };
    load();
    const interval = setInterval(load, 5000); // auto-refresh every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ maxWidth: 1000, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h2>Captured Hits</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "2px solid #333" }}>
            <th>Time</th>
            <th>Link ID</th>
            <th>IP</th>
            <th>City / Region</th>
            <th>ISP</th>
            <th>Precise GPS</th>
            <th>Device</th>
          </tr>
        </thead>
        <tbody>
          {hits.map((h) => (
            <tr key={h._id} style={{ borderBottom: "1px solid #ddd" }}>
              <td>{new Date(h.createdAt).toLocaleString()}</td>
              <td>{h.linkId}</td>
              <td>{h.ip}</td>
              <td>{h.city}, {h.region}</td>
              <td>{h.isp}</td>
              <td>
                {h.gpsConsent
                  ? `${h.preciseLat}, ${h.preciseLon} (±${Math.round(h.accuracyMeters)}m)`
                  : "Not granted (IP-only)"}
              </td>
              <td>{h.device} / {h.browser}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
