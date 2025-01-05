import React, { useState } from "react";

const VerifyCertificate = ({ blockchain }) => {
    const [name, setName] = useState("");
    const [result, setResult] = useState(null);

    const handleVerify = () => {
        const certificate = blockchain.chain.find((block) =>
            block.data.name === name ? block : null
        );
        setResult(certificate ? "Valid Certificate" : "Invalid Certificate");
    };

    return (
        <div>
            <h2>Verify Certificate</h2>
            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleVerify}>Verify</button>
            {result && <p>{result}</p>}
        </div>
    );
};

export default VerifyCertificate;