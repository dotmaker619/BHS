import { cardTitle,
  defaultBoxShadow,
  successColor,
  dangerColor,
  whiteColor
} from "assets/jss/material-dashboard-pro-react.js";
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js";
import customstyles from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.js";
import modalstyles from "assets/jss/material-dashboard-pro-react/modalStyle.js";

const mainStyle = {
...customstyles,
...customCheckboxRadioSwitch,
...modalstyles,
cardIconTitle: {
...cardTitle,
marginTop: "15px",
marginBottom: "0px"
},
staticFormGroup: {
marginLeft: "0",
marginRight: "0",
paddingBottom: "10px",
margin: "8px 0 0 0",
position: "relative",
"&:before,&:after": {
display: "table",
content: '" "'
},
"&:after": {
clear: "both"
}
},
staticFormControl: {
marginBottom: "0",
paddingTop: "8px",
paddingBottom: "8px",
minHeight: "34px"
},
inputAdornment: {
marginRight: "8px",
position: "relative"
},
inputAdornmentIconSuccess: {
color: successColor[0] + "!important"
},
inputAdornmentIconError: {
color: dangerColor[0] + "!important"
},
cardTitle,
pageSubcategoriesTitle: {
color: "#3C4858",
textDecoration: "none",
textAlign: "center"
},
cardCategory: {
margin: "0",
color: "#999999"
},
cardbody: {
padding: "50px 80px"
},
fontSize: {
fontSize: "10px !important" 
},
changeProfile: {
padding: "30px 100px"
},
labelHorizontal: {
color: "black",
cursor: "pointer",
display: "inline-flex",
fontSize: "14px",
lineHeight: "1.428571429",
fontWeight: "400",
paddingTop: "39px",
marginRight: "0",
"@media (min-width: 992px)": {
float: "left"
}
},
labelHorizontal1: {
color: "black",
cursor: "pointer",
display: "inline-flex",
fontSize: "14px",
lineHeight: "1.428571429",
fontWeight: "400",
marginRight: "0",
"@media (min-width: 992px)": {
float: "left"
}
},
formControl: {
margin: "0 0 17px 0",
position: "relative",
verticalAlign: "unset",
},
modalHeader: {
textAlign: "center"
},
confirm_button : {
padding: "10px 18px !important",
},
success: {
backgroundColor: successColor[0],
color: whiteColor,
...defaultBoxShadow
},
danger: {
backgroundColor: dangerColor[0],
color: whiteColor,
...defaultBoxShadow
},
textAlign: {
textAlign: "center",
},
alignLeft: {
float: "left",
width: "17%",
},
alignRight: {
float: "right",
width: "83%",
display: "flex",
flexDirection: "row-reverse"   
},
positionMatching: {
marginTop: "30px"
},
greyline: {
width: "100%",
height: "20px",
borderBottom: "1px solid lightgrey",
marginBottom: "40px"
},
selectType: {
  width: "100%",
  height: "auto",
  padding: "20px 10px 20px 40px",
  border: "2px solid lightgrey"
},
fullWidthContent: {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  marginBottom: "10px"
},
bitunderline: {
  width: "100%",
  height: "10px",
  marginBottom: "20px",
  borderBottom: "1px solid lightgrey"
},
leftContent: {
  width: "50%",
  fontWeight: "bold"
},
rightContent: {
  width: "50%",
  fontWeight: "bold",
  flexDirection: "row-reverse"
},
statusTitle: {
  width: "100%",
  height: "auto",
  padding: "30px 50px 0 50px",
  marginBottom: "10px",
  display: "flex",
  flexDirection: "row"
},
tiltleRedText: {
  width: "32%",
  height: "20px",
  color: "red"
},
tiltleGreyText: {
  width: "32%",
  height: "20px",
  color: "grey"
},
proposalTimeline: {
  width: "100%",
  height: "auto",
  padding: "0px 60px 20px 60px",
  display: "flex",
  flexDirection: "row"
},
firstredTimeline: {
  width: "33%",
  height: "10px",
  borderBottom: "1px solid red"
},
firstgreyTimeline: {
  width: "33%",
  height: "10px",
  borderBottom: "1px solid lightgrey"
},
secondredTimeline: {
  width: "33%",
  height: "10px",
  borderBottom: "1px solid red"
},
secondgreyTimeline: {
  width: "33%",
  height: "10px",
  borderBottom: "1px solid lightgrey"
},
thirdredTimeline: {
  width: "33%",
  height: "10px",
  borderBottom: "1px solid red"
},
thirdgreyTimeline: {
  width: "33%",
  height: "10px",
  borderBottom: "1px solid lightgrey"
},
roundredstatus: {
  width: "20px",
  height: "20px",
  borderRadius: "20px",
  backgroundColor: "red"
},
roundgreystatus: {
  width: "20px",
  height: "20px",
  borderRadius: "20px",
  backgroundColor: "lightgrey"
},
timelinecontent: {
  width: "100%",
  height: "auto",
  padding: "30px 60px 80px 60px",
},
underline: {
  width: "100%",
  height: "20px",
  marginBottom: "30px",
  borderBottom: "1px solid lightgrey"
},
flexContent: {
  display: "flex",
  flexDirection: "row"
},
roundBtn: {
  borderRadius: "50px",
  color: "red",
  backgroundColor: "lightgrey",
  padding: "15px !important",
  marginLeft: "12px"
},
description: {
  display: "flex",
  flexDirection: "row-reverse",
  marginTop: "10px"
},
chatWindow: {
  width: "100%",
  height: "72vh",
  backgroundColor: "white",
  border: "1px solid lightgrey",
  overflow: "scroll",
},
rightbottomContent: {
  marginLeft: "40px",
  fontSize: "16px",
  fontWeight: "bold"
},
contactSpan: {
  backgroundColor: "red", 
  color: "whitesmoke",
  padding: "4px 8px", 
  fontSize: "9px", 
  borderRadius: "5px", 
  marginRight: "12px"
},
center: {
  textAlign: "center",
  marginTop: "50px",
},
topbar: {
  width: "100%",
  height: "auto",
  padding: "10px 10%",
  backgroundColor: "white",
  position: "fixed", 
  top: "0", 
  zIndex: "999",  
  boxShadow: "0px 15px 10px -15px lightgrey"
},
outputDiv: {
  width: "100%", 
  padding: "30px 20px", 
  backgroundColor: "white", 
  textAlign: "center", 
  color: "red",
  boxShadow: "0 15px 10px -15px lightgrey"
},
workflowStep: {
  width: "65px", 
  height: "65px", 
  marginLeft: "auto", 
  marginRight: "auto", 
  paddingTop: "12px", 
  backgroundColor: "red", 
  marginTop: "-30px", 
  borderRadius: "40px", 
  margin: "auto", 
  textAlign: "center", 
  color: "white", 
  fontSize: "12px", 
  fontWeight: "bold",
},
workflowContent: {
  width: "100%", 
  padding: "60px 30px 30px 30px", 
  backgroundColor: "#F9F9F9", 
  textAlign: "center",
  boxShadow: "10px 15px 10px -15px lightgrey"
},
workflowHeader: {
  width: "100%", 
  marginBottom: "-30px", 
  textAlign: "center"
},
columnReverse: {
  display: "flex", 
  flexDirection: "column-reverse"
},
plusBtn: {
  width: "30px", 
  height: "30px", 
  borderRadius: "30px", 
  border: "none", 
  backgroundColor: "red", 
  color: "white", 
  cursor: "pointer", 
  position: "absolute", 
  right: "40px", 
  top: "35px"
},
minusBtn: {
  width: "30px", 
  height: "30px", 
  borderRadius: "30px", 
  border: "none", 
  backgroundColor: "grey", 
  color: "white", 
  cursor: "pointer", 
  position: "absolute", 
  right: "40px", 
  top: "35px"
},
faqContent: {
  width: "100%", 
  height: "auto", 
  padding: "30px 40px", 
  position: "relative", 
  borderRadius:"10px",
  boxShadow: "10px 15px 10px -15px lightgrey",  
},
marginBT: {
  marginBottom: "20px"
},
navitem: {
  display: "inline",
  marginLeft: "2rem",
  color: "black !important",
  cursor: "pointer"
}
};

export default mainStyle;