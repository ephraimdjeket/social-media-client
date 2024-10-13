describe("Login function", () => {
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
  });

  it("should log in with valid credentials", () => {
    cy.get("#loginModal #loginEmail").type("ephdje50147@stud.noroff.no");

    cy.wait(400);

    cy.get("#loginModal #loginPassword").type("eph12345678");

    cy.wait(400);

    cy.get("button[type='submit']:visible").click({ multiple: true });

    cy.wait(2100);

    cy.get(window.localStorage.getItem("profile")).should("not.be.empty");
    cy.get(window.localStorage.getItem("token")).should("not.be.empty");
  });

  it("should attempt to login with invalid credentials", () => {
    cy.get("#loginModal #loginEmail").type("ephraimdjeket@gmail.com");

    cy.wait(400);

    cy.get("#loginModal #loginPassword").type("eph");

    cy.wait(400);

    cy.get("button[type='submit']:visible").click({ multiple: true });

    cy.wait(1000);

    cy.window().its("localStorage.profile").should("not.exist");
    cy.window().its("localStorage.token").should("not.exist");
    cy.get("#loginModal #loginEmail").type("ephdje50147@stud.noroff.no");

    cy.wait(400);

    cy.get("#loginModal #loginPassword").type("eph");

    cy.wait(400);

    cy.get("button[type='submit']:visible").click({ multiple: true });

    cy.wait(1000);

    cy.window().its("localStorage.profile").should("not.exist");
    cy.window().its("localStorage.token").should("not.exist");
  });

  it("An error message is displayed when attempting to submit the login form with an incorrect password.", () => {
    cy.get("#loginModal #loginEmail").type("ephdje50147@stud.noroff.no");

    cy.wait(400);

    cy.get("#loginModal #loginPassword").type("eph");

    cy.wait(400);

    cy.get("button[type='submit']:visible").click({ multiple: true });

    cy.wait(1000);

    cy.window().its("localStorage.profile").should("not.exist");
    cy.window().its("localStorage.token").should("not.exist");
  });
});
