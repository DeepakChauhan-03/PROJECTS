import React, { useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL || "http://localhost:5000";

export default function CreateLink() {
  const [label, setLabel] = useState("");
  const [result, setResult] = useState(null);

  const createLink = async () => {
    const { data } = await axios.post(`${API}/api/track/create`, {
      label,
      createdBy: "investigator",
    });
    setResult(data);
  };

  return (
    <div style={{ maxWidth: 480, margin: "60px auto", fontFamily: "sans-serif" }}>
      <h2>Generate tracking link</h2>
      <input
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
        placeholder="Case label e.g. Refund scam - Sept case"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <button onClick={createLink} style={{ padding: "8px 16px" }}>
        Create Link
      </button>

      {result && (
        <div style={{ marginTop: 20, background: "#f4f4f4", padding: 12 }}>
          <p>Share this link with the suspect:</p>
          <code>{result.fullUrl}</code>
          <p style={{ marginTop: 10 }}>
            <a href="/admin">Go to Admin Dashboard →</a>
          </p>
        </div>
      )}
    </div>
  );
}
