/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

// style for this view
import styles from "views/Components/style/mainStyle";

const useStyles = makeStyles(styles);

export default function Faq({id}) {
  
  const classes = useStyles();

  const [showResult1, setShowResult1] = React.useState(false)
  const [showMinusBtn1, setShowMinusBtn1] = React.useState(false)
  const [showPlusBtn1, setShowPlusBtn1] = React.useState(true)

  const [showResult2, setShowResult2] = React.useState(false)
  const [showMinusBtn2, setShowMinusBtn2] = React.useState(false)
  const [showPlusBtn2, setShowPlusBtn2] = React.useState(true)
  
  const [showResult3, setShowResult3] = React.useState(false)
  const [showMinusBtn3, setShowMinusBtn3] = React.useState(false)
  const [showPlusBtn3, setShowPlusBtn3] = React.useState(true)

  const [showResult4, setShowResult4] = React.useState(false)
  const [showMinusBtn4, setShowMinusBtn4] = React.useState(false)
  const [showPlusBtn4, setShowPlusBtn4] = React.useState(true)

  const [showResult5, setShowResult5] = React.useState(false)
  const [showMinusBtn5, setShowMinusBtn5] = React.useState(false)
  const [showPlusBtn5, setShowPlusBtn5] = React.useState(true)

  const [showResult6, setShowResult6] = React.useState(false)
  const [showMinusBtn6, setShowMinusBtn6] = React.useState(false)
  const [showPlusBtn6, setShowPlusBtn6] = React.useState(true)

  const [showResult7, setShowResult7] = React.useState(false)
  const [showMinusBtn7, setShowMinusBtn7] = React.useState(false)
  const [showPlusBtn7, setShowPlusBtn7] = React.useState(true)

  const onShow1 = () => {
    setShowResult1(true)
    setShowMinusBtn1(true)
    setShowPlusBtn1(false)
  }
  const onHide1 = () => {
    setShowResult1(false)
    setShowMinusBtn1(false)
    setShowPlusBtn1(true)
  }

  const onShow2 = () => {
    setShowResult2(true)
    setShowMinusBtn2(true)
    setShowPlusBtn2(false)
  }
  const onHide2 = () => {
    setShowResult2(false)
    setShowMinusBtn2(false)
    setShowPlusBtn2(true)
  }

  const onShow3 = () => {
    setShowResult3(true)
    setShowMinusBtn3(true)
    setShowPlusBtn3(false)
  }
  const onHide3 = () => {
    setShowResult3(false)
    setShowMinusBtn3(false)
    setShowPlusBtn3(true)
  }

  const onShow4 = () => {
    setShowResult4(true)
    setShowMinusBtn4(true)
    setShowPlusBtn4(false)
  }
  const onHide4 = () => {
    setShowResult4(false)
    setShowMinusBtn4(false)
    setShowPlusBtn4(true)
  }

  const onShow5 = () => {
    setShowResult5(true)
    setShowMinusBtn5(true)
    setShowPlusBtn5(false)
  }
  const onHide5 = () => {
    setShowResult5(false)
    setShowMinusBtn5(false)
    setShowPlusBtn5(true)
  }

  const onShow6 = () => {
    setShowResult6(true)
    setShowMinusBtn6(true)
    setShowPlusBtn6(false)
  }
  const onHide6 = () => {
    setShowResult6(false)
    setShowMinusBtn6(false)
    setShowPlusBtn6(true)
  }

  const onShow7 = () => {
    setShowResult7(true)
    setShowMinusBtn7(true)
    setShowPlusBtn7(false)
  }
  const onHide7 = () => {
    setShowResult7(false)
    setShowMinusBtn7(false)
    setShowPlusBtn7(true)
  }

  const Result1 = () => (
    <div>
      <p style={{ fontSize: "16px" }}>オフショア⼈材とAIによる⾃動処理を活⽤する事で、価格と品 を両⽴させています。<br />
                                      また、納品前には国内で品質管理を⾏っています。
      </p>
    </div>
  )
  const Result2 = () => (
    <div>
      <p style={{ fontSize: "16px" }}>オフショア⼈材とAIによる⾃動処理を活⽤する事で、価格と品 を両⽴させています。<br />
                                      また、納品前には国内で品質管理を⾏っています。
      </p>
    </div>
  )
  const Result3 = () => (
    <div>
      <p style={{ fontSize: "16px" }}>オフショア⼈材とAIによる⾃動処理を活⽤する事で、価格と品 を両⽴させています。<br />
                                      また、納品前には国内で品質管理を⾏っています。
      </p>
    </div>
  )
  const Result4 = () => (
    <div>
      <p style={{ fontSize: "16px" }}>オフショア⼈材とAIによる⾃動処理を活⽤する事で、価格と品 を両⽴させています。<br />
                                      また、納品前には国内で品質管理を⾏っています。
      </p>
    </div>
  )
  const Result5 = () => (
    <div>
      <p style={{ fontSize: "16px" }}>オフショア⼈材とAIによる⾃動処理を活⽤する事で、価格と品 を両⽴させています。<br />
                                      また、納品前には国内で品質管理を⾏っています。
      </p>
    </div>
  )
  const Result6 = () => (
    <div>
      <p style={{ fontSize: "16px" }}>オフショア⼈材とAIによる⾃動処理を活⽤する事で、価格と品 を両⽴させています。<br />
                                      また、納品前には国内で品質管理を⾏っています。
      </p>
    </div>
  )
  const Result7 = () => (
    <div>
      <p style={{ fontSize: "16px" }}>オフショア⼈材とAIによる⾃動処理を活⽤する事で、価格と品 を両⽴させています。<br />
                                      また、納品前には国内で品質管理を⾏っています。
      </p>
    </div>
  )

  return (
    <div style={{ padding: "80px 15%", backgroundColor: "white" }} id={id}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "16px", color: "red" }}><b>Q＆A</b></p>
          <p style={{ fontSize: "28px", margin: "20px 0 80px 0" }}><b>よくあるご質問</b></p>
        </div>
        <GridContainer justify="center">
            <GridItem xs={12} sm={12} className={classes.marginBT}>
                <div className={classes.faqContent} style={{ backgroundColor: "#F9F9F9", }}>
                  <h4><b>Q. 価格が安いですが、成果物の品質に問題はないですか？</b></h4>
                  { showResult1 ?  <Result1 /> : null }
                  { showPlusBtn1 ? <button className={classes.plusBtn} onClick={onShow1}><i className="fa fa-plus" aria-hidden="true"></i></button>: true }
                  { showMinusBtn1 ? <button className={classes.minusBtn} onClick={onHide1}><i className="fa fa-minus" aria-hidden="true"></i></button>: null }
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} className={classes.marginBT}>
                <div className={classes.faqContent} style={{ backgroundColor: "#F9F9F9", }}>
                  <h4><b>Q. 成果物の精度はどれくらいですか？</b></h4>
                  { showResult2 ?  <Result2 /> : null }
                  { showPlusBtn2 ? <button className={classes.plusBtn} onClick={onShow2}><i className="fa fa-plus" aria-hidden="true"></i></button>: true }
                  { showMinusBtn2 ? <button className={classes.minusBtn} onClick={onHide2}><i className="fa fa-minus" aria-hidden="true"></i></button>: null }
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} className={classes.marginBT}>
                <div className={classes.faqContent} style={{ backgroundColor: "#F9F9F9", }}>
                  <h4><b>Q. 詳しい価格と納期について教えて下さい。</b></h4>
                  { showResult3 ?  <Result3 /> : null }
                  { showPlusBtn3 ? <button className={classes.plusBtn} onClick={onShow3}><i className="fa fa-plus" aria-hidden="true"></i></button>: true }
                  { showMinusBtn3 ? <button className={classes.minusBtn} onClick={onHide3}><i className="fa fa-minus" aria-hidden="true"></i></button>: null }
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} className={classes.marginBT}>
                <div className={classes.faqContent} style={{ backgroundColor: "#F9F9F9", }}>
                  <h4><b>Q. 図化作業には何が必要ですか？</b></h4>
                  { showResult4 ?  <Result4 /> : null }
                  { showPlusBtn4 ? <button className={classes.plusBtn} onClick={onShow4}><i className="fa fa-plus" aria-hidden="true"></i></button>: true }
                  { showMinusBtn4 ? <button className={classes.minusBtn} onClick={onHide4}><i className="fa fa-minus" aria-hidden="true"></i></button>: null }
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} className={classes.marginBT}>
                <div className={classes.faqContent} style={{ backgroundColor: "#F9F9F9", }}>
                  <h4><b>Q. 図化対象には全ての地物が含まれますか？</b></h4>
                  { showResult5 ?  <Result5 /> : null }
                  { showPlusBtn5 ? <button className={classes.plusBtn} onClick={onShow5}><i className="fa fa-plus" aria-hidden="true"></i></button>: true }
                  { showMinusBtn5 ? <button className={classes.minusBtn} onClick={onHide5}><i className="fa fa-minus" aria-hidden="true"></i></button>: null }
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} className={classes.marginBT}>
                <div className={classes.faqContent} style={{ backgroundColor: "#F9F9F9", }}>
                  <h4><b>Q. 計測作業からお願いする事はできますか？</b></h4>
                  { showResult6 ?  <Result6 /> : null }
                  { showPlusBtn6 ? <button className={classes.plusBtn} onClick={onShow6}><i className="fa fa-plus" aria-hidden="true"></i></button>: true }
                  { showMinusBtn6 ? <button className={classes.minusBtn} onClick={onHide6}><i className="fa fa-minus" aria-hidden="true"></i></button>: null }
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} className={classes.marginBT}>
                <div className={classes.faqContent} style={{ backgroundColor: "#F9F9F9", }}>
                  <h4><b>Q. 利⽤する際の推奨ブラウザについて教えて下さい。</b></h4>
                  { showResult7 ?  <Result7 /> : null }
                  { showPlusBtn7 ? <button className={classes.plusBtn} onClick={onShow7}><i className="fa fa-plus" aria-hidden="true"></i></button>: true }
                  { showMinusBtn7 ? <button className={classes.minusBtn} onClick={onHide7}><i className="fa fa-minus" aria-hidden="true"></i></button>: null }
                </div>
            </GridItem>
            <Button style={{ backgroundColor: "red", color: "white", fontSize: "16px", marginTop: "50px" }}><a href="/auth/register" style={{ color: "white" }}>会員登録はこちら</a></Button>
        </GridContainer>
    </div>
  );
}
