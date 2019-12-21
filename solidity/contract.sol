pragma solidity ^0.4.24;
// {
//     '2019-01-01 00:00:00' : [{"1" : "Park"}, {"2" : "Jeong"}]
// }

contract RealTimeSearch {
    
    // Make Data form (struct)
    struct Data {
        string rank;
        string keyword;
    }
    
    // Mapping uint : Data
    mapping(string => Data[]) DataJson;
    Data[] DataList;
    
    function setData(string _rank, string _keyword) public {
        DataList.push(Data(_rank, _keyword));
    }
    
    function setTime(string _time) public {
        DataJson[_time] = DataList;
    }
    
    function getData(string _time, uint _index) public view returns (string, string) {
        return (DataJson[_time][_index].rank, DataJson[_time][_index].keyword);
    }
    
    function resetList() public {
        delete DataList;
    }
    
    function getListLength() public view returns(uint) {
        return DataList.length;
    }
}