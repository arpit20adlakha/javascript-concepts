class Numbers {
    constructor(array) {
        this.array = array;
    }

    addNumber(number) {
        if (number !== undefined) {
            this.array.push(number);
        }
        const abc = (number) => {
            console.log(this === numbersObject); // => true
            console.log("this", this);
            this.array.push(number);
        }
        return abc.bind(this);
    }
}

const numbersObject = new Numbers([]);
const addMethod = numbersObject.addNumber();

addMethod(1);
addMethod(5);
console.log(numbersObject.array);
