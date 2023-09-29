import { newEmployeeId } from "./addNewEmployeeRecord.cy";
import supportingData from "../fixtures/supportData";

context("Remove employee from list", () => {
    specify("Should remove a specific employee from the list", () => {
        cy.request({
            method: "DELETE",
            url: `/public/v2/users/${newEmployeeId}`,
            headers: {
                Authorization: `Bearer ${supportingData.authToken}`
             }})
        .then((response) => {
            expect(response.status).to.eq(204);
            expect(response.body).to.not.have.property('id', newEmployeeId);
        });
    });
});