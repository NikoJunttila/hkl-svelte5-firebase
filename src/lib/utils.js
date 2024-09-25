	/**
	 * @param {number} num
	 */
	export function naiveRound(num) {
        var p = Math.pow(10, 2);
        const returning = Math.round(num * p) / p;
        return returning
    }