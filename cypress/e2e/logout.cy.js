describe("logout", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearAllLocalStorage();
    cy.wait(1000);
    cy.get("form[id='registerForm']").within(() => {
      cy.get("button[data-bs-target='#loginModal']:visible").click();
    });
  });

  it("logs in with the user and then logs out", () => {
    cy.wait(1200);
    cy.get("#loginModal #loginEmail").should("exist");
    cy.get("#loginModal #loginPassword").should("exist");
    cy.get("#loginModal #loginEmail").type("ephdje50147@stud.noroff.no");
    cy.wait(600);
    cy.get("#loginModal #loginPassword").type("eph12345678");
    cy.wait(600);
    cy.get("button[type='submit']:visible").click();
    cy.wait(1000);

    cy.window().then((win) => {
      expect(win.localStorage.getItem("profile")).to.not.be.null;
      expect(win.localStorage.getItem("token")).to.not.be.null;

      cy.get("button[data-auth='logout']:visible").click();

      cy.window().then((win) => {
        expect(win.localStorage.getItem("profile")).to.be.null;
        expect(win.localStorage.getItem("token")).to.be.null;
      });
    });
  });
});
