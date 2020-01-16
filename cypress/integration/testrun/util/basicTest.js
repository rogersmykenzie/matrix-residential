import getRandomNumber from "./getRandomNumber";

export default function basicTest(describeText, options, numOptions) {
  describe(describeText, () => {
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
