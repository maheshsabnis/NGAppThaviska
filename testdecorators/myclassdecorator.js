var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// custom decorator using function having an input parameter
// that represents a 'target' (class/property/method) on which
// it will be applied
function clsExtraInfo(target) {
    console.log('I am a custom decorator');
    // define an additional proeprty that will be
    // accessed by the target on which the decorator
    // will be applied
    Object.defineProperty(target.prototype, 'Name', { value: function () { return 'The Custom Decorator Property'; } });
}
// decorator with parameters
// config --> the object that of which values will be
// set by the target object on which the decorator is applied
function clsData(config) {
    return function (target) {
        Object.defineProperty(target.prototype, 'Name', { value: function () { return config.Name; } });
    };
}
var MyClass = /** @class */ (function () {
    function MyClass(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }
    MyClass = __decorate([
        clsData({
            Name: 'The Name of the Property of the Custom Decorator'
        })
    ], MyClass);
    return MyClass;
}());
var obj = new MyClass(10, 'a');
console.log(obj);
console.log(obj.Name());
