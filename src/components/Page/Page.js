import React from "react";
//components
import PageOne from "../PageOne/PageOne";
import PageTwo from "../PageTwo/PageTwo";
import AdminPageThree from "../AdminPageThree/AdminPageThree";
import PageFour from "../PageFour/PageFour";
import AdminPageFive from "../AdminPageFive/AdminPageFive";
import AdminPageSix from "../AdminPageSix/AdminPageSix";
import AdminPageSeven from "../AdminPageSeven/AdminPageSeven";
import AdminPageEight from "../AdminPageEight/AdminPageEight";
import AdminPageNine from "../AdminPageNine/AdminPageNine";
import AdminPageTen from "../AdminPageTen/AdminPageTen";
import AdminPageEleven from "../AdminPageEleven/AdminPageEleven";
import AdminPageTwelve from "../AdminPageTwelve/AdminPageTwelve";
import AdminPageThirteen from "../AdminPageThirteen/AdminPageThirteen";
import AdminPageFourteen from "../AdminPageFourteen/AdminPageFourteen";
import InteriorFeaturesForm from "../InteriorFeaturesForm/InteriorFeaturesForm";
import AlarmQuestion from "../AlarmQuestion/AlarmQuestion";
import RoofForm from "../RoofForm/RoofForm";
import KitchenEquipForm from "../KitchenEquipForm/KitchenEquipForm";
import PoolQuestion from "../PoolQuestion/PoolQuestion";
import HandicapQuestion from "../HandicapQuestion/HandicapQuestion";
import FlooringForm from "../FlooringForm/FlooringForm";
import FeatureTotals from "../FeatureTotals/FeatureTotals";
import SmartHomeQuestion from "../SmartHomeQuestion/SmartHomeQuestion";
import FireplaceForm from "../FireplaceForm/FireplaceForm";
import FoundationForm from "../FoundationForm/FoundationForm";
import ParkingFeaturesForm from "../ParkingFeaturesForm/ParkingFeaturesForm";
import CommonFeaturesForm from "../CommonFeaturesForm/CommonFeaturesForm";
import SpecialNotesForm from "../SpecialNotesForm/SpecialNotesForm";
import WaterfrontQuestion from "../WaterfrontQuestion/WaterfrontQuestion";
import LotIntro from "../LotIntro/LotIntro";
import EasementsForm from "../EasementsForm/EasementsForm";
import LotDescriptionForm from "../LotDescriptionForm/LotDescriptionForm";
import FenceForm from "../FenceForm/FenceForm";
import ExteriorFeaturesForm from "../ExteriorFeaturesForm/ExteriorFeaturesForm";
import SoilForm from "../SoilForm/SoilForm";
import RestrictionsForm from "../RestrictionsForm/RestrictionsForm";
import StreetUtilitiesForm from "../StreetUtilitiesForm/StreetUtilitiesForm";
import HeatingCoolingForm from "../HeatingCoolingForm/HeatingCoolingForm";
import MudDistrictQuestion from "../MudDistrictQuestion/MudDistrictQuestion";
import GreenFeaturesForm from "../GreenFeaturesForm/GreenFeaturesForm";
import GreenCertificationForm from "../GreenCertificationForm/GreenCertificationForm";
import EnergyEfficiencyForm from "../EnergyEfficiencyForm/EnergyEfficiencyForm";
import HoaForm from "../HoaForm/HoaForm";
import EndPage from "../EndPage/EndPage";
//redux
import { connect } from "react-redux";
//routing
import { Redirect } from "react-router-dom";

const Page = props => {
  //Switch hard a / c to `props.auth` for prod
  const myProps = {
    page: +props.match.params.pageNum,
    room: +props.match.params.roomNum
  };
  console.log(props.auth);

  // React.useEffect(() => {
  //   console.log("route changed");
  // }, [props.match.params.pageNum, props.match.params.roomNum]);

  switch (+props.match.params.pageNum + "c") {
    case "1c":
    case "1a":
      return <PageOne page={+props.match.params.pageNum} />;
    case "2c":
    case "2a":
      return <PageTwo page={+props.match.params.pageNum} />;
    case "3a":
      return <AdminPageThree page={+props.match.params.pageNum} />;
    case "3c":
    case "4a":
      return <PageFour page={+props.match.params.pageNum} />;
    case "5a":
    case "4c":
      return <AdminPageFive page={+props.match.params.pageNum} />;
    case "6a":
    case "5c":
      return <AdminPageSix page={+props.match.params.pageNum} />;
    case "7a":
    case "6c":
      return (
        <AdminPageSeven
          page={+props.match.params.pageNum}
          room={+props.match.params.roomNum}
        />
      );
    case "8a":
    case "7c":
      return (
        <AdminPageEight
          page={+props.match.params.pageNum}
          room={+props.match.params.roomNum}
        />
      );
    case "9a":
    case "8c":
      return (
        <AdminPageNine
          page={+props.match.params.pageNum}
          room={+props.match.params.roomNum}
        />
      );
    case "10a":
    case "9c":
      return (
        <AdminPageTen
          page={+props.match.params.pageNum}
          room={+props.match.params.roomNum}
        />
      );
    case "11a":
    case "10c":
      return (
        <AdminPageEleven
          page={+props.match.params.pageNum}
          room={+props.match.params.roomNum}
        />
      );
    case "12a":
    case "11c":
      return (
        <AdminPageTwelve
          page={+props.match.params.pageNum}
          room={+props.match.params.roomNum}
        />
      );
    case "13a":
    case "12c":
      return <AdminPageThirteen {...myProps} />;
    case "14a":
    case "13c":
      return <AdminPageFourteen {...myProps} />;
    case "15a":
    case "14c":
      return <InteriorFeaturesForm page={myProps.page} />;
    case "16a":
    case "15c":
      return <AlarmQuestion page={myProps.page} />;
    case "17a":
    case "16c":
      return <RoofForm page={myProps.page} />;
    case "18a":
    case "17c":
      return <KitchenEquipForm page={myProps.page} />;
    case "19a":
    case "18c":
      return <PoolQuestion page={myProps.page} />;
    case "20a":
    case "19c":
      return <HandicapQuestion page={myProps.page} />;
    case "21a":
    case "20c":
      return <FlooringForm page={myProps.page} />;
    case "22a":
    case "21c":
      return <FeatureTotals page={myProps.page} />;
    case "23a":
    case "22c":
      return <SmartHomeQuestion page={myProps.page} />;
    case "24a":
    case "23c":
      return <FireplaceForm page={myProps.page} />;
    case "25a":
    case "24c":
      return <FoundationForm page={myProps.page} />;
    case "26a":
    case "25c":
      return <ParkingFeaturesForm page={myProps.page} />;
    case "27a":
    case "26c":
      return <CommonFeaturesForm page={myProps.page} />;
    case "28a":
    case "27c":
      return <SpecialNotesForm page={myProps.page} />;
    case "29a":
    case "28c":
      return <WaterfrontQuestion page={myProps.page} />;
    case "30a":
    case "29c":
      return <LotIntro page={myProps.page} />;
    case "31a":
    case "30c":
      return <EasementsForm page={myProps.page} />;
    case "32a":
    case "31c":
      return <LotDescriptionForm page={myProps.page} />;
    case "33a":
    case "32c":
      return <FenceForm page={myProps.page} />;
    case "34a":
    case "33c":
      return <ExteriorFeaturesForm page={myProps.page} />;
    case "35a":
    case "34c":
      return <SoilForm page={myProps.page} />;
    case "36a":
    case "35c":
      return <RestrictionsForm page={myProps.page} />;
    case "37a":
    case "36c":
      return <StreetUtilitiesForm page={myProps.page} />;
    case "38a":
    case "37c":
      return <HeatingCoolingForm page={myProps.page} />;
    case "39a":
    case "38c":
      return <MudDistrictQuestion page={myProps.page} />;
    case "40a":
    case "39c":
      return <GreenFeaturesForm page={myProps.page} />;
    case "41a":
    case "40c":
      return <GreenCertificationForm page={myProps.page} />;
    case "42a":
    case "41c":
      return <EnergyEfficiencyForm page={myProps.page} />;
    case "43a":
    case "42c":
      return <HoaForm page={myProps.page} />;
    case "44a":
    case "43c":
      return <EndPage />;
    default:
      return (
        <h1>
          Oops! Page could not be found :( Please contact site administrator at
          mykenzierogers@gmail.com
        </h1>
      );
  }
};

const mapStateToProps = state => {
  return {
    auth: state.userReducer.auth
  };
};

export default connect(mapStateToProps)(Page);
