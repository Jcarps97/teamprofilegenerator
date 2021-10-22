const Employee = require("../library/employee")
let newEmployee = new Employee("Jack", 123, "jackcarpenter1@live.com")


describe("Employee", () =>{

    it("Should return entered name value", ()=>{
        expect(newEmployee.getName()).toBe("Jack")
    })
    it("Should return entered id value", ()=>{
        expect(newEmployee.getId()).toBe(123)
    })
    it("Should return entered email value", ()=>{
        expect(newEmployee.getEmail()).toBe("jackcarpenter1@live.com")
    })
    it("Should return selected role", ()=>{
        expect(newEmployee.getRole()).toBe("Employee")
    })
})