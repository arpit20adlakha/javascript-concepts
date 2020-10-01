'use strict'

// use this   "type": "module" in your  package.json to use import in node.js


class Vehicle {

    constructor(type, horsepower) {
        this.type = type;
        this.horsepower = horsepower;
    }

}

Vehicle.prototype.getType  = function () {
    return this.type;
}

export default Vehicle;