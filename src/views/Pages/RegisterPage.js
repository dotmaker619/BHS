import React, {useContext, useEffect, useState} from "react";
import { connect } from "react-redux";
import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom";

import AddAlert from "@material-ui/icons/AddAlert";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import logo from "assets/img/auth_logo.png";

import * as authAction from "../../redux/actions/auth";
import * as authService from '../../services/authService';
import * as storageService from '../../services/storageService';

import styles from "assets/jss/material-dashboard-pro-react/views/registerPageStyle.js";

const useStyles = makeStyles(styles);

const RegisterPage = (props) => {

  const [show, setShow] = useState(false);
  const [place, setPlace] = useState('br');
  const [message, setMessage] = useState('');

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [company, setCompany] = React.useState("");
  const [companyState, setCompanyState] = React.useState("");
  const [chargeMan, setchargeMan] = React.useState("");
  const [chargeManState, setchargeManState] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [phoneState, setPhoneState] = React.useState("");
  const [registerEmail, setregisterEmail] = React.useState("");
  const [registerEmailState, setregisterEmailState] = React.useState("");
  const [registerPassword, setregisterPassword] = React.useState("");
  const [registerPasswordState, setregisterPasswordState] = React.useState("");
  const [registerConfirmPassword, setregisterConfirmPassword] = React.useState("");
  const [registerConfirmPasswordState, setregisterConfirmPasswordState] = React.useState("");


  const verifyEmail = value => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };
  
  const verifyNumber = value => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  };

  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };

  const registerClick = () => {
    if (companyState === "") {
      setCompanyState("error");
    }
    if (chargeManState === "") {
      setchargeManState("error");
    }
    if (phoneState === "") {
      setPhoneState("error");
    }
    if (registerEmailState === "") {
      setregisterEmailState("error");
    }
    if (registerPasswordState === "") {
      setregisterPasswordState("error");
    }
    if (registerConfirmPasswordState === "") {
      setregisterConfirmPasswordState("error");
    }
    if(companyState !== "" && chargeManState !== "" && phoneState !== "" && registerEmailState !== "" && registerPasswordState !== "" && registerConfirmPasswordState !== "" && registerPasswordState === registerConfirmPasswordState){
      authService.signUp({company: company, name: chargeMan, phone: phone, email: registerEmail, password: registerPassword }).then(result => {
        if(result.status === 200){
          showNotification('br', '会員登録が完了しました。登録したメールアドレスとパスワードでログインしてください。');
           setTimeout(() => {
            storageService.setStorage('user', result.data.user);
             props.history.push("/auth/login-page");
           }, 2000);
         } else {
           showNotification('br', 'Register failed');
         }
       })
    }
  };

  React.useEffect(() => {
    let id = setTimeout(function() {
      setCardAnimation("");
    }, 700);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.clearTimeout(id);
    };
  });
  const classes = useStyles();

  const showNotification = (place, message) => {
    setPlace(place);
    setMessage(message);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 6000);
  };

  return (
    <div className={classes.container}>
      <div style={{ textAlign: "center" }}>
        <img src={logo} alt="..." width="23%"/>
      </div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={5}>
            <Card login className={classes[cardAnimaton]}>
              <CardHeader className={classes.cardHeader}>
                <div className={classes.bottomeLine}>
                  <span style={{ fontSize: "18px" }}><b>会員登録</b></span>
                </div>
              </CardHeader>
              <CardBody>
                <form>
                  <CustomInput
                    success={companyState === "success"}
                    error={companyState === "error"}
                    labelText="会社名 *"
                    id="company"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: event => {
                        if (verifyLength(event.target.value, 1)) {
                          setCompanyState("success");
                        } else {
                          setCompanyState("error");
                        }
                        setCompany(event.target.value);
                      },
                      type: "text"
                    }}
                  />
                  <CustomInput
                    success={chargeManState === "success"}
                    error={chargeManState === "error"}
                    labelText="担当者名 *"
                    id="registerchargeman"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: event => {
                        if (verifyLength(event.target.value, 1)) {
                          setchargeManState("success");
                        } else {
                          setchargeManState("error");
                        }
                        setchargeMan(event.target.value);
                      },
                      type: "text"
                    }}
                  />
                  <CustomInput
                    success={phoneState === "success"}
                    error={phoneState === "error"}
                    labelText="電話番号 *"
                    id="registerphone"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: event => {
                        if (verifyNumber(event.target.value)) {
                          setPhoneState("success");
                        } else {
                          setPhoneState("error");
                        }
                        setPhone(event.target.value);
                      },
                      type: "text"
                    }}
                  />
                  <CustomInput
                    success={registerEmailState === "success"}
                    error={registerEmailState === "error"}
                    labelText="メールアドレス *"
                    id="registeremail"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: event => {
                        if (verifyEmail(event.target.value)) {
                          setregisterEmailState("success");
                        } else {
                          setregisterEmailState("error");
                        }
                        setregisterEmail(event.target.value);
                      },
                      type: "email"
                    }}
                  />
                  <CustomInput
                    success={registerPasswordState === "success"}
                    error={registerPasswordState === "error"}
                    labelText="パスワード *"
                    id="registerpassword"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: event => {
                        if (verifyLength(event.target.value, 1)) {
                          setregisterPasswordState("success");
                        } else {
                          setregisterPasswordState("error");
                        }
                        setregisterPassword(event.target.value);
                      },
                      type: "password",
                      autoComplete: "off"
                    }}
                  />
                  <span style={{ fontSize: "10px" }}>※8〜16文字の半角英数字で入力してください.</span>
                  <CustomInput
                    success={registerConfirmPasswordState === "success"}
                    error={registerConfirmPasswordState === "error"}
                    labelText="パスワード（確認用） *"
                    id="registerconfirmpassword"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: event => {
                        if (registerPassword === event.target.value) {
                          setregisterConfirmPasswordState("success");
                        } else {
                          setregisterConfirmPasswordState("error");
                        }
                        setregisterConfirmPassword(event.target.value);
                      },
                      type: "password",
                      autoComplete: "off"
                    }}
                  />
                  <div className={classes.greyline}></div>
                  <div>
                    <a href="/auth/login-page"><span style={{ float:"left" }}><i className="fa fa-angle-left" style={{ width: "15px", height: "15px" }}></i>ログインページに戻る	
</span></a>
                    <Button style={{ backgroundColor: "red", float: "right" }} onClick={registerClick}>
                      <b>登録する</b>
                    </Button>
                  </div>
                </form>
              </CardBody>
            </Card>
            <Snackbar
              place={place}
              color="danger"
              icon={AddAlert}
              message={message}
              open={show}
              closeNotification={() => setShow(false)}
              close
            />
        </GridItem>
      </GridContainer>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = ({
  signup: authAction.Signup,

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterPage))
