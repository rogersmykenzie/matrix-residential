const express = require("express");
const session = require("express-session");
require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SEND_GRID_KEY);

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

app.post("/start", function (req, res) {
  try {
    req.session.formData = {};
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json(e);
  }
});

app.post("/info", function (req, res) {
  try {
    req.session.formData = {
      ...req.session.formData,
      ...req.body
    };
    console.log(req.session.formData);
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json(e);
  }
});

app.post("/info/:type", function (req, res) {
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
    console.log(req.session.formData);
    // console.log(`{${req.params.type}: ${req.body}}`);
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json(e);
  }
});

app.get("/server/rooms", function (req, res) {
  res.status(200).json({
    bedroomData: req.session.formData.bedroomData,
    diningData: req.session.formData.diningData,
    bathroomData: req.session.formData.bathroomData,
    livingData: req.session.formData.livingData
  });
});

app.post("/email", function (req, res) {
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

They stated the following interior features: ${
      interiorFeatures ? interiorFeatures.properties.join(", ") : ""
    }
${
  alarmInfo.selection === "Yes"
    ? "They have the following alarm types: " +
      alarmInfo.selectedTypes.join(", ")
    : "They do not have an alarm"
}
They have the following roof types: ${
      roofInfo ? roofInfo.selectedTypes.join(", ") : ""
    }
They have the following kitchen features: ${kitchenInfo.selectedTypes.join(
      ", "
    )}
They have the following pool features: ${
      poolInfo ? poolInfo.properties.join(", ") : ""
    }
They have the following handicap features: ${
      handicapInfo ? handicapInfo.properties.join(", ") : ""
    }
They have the following flooring features: ${
      flooringInfo ? flooringInfo.properties.join(", ") : ""
    }
They have ${carportSpaces} carport spaces.
They have ${garageSpaces} garage spaces.
${garageWidth ? "Their garage has a width of " + garageWidth : ""}
${garageLength ? "Their garage has a length of " + garageLength : ""}
They have ${totalCoverParking} parking spots with total cover.
The have ${fireplaces} fireplaces.
Their fireplaces have the following features: ${
      fireplaceInfo ? fireplaceInfo.properties.join(", ") : ""
    }
Their foundation has the following features: ${
      foundationInfo ? foundationInfo.properties.join(", ") : ""
    }
They have the following parking features: ${
      parkingInfo ? parkingInfo.properties.join(", ") : ""
    }
They have the following common features: ${
      commonFeaturesInfo ? commonFeaturesInfo.properties.join(", ") : ""
    }
They have the following special notes: ${
      specialNoteInfo ? specialNoteInfo.properties.join(", ") : ""
    }

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

They have the following easement features: ${
      easementInfo ? easementInfo.properties.join(", ") : ""
    }
Their lot has the following features: ${
      lotDescriptionInfo ? lotDescriptionInfo.properties.join(", ") : ""
    }
Their fence has the following attributes: ${
      fenceInfo ? fenceInfo.properties.join(", ") : ""
    }
They have the following exterior features: ${
      exteriorFeaturesInfo ? exteriorFeaturesInfo.properties.join(", ") : ""
    }
Their soil has the following attributes: ${
      soilInfo ? soilInfo.properties.join(", ") : ""
    }
They have the following restrictions: ${
      restrictionsInfo ? restrictionsInfo.properties.join(", ") : ""
    }
They have the following street utilities: ${
      streetUtilitiesInfo ? streetUtilitiesInfo.properties.join(", ") : ""
    }
They have the following heating/cooling info: ${
      heatingCoolingInfo ? heatingCoolingInfo.properties.join(", ") : ""
    }

Are they in a MUD? ${mudDistrictInfo.selection}
What green features do they have? ${
      greenFeaturesInfo ? greenFeaturesInfo.properties.join(", ") : ""
    } 
What green certifications do they have? ${
      greenCertificationInfo ? greenCertificationInfo.properties.join(", ") : ""
    }
What energy efficient features do they have? ${
      energyEfficiencyInfo ? energyEfficiencyInfo.properties.join(", ") : ""
    }
${
  hoaInfo.hasHoa === "None"
    ? `They do not have an HOA.`
    : `They have a ${hoaInfo.hasHoa} HOA.
Their HOA bills ${hoaInfo.billingCycle}.
${hoaInfo.hoaDues ? "They have the following HOA dues: " + hoaInfo.hoaDues : ""}
${
  hoaInfo.managementCompany
    ? "They have the following Management Company: " + hoaInfo.managementCompany
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

    const msg = {
      to: process.env.SEND_TO,
      from: "roborealtor@heehaw.com",
      subject: "NEW FORM",
      text: message
    };
    sgMail.send(msg);
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

    const msg = {
      to: "mykenzierogers@gmail.com",
      from: "roborealtor@error.com",
      subject: "ERROR",
      text: message
    };

    sgMail.send(msg);
  } finally {
    req.session.destroy();
  }
});

app.get("*", (req, res) => {
  res.send("<h1>WORKS</h1>");
});

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Listening on Port ${process.env.SERVER_PORT}`)
);
