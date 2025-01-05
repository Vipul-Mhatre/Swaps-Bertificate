import React, { useState } from "react";
import ipfsClient from "./ipfs";

function Creator() {
    const [formData, setFormData] = useState({
        university: "",
        degree: "",
        graduateName: "",
        dateOfGraduation: "",
        rollNumber: "",
        specialization: "",
        duration: "",
        honors: "",
    });
    const [certificateHash, setCertificateHash] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Generate a certificate object
        const certificate = {
            ...formData,
            createdAt: new Date().toISOString(),
        };

        try {
            // Convert the certificate object to a string
            const jsonData = JSON.stringify(certificate);

            // Upload JSON data to IPFS
            const added = await ipfsClient.add(jsonData);
            const hash = added.path; // The IPFS hash of the uploaded data

            setCertificateHash(hash);
            alert(`Certificate uploaded to IPFS with hash: ${hash}`);
        } catch (error) {
            console.error("Error uploading file to IPFS:", error);
            alert("Failed to upload certificate to IPFS.");
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h2>Create Certificate</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="university"
                    placeholder="University Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="degree"
                    placeholder="Degree Title"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="graduateName"
                    placeholder="Graduate Name"
                    onChange={handleChange}
                />
                <input
                    type="date"
                    name="dateOfGraduation"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="rollNumber"
                    placeholder="Roll Number"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="specialization"
                    placeholder="Specialization"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="duration"
                    placeholder="Course Duration"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="honors"
                    placeholder="Honors or Distinctions"
                    onChange={handleChange}
                />
                <button type="submit">Generate Certificate</button>
            </form>
            {certificateHash && (
                <p>
                    Certificate Hash:{" "}
                    <a
                        href={`https://ipfs.io/ipfs/${certificateHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Certificate
                    </a>
                </p>
            )}
        </div>
    );
}

export default Creator;