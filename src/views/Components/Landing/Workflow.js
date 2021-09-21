/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";

import workflow1 from "assets/img/workflow1.png";
import workflow2 from "assets/img/workflow2.png";
import workflow3 from "assets/img/workflow3.png";
import workflow4 from "assets/img/workflow4.png";
import workflow5 from "assets/img/workflow5.png";
import workflow6 from "assets/img/workflow6.png";

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

export default function Workflow({id}) {
  
  const classes = useStyles();

  return (
    <div style={{ padding: "80px 10%", backgroundColor: "white" }} id={id}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "16px", color: "red" }}><b>ワークフロー</b></p>
          <p style={{ fontSize: "28px", margin: "20px 0 80px 0" }}><b>納品までの流れ</b></p>
        </div>
        <GridContainer justify="center">
            <GridItem xs={6} sm={2} className={classes.columnReverse}>
              <div className={classes.workflowContent}>
                <img src={workflow1} width="40px" />
                <p><b>会員登録</b></p>
              </div>
              <div className={classes.workflowHeader}>
                <div className={classes.workflowStep}>
                  STEP<br />
                  <span style={{ fontSize: "20px" }}>1</span>
                </div>
             </div>
            </GridItem>
            <GridItem xs={6} sm={2} className={classes.columnReverse}>
              <div className={classes.workflowContent}>
                <img src={workflow2} width="40px" />
                <p><b>⾃動お⾒積り</b></p>
              </div>
              <div className={classes.workflowHeader}>
                <div className={classes.workflowStep}>
                  STEP<br />
                  <span style={{ fontSize: "20px" }}>2</span>
                </div>
             </div>
            </GridItem>
            <GridItem xs={6} sm={2} className={classes.columnReverse}>
              <div className={classes.workflowContent}>
                <img src={workflow3} width="40px" />
                <p><b>ご発注</b></p>
              </div>
              <div className={classes.workflowHeader}>
                <div className={classes.workflowStep}>
                  STEP<br />
                  <span style={{ fontSize: "20px" }}>3</span>
                </div>
             </div>
            </GridItem>
            <GridItem xs={6} sm={2} className={classes.columnReverse}>
              <div className={classes.workflowContent} style={{ paddingBottom: "10px" }}>
                <img src={workflow4} width="40px" />
                <p><b>依頼データ<br />アップロード</b></p>
              </div>
              <div className={classes.workflowHeader}>
                <div className={classes.workflowStep}>
                  STEP<br />
                  <span style={{ fontSize: "20px" }}>4</span>
                </div>
             </div>
            </GridItem>
            <GridItem xs={6} sm={2} className={classes.columnReverse}>
              <div className={classes.workflowContent}>
                <img src={workflow5} width="40px" />
                <p><b>データ処理</b></p>
              </div>
              <div className={classes.workflowHeader}>
                <div className={classes.workflowStep}>
                  STEP<br />
                  <span style={{ fontSize: "20px" }}>5</span>
                </div>
             </div>
            </GridItem>
            <GridItem xs={6} sm={2} className={classes.columnReverse}>
              <div className={classes.workflowContent}>
                <img src={workflow6} width="40px" />
                <p><b>ご納品</b></p>
              </div>
              <div className={classes.workflowHeader}>
                <div className={classes.workflowStep}>
                  STEP<br />
                  <span style={{ fontSize: "20px" }}>6</span>
                </div>
             </div>
            </GridItem>
            <Button style={{ backgroundColor: "red", color: "white", fontSize: "16px", marginTop: "50px" }}><a href="/auth/register" style={{ color: "white" }}>会員登録はこちら</a></Button>
        </GridContainer>

    </div>
  );
}
