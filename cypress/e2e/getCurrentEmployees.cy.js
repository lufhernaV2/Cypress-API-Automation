context("Get employee list ", () => {
    specify("Should return a list of employees", () => {
        cy.request("/public/v2/users")
        .then((response) => {
            expect(response.status).to.eq(200)
            console.log(response);
        });
    });
});
