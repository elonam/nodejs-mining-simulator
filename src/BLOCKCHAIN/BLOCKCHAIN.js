const { INThash } = require("../CRYPTO/HASH.js")

module.exports = {
	CURRENT_HASH: null,
	WALLET: 0,

	generateNewHash: function(){
		CURRENT_HASH = (new INThash(10000)).hash()
	},

	askToHost: function(HASH){
		if (HASH === CURRENT_HASH){
			module.exports.generateNewHash()
			module.exports.WALLET += 0.00000000000001 * CURRENT_HASH
			return true
		}
			else return false
	},
	getWallet: function(){
		return module.exports.WALLET;
	}
}
module.exports.generateNewHash()