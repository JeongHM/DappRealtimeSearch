var Web3 = require('web3');
// const express = require('express');
// const app = express();
const config = require('./config');

const contractAddress = config.contractAddress;
const abi = config.abi;

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
const contract = new web3.eth.Contract(abi, contractAddress);

function getContract() {
    contract.methods
        .getListLength()
        .call({ from: config.selfAddress })
        .then(function(res) {
            console.log(res);
        });
}

// getContract();
