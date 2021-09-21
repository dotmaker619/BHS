import { blueGrey, grey } from "@material-ui/core/colors";
import { BorderBottom, CenterFocusStrong, SignalWifi1BarLock } from "@material-ui/icons";
import { blackColor } from "assets/jss/material-dashboard-pro-react";
import {
  container,
  cardTitle,
  whiteColor,
  grayColor
} from "assets/jss/material-dashboard-pro-react.js";

const loginPageStyle = theme => ({
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px"
    }
  },
  cardTitle: {
    ...cardTitle,
    color: whiteColor
  },
  textCenter: {
    textAlign: "center"
  },
  justifyContentCenter: {
    justifyContent: "center !important"
  },
  customButtonClass: {
    "&,&:focus,&:hover": {
      color: whiteColor
    },
    marginLeft: "5px",
    marginRight: "5px"
  },
  inputAdornment: {
    marginRight: "18px"
  },
  inputAdornmentIcon: {
    color: grayColor[6]
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  cardHeader: {
    marginTop: "15px",
    fontSize: "20px",
    textAlign: "center",
    paddingBottom: "0px !important"
  },
  bottomeLine: {
    borderBottom: "1px solid lightgrey",
    paddingBottom: "15px"
  },
  socialLine: {
    padding: "0.9375rem 0"
  },
  greyline: {
    width: "100%",
    height: "20px",
    borderBottom: "1px solid lightgrey",
    marginBottom: "20px"
  }
});

export default loginPageStyle;
