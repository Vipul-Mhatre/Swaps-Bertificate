import React, { useState } from "react";

const CreateCertificate = ({ onAddCertificate }) => {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && course && date) {
            onAddCertificate({ name, course, date });
            setName("");
            setCourse("");
            setDate("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Certificate</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
            />
            <input
                type="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <button type="submit">Generate</button>
        </form>
    );
};

export default CreateCertificate;