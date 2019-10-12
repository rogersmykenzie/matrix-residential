const express = require("express");
const session = require("express-session");
require("dotenv").config();
const nodemailer = require("nodemailer");

const app = express();

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
        console.log(req.session.formData);
        res.sendStatus(200);
    } catch (e) {
        console.log("caught", e);
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
        console.log(req.session.formData);
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json(e);
        console.log("here", e);
    }
});

app.post("/email", function(req, res) {
    const {
        other,
        firstName,
        lastName,
        email,
        phone,
        address,
        auth,
        propertyType,
        housingType,
        homeStyles,
        constructionTypes,
        constructionStatus,
        sqFtSelection,
        customSqFt,
        changeReason,
        elementarySchool,
        middleSchool,
        highSchool,
        selectedTypes,
        rooms,
        bedroomData,
        diningData,
        bathroomData,
        livingData,
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
        smartHomeQuestion,
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
        energyEfficiencyInfo
    } = req.session.formData;

    const message = `Hello! This is an automated email letting you know that a new form has been submitted by a ${auth}. This email details any answers they input into the form. Note that any instances of the keyword "null" typically refer to an answer the client didn't provide, but may also be an error due to the program. If any \`null\` values seem strange, please don't hesitate to contact "mykenzierogers@gmail.com" with any questions or concerns.
        
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Property Address: ${address}
Property Type(s): ${propertyType.join(", ")}
Housing Type(s): ${housingType.join(", ")}
Styles of Home: ${homeStyles.join(", ")}
Construction: ${constructionTypes.join(", ")}
Construction Status: ${constructionStatus.join(", ")}
${
    sqFtSelection === "Change to:"
        ? `The are changing their square footage to ${customSqFt} for the following reason:
${changeReason}`
        : `Their square footage is the same as their tax record`
}
Elementary School: ${elementarySchool}
Middle School: ${middleSchool}
High School: ${highSchool}
They have:
    ${rooms.numBeds} Bedrooms,
    ${rooms.numFullBath} Full Bathrooms,
    ${rooms.numHalfBath} Half Bathrooms,
    ${rooms.numLiving} Living Areas,
    ${rooms.numDining} Dining Areas.
Their property is ${rooms.numStories}
They have the following Bedrooms:
${bedroomData
    .map(val => {
        return `   Type: ${val.type}
        Width: ${val.width}
        Height: ${val.height}
        Floor: ${val.level}
        Room Properties: 
            ${val.properties.join(", ")}
        `;
    })
    .join("\n")}
They have the following Dining Areas: 
${
    diningData.length > 1
        ? diningData
              .map(val => {
                  return `Type: ${val.type}
        Width: ${val.width}
        Height: ${val.height}
        Floor: ${val.level}
        Room Properties: 
            ${val.properties.join(", ")}
        `;
              })
              .join("\n")
        : ""
}
They have the following Bathrooms:
${bathroomData
    .map(val => {
        return `Type: ${val.type}
        Width: ${val.width}
        Height: ${val.height}
        Floor: ${val.level}
        Room Properties: 
            ${val.properties.join(", ")}
        `;
    })
    .join("\n")}
They also have the following Living Areas:
${livingData
    .map(val => {
        return `Type: ${val.type}
        Width: ${val.width}
        Height: ${val.height}
        Floor: ${val.level}
        Room Properties: 
            ${val.properties.join(", ")}
        `;
    })
    .join("\n")}
They also added the following rooms via write-in:
${other
    .map(val => {
        return `Room Name: ${val.name}
        Room Info: ${val.info}
        `;
    })
    .join("\n")}
The following are the features that the user inputted:
Interior Features: ${interiorFeatures.properties.join(", ")}
Alarm: ${alarmInfo.selection}
${
    alarmInfo.selection === "Yes"
        ? `Alarm/Security Types: ${alarmInfo.selectedTypes.join(", ")}`
        : ""
}
Roof: ${roofInfo.selectedTypes.join(", ")}
Kitchen Equipment: ${kitchenInfo.selectedTypes.join(", ")}
Pool: ${
        poolInfo === true
            ? `Yes\nPool Features: ${poolInfo.properties.join(", ")}`
            : "No"
    }
Handicap: ${handicapInfo.selection}
${
    handicapInfo.selection === "Yes"
        ? `Handicap Features: ${handicapInfo.properties.join(", ")}`
        : ""
}
Flooring: ${flooringInfo.properties.join(", ")}

They have the following as well.
Number of Carport Spaces: ${carportSpaces}
Number of Garage Spaces: ${garageSpaces}
Garage Width: ${garageWidth}
Garage Length: ${garageLength}
Number of Total Cover Parking Areas: ${totalCoverParking}
Number of Fireplaces: ${fireplaces}

This home is ${
        smartHomeQuestion.selection === "No" ? "Not" : ""
    } Password Dependent/Has a Smart Home App

Some for features the user shared:
Fireplace Features: ${fireplaceInfo.properties.join(", ")}
Foundation: ${foundationInfo.properties.join(", ")}
Parking Features: ${parkingInfo.properties.join(", ")}
Common Features: ${commonFeaturesInfo.properties.join(", ")}
Special Notes: ${specialNoteInfo.properties.join(", ")}

Is this property waterfront: ${waterfrontInfo.isWaterfront}
Is this property lakefront: ${waterfrontInfo.isLakefront}
Is a dock permitted? ${waterfrontInfo.dockIsPermitted}
Waterfront Features (if any): ${waterfrontInfo.properties.join(", ")}

A few last features that were mentioned:
Easements: ${easementInfo.properties.join(", ")}
Lot Description: ${lotDescriptionInfo.properties.join(", ")}
Type of Fence: ${fenceInfo.properties.join(", ")}
Exterior Features: ${exteriorFeaturesInfo.properties.join(", ")}
Soil: ${soilInfo.properties.join(", ")}
Restrictions: ${restrictionsInfo.properties.join(", ")}
Street/Utilities: ${streetUtilitiesInfo.properties.join(", ")}
Heating/Cooling: ${heatingCoolingInfo.properties.join(", ")}
MUD District: ${mudDistrictInfo.selection}
Green Features: ${greenFeaturesInfo.properties.join(", ")}
Green Certifications: ${greenCertificationInfo.properties.join(", ")}
Energy Efficiency: ${energyEfficiencyInfo.properties.join(", ")}

This ends the users input. Remember if you have any questions to reach out to "mykenzierogers@gmail.com"

See you next time!
    RoboRealtor`;

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
        subject: "NEW FORM",
        text: message
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) console.log(error);
        else console.log("Email Sent: " + info.response);
    });
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
