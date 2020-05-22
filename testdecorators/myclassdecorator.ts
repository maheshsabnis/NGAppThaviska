// custom decorator using function having an input parameter
// that represents a 'target' (class/property/method) on which
// it will be applied
function clsExtraInfo(target) {
  console.log('I am a custom decorator');
  // define an additional proeprty that will be
  // accessed by the target on which the decorator
  // will be applied

  Object.defineProperty(target.prototype, 'Name',
    {value: () => 'The Custom Decorator Property'});

}

// decorator with parameters
// config --> the object that of which values will be
// set by the target object on which the decorator is applied
function clsData(config) {
  return (target) => {
    Object.defineProperty(target.prototype, 'Name',
    {value: () => config.Name});
  };
}



@clsData({
  Name: 'The Name of the Property of the Custom Decorator'
 })
class MyClass {
  constructor(
    public p1: number,
    public p2: string
  ){}
}
let obj = new MyClass(10, 'a');
console.log(obj);
console.log(obj.Name());
