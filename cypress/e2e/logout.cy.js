describe("Logout function", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearAllLocalStorage();

    cy.wait(1000);

    cy.get("form[id='registerForm']").within(() => {
      cy.get("button[data-bs-target='#loginModal']:visible").click({
        multiple: true,
      });
    });

    cy.wait(1100);

    cy.get("#loginModal #loginEmail").should("exist");
    cy.get("#loginModal #loginPassword").should("exist");

    cy.get("#loginModal #loginEmail").type("ephdje50147@stud.noroff.no");
    cy.wait(400);
    cy.get("#loginModal #loginPassword").type("eph12345678");
    cy.wait(400);
    cy.get("button[type='submit']:visible").click({ multiple: true });

    cy.wait(2100);
  });

  it("should log in and then log out successfully", () => {
    cy.window().then((win) => {
      const profile = win.localStorage.getItem("profile");
      const token = win.localStorage.getItem("token");

      expect(profile).to.not.be.null;
      expect(token).to.not.be.null;
    });

    cy.get("button[data-auth='logout']:visible").click();

    cy.wait(1000);

    cy.window().then((win) => {
      expect(win.localStorage.getItem("profile")).to.be.null;
      expect(win.localStorage.getItem("token")).to.be.null;
    });

    cy.url().should("include", "/");
  });
});
