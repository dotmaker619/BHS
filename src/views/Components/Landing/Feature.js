/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";

import feature1 from "assets/img/feature1.PNG";
import feature2 from "assets/img/feature2.PNG";
import feature3 from "assets/img/feature3.PNG";

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
    <div style={{ padding: "80px 15%", backgroundColor: "white" }} id={id}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "16px", color: "red" }}><b>特徴</b></p>
          <p style={{ fontSize: "28px", margin: "20px 0 80px 0" }}><b>選ばれる3つの理由</b></p>
        </div>
        <GridContainer justify="center">
            <GridItem xs={12} sm={4}>
              <div style={{ width: "100%", height: "auto", textAlign: "center", marginBottom: "30px" }}>
                  <img src={feature1} />
              </div>
              <div style={{ textAlign: "center" }}>
                <h4><b>低価格で⾼品質</b></h4>
                <p>業界最安クラスの価格で<br />
                   ⾼品質な成果物をご提供。<br />
                   フィルタリングや等⾼線の作成、<br />
                   点群を⽤いた図化まで幅広い業務<br />
                   に対応しています
                </p>
              </div>
            </GridItem>
            <GridItem xs={12} sm={4}>
              <div style={{ width: "100%", height: "auto", textAlign: "center", marginBottom: "30px" }}>
                  <img src={feature2} />
              </div>
              <div style={{ textAlign: "center" }}>
                <h4><b>今⽇から使えるシンプルさ</b></h4>
                <p>お客様の作業は依頼データを<br />
                  アップロードするだけ。<br />
                  ⾒積もりから納品まで<br />
                  全てWeb上で完結するので、<br />
                  余計な⼿間がかかりません。
                </p>
              </div>
            </GridItem>
            <GridItem xs={12} sm={4}>
              <div style={{ width: "100%", height: "auto", textAlign: "center", marginBottom: "30px" }}>
                  <img src={feature3} />
              </div>
              <div style={{ textAlign: "center" }}>
                <h4><b>技術者による⼿厚いサポート</b></h4>
                <p>豊富な業界経験を持つ技術者が、<br />
                  多様なご要望にもお応えします。<br />
                  細かい指定や修正にも<br />
                  丁寧に対応させて頂きますので、<br />
                  お気兼ねなくご相談下さい。
                </p>
              </div>
            </GridItem>
            <Button style={{ backgroundColor: "red", color: "white", fontSize: "16px", marginTop: "50px" }}><a href="/auth/register" style={{ color: "white" }}>会員登録はこちら</a></Button>
        </GridContainer>
    </div>
  );
}
