import { create } from "ipfs-http-client";

// Set up Infura IPFS client
const projectId = "d584f02a4a7347a1983d7efbaab381e9"; // Replace with your Infura Project ID
const projectSecret = "cT5z98nsAQZ39NmaLUI2qgczzJ9uagBaxjFnBVfz8E7qHD9GiLMmTA"; // Replace with your Infura Project Secret

// Authentication token
const auth =
    "Basic " + btoa(projectId + ":" + projectSecret);

const client = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
        authorization: auth,
    },
});

export default client;