var Person = /** @class */ (function () {
    function Person(initialAge) {
        var _this = this;
        this.yearPasses = function () {
            _this.age++;
        };
        this.amIOld = function () {
            if (_this.age < 13) {
                console.log("You are young.");
            }
            else if (_this.age >= 13 && _this.age < 18) {
                console.log("You are a teenager.");
            }
            else {
                console.log("You are old.");
            }
        };
        if (initialAge > 0) {
            this.age = initialAge;
        }
        else {
            console.log("Age is not valid, setting age to 0");
            this.age = 0;
        }
    }
    return Person;
}());
for (var i = -5; i < 20; i++) {
    console.log("Age ", i);
    var noble = new Person(i);
    noble.amIOld();
}
