class Block {
    constructor(index, timestamp, data, previousHash = "") {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return (
            String(this.index) +
            this.timestamp +
            JSON.stringify(this.data) +
            this.previousHash
        )
            .toString()
            .slice(0, 64); 
    }
}

export default Block; 