import {
  containerFluid
} from "assets/jss/material-dashboard-pro-react.js";

const pagesStyle = theme => ({
  content: {
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)"
  },
  container: { ...containerFluid },
  wrapper: {
    height: "auto",
    minHeight: "100vh",
    position: "relative",
    top: "0",
    backgroundColor: "white",
    borderBottom: "10px solid red"
  },
  fullPage: {
    padding: "120px 0",
    position: "relative",
    minHeight: "100vh",
    display: "flex!important",
    margin: "0",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      minHeight: "700px!important"
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%",
      border: "none !important"
    },
    "&:before": {
      //backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.65)"
    },
    "&:before,&:after": {
      display: "block",
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      zIndex: "2"
    }
  },
});

export default pagesStyle;
