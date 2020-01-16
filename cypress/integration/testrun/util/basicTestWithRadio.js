import getRandomNumber from "./getRandomNumber";

export default function basicTestWithRadio(
  describeText,
  options,
  numOptions = 3
) {
  console.log("ran");
  describe(describeText, () => {
    it(`Should be able to click No and move on`, () => {
      cy.contains("No").click();

      cy.contains("Next");
    });

    it(`Should be able to click Yes`, () => {
      cy.contains("Yes").click();
    });

    it(`Should be able to select a few items`, () => {
      for (let i = 0; i < numOptions; i++) {
        cy.get(
          `input[type="checkbox"][value="${
            options[getRandomNumber(0, options.length - 1)]
          }"]`
        ).click();
      }
    });

    it(`Should be able to move to the next page`, () => {
      cy.contains("Next").click();
    });
  });
}
