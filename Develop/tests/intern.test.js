const Intern = require("../library/intern")
let newIntern = new Intern("Jack", 123, "jackcarpenter1@live.com", "Mizzou")

describe("Intern", () =>{

    it("Should return entered name value", ()=>{
        expect(newIntern.getName()).toBe("Jack")
    })
    it("Should return entered id value", ()=>{
        expect(newIntern.getId()).toBe(123)
    })
    it("Should return entered email value", ()=>{
        expect(newIntern.getEmail()).toBe("jackcarpenter1@live.com")
    })
    it("Should return entered school", ()=>{
        expect(newIntern.getSchool()).toBe("Mizzou")
    })
    it("Should return selected role", ()=>{
        expect(newIntern.getRole()).toBe("Intern")
    })
})