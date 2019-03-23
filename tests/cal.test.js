const {calucaulatebill,fahrenheitToCelsius,celsiusToFahrenheit}=require("../controllers/cal")

test("should calucautae with gst",()=>{
    const total=calucaulatebill(10,)

    expect(total).toBe(14)
})


test("concersionftoc",()=>{

    const ftoc=fahrenheitToCelsius(32)
    expect(ftoc).toBe(1)

})