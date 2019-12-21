function getRandomNumber(low, high) {
  //inclusive
  return Math.floor(Math.random() * (high - low + 1)) + low;
}
function camelCase(str) {
  return str
    .split(" ")
    .map((val, i) => {
      if (i === 0) {
        return val.toLowerCase();
      }
      return val[0].toUpperCase() + val.substring(1).toLowerCase();
    })
    .join("");
}
function kebabCase(str) {
  return str
    .split(" ")
    .map(val => val.toLowerCase())
    .join("-");
}

let numBedrooms;
let numDining;
let numFullBathrooms;
let numHalfBathrooms;
let numLiving;

describe("Can access the site", () => {
  it("Can access the site", () => {
    cy.visit("localhost:3000");
  });
});

describe("Seller Form Start", () => {
  it("Should have a seller button", () => {
    cy.contains("I am a seller");
  });
  it("Should be able to click on the seller button", () => {
    // cy.contains("")
    cy.contains("I am a seller").click();
  });
  it("Should navigate to the right page", () => {
    cy.url().should("include", "/welcome");

    cy.get('input[placeholder="Email"').should("exist");
    cy.get('input[placeholder="Phone Number"').should("exist");
    cy.contains("Continue");
  });

  it("Should display an error message if the button is clicked without filling in all the info", () => {
    cy.get(".intro__continue-button").click();

    cy.contains("Please fill out all fields before continuing!");
  });

  it("Should be able to be typed in", () => {
    const firstName = ["Mykenzie", "Adam", "Riley"][
      Math.floor(Math.random() * 3)
    ];
    cy.get('input[placeholder="First Name"]').type(firstName);

    const lastName = ["Rogers", "Kent", "Hatch"][Math.floor(Math.random() * 3)];
    cy.get('input[placeholder="Last Name"]').type(lastName);

    const email = [
      "imcool@gmail.com",
      "imdifferent@yahoo.com",
      "imold@aol.com"
    ][Math.floor(Math.random() * 3)];

    cy.get('input[placeholder="Email"]').type(email);

    const phoneNumber = ["1234567890", "0987654321", "1111111111"][
      Math.floor(Math.random() * 3)
    ];

    cy.get('input[placeholder="Phone Number"]').type(phoneNumber);

    const address = [
      "123 Big Boy Way",
      "321 Power Street",
      "1 Way 2 Say 3 Words"
    ][Math.floor(Math.random() * 3)];

    cy.get('input[placeholder="Property Address"]').type(address);
  });

  it("Should have a working `Continue` button", () => {
    cy.get(".intro__continue-button").click();
  });
});

describe("Property Types - Page 1", () => {
  it("Should be able to select a property type", () => {
    const propertyType = ["Condo", "Farm/Ranch", "Single Family (Most Common)"][
      Math.floor(Math.random() * 3)
    ];

    cy.get(`input[type=radio][value="${propertyType}"]`).click();
  });

  it("Should be able to select a home style", () => {
    const homeStyle = [
      "Single Detached (Most Common)",
      "Log Cabin",
      "Condo/Townhome"
    ][Math.floor(Math.random() * 3)];

    cy.get(`input[type="checkbox"][value="${homeStyle}"]`).click();
  });

  it("Should be able to select architectural styles", () => {
    const arcStyle = ["A-Frame", "Traditional (Most Common)", "Victorian"][
      getRandomNumber(0, 2)
    ];

    cy.get(`input[type="checkbox"][value="${arcStyle}"]`).click();
  });

  it("Should be able to move to the next page", () => {
    cy.contains("Next").click();
  });
});

describe("Construction - Page 2", () => {
  it("Should be able to check off boxes", () => {
    const constructionProperty = ["Block", "Brick", "Glass", "Metal"][
      getRandomNumber(0, 3)
    ];

    cy.get(`input[type="checkbox"][value="${constructionProperty}"]`).click();
  });

  it("Should be able to move to the next page", () => {
    cy.contains("Next").click();
  });
});

describe("Accessory Units - Page 3", () => {
  it("Should be able to pick an answer", () => {
    const answer = ["Guest Quarters", "Other", "Pool House", "None"][
      getRandomNumber(0, 3)
    ];

    cy.get(`input[type="checkbox"][value="${answer}"]`).click();
  });

  it("Should be able to enter schools", () => {
    const schools = [
      "Indian School",
      "DevMountain",
      "Lovejoy",
      "Allen",
      "Other School"
    ];
    cy.get(`input[placeholder="Elementary School"]`).type(
      schools[getRandomNumber(0, 4)]
    );

    cy.get(`input[placeholder="Middle School"]`).type(
      schools[getRandomNumber(0, 4)]
    );

    cy.get(`input[placeholder="High School"]`).type(
      schools[getRandomNumber(0, 4)]
    );
  });

  it("Should be able to move to the next page", () => {
    cy.contains("Next").click();
  });
});

describe("Room Entry - Page 4", () => {
  it("Should be able to enter a number for bedrooms", () => {
    numBedrooms = getRandomNumber(1, 3);
    cy.get(`i[class="fas fa-bed"] + input`).type(numBedrooms);
  });
  it("Should be able to enter a number for dining areas", () => {
    numDining = getRandomNumber(1, 3);
    cy.get(`i.fas.fa-utensils + input`).type(numDining);
  });
  it("Should be able to enter a number for full-bathrooms", () => {
    numFullBathrooms = getRandomNumber(1, 3);
    cy.get(`i[class="fas fa-shower"] + input`).type(numFullBathrooms);
  });
  it("Should be able to enter a number for half-bathrooms", () => {
    numHalfBathrooms = getRandomNumber(1, 3);
    cy.get(`i.fas.fa-shower + input`)
      .last()
      .type(numHalfBathrooms);
  });

  it("Should be able to enter a number for living rooms", () => {
    numLiving = getRandomNumber(1, 3);
    cy.get(`i.fas.fa-couch + input`).type(numLiving);
  });

  it("Should be able to go to the next page", () => {
    cy.get(`.page-two-paper`).scrollTo("bottom");
    cy.contains("Next").click({ force: true });
  });
});
describe("Bedroom Intro - Page 5", () => {
  it("Should be able to go to next page", () => {
    cy.contains("Next").click();
  });
});
describe("Bedroom Forms - Page 6", () => {
  it("Should be able to fill out the form the correct amount of times", () => {
    const roomOptions = {
      Master: ["Cedar Closet", "Steam Shower", "Fireplace"],
      "Second Master": ["Cedar Closet", "Steam Shower", "Fireplace"],
      Bedroom: ["Built Ins", "Cedar Closet", "Split Bedrooms"]
    };

    for (let i = 0; i < numBedrooms; i++) {
      cy.get(`div[role="button"]`).click();
      const selectedOption = ["Master", "Second Master", "Bedroom"][
        getRandomNumber(0, 2)
      ];
      cy.get(`li[data-value="${camelCase(selectedOption)}"]`).click();
      cy.get(`input[value="${getRandomNumber(1, 3)}"]`).click();
      cy.get(
        `input[type="checkbox"][value="${
          roomOptions[selectedOption][getRandomNumber(0, 2)]
        }"]`
      ).click();
      cy.contains("Next").click({ force: true });
    }
  });
});

describe("Dining Room Intro - Page 7", () => {
  it("Should be able to go to the next page", () => {
    cy.contains("Next").click();
  });
});

describe("Dining Room Form - Page 8", () => {
  it("Should be able to fill out the form the correct amount of times", () => {
    const roomOptions = {
      "Dining Room": ["Built Ins", "Butlers Pantry", "Dumbwaiter"],
      "Breakfast Nook": [
        "Breakfast Bar",
        "Built Ins",
        "Butlers Pantry",
        "Coffee Bar",
        "Concrete Counter",
        "Eat-in Kitchen",
        "Island",
        "Tile Counter"
      ]
    };
    for (let i = 0; i < numDining; i++) {
      cy.get(`div[role="button"]`).click();
      const selectedOption = ["Dining Room", "Breakfast Nook"][
        getRandomNumber(0, 1)
      ];
      cy.get(`li[data-value="${kebabCase(selectedOption)}"]`).click();
      cy.get(`input[value="${getRandomNumber(1, 3)}"]`).click();
      cy.get(
        `input[type="checkbox"][value="${
          roomOptions[selectedOption][
            getRandomNumber(0, roomOptions[selectedOption].length - 1)
          ]
        }"]`
      ).click();
      cy.contains("Next").click({ force: true });
    }
  });
});

describe("Bathroom Intro - Page 9", () => {
  it("Should be able to go to the next page", () => {
    cy.contains("Next").click();
  });
});

describe("Bathroom Form - Page 10", () => {
  it("Should be able to fill out the form the correct amount of times", () => {
    const roomOptions = {
      "Full Bathroom": [
        "Bidet",
        "Built Ins",
        "Concrete Counters",
        "Double Showers",
        "Drip Dry Area",
        "Dual Master Baths",
        "Dual Sinks",
        "Garden Tub",
        "Hollywood Bath",
        "Jack & Jill Bath",
        "Jetted Tub",
        "Laundry Chute",
        "Linen Closet",
        "Medicine Cabinet",
        "Natural Stone/Granite Counter",
        "Separate Shower",
        "Separate Vanities",
        "Shower Body Sprays",
        "Solid Surface/Non-natural Counter",
        "Steam Shower",
        "Tile Counters"
      ],
      "Half Bathroom": ["Bidet", "Medicine Cabinet"]
    };
    for (let i = 0; i < numFullBathrooms + numHalfBathrooms; i++) {
      cy.get(`div[role="button"]`).click();
      const selectedOption = ["Full Bathroom", "Half Bathroom"][
        getRandomNumber(0, 1)
      ];
      cy.get(`li[data-value="${kebabCase(selectedOption)}"]`).click();
      cy.get(`input[value="${getRandomNumber(1, 3)}"]`).click();
      cy.get(
        `input[type="checkbox"][value="${
          roomOptions[selectedOption][
            getRandomNumber(0, roomOptions[selectedOption].length - 1)
          ]
        }"]`
      ).click();
      cy.contains("Next").click({ force: true });
    }
  });
});

describe("Living Room Intro - Page 11", () => {
  it("Should be able to go to the next page", () => {
    cy.contains("Next").click();
  });
});

describe("Living Room Form - Page 12", () => {
  it("Should be able to fill out the form the correct amount of times", () => {
    const roomOptions = {
      "Media Room": ["Built Ins"],
      "Game Room": ["Built Ins", "Other", "Unfinished Bonus Room"],
      "Living Room": ["Built Ins"]
    };

    for (let i = 0; i < numLiving; i++) {
      cy.get(`div[role="button"]`).click();
      const selectedOption = Object.keys(roomOptions)[getRandomNumber(0, 2)];
      cy.get(`li[data-value="${kebabCase(selectedOption)}"]`).click();
      cy.get(`input[value="${getRandomNumber(1, 3)}"]`).click();
      cy.get(
        `input[type="checkbox"][value="${
          roomOptions[selectedOption][
            getRandomNumber(0, roomOptions[selectedOption].length - 1)
          ]
        }"]`
      ).click();
      cy.contains("Next").click({ force: true });
    }
  });
});

describe("More Rooms - Page 13", () => {
  it("Should be able to go to the next page", () => {
    cy.contains("Yes").click();
  });
});

describe("More Rooms Form - Page 13.5", () => {
  it("Should be able to add extra master bedroom", () => {
    cy.get("select").select("Master Bedroom");

    cy.get(`input[type="radio"][value="${getRandomNumber(1, 3)}"]`).click();

    const options = [
      "Cedar Closet",
      "Coffee Bar",
      "Custom Closet System",
      "Dual Baths",
      "Dual Sinks",
      "Fireplace",
      "Garden Tub",
      "Hollywood Bath",
      "Jetted Tub",
      "Laundry Chute",
      "Linen Closet",
      "Medicine Cabinet",
      "Separate Shower",
      "Separate Vanities",
      "Shower Body Sprays",
      "Sitting Area",
      "Steam Shower",
      "Walk-in Closet"
    ];

    for (let i = 0; i < 3; i++) {
      cy.get(
        `input[type="checkbox"][value="${
          options[getRandomNumber(0, options.length - 1)]
        }"]`
      ).click();
    }

    cy.contains("Add").click();
  });

  it("Should be able to add another dining area", () => {
    cy.get("select").select(
      ["Dining Room", "Breakfast Nook"][getRandomNumber(0, 1)]
    );

    const options = ["Built Ins", "Butlers Pantry"];

    cy.get(`input[type="radio"][value="${getRandomNumber(1, 3)}"]`).click();

    cy.get(
      `input[type="checkbox"][value="${options[getRandomNumber(0, 1)]}"]`
    ).click();

    cy.contains("Add").click();
  });

  it("Should be able to add another Bathroom", () => {
    cy.get("select").select(
      ["Full Bathroom", "Half Bathroom"][getRandomNumber(0, 1)]
    );

    const options = ["Bidet", "Medicine Cabinet"];

    cy.get(`input[type="radio"][value="${getRandomNumber(1, 3)}"]`);

    cy.get(
      `input[type="checkbox"][value="${options[getRandomNumber(0, 1)]}"]`
    ).click();

    cy.contains("Add").click();
  });

  it("Should be able to add another Living Room", () => {
    cy.get("select").select(
      ["Living Room", "Game Room", "Media Room"][getRandomNumber(0, 2)]
    );

    cy.get(`input[type="radio"][value="${getRandomNumber(1, 3)}"]`).click();

    cy.get(`input[type="checkbox"][value="Built Ins"]`).click();

    cy.contains("Add").click();
  });

  it("Should be able to add some extra rooms", () => {
    const extraRoomTypes = [
      "Kitchen",
      "Study",
      "Utility Room",
      "Exercise Room",
      "Extra Storage Room",
      "Wine Cellar",
      "Solarium/Sunroom"
    ];

    const roomProperties = {
      Kitchen: [
        "Breakfast Bar",
        "Built Ins",
        "Butlers Pantry",
        "Coffee Bar",
        "Concrete Counters",
        "Dual Sinks",
        "Eat-in Kitchen",
        "Farm Sink",
        "Galley Kitchen",
        "Island",
        "Natural Stone/Granite Counter",
        "Pantry",
        "Pot Filler",
        "Recycle Bin",
        "Room for Freezer",
        "Second Pantry",
        "Solid Surface/Non-natural Counter",
        "Tile Counter",
        "Utility in Kitchen",
        "Walk-in Pantry"
      ],
      Study: ["Built-Ins", "Coffee Bar"],
      "Utility Room": [
        "Built Ins",
        "Drip/dry Area",
        "Dryer Hookup - Elec",
        "Dryer Hookup - Gas",
        "Dual Sinks",
        "Dumbwaiter",
        "Farm Sink",
        "Floor Drain",
        "Full Size W/D Area",
        "Laundry Chute",
        "Linen Closet",
        "Other",
        "Recycle Bin",
        "Room For Freezer",
        "Second Pantry",
        "Second Sink",
        "Separate Room",
        "Sink in Utility",
        "Utility Closet",
        "Utility in Garage",
        "Washer Hookup"
      ],
      "Exercise Room": ["Built Ins", "Linen Closet", "Other", "Steam Shower"],
      "Extra Storage Room": [
        "Built Ins",
        "Drip/Dry Area",
        "Floor Drain",
        "Other",
        "Unfinished Bonus Room"
      ],
      "Wine Cellar": ["Built Ins"],
      "Solarium/Sunroom": [
        "Drip/Dry Area",
        "Dual Sinks",
        "Farm Sink",
        "Pot Filler"
      ]
    };

    extraRoomTypes.forEach(val => {
      cy.get("select").select(val);

      cy.get(`input[type="radio"][value="${getRandomNumber(1, 3)}"]`);
      for (let i = 0; i < 2; i++) {
        cy.get(
          `input[type="checkbox"][value="${
            roomProperties[val][
              getRandomNumber(0, roomProperties[val].length - 1)
            ]
          }"]`
        ).click();
      }

      cy.contains("Add").click();
    });
  });

  it("Should be able to add a room with a type of `other`", () => {
    cy.get(`select`).select("Other");

    cy.get(`input[placeholder="Room Name"]`).type(
      ["Dungeon", "Trampoline Room", "Tree House"][getRandomNumber(0, 2)]
    );

    cy.get(`textarea`).type(
      [
        "This place is a load of baloney",
        "This place is the bees knees",
        "Where am I? What year is it?"
      ][getRandomNumber(0, 2)]
    );
    cy.contains(`Add`).click();
  });

  it("Should be able to navigate to the next page", () => {
    cy.contains(`Finish Adding Rooms`).click();
  });
});

describe("Interior Features Form - Page 14", () => {
  it("Should be able to select properties", () => {
    const options = [
      "Bay Windows",
      "Built-In Wine Cooler",
      "Cable TV Available",
      "Central Vac",
      "Decorative Lighting",
      "Dry Bar",
      "Electric Shades",
      "Elevator",
      "Flat Screen Wiring",
      "High Speed Internet Avail",
      "Intercom",
      "Loft",
      "Multiple Staircases",
      "Other",
      "Paneling",
      "Plantation Shutters",
      "Skylights",
      "Smart Home System",
      "Sound System Wiring",
      "Vaulted Ceilings",
      "Wainscoting",
      "Water Filter",
      "Water Purifier",
      "Water Softener",
      "Wet Bar",
      "Window Coverings"
    ];

    for (let i = 0; i < 3; i++) {
      cy.get(
        `input[type="checkbox"][value="${
          options[getRandomNumber(0, options.length - 1)]
        }"]`
      ).click();
    }

    cy.contains("Next").click({ force: true });
  });
});

describe("Alarm Form - Page 15", () => {
  it("Should allow you to move on if you don't have a security system or alarm", () => {
    cy.get(`input[type="radio"][value="No"]`).click();

    cy.contains("Next");
  });

  it("Should allow you to select yes and additional properties", () => {
    cy.get(`input[type="radio"][value="Yes"]`).click();

    const options = [
      "Burglar",
      "Carbon Mono Detector",
      "Ext Security Light(s)",
      "Fire Sprinkler System",
      "Fire/Smoke",
      "Firewall(s)",
      "Leased",
      "Monitored",
      "Other",
      "Owned",
      "Pre-Wired",
      "Smoke Detector",
      "Unknown",
      "Wireless"
    ];

    for (let i = 0; i < 3; i++) {
      cy.get(
        `input[type="checkbox"][value="${
          options[getRandomNumber(0, options.length - 1)]
        }"]`
      ).click();
    }
  });

  it("Should allow you to move on to the next page", () => {
    cy.contains("Next").click();
  });
});

describe("Roof Property Form - Page 16", () => {
  it("Should allow you to select properties on this page", () => {
    const options = [
      "Built-up",
      "Composition",
      "Concrete",
      "Fiber Cement",
      "Metal",
      "Other",
      "Overlay",
      "Shake Metal",
      "Tar/Gravel",
      "Tile/Slate",
      "Wood Shake",
      "Wood Shingle"
    ];

    for (let i = 0; i < 3; i++) {
      cy.get(
        `input[type="checkbox"][value="${
          options[getRandomNumber(0, options.length - 1)]
        }"]`
      ).click();
    }
  });

  it(`Should be able to go to the next page`, () => {
    cy.contains("Next").click();
  });
});

describe(`Kitchen Form - Page 17`, () => {
  it("Should be able to select properties on the page", () => {
    const options = [
      "Built-in Coffee Maker",
      "Built-in Compacter",
      "Built-in Icemaker",
      "Built-in Microwave",
      "Built-in Refrig/Freezer",
      "Commercial Grade Range",
      "Commercial Grade Vent",
      "Convection Oven",
      "Cooktop - Electric",
      "Cooktop - Gas",
      "Dishwasher",
      "Disposal",
      "Double Oven",
      "Drop in Range/Oven - Gas",
      "Dryer",
      "Dual Dishwashers",
      "Dual Fuel Range",
      "Indoor Grill",
      "Other",
      "Oven - Electric",
      "Oven - Gas",
      "Plumbed for Gas in Kitchen",
      "Range/Oven - Electric",
      "Range/Oven - Gas",
      "Refrigerator",
      "Vent Mechanism",
      "Warmer Oven Drawer",
      "Washer",
      "Water Line to Refrig",
      "None"
    ];

    for (let i = 0; i < 3; i++) {
      cy.get(
        `input[type="checkbox"][value="${
          options[getRandomNumber(0, options.length - 1)]
        }"]`
      ).click();
    }
  });

  it(`Should be able to go to the next page`, () => {
    cy.contains(`Next`).click();
  });
});

describe(`Pool Form - Page 18`, () => {
  it(`Should be able to move on if they pick "No"`, () => {
    cy.contains("No").click();

    cy.contains(`Next`);
  });

  it(`Should be able to select properties on the page`, () => {
    cy.contains("Yes").click();

    const options = [
      "Above Ground",
      "Attached Spa",
      "Cabana",
      "Cleaning System",
      "Custom Cover",
      "Diving",
      "Heated",
      "In Ground Fiberglass",
      "In Ground Gunite",
      "In Ground Vinyl",
      "Indoor",
      "Infinity Edge",
      "Lap Pool",
      "Other",
      "Play Pool",
      "Pool Perimeter Fence",
      "Saltwater Pool",
      "Separate Spa/Hot Tub",
      "Water Feature"
    ];

    cy.get(
      `input[type="checkbox"][value="${
        options[getRandomNumber(0, options.length - 1)]
      }"]`
    ).click();
  });

  it(`Should be able to go to the next page`, () => {
    cy.contains("Next").click();
  });
});

describe("Handicap Form - Page 19", () => {
  // it(`Should be able to go `);
});
