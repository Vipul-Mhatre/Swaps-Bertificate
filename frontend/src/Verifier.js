import React, { useState } from "react";
// import ipfsClient from "./ipfs";

function Verifier() {
    const [certificateHash, setCertificateHash] = useState("");
    const [certificateData, setCertificateData] = useState(null);

    const handleVerify = async () => {
        try {
            const response = await fetch(`https://ipfs.io/ipfs/${certificateHash}`);
            const data = await response.json();
            setCertificateData(data);
        } catch (error) {
            console.error("Error fetching certificate:", error);
            alert("Failed to verify certificate.");
        }
    };

    return (
        <div>
            <h2>Verify Certificate</h2>
            <input
                type="text"
                placeholder="Enter Certificate Hash"
                onChange={(e) => setCertificateHash(e.target.value)}
            />
            <button onClick={handleVerify}>Verify</button>
            {certificateData && (
                <div>
                    <h3>Certificate Details</h3>
                    <pre>{JSON.stringify(certificateData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default Verifier;