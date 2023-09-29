import supportingData from "../fixtures/supportData";
let activeEmployeeId = "5225564";
let activeEmployeeName;

context("Update an employee record", () => {
    specify("Should update an employee record to a different name", () => {
        cy.request({
            method: "PUT",
            url: `/public/v2/users/${activeEmployeeId}`,
            headers: {
                Authorization: `Bearer ${supportingData.authToken}`
             },
             body: {
                name: `${supportingData.randomEmployeeNameGenerator()}${supportingData.randomNumberGenerator()}`,
             }
            })
        .then((response) => {
            activeEmployeeName = response.body.name;
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq(activeEmployeeName);
        });
    });
});