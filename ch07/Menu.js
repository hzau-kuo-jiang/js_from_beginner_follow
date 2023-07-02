class Menu {
	#offer1 = 14;
	#offer2 = 15;
	#offer3Num;
	
	constructor(offer1Num, offer2Num, offer3Num) {
		this.offer1Num = offer1Num;
		this.offer2Num = offer2Num;
		this.#offer3Num = offer3Num;
	}
	
	get total() {
		return this.calTotal();
	}
	
	calTotal() {
		return this.#offer1 * this.offer1Num + this.#offer2 * this.offer2Num + this.#offer3Num;
	}
	
}

module.exports = Menu;