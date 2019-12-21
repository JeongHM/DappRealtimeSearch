pragma solidity ^0.5.11;

contract RealTimeSearch {
    struct data {
        uint8 rank;
        string keyword;
        string date;
    }
    mapping(string => data) public naver;

    function set(uint _rank, string _keyword, string _date) public {
        naver['naver'] = data(_rank, _keyword, _date);
    }

    function get() public view returns() {
        return Data;
    }

}