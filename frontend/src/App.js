import React, { useState } from "react";
import Blockchain from "./Blockchain";
import Block from "./Block";  
import CreateCertificate from "./CreateCertificate";
import VerifyCertificate from "./VerifyCertificate";

const App = () => {
    const [blockchain] = useState(new Blockchain());
    const [certificates, setCertificates] = useState([]);

    const handleAddCertificate = (data) => {
        const newBlock = new Block(
            blockchain.chain.length,
            new Date().toISOString(),
            data,
            blockchain.getLatestBlock().hash
        );
        blockchain.addBlock(newBlock);
        setCertificates(blockchain.chain);
    };

    return (
        <div>
            <h1>Swaps Bertificate</h1>
            <CreateCertificate onAddCertificate={handleAddCertificate} />
            <VerifyCertificate blockchain={blockchain} />
            <div>
                <h2>Blockchain Data</h2>
                {certificates.map((block, index) => (
                    <div key={index}>
                        <p>Index: {block.index}</p>
                        <p>Timestamp: {block.timestamp}</p>
                        <p>Data: {JSON.stringify(block.data)}</p>
                        <p>Hash: {block.hash}</p>
                        <p>Previous Hash: {block.previousHash}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;