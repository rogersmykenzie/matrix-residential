import getRandomNumber from "./util/getRandomNumber";
// import basicTestWithRadio from "./util/getRandomNumber";
// import basicTest from "./util/basicTest";

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
  it(`Should be able to move on if they pick "No"`, () => {
    cy.contains("No").click();

    cy.contains(`Next`);
  });
  it(`Should be able to select properties on the page`, () => {
    cy.contains("Yes").click();

    const options = [
      "Elevator",
      "Hand Rails",
      "Lower Fixtures",
      "Meets ADA Requirements",
      "Other",
      "Ramp",
      "Wheelchair Access",
      "Wide Doorways"
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
describe("Flooring Form - Page 20", () => {
  it(`Should be able to select properties on the page`, () => {
    const options = [
      "Brick/Adobe",
      "Carpet",
      "Ceramic Tile",
      "Concrete",
      "Laminate",
      "Luxury Vinyl Plank",
      "Marble",
      "Other",
      "Parquet",
      "Slate",
      "Stone",
      "Terrazzo",
      "Vinyl",
      "Wood",
      "Wood Under Carpet"
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
describe("Feature Totals - Page 21", () => {
  it(`Should be able to type in to the input fields`, () => {
    const types = [
      "carport__input",
      "garage__input",
      // "garage__input--width",
      // "garage__input--length",
      "total_cover_area__input",
      "fireplace__input"
    ];
    types.forEach(function(type) {
      cy.get(`div.${type}`).type(getRandomNumber(1, 3));
    });
  });
  it("Should be able to move to the next page", () => {
    cy.contains("Next").click();
  });
});
describe("Smart Feature Form - Page 22", () => {
  it(`Should be able to select yes`, () => {
    cy.contains("Yes").click();
  });

  it(`Should be able to type into the textarea`, () => {
    cy.get(`textarea`).type("This is some text");
  });

  it(`Should be able to go to the next page`, () => {
    cy.contains("Next").click();
  });
});
describe(`Fireplace Form - Page 23`, () => {
  it(`Should be able to select properties`, () => {
    const options = [
      "Blower Fan",
      "Brick",
      "Decorative",
      "Direct Vent",
      "Electric",
      "Freestanding",
      "Gas Logs",
      "Gas Starter",
      "Insert",
      "Masonry Box",
      "Metal Box",
      "Other",
      "See Through Fireplace",
      "Stone",
      "Wood Burning",
      "Does Not Apply"
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
describe(`Foundation Form - Page 24`, () => {
  it(`Should be able to select properties`, () => {
    const options = [
      "Basement",
      "Bois DArc Post",
      "Other",
      "Pier and Beam",
      "Pier and Beam Slab",
      "Pilings",
      "Slab"
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

describe(`Parking Form - Page 25`, () => {
  it(`Should be able to select properties`, () => {
    const options = [
      "Area Assigned",
      "Assigned Garage",
      "Assigned Spaces",
      "Attached",
      "Circle Drive",
      "Common Garage",
      "Common Lot",
      "Covered",
      "Detached",
      "Epoxy Flooring",
      "Fence Assigned Lot",
      "Fenced Open Lot",
      "Front",
      "Garage",
      "Garage Conversion",
      "Garage Door Opener",
      "Garage Under Building",
      "Golf Cart Garage",
      "Has Sink in Garage",
      "Individual Carport",
      "On Street",
      "Open",
      "Open and Unassigned Garage",
      "Opener",
      "Other",
      "Other Parking/Garage",
      "Outside Entry",
      "Oversized",
      "Pay Parking Garage",
      "Pay Parking Lot",
      "Porte-Cochere",
      "Rear",
      "Shared Carport",
      "Shared Garage",
      "Side",
      "Swing Drive",
      "Tandem Style",
      "Unassigned Spaces",
      "Uncovered",
      "Valet",
      "Workbench",
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
    cy.contains("Next").click();
  });
});

describe(`Common Features Form - Page 26`, () => {
  it(`Should be able to select properties`, () => {
    const options = [
      "Boat Ramp",
      "Campground",
      "Club House",
      "Comm Sprinkler System",
      "Common Elevator",
      "Community Dock",
      "Community Pool",
      "Electric Car Charging Station",
      "Gated Entrance",
      "Golf",
      "Greenbelt",
      "Guarded Entrance",
      "Hangar",
      "Horse Facilities",
      "Jogging Path/Bike Path",
      "Landing Strip",
      "Laundry",
      "Marina",
      "Other",
      "Park",
      "Perimeter Fence",
      "Playground",
      "Private Lake/Pond",
      "Public Hangar",
      "Racquet Ball",
      "RV Parking",
      "Sauna",
      "Spa",
      "Tennis",
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
    cy.contains("Next").click();
  });
});

describe(`Special Notes - Page 27`, () => {
  it(`Should be able to select properties`, () => {
    const options = [
      "Aerial Photo",
      "Affordable Housing",
      "Built to Suit",
      "Deed Restrictions",
      "Deep Hole Test",
      "Environ. Study Complete",
      "Feasibility Study Avail",
      "Flood Plain",
      "Flowage Easement",
      "Highline",
      "Historical",
      "HUD",
      "Inland/Wetland Restrict",
      "Meets ADA Guidelines",
      "Other",
      "Owner/Agent",
      "Perc Test",
      "Phase I Complete",
      "Phase II Complete",
      "Pipeline",
      "Res Service Contract",
      "Right of First Refusal",
      "Section 8 Qualified",
      "Special Assessments",
      "Special Contracts/Provisions",
      "Survey Available",
      "Utility Easement",
      "Verify Flood Insurance",
      "Verify Rollback Tax",
      "Verify Tax Exemptions",
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
    cy.contains("Next").click();
  });
});

describe(`Waterfront - Page 28`, () => {
  it(`Should be able to select properties`, () => {
    cy.get(`input[type="radio"][value="Yes"]`).click();
    cy.get(
      `.lakefront input[type="radio"][value="${
        Math.random > 0.5 ? "Yes" : "No"
      }"]`
    ).click();
    cy.get(
      `.dock input[type="radio"][value="${Math.random > 0.5 ? "Yes" : "No"}"]`
    ).click();

    const options = [
      "Boat Dock With Lift",
      "Boat Dock With Slip",
      "Canal (man made)",
      "Dock - Covered",
      "Dock - Enclosed",
      "Dock - Uncovered",
      "Lakefront",
      "Lakefront - Common Area",
      "Lakefront - Corps of Engineers",
      "Lakefront - Main Body",
      "Leasehold",
      "Personal Watercraft Lift",
      "Retaining Wall - Concrete",
      "Retaining Wall - Other",
      "Retaining Wall - Steel",
      "Retaining Wall - Wood",
      "Riverfront",
      "Waterboard Authority - HOA",
      "Waterboard Authority - Private"
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

describe(`Lot Intro - Page 29`, () => {
  it(`Should be able to go to the next page`, () => {
    cy.get("button").click();
  });
});

describe(`Easements Form - Page 30 `, () => {
  it(`Should be able to select properties`, () => {
    const options = [
      "Access",
      "Drainage",
      "Electric",
      "Natural Gas",
      "Other",
      "Pipe Line",
      "Telephone",
      "Utilities",
      "Water Lines",
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
    cy.contains("Next").click();
  });
});

describe(`Lot Description - Page 31`, () => {
  it(`Should be able to select properties`, () => {
    const options = [
      "Acreage",
      "Adjacent to Greenbelt",
      "Airstrip",
      "Canal (Man Made)",
      "Corner",
      "Creek",
      "Cul De Sac",
      "Cultivated",
      "Golf Course Lot",
      "Greenbelt",
      "Heavily Treed",
      "Horses Permitted",
      "Interior Lot",
      "Irregular",
      "Landscaped",
      "Leasehold",
      "Large Backyard Grass",
      "No Backyard Grass",
      "Park View",
      "Partially Cultivated",
      "Pasture",
      "River Front",
      "Some Trees",
      "Subdivision",
      "Tank/Pond",
      "Taxi-way",
      "Undivided",
      "Water/Lake View"
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

describe(`Fence Form - Page 32`, () => {
  it(`Should be able to select properties`, () => {
    const options = [
      "Automatic Gate",
      "Barbed Wire",
      "Brick",
      "Chain Link",
      "Cross Fenced",
      "Dog Run",
      "Iron",
      "Metal",
      "Net",
      "Other",
      "Partially Fenced",
      "Pipe",
      "Rail",
      "Rock/Stone",
      "Slick/Smooth Wire",
      "Vinyl",
      "Wood",
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
    cy.contains("Next").click();
  });
});

describe(`Exterior Features Form - Page 33`, () => {
  it(`Should be able to select properties`, () => {
    const options = [
      "Arena",
      "Other",
      "Attached Grill",
      "Balcony",
      "Covered Deck",
      "Covered Porch(es)",
      "Deck",
      "Equestrian Center",
      "Gardens",
      "Gazebo/Pergola",
      "Greenhouse",
      "Guest Quarters",
      "Gutters",
      "Holding Pens",
      "Lighting System",
      "Mosquito Mist System",
      "Outdoor Fireplace/Pit",
      "Outdoor Living Center",
      "Patio Covered",
      "Patio Open",
      "Private Hangar",
      "Private Landing Strip",
      "Private Outdoor Space",
      "Roof Top Deck/Patio",
      "Round Pens",
      "RV/Boat Parking",
      "Satellite Dish",
      "Separate Entry Quarters",
      "Sport Court",
      "Sprinkler System",
      "Stable/Barn",
      "Storage Building",
      "Storm Cellar",
      "Tennis Court(s)",
      "Workshop",
      "Workshop With Electric",
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
    cy.contains("Next").click();
  });
});

describe(`Soil Form - Page 34`, () => {
  it(`Should be able to select properties`, () => {
    const options = [
      "Black",
      "Clay",
      "Fill",
      "Limestone",
      "Other",
      "Rock/Shale",
      "Shady Loam",
      "Unknown"
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

describe(`Restrictions Form - Page 35`, () => {
  it(`Should be able to select properties`, () => {
    const options = [
      "Agricultural",
      "Animals",
      "Architectural",
      "Building",
      "Deed",
      "Development",
      "Easement(s)",
      "Health Department",
      "Hi Line",
      "Inland - Wetland Restr",
      "Lease While on Market",
      "Mobile Home",
      "No Divide",
      "No Known Restriction(s)",
      "No Livestock",
      "No Mobile Home",
      "No Pets",
      "No Restrictions",
      "No Smoking",
      "No Sublease",
      "No Waterbeds",
      "Other",
      "Pet Restrictions",
      "Pipeline",
      "Surface Lease(s)",
      "Timber Lease(s)",
      "Unknown Encumbrance(s)",
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
    cy.contains("Next").click();
  });
});

describe(`Street Utilities Form - Page 36`, () => {
  it(`Should be able to select properties`, () => {
    const options = [
      "Aerobic Septic",
      "All Weather Road",
      "Alley",
      "Asphalt",
      "City Sewer",
      "City Water",
      "Co-op Membership Included",
      "Co-op Water",
      "Community Mailbox",
      "Concrete",
      "Curbs",
      "Dirt",
      "Gravel/Rock",
      "Individual Gas Meter",
      "Individual Water Meter",
      "Master Gas Meter",
      "Master Water Meter",
      "MUD Sewer",
      "MUD Water",
      "No City Services",
      "No Sewer",
      "No Water",
      "Other",
      "Outside City Limits",
      "Overhead Utilities",
      "Private Road",
      "Private Sewer",
      "Private Water",
      "Septic",
      "Sewer Tap Fee Paid",
      "Sidewalk",
      "Underground Utilities",
      "Unincorporated",
      "Water Tap Fee Paid",
      "Well",
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
    cy.contains("Next").click();
  });
});

describe(`Heating Cooling Form - Page 37`, () => {
  it(`Should be able to select properties`, () => {
    const options = [
      "Additional Water Heater(s)",
      "Central Air - Electric",
      "Central Air - Gas",
      "Central Heat - Electric",
      "Central Heat - Gas",
      "Electrostatic Air Filter",
      "Evaporation",
      "Gas Jets",
      "Geotherm",
      "Heat Pump",
      "Humidifier",
      "No Air",
      "No Heat",
      "Other",
      "Panel/Floor/Wall",
      "Propane",
      "Solar",
      "Space Heater",
      "Window Unit",
      "Zoned"
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

describe(`MUD form - Page 38`, () => {
  it(`Should be able to select properties`, () => {
    cy.get(`input[type="radio"][value="Yes"]`).click();
  });

  it(`Should be able to go to the next page`, () => {
    cy.contains("Next").click();
  });
});

describe(`Green Features Form - Page 39`, () => {
  it(`Should be able to select properties`, () => {
    const options = [
      "Drought Tolerant Plants",
      "Energy Recovery Ventilator",
      "Enhanced Air Filtration",
      "ET Irrigation Control",
      "Geo-thermal HVAC",
      "Low Flow Commode",
      "Low Flow Fixtures",
      "Mechanical Fresh Air",
      "Rain/Freeze Sensors",
      "Rain Water Catchment",
      "Recirculating Hot Water",
      "Solar Electric System",
      "Solar Hot Water",
      "Wind Power",
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
    cy.contains("Next").click();
  });
});

describe(`Green Certification Form - Page 39`, () => {
  it(`Should be able to select properties`, () => {
    const options = [
      "Energy Star Certified",
      "Green Built N TX",
      "HERS 0-85",
      "HERS 101+",
      "HERS 86-100",
      "HERS Rated",
      "LEED Certified",
      "LEED Gold",
      "LEED Platinum",
      "LEED Silver",
      "NGBP-National Green",
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
    cy.contains("Next").click();
  });
});

describe(`Energy Efficiency Form - Page 41`, () => {
  it(`Should be able to select properties`, () => {
    const options = [
      "12 inch+ attic insulation",
      "13-15 SEER AC",
      "16+ SEER AC",
      "90% Efficient Furnace",
      "Attic Fan",
      "Ceiling Fans",
      "Dehumidifier",
      "Double Pane Windows",
      "Electric Water Heater",
      "Energy Star Appliances",
      "Foam Insulation",
      "Gas Water Heater",
      "High Efficiency Water Heater",
      "Insulated Doors",
      "Low E Windows",
      "Other",
      "Programmable Thermostat",
      "Radiant Barrier",
      "Smart Electric Meter",
      "Solar Panels",
      "Solar Screens",
      "Solar Door(s)",
      "Storm Window(s)",
      "Tankless Water Heater",
      "Thermos Windows",
      "Tinted Windows",
      "Turbines",
      "Variable Speed HVAC",
      "Ventilator",
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
    cy.contains("Next").click();
  });
});

describe(`Hoa Form - Page 42`, () => {
  it(`Should be able to select properties`, () => {
    cy.get(
      `input[type="radio"][value="${
        ["Mandatory", "Voluntary"][getRandomNumber(0, 1)]
      }"]`
    ).click();

    cy.get(
      `input[type="radio"][value="${
        ["Annual", "Monthly", "Other", "Quarterly", "Semi-Annual"][
          getRandomNumber(0, 4)
        ]
      }"]`
    ).click();

    cy.get(`input[type="text"]`).type(
      ["asdf", "fasd", "zzzz"][getRandomNumber(0, 2)]
    );
    cy.get(`.manage-company input[type="text"]`).type(
      ["asdf", "fasd", "zzzz"][getRandomNumber(0, 2)]
    );
    cy.get(`.hoa-phone input[type="number"]`).type(
      ["1234567890", "0987654321", "0000000001"][getRandomNumber(0, 2)]
    );

    const options = [
      "All Utilities",
      "Back Yard Maintenance",
      "Blanket Insurance",
      "Electric",
      "Exterior Maintenance",
      "Front Yard Maintenance",
      "Full Use of Facilities",
      "Gas",
      "Maintenance of Common Areas",
      "Management Fees",
      "None",
      "Other",
      "Partial Use of Facilities",
      "Reserves",
      "Security",
      "Sprinkler System",
      "Trash",
      "Water/Sewer"
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
    cy.get("button").click();
  });
});
