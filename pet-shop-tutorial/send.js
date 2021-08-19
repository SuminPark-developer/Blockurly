module.exports = function(callback) {
    web3.eth.sendTransaction({from:"0x1450deaA43B666dcf4B110D6aE50fb7DB5A5bA59", to: "0x21c60838E01fB50224B58E26F1e3d95F71bfb4f8", value:web3.utils.toWei('49.9757', "ether")}, callback);
}

