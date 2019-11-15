// const add = function (a, b) {
//     console.log (arguments);
//     return a + b;
// }

const add = (a, b) => {
    a + b;
}

console.log(add(55, 1));

const user = {
    name: 'Nikhil Kapre',
    cities: ['Hyderabad', 'Pune', 'New Delhi'],

    //printPlacesLived: function () {
    printPlacesLived () {
        return this.cities.map((city) => {
            return this.name + ' has lived in ' + city + '!';
        });

        /*this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });*/
    }
};

console.log(user.printPlacesLived());