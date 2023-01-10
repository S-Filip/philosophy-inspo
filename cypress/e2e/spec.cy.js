let numTabs;
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
  it("checks if the generate quote button works", () => {
    cy.visit("https://philosophyinspo.000webhostapp.com/pages/classicalgreek.html");
    cy.wait(3000);
    cy.get("#quote").then(($div) => {
      const initialText = $div.text();
      cy.get("#new-quote").click();
      cy.wait(3000);
      cy.get("#quote").should(($div) => {
        expect($div.text()).not.eq(initialText);
      });
    });
    cy.visit("https://philosophyinspo.000webhostapp.com/pages/empiricism.html");
    cy.wait(3000);
    cy.get("#quote").then(($div) => {
      const initialText = $div.text();
      cy.get("#new-quote").click();
      cy.wait(3000);
      cy.get("#quote").should(($div) => {
        expect($div.text()).not.eq(initialText);
      });
    });
    cy.visit("https://philosophyinspo.000webhostapp.com/pages/existentialism.html");
    cy.wait(3000);
    cy.get("#quote").then(($div) => {
      const initialText = $div.text();
      cy.get("#new-quote").click();
      cy.wait(3000);
      cy.get("#quote").should(($div) => {
        expect($div.text()).not.eq(initialText);
      });
    });
    cy.visit("https://philosophyinspo.000webhostapp.com/pages/mysticism.html");
    cy.wait(3000);
    cy.get("#quote").then(($div) => {
      const initialText = $div.text();
      cy.get("#new-quote").click();
      cy.wait(3000);
      cy.get("#quote").should(($div) => {
        expect($div.text()).not.eq(initialText);
      });
    });
    cy.visit("https://philosophyinspo.000webhostapp.com/pages/rationalism.html");
    cy.wait(3000);
    cy.get("#quote").then(($div) => {
      const initialText = $div.text();
      cy.get("#new-quote").click();
      cy.wait(3000);
      cy.get("#quote").should(($div) => {
        expect($div.text()).not.eq(initialText);
      });
    });
    cy.visit("https://philosophyinspo.000webhostapp.com/pages/stoicism.html");
    cy.wait(3000);
    cy.get("#quote").then(($div) => {
      const initialText = $div.text();
      cy.get("#new-quote").click();
      cy.wait(3000);
      cy.get("#quote").should(($div) => {
        expect($div.text()).not.eq(initialText);
      });
    });
  });
  it("checks if the tweet button works", () => {
    cy.visit("https://philosophyinspo.000webhostapp.com/pages/classicalgreek.html");
    cy.window().then((win) => {
      numTabs = win.length;
    });

    // Click the button
    cy.get("#twitter").click();

    // Listen for the tab:changed event
    cy.on("tab:changed", () => {
      // Get the number of tabs after clicking the button
      cy.window().then((win) => {
        expect(win.length).to.eq(numTabs + 1);
      });
    });
    cy.visit("https://philosophyinspo.000webhostapp.com/pages/empiricism.html");
    cy.window().then((win) => {
      numTabs = win.length;
    });

    // Click the button
    cy.get("#twitter").click();

    // Listen for the tab:changed event
    cy.on("tab:changed", () => {
      // Get the number of tabs after clicking the button
      cy.window().then((win) => {
        expect(win.length).to.eq(numTabs + 1);
      });
    });
    cy.visit("https://philosophyinspo.000webhostapp.com/pages/existentialism.html");
    cy.window().then((win) => {
      numTabs = win.length;
    });

    // Click the button
    cy.get("#twitter").click();

    // Listen for the tab:changed event
    cy.on("tab:changed", () => {
      // Get the number of tabs after clicking the button
      cy.window().then((win) => {
        expect(win.length).to.eq(numTabs + 1);
      });
    });
    cy.visit("https://philosophyinspo.000webhostapp.com/pages/mysticism.html");
    cy.window().then((win) => {
      numTabs = win.length;
    });

    // Click the button
    cy.get("#twitter").click();

    // Listen for the tab:changed event
    cy.on("tab:changed", () => {
      // Get the number of tabs after clicking the button
      cy.window().then((win) => {
        expect(win.length).to.eq(numTabs + 1);
      });
    });
    cy.visit("https://philosophyinspo.000webhostapp.com/pages/rationalism.html");
    cy.window().then((win) => {
      numTabs = win.length;
    });

    // Click the button
    cy.get("#twitter").click();

    // Listen for the tab:changed event
    cy.on("tab:changed", () => {
      // Get the number of tabs after clicking the button
      cy.window().then((win) => {
        expect(win.length).to.eq(numTabs + 1);
      });
    });
    cy.visit("https://philosophyinspo.000webhostapp.com/pages/stoicism.html");
    cy.window().then((win) => {
      numTabs = win.length;
    });

    // Click the button
    cy.get("#twitter").click();

    // Listen for the tab:changed event
    cy.on("tab:changed", () => {
      // Get the number of tabs after clicking the button
      cy.window().then((win) => {
        expect(win.length).to.eq(numTabs + 1);
      });
    });
  });
});
