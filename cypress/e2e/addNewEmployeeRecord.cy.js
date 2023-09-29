import supportingData from "../fixtures/supportData";
let randomName;
export let newEmployeeId;

context("Add new employee to the list", () => {
    specify("Should add a new employee to the list and checks that they are present", () => {
        cy.request({
        method: "POST",
        url: "/public/v2/users",
         headers: {
            Authorization: `Bearer ${supportingData.authToken}`
         },
         body: {
            id: '',
            name: supportingData.randomEmployeeNameGenerator(),
            email: `${supportingData.randomEmployeeNameGenerator()}${supportingData.randomNumberGenerator()}`+ "@gmail.com",
            gender: supportingData.randomEmployeeGenderGenerator(),
            status: supportingData.randomEmployeeStatusGenerator()
         }})
        .then((response) => {
            randomName = response.body.name;
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('name', randomName);
            newEmployeeId = response.body.id;
        });
    });
});