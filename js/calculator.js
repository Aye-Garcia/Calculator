class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        this.result = a + b;
        this.checkNumber(this.result);
        return this.result;
    }

    subtract(a, b) {
        this.result = a - b;
        this.checkNumber(this.result);
        return this.result;
    }

    multiply(a, b) {
        this.result = a * b;
        this.checkNumber(this.result);
        return this.result;
    }

    divide(a, b) {
        this.result = a / b;
        this.checkNumber(this.result);
        return this.result;
    }

    checkNumber(result) {
        if(result === parseInt(result)) {
            return;
        } else {
            this.result = result.toFixed(2);
            return;
        }
    }
}