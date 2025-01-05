// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateStorage {
    struct Certificate {
        string ipfsHash;
        string certificateId;
    }

    mapping(string => Certificate) private certificates;

    function addCertificate(string memory certificateId, string memory ipfsHash) public {
        certificates[certificateId] = Certificate(ipfsHash, certificateId);
    }

    function verifyCertificate(string memory certificateId) public view returns (string memory) {
        Certificate memory cert = certificates[certificateId];
        require(bytes(cert.certificateId).length > 0, "Certificate not found");
        return cert.ipfsHash;
    }
}