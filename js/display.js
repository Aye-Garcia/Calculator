class Display {
    constructor(displayPreviousValue, displayCurrentValue) {
        this.displayPreviousValue = displayPreviousValue;
        this.displayCurrentValue = displayCurrentValue;
        this.calculator = new Calculator();
        this.currentValue = '';
        this.previousValue = '';
        this.operationType = undefined;
        this.signs = {
            add: '+',
            subtract: '-',
            multiply: '×',
            divide: '÷',
        }
    }

    addNumber(num) {
        if(num === '.' && this.currentValue.includes('.')) return;
        this.currentValue = this.currentValue.toString() + num.toString();
        this.printValues();
    }

    clear() {
        this.currentValue = this.currentValue.toString().slice(0,-1);
        this.printValues();
    }

    clearAll() {
        this.previousValue = '';
        this.currentValue = '';
        this.operationType = undefined;
        this.printValues();
    }

    calculate() {
        const previousValue = parseFloat(this.previousValue);
        const currentValue = parseFloat(this.currentValue);

        if(isNaN(currentValue) || isNaN(previousValue)) return;

        this.currentValue = this.calculator[this.operationType](previousValue, currentValue);
    }

    comput(type) {
        if(this.operationType !== 'same'){
            this.calculate();
        }
        this.operationType = type;

        if(this.currentValue !== '') {
            this.previousValue = this.currentValue;
            this.currentValue = '';
        }

        this.printValues();
    }

    printValues() {
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.signs[this.operationType] || ''}`;
    }
}