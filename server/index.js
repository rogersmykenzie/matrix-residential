const express = require("express");
const session = require("express-session");
require("dotenv").config();
const nodemailer = require("nodemailer");
// const path = require("path");

const app = express();

app.use(express.static(`${__dirname}/../build`));
app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
      expires: false
    }
  })
);

app.post("/start", function(req, res) {
  try {
    req.session.formData = {};
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json(e);
  }
});

app.post("/info", function(req, res) {
  try {
    req.session.formData = {
      ...req.session.formData,
      ...req.body
    };
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json(e);
  }
});

app.post("/info/:type", function(req, res) {
  if (req.session.formData === undefined) {
    req.session.formData = {};
  }
  try {
    if (req.session.formData[req.params.type] === undefined) {
      req.session.formData[req.params.type] = [];
    }
    req.session.formData[req.params.type].push({
      ...req.body
    });
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json(e);
  }
});

app.get("/server/rooms", function(req, res) {
  res.status(200).json({
    bedroomData: req.session.formData.bedroomData,
    diningData: req.session.formData.diningData,
    bathroomData: req.session.formData.bathroomData,
    livingData: req.session.formData.livingData
  });
});

app.post("/email", function(req, res) {
  function camelToNormal(string) {
    let stringArg = string.trim();
    let newString = stringArg[0].toUpperCase();
    for (let i = 1; i < stringArg.length; i++) {
      if (stringArg[i].toUpperCase() === stringArg[i]) {
        newString += " ";
      }
      newString += stringArg[i];
    }
    return newString;
  }
  function kebabToNormal(string) {
    return string
      .trim()
      .split("-")
      .map(val => val[0].toUpperCase() + val.substring(1).toLowerCase())
      .join(" ");
  }
  function convertToReadable(string) {
    if (string.includes("-")) {
      return kebabToNormal(string);
    } else {
      return camelToNormal(string);
    }
  }
  function formatRoom(room) {
    let formattedRoom = "";
    if (room.level) {
      formattedRoom += `  Level: ${room.level}\n`;
    }
    if (room.width) {
      formattedRoom += `  Width: ${room.width}\n`;
    }
    if (room.length) {
      formattedRoom += `  Length: ${room.length}\n`;
    }
    if (room.properties.length > 0) {
      formattedRoom += `  Properties: ${room.properties.join(", ")}\n`;
    }
    if (room.type) {
      formattedRoom += `  Type: ${convertToReadable(room.type)}\n`;
    }
    return formattedRoom;
  }
  const {
    auth,
    firstName,
    lastName,
    email,
    phone,
    address,
    propertyType,
    housingType,
    homeStyles,
    constructionTypes,
    constructionStatus,
    schoolsAreUnknown,
    selectedTypes,
    highSchool,
    middleSchool,
    elementarySchool,
    rooms,
    bedroomData,
    diningData,
    bathroomData,
    livingData,
    other,
    interiorFeatures,
    alarmInfo,
    roofInfo,
    kitchenInfo,
    poolInfo,
    handicapInfo,
    flooringInfo,
    carportSpaces,
    garageSpaces,
    garageWidth,
    garageLength,
    totalCoverParking,
    fireplaces,
    fireplaceInfo,
    foundationInfo,
    parkingInfo,
    commonFeaturesInfo,
    specialNoteInfo,
    waterfrontInfo,
    easementInfo,
    lotDescriptionInfo,
    fenceInfo,
    exteriorFeaturesInfo,
    soilInfo,
    restrictionsInfo,
    streetUtilitiesInfo,
    heatingCoolingInfo,
    mudDistrictInfo,
    greenFeaturesInfo,
    greenCertificationInfo,
    energyEfficiencyInfo,
    hoaInfo
  } = req.session.formData;
  console.log(hoaInfo);
  try {
    const message = `A new listing form has been submitted!

${
  auth !== "Agent"
    ? `This form was submitted by a ${auth} named ${firstName} ${lastName}. Their email address is "${email}", and their phone number is ${phone}.\nThis property is located at ${address}.`
    : `This form was submitted by an agent for the property of ${address}`
}
${
  propertyType
    ? `It has the following property types: ${propertyType.join(", ")}.`
    : ""
}
It has the following housing types: ${housingType.join(", ")}.
It has the following home styles: ${homeStyles.join(", ")}.
It has the following construction types: ${constructionTypes.join(", ")}
${
  constructionStatus.length > 0
    ? "It has the following construction status: " +
      constructionStatus.join(", ") +
      "\n"
    : ""
}
${
  schoolsAreUnknown
    ? "They do not know the schools in their district."
    : `They have the following schools: \nElementary School: ${elementarySchool}\nMiddle School: ${middleSchool}\nHigh School: ${highSchool}\n`
}
They have the following accessory units: ${selectedTypes.join(", ")}.

They have ${rooms.numBeds} bedrooms.
They have ${rooms.numFullBath} full bathrooms.
They have ${rooms.numHalfBath} half bathrooms.
They have ${rooms.numDining} dining rooms.
They have ${rooms.numLiving} living rooms.

Here are their bedrooms:
${bedroomData && bedroomData.map(val => formatRoom(val)).join("\n")}
Here are their dining rooms:
${diningData && diningData.map(val => formatRoom(val)).join("\n")}
Here are their bathrooms:
${bathroomData && bathroomData.map(val => formatRoom(val)).join("\n")}
Here are their living rooms:
${livingData && livingData.map(val => formatRoom(val)).join("\n")}
${
  other && other.length > 0
    ? "Here are other rooms they added:\n" +
      other
        .map(val =>
          val.type === "other"
            ? `${convertToReadable(val.type)} - ${val.name}: ${val.info}`
            : formatRoom(val)
        )
        .join("\n")
    : ""
}

They stated the following interior features: ${interiorFeatures.properties.join(
      ", "
    )}
${
  alarmInfo.selection === "Yes"
    ? "They have the following alarm types: " +
      alarmInfo.selectedTypes.join(", ")
    : "They do not have an alarm"
}
They have the following roof types: ${roofInfo.selectedTypes.join(", ")}
They have the following kitchen features: ${kitchenInfo.selectedTypes.join(
      ", "
    )}
They have the following pool features: ${poolInfo.properties.join(", ")}
They have the following handicap features: ${handicapInfo.properties.join(", ")}
They have the following flooring features: ${flooringInfo.properties.join(", ")}
They have ${carportSpaces} carport spaces.
They have ${garageSpaces} garage spaces.
${garageWidth ? "Their garage has a width of " + garageWidth : ""}
${garageLength ? "Their garage has a length of " + garageLength : ""}
They have ${totalCoverParking} parking spots with total cover.
The have ${fireplaces} fireplaces.
Their fireplaces have the following features: ${fireplaceInfo.properties.join(
      ", "
    )}
Their foundation has the following features: ${foundationInfo.properties.join(
      ", "
    )}
They have the following parking features: ${parkingInfo.properties.join(", ")}
They have the following common features: ${commonFeaturesInfo.properties.join(
      ", "
    )}
They have the following special notes: ${specialNoteInfo.properties.join(", ")}

Is their property waterfront? ${waterfrontInfo.isWaterfront}
${
  waterfrontInfo.isWaterfront === "Yes"
    ? "Is their property lakefront? " + waterfrontInfo.isLakefront
    : ""
}
${
  waterfrontInfo.isWaterfront === "Yes"
    ? "Is a dock permitted? " + waterfrontInfo.dockIsPermitted
    : ""
}
${
  waterfrontInfo.isWaterfront === "Yes"
    ? "The waterfront has the following properties: " +
      waterfrontInfo.properties.join(", ")
    : ""
}

They have the following easement features: ${easementInfo.properties.join(", ")}
Their lot has the following features: ${lotDescriptionInfo.properties.join(
      ", "
    )}
Their fence has the following attributes: ${fenceInfo.properties.join(", ")}
They have the following exterior features: ${exteriorFeaturesInfo.properties.join(
      ", "
    )}
Their soil has the following attributes: ${soilInfo.properties.join(", ")}
They have the following restrictions: ${restrictionsInfo.properties.join(", ")}
They have the following street utilities: ${streetUtilitiesInfo.properties.join(
      ", "
    )}
They have the following heating/cooling info: ${heatingCoolingInfo.properties.join(
      ", "
    )}

Are they in a MUD? ${mudDistrictInfo.selection}
What green features do they have? ${greenFeaturesInfo.properties.join(", ")}
What green certifications do they have? ${greenCertificationInfo.properties.join(
      ", "
    )}
What energy efficient features do they have? ${energyEfficiencyInfo.properties.join(
      ", "
    )}
${
  hoaInfo.hasHoa === "None"
    ? `They do not have an HOA.`
    : `They have a ${hoaInfo.hasHoa} HOA.
Their HOA bills ${hoaInfo.billingCycle}.
${hoaInfo.hoaDues ? "They have the following HOA dues: " + hoaInfo.hoaDues : ""}
${
  hoaInfo.managementCompany
    ? "They have the following Management Company" + hoaInfo.managementCompany
    : ""
}
${hoaInfo.phone ? "They provided the following contact: " + hoaInfo.phone : ""}
${
  hoaInfo.selectedAttributes.length > 0
    ? "They provided the following attributes: " +
      hoaInfo.selectedAttributes.join(", ")
    : ""
}
`
}`;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS
      }
    });

    const mailOptions = {
      from: process.env.MAILER_USER,
      // to: req.session.formData.email
      to: process.env.SEND_TO,
      subject: "NEW FORM",
      text: message
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) console.log(error);
      else console.log("Email Sent: " + info.response);
    });
  } catch (e) {
    const message = `
    ERROR: ${e}

    
    auth: ${auth}
    firstName: ${firstName}
    lastName: ${lastName}
    email: ${email}
    phone: ${phone}
    address: ${address}
    propertyType: ${propertyType}
    housingType: ${housingType}
    homeStyles: ${homeStyles}
    constructionTypes: ${constructionTypes}
    constructionStatus: ${constructionStatus}
    schoolsAreUnknown: ${schoolsAreUnknown}
    selectedTypes: ${selectedTypes}
    highSchool: ${highSchool}
    middleSchool: ${middleSchool}
    elementarySchool: ${elementarySchool}
    rooms: ${rooms}
    bedroomData: ${bedroomData}
    diningData: ${diningData}
    bathroomData: ${bathroomData}
    livingData: ${livingData}
    other: ${other}
    interiorFeatures: ${interiorFeatures}
    alarmInfo: ${alarmInfo}
    roofInfo: ${roofInfo}
    kitchenInfo: ${kitchenInfo}
    poolInfo: ${poolInfo}
    handicapInfo: ${handicapInfo}
    flooringInfo: ${flooringInfo}
    carportSpaces: ${carportSpaces}
    garageSpaces: ${garageSpaces}
    garageWidth: ${garageWidth}
    garageLength: ${garageLength}
    totalCoverParking: ${totalCoverParking}
    fireplaces: ${fireplaces}
    fireplaceInfo: ${fireplaceInfo}
    foundationInfo: ${foundationInfo}
    parkingInfo: ${parkingInfo}
    commonFeaturesInfo: ${commonFeaturesInfo}
    specialNoteInfo: ${specialNoteInfo}
    waterfrontInfo: ${waterfrontInfo}
    easementInfo: ${easementInfo}
    lotDescriptionInfo: ${lotDescriptionInfo}
    fenceInfo: ${fenceInfo}
    exteriorFeaturesInfo: ${exteriorFeaturesInfo}
    soilInfo: ${soilInfo}
    restrictionsInfo: ${restrictionsInfo}
    streetUtilitiesInfo: ${streetUtilitiesInfo}
    heatingCoolingInfo: ${heatingCoolingInfo}
    mudDistrictInfo: ${mudDistrictInfo}
    greenFeaturesInfo: ${greenFeaturesInfo}
    greenCertificationInfo: ${greenCertificationInfo}
    energyEfficiencyInfo: ${greenCertificationInfo}`;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS
      }
    });

    const mailOptions = {
      from: process.env.MAILER_USER,
      // to: req.session.formData.email
      to: "mykenzierogers@gmail.com",
      subject: "FORM ERROR",
      text: message
    };
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) console.log(error);
      else console.log("Email Sent: " + info.response);
    });
  }
});

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Listening on Port ${process.env.SERVER_PORT}`)
);

// { firstName: 'Mykenzie',
//   lastName: 'Rogers',
//   email: 'mykenzierogers@gmail.com',
//   phone: '469-773-7996',
//   address: '1829 San Jacinto Drive',
//   auth: 'Agent',
//   propertyType: [ 'Farm/Ranch', 'Half Duplex' ],
//   housingType:
//    [ 'Designated Historical Home', 'Doublewide Mobile w/ Land' ],
//   homeStyles: [ 'Early American', 'Southwestern' ],
//   constructionTypes: [ 'Fiber Cement' ],
//   constructionStatus: [ 'New Const - Incomplete' ],
//   sqFtSelection: 'Change to:',
//   customSqFt: '123',
//   changeReason: 'Building Plan',
//   elementarySchool: 'elementary school',
//   middleSchool: 'middle school',
//   highSchool: 'high school',
//   selectedTypes: [ 'Other' ],
//   rooms:
//    { numBeds: 1,
//      numFullBath: 1,
//      numHalfBath: 1,
//      numDining: 2,
//      num`Living`: 2,
//      numStories: 2 },
//   bedroomData:
//    [ { type: 'master',
//        width: '12',
//        height: '12',
//        level: '1',
//        properties: [Array] } ],
//   interiorFeatures:
//    { properties: [ 'Central Vac', 'Multiple Staircases', 'Wainscoting' ] },
//   alarmInfo:
//    { selection: 'Yes',
//      selectedTypes: [ 'Fire Sprinkler System', 'Smoke Detector' ] },
//   roofInfo:
//    { selectedTypes: [ 'Shake Metal', 'Overlay', 'Other', 'Wood Shingle' ] },
//   kitchenInfo:
//    { selectedTypes:
//       [ 'Built-in Microwave',
//         'Disposal',
//         'Oven - Gas',
//         'Warmer Oven Drawer' ] },
//   poolInfo: { selection: false, properties: [] },
//   handicapInfo: { properties: [], selection: 'No' },
//   flooringInfo: { properties: [ 'Luxury Vinyl Plank', 'Laminate' ] },
//   carportSpaces: '1',
//   garageSpaces: '2',
//   garageWidth: '3',
//   garageLength: '4',
//   totalCoverParking: '5',
//   fireplaces: '6',
//   smartHomeQuestion: { selection: 'No' },
//   fireplaceInfo: { properties: [ 'Freestanding', 'See Through Fireplace' ] },
//   foundationInfo: { properties: [ 'Pier and Beam' ] },
//   parkingInfo:
//    { properties: [ 'Attached', 'Assigned Spaces', 'Fenced Open Lot' ] },
//   commonFeaturesInfo:
//    { properties: [ 'Common Elevator', 'Public Hangar', 'Horse Facilities' ] },
//   specialNoteInfo:
//    { properties:
//       [ 'Environ. Study Complete',
//         'Right of First Refusal',
//         'Verify Flood Insurance' ] },
//   waterfrontInfo:
//    { isWaterfront: 'No',
//      isLakefront: 'No',
//      dockIsPermitted: null,
//      properties: [ 'Dock - Covered', 'Leasehold' ] },
//   easementInfo: { properties: [ 'Other', 'Pipe Line', 'Telephone' ] },
//   lotDescriptionInfo:
//    { properties: [ 'Canal (Man Made)', 'Irregular', 'Some Trees' ] },
//   fenceInfo: { properties: [ 'Cross Fenced', 'Rock/Stone' ] },
//   exteriorFeaturesInfo:
//    { properties:
//       [ 'Private Outdoor Space',
//         'Workshop With Electric',
//         'Stable/Barn' ] },
//   soilInfo: { properties: [ 'Other' ] },
//   restrictionsInfo: { properties: [ 'Easement(s)', 'No Livestock' ] },
//   streetUtilitiesInfo:
//    { properties: [ 'Co-op Membership Included', 'Individual Water Meter' ] },
//   heatingCoolingInfo: { properties: [ 'Other' ] },
//   mudDistrictInfo: { selection: 'No' },
//   greenFeaturesInfo:
//    { properties: [ 'ET Irrigation Control', 'Recirculating Hot Water' ] },
//   greenCertificationInfo:
//    { properties: [ 'HERS 86-100', 'HERS 101+', 'LEED Silver' ] },
//   energyEfficiencyInfo: { properties: [ 'Gas Water Heater' ] } }
