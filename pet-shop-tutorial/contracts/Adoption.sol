pragma solidity ^0.5.0;

contract Adoption {
    address[16] public adopters;
    // address는 이더리움 주소를 가지는
    // 데이터 타입이다.
    // 배열의 길이가 16인 배열 생성.

    function adopt(uint petId) public returns (uint) {
        require(petId >= 0 && petId <= 15);
        // petId가 0부터 15 사이임을 확인하기 위함이다.

        adopters[petId] = msg.sender;
        // msg 에는 이 function을 부른 person 혹은
        // smart contract의 정보가 있다.
        // msg.sender는 통해 이 function을
        // 호출한 곳의 주소 값이다.

        return petId;
    }

    // Retrieving the adopters
    function getAdopters() public view returns (address[16] memory) {
        return adopters;
    }

}