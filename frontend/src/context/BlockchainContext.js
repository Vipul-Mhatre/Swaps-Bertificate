// src/context/BlockchainContext.js
import React, { createContext, useState } from "react";
import Blockchain from "../Blockchain";

export const BlockchainContext = createContext();

export const BlockchainProvider = ({ children }) => {
    const [blockchain] = useState(new Blockchain());
    const [pendingTransactions, setPendingTransactions] = useState([]);
    const [chain, setChain] = useState(blockchain.chain);

    const addTransaction = (transaction) => {
        blockchain.createTransaction(transaction);
        setPendingTransactions([...blockchain.pendingTransactions]);
    };

    const mineBlock = (minerAddress) => {
        blockchain.minePendingTransactions(minerAddress);
        setChain([...blockchain.chain]);
        setPendingTransactions([...blockchain.pendingTransactions]);
    };

    return (
        <BlockchainContext.Provider
            value={{ chain, pendingTransactions, addTransaction, mineBlock }}
        >
            {children}
        </BlockchainContext.Provider>
    );
};