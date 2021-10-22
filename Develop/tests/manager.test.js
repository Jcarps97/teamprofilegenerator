const Manager = require("../library/manager")
let newManager = new Manager("Jack", 123, "jackcarpenter1@live.com", 123)

describe("Manager", () =>{

    it("Should return entered name value", ()=>{
        expect(newManager.getName()).toBe("Jack")
    })
    it("Should return entered id value", ()=>{
        expect(newManager.getId()).toBe(123)
    })
    it("Should return entered email value", ()=>{
        expect(newManager.getEmail()).toBe("jackcarpenter1@live.com")
    })
    it("Should return entered school", ()=>{
        expect(newManager.getOfficeNumber).toBe(123)
    })
    it("Should return selected role", ()=>{
        expect(newManager.getRole()).toBe("Manager")
    })
})