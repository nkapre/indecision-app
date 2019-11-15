const square = function (x) {
    return x * x;
}

const squareArrow = (x) => {
    return x * x;
}

console.log(square(8));

console.log(squareArrow(10))

const getFirstName = (name) => {
    if (name) {
        return name.split(" ")[0];
    }
};


console.log('name: ', getFirstName("Nikhil Kapre"));