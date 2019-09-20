import React from 'react';
//components
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import AdminPageThree from '../AdminPageThree/AdminPageThree';
import PageFour from '../PageFour/PageFour';
import AdminPageFive from '../AdminPageFive/AdminPageFive';
import AdminPageSix from '../AdminPageSix/AdminPageSix';
import AdminPageSeven from '../AdminPageSeven/AdminPageSeven'
import AdminPageEight from '../AdminPageEight/AdminPageEight';
import AdminPageNine from '../AdminPageNine/AdminPageNine';
import AdminPageTen from '../AdminPageTen/AdminPageTen';
import AdminPageEleven from '../AdminPageEleven/AdminPageEleven';
import AdminPageTwelve from '../AdminPageTwelve/AdminPageTwelve';
import AdminPageThirteen from '../AdminPageThirteen/AdminPageThirteen';
import AdminPageFourteen from '../AdminPageFourteen/AdminPageFourteen';
import InteriorFeaturesForm from "../InteriorFeaturesForm/InteriorFeaturesForm";
import AlarmQuestion from "../AlarmQuestion/AlarmQuestion";
import RoofForm from "../RoofForm/RoofForm";
import KitchenEquipForm from "../KitchenEquipForm/KitchenEquipForm";
import PoolQuestion from "../PoolQuestion/PoolQuestion";
import HandicapQuestion from "../HandicapQuestion/HandicapQuestion";
import FlooringForm from "../FlooringForm/FlooringForm"
import FeatureTotals from "../FeatureTotals/FeatureTotals";
import SmartHomeQuestion from "../SmartHomeQuestion/SmartHomeQuestion";
import FireplaceForm from "../FireplaceForm/FireplaceForm"
import FoundationForm from "../FoundationForm/FoundationForm";
import ParkingFeaturesForm from "../ParkingFeaturesForm/ParkingFeaturesForm"
import CommonFeaturesForm from '../CommonFeaturesForm/CommonFeaturesForm';
import SpecialNotesForm from '../SpecialNotesForm/SpecialNotesForm';
import WaterfrontQuestion from '../WaterfrontQuestion/WaterfrontQuestion';
import LotIntro from "../LotIntro/LotIntro";
import EasementsForm from "../EasementsForm/EasementsForm"
import LotDescriptionForm from "../LotDescriptionForm/LotDescriptionForm"
import FenceForm from "../FenceForm/FenceForm"
import ExteriorFeaturesForm from '../ExteriorFeaturesForm/ExteriorFeaturesForm';
import SoilForm from '../SoilForm/SoilForm';
import RestrictionsForm from '../RestrictionsForm/RestrictionsForm';
import StreetUtilitiesForm from "../StreetUtilitiesForm/StreetUtilitiesForm";
import HeatingCoolingForm from '../HeatingCoolingForm/HeatingCoolingForm';
import MudDistrictQuestion from '../MudDistrictQuestion/MudDistrictQuestion';
import GreenFeaturesForm from '../GreenFeaturesForm/GreenFeaturesForm';
import GreenCertificationForm from '../GreenCertificationForm/GreenCertificationForm';
//redux
import {connect} from 'react-redux';
import EnergyEfficiencyForm from '../EnergyEfficiencyForm/EnergyEfficiencyForm';

const Page = props => {
    //Switch hard a / c to `props.auth` for prod
    const myProps = {
        page: +props.match.params.pageNum,
        room: +props.match.params.roomNum
    }
    switch(+props.match.params.pageNum + 'a') {
        case '1c':
        case '1a':
            return <PageOne page={+props.match.params.pageNum} />
        case '2c':
        case '2a':
            return <PageTwo page={+props.match.params.pageNum} />
        case '3a':
            return <AdminPageThree page={+props.match.params.pageNum} />
        case '3c':
        case '4a':
            return <PageFour page={+props.match.params.pageNum} />
        case '5a':
        case '4c':
            return <AdminPageFive page={+props.match.params.pageNum} />
        case '6a':
            return <AdminPageSix page={+props.match.params.pageNum} />
        case '7a':
            return <AdminPageSeven page={+props.match.params.pageNum} room={+props.match.params.roomNum} />
        case '8a':
            return <AdminPageEight page={+props.match.params.pageNum} room={+props.match.params.roomNum} />
        case '9a':
            return <AdminPageNine page={+props.match.params.pageNum} room={+props.match.params.roomNum} />
        case '10a':
            return <AdminPageTen page={+props.match.params.pageNum} room={+props.match.params.roomNum} />
        case '11a':
            return <AdminPageEleven page={+props.match.params.pageNum} room={+props.match.params.roomNum} />
        case '12a':
            return <AdminPageTwelve page={+props.match.params.pageNum} room={+props.match.params.roomNum} />
        case '13a':
            return <AdminPageThirteen {...myProps} />
        case '14a':
            return <AdminPageFourteen />
        case '15a':
            return <InteriorFeaturesForm page={myProps.page} />
        case '16a':
            return <AlarmQuestion page={myProps.page} />
        case '17a':
            return <RoofForm page={myProps.page} />
        case '18a':
            return <KitchenEquipForm page={myProps.page} />
        case '19a':
            return <PoolQuestion page={myProps.page} />
        case '20a':
            return <HandicapQuestion page={myProps.page} />
        case '21a':
            return <FlooringForm page={myProps.page} />
        case '22a':
            return <FeatureTotals page={myProps.page} />
        case '23a':
            return <SmartHomeQuestion page={myProps.page} />
        case '24a':
            return <FireplaceForm page={myProps.page} />
        case '25a':
            return <FoundationForm page={myProps.page} />
        case '26a':
            return <ParkingFeaturesForm page={myProps.page} />
        case '27a':
            return <CommonFeaturesForm page={myProps.page} />
        case '28a':
            return <SpecialNotesForm page={myProps.page} />
        case '29a':
            return <WaterfrontQuestion page={myProps.page} />
        case '30a':
            return <LotIntro page={myProps.page} />
        case '31a':
            return <EasementsForm page={myProps.page} /> 
        case '32a':
            return <LotDescriptionForm page={myProps.page} />
        case '33a':
            return <FenceForm page={myProps.page} />
        case '34a':
            return <ExteriorFeaturesForm page={myProps.page} />
        case '35a':
            return <SoilForm page={myProps.page} />
        case '36a':
            return <RestrictionsForm page={myProps.page} />
        case '37a':
            return <StreetUtilitiesForm page={myProps.page} />
        case '38a':
            return <HeatingCoolingForm page={myProps.page} />
        case '39a':
            return <MudDistrictQuestion page={myProps.page} />
        case '40a':
            return <GreenFeaturesForm page={myProps.page} />
        case '41a':
            return <GreenCertificationForm page={myProps.page} />
        case '42a':
            return <EnergyEfficiencyForm page={myProps.page} />
        default: return <h1>Oops! Page could not be found :( Please contact site administrator at mykenzierogers@gmail.com</h1>
    }
}

const mapStateToProps = state => {
    return {
        auth: state.userReducer.auth 
    }
}

export default connect(mapStateToProps)(Page);