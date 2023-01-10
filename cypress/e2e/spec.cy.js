describe("Full test", () => {
  beforeEach(() => {
    cy.visit("https://philosophyinspo.000webhostapp.com/");
  });
  it("opens the page and shows content", () => {
    cy.get("#quote").should("contain", "Welcome to Philosophy Inspo!");
  });
  it("checks whether the light mode changes", () => {
    cy.wait(500);
    cy.get("body").then(($body) => {
      const initialMode = $body.attr("class");
      cy.get("#toggle-mode").click();
      cy.get("body").should("not.have.class", initialMode);
    });
  });
  it("checks if all the tabs work, looks for selected pages", () => {
    cy.visit("https://philosophyinspo.000webhostapp.com/pages/classicalgreek.html");
    cy.get("a").should("have.class", "selected");
    cy.visit("https://philosophyinspo.000webhostapp.com/pages/empiricism.html");
    cy.get("a").should("have.class", "selected");
    cy.visit("https://philosophyinspo.000webhostapp.com/pages/existentialism.html");
    cy.get("a").should("have.class", "selected");
    cy.visit("https://philosophyinspo.000webhostapp.com/pages/mysticism.html");
    cy.get("a").should("have.class", "selected");
    cy.visit("https://philosophyinspo.000webhostapp.com/pages/rationalism.html");
    cy.get("a").should("have.class", "selected");
    cy.visit("https://philosophyinspo.000webhostapp.com/pages/stoicism.html");
  });
});
