// const doesn't allow reassignment unlike the let variable
const brand = "Oluwaseun";
const brandObject = {};
brandObject["brand"] = brand;
delete brandObject.brand //to delete the content of the object brandObject
    // brand = {};
    // brand = 10;
    // brand = function() {
    //     return "hello"
    //}
console.log(brand);
console.log(brandObject)