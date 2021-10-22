const Engineer = require("../library/engineer")
let newEngineer = new Engineer("Jack", 123, "jackcarpenter1@live.com", "jcarps97")

describe("Engineer", () =>{

    it("Should return entered name value", ()=>{
        expect(newEngineer.getName()).toBe("Jack")
    })
    it("Should return entered id value", ()=>{
        expect(newEngineer.getId()).toBe(123)
    })
    it("Should return entered email value", ()=>{
        expect(newEngineer.getEmail()).toBe("jackcarpenter1@live.com")
    })
    it("Should return entered school", ()=>{
        expect(newEngineer.getGithub()).toBe("jcarps97")
    })
    it("Should return selected role", ()=>{
        expect(newEngineer.getRole()).toBe("Engineer")
    })
})