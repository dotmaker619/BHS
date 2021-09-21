/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";

import activity1 from "assets/img/activity1.PNG";
import activity2 from "assets/img/activity2.PNG";
import activity3 from "assets/img/activity3.PNG";
import activity4 from "assets/img/activity4.PNG";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

// style for this view
import styles from "views/Components/style/mainStyle";

const useStyles = makeStyles(styles);

export default function Activity({id}) {
  
  const classes = useStyles();

  return (
    <div style={{ padding: "80px 10%" }} id={id}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "16px", color: "red" }}><b>活⽤例</b></p>
          <p style={{ fontSize: "28px", margin: "20px 0 80px 0" }}><b>様々な業界の企業様にご利⽤いただいています</b></p>
        </div>
        <GridContainer justify="center">
            <GridItem xs={12} sm={3}>
              <img src={activity1} style={{ width: "100%" }} />
            </GridItem>
            <GridItem xs={12} sm={3}>
              <img src={activity2} style={{ width: "100%" }} />
            </GridItem>
            <GridItem xs={12} sm={3}>
              <img src={activity3} style={{ width: "100%" }} />
            </GridItem>
            <GridItem xs={12} sm={3}>
              <img src={activity4} style={{ width: "100%" }} />
            </GridItem>
        </GridContainer>
    </div>
  );
}
