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

function setData(rank, keyword) {
    contract.methods
        .setData()
        .call({ rank: rank, keyword: keyword })
        .then(function(res) {
            console.log(res);
        });
}

function setTime(time) {
    contract.methods
        .setTime()
        .call({ time: time })
        .then(function(res) {
            console.log(res);
        });
}

function resetData() {
    contract.methods
        .resetList()
        .call({ time: time })
        .then(function(res) {
            console.log(res);
        });
}
