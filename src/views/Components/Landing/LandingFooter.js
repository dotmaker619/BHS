import React from "react"
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "../style/mainStyle.js";

const useStyles = makeStyles(styles);

export default function LandingFooter() {

    const classes = useStyles();

    return (
        <div style={{ backgroundColor: "black", padding: "50px 120px", color: "whitesmoke" }}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={6}>
                    <h3><b>Apex株式会社</b></h3>
                    <p style={{ fontSize: "12px", color: "lightgrey" }}>〒150-0002 東京都渋⾕区渋⾕3-6-2エクラート渋⾕5F</p>
                    <p style={{ fontSize: "12px", color: "lightgrey" }}>TEL 03-6822-8754</p>
                    <p style={{ fontSize: "12px", color: "lightgrey" }}>Mail info@apex.tokyo</p>
                </GridItem>
                <GridItem xs={12} sm={2}>
                    <p><a href="/landing" style={{ color: "whitesmoke" }}>ホーム</a></p>
                    <p><a href="/landing" style={{ color: "whitesmoke" }}>特徴</a></p>
                    <p><a href="/landing" style={{ color: "whitesmoke" }}>機能</a></p>
                    <p><a href="/landing" style={{ color: "whitesmoke" }}>ワークフロー</a></p>
                </GridItem>
                <GridItem xs={12} sm={2}>
                    <p>活⽤例</p>
                    <p>Q＆A</p>
                    <p>お問い合わせ</p>
                </GridItem>
                <GridItem xs={12} sm={2}>
                    <p>会社概要</p>
                    <p>プライバシーポリシー</p>
                    <p>特定商取引法に基づく表記</p>
                </GridItem>
            </GridContainer>
        </div>
    );
}