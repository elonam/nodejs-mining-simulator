String.prototype.expandExponential = function(){
    return this.replace(/^([+-])?(\d+).?(\d*)[eE]([-+]?\d+)$/, function(x, s, n, f, c){
        var l = +c < 0, i = n.length + +c, x = (l ? n : f).length,
        c = ((c = Math.abs(c)) >= x ? c - x + l : 0),
        z = (new Array(c + 1)).join("0"), r = n + f;
        return (s || "") + (l ? r = z + r : r += z).substr(0, i += l ? z.length : 0) + (i < r.length ? "." + r.substr(i) : "");
    });
};



const { INTHash } = require("./src/CRYPTO/HASH.js")
const { askToHost, getWallet } = require("./src/BLOCKCHAIN/BLOCKCHAIN.js")

const REPEATASKWALLET = 10

let askWallet = 0 
let BLOCK = 0

setInterval(() => {
  let answer = askToHost(BLOCK)
    BLOCK++

  if(answer) {
    console.log(`Solved hash ${BLOCK}`)
    askWallet++
    BLOCK = 0
}
  if(askWallet == REPEATASKWALLET){
    askWallet = 0
    console.log(`Current coins in your wallet: ${getWallet().toString().expandExponential()}`)
  }

})