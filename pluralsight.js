const b = {arpit : "tapzo",
    tpa : () => {console.log(this)}
};


b.prototype.action = function () {
    console.log("actions function is on prototype of the b object")
}

const newobj = Object.create(b);

const ab = Object.create({a : "abc"});

console.log(ab.a);
console.log(ab.prototype);

