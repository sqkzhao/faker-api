const express = require("express")
const faker = require("faker")
const app = express()

// FOR MAKING POST REQUEST
app.use(express.json())
app.use(express.urlencoded({extended: true}))

class User{
    constructor(){
        this.firstName = faker.name.firstName()
        this.id = faker.random.uuid()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}
class Company{
    constructor(){
        this.id = faker.random.uuid()
        this.name = faker.company.companyName()
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}
app.get('/api', (req, res) => {
    res.send("hello world")
})
app.get('/api/users/new', (req, res) => {
    res.send(new User())
})
app.get('/api/companies/new', (req, res) => {
    res.send(new Company())
})
app.get('/api/user/company', (req, res) => {
    res.send({
        user: new User(),
        company: new Company()
    })
})
app.listen(8000, () => {
    console.log("EXPRESS SERVER...")
})