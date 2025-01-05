import { create } from "ipfs-http-client";

// Set up Infura IPFS client
const projectId = "projectId"; // Replace with your Infura Project ID
const projectSecret = "projectSecret"; // Replace with your Infura Project Secret

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