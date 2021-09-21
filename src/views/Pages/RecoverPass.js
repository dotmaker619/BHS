import React, {useContext, useEffect, useState} from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom";

import AddAlert from "@material-ui/icons/AddAlert";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import logo from "assets/img/auth_logo.png";

import * as authAction from "../../redux/actions/auth";
import * as authService from '../../services/authService';
import * as storageService from '../../services/storageService';


import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";

const useStyles = makeStyles(styles);

const RecoverPassPage = ({ recoverPass, history }) => {

  const [show, setShow] = useState(false);
  const [place, setPlace] = useState('br');
  const [message, setMessage] = useState('');

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [recoverEmail, setrecoverEmail] = React.useState("");
  const [recoverEmailState, setrecoverEmailState] = React.useState("");
  const [recoverPassword, setrecoverPassword] = React.useState("");
  const [recoverPasswordState, setrecoverPasswordState] = React.useState("");
  const [recoverConfirmPassword, setrecoverConfirmPassword] = React.useState("");
  const [recoverConfirmPasswordState, setrecoverConfirmPasswordState] = React.useState("");

  const verifyEmail = value => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
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

  const recoverClick = () => {
    if (recoverEmailState === "") {
      setrecoverEmailState("error");
    }
    if (recoverPasswordState === "") {
      setrecoverPasswordState("error");
    }
    if (recoverConfirmPasswordState === "") {
      setrecoverConfirmPasswordState("error");
    }
    if(recoverEmailState !== "" && recoverPasswordState !== "" && recoverConfirmPasswordState !== "" && recoverConfirmPasswordState === recoverPasswordState ){
      authService.passwordReset({email: recoverEmail, password: recoverPassword}).then(result => {
       if(result.status === 200){
          recoverPass(result.data.user)
          storageService.setStorage('token', result.data.token);
          storageService.setStorage('user', result.data.user);
          setTimeout(() => {
            history.push("/auth/login-page");
          }, 2000);
        } else {
          showNotification('br', 'Recovery password failed');
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
                  <span><b>パスワードの再設定</b></span>
                </div>
              </CardHeader>
              <CardBody>
                <form>
                  <CustomInput
                    success={recoverEmailState === "success"}
                    error={recoverEmailState === "error"}
                    labelText="メールアドレス *"
                    id="recoveremail"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: event => {
                        if (verifyEmail(event.target.value)) {
                          setrecoverEmailState("success");
                        } else {
                          setrecoverEmailState("error");
                        }
                        setrecoverEmail(event.target.value);
                      },
                      type: "email"
                    }}
                  />
                  <CustomInput
                    success={recoverPasswordState === "success"}
                    error={recoverPasswordState === "error"}
                    labelText="新しいパスワード *"
                    id="recoverpassword"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: event => {
                        if (verifyLength(event.target.value, 1)) {
                          setrecoverPasswordState("success");
                        } else {
                          setrecoverPasswordState("error");
                        }
                        setrecoverPassword(event.target.value);
                      },
                      type: "password",
                      autoComplete: "off"
                    }}
                  />
                  <CustomInput
                    success={recoverConfirmPasswordState === "success"}
                    error={recoverConfirmPasswordState === "error"}
                    labelText="新しいパスワード (確認用) *"
                    id="recoverconfirmpassword"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: event => {
                        if (recoverPassword === event.target.value) {
                          setrecoverConfirmPasswordState("success");
                        } else {
                          setrecoverConfirmPasswordState("error");
                        }
                        setrecoverConfirmPassword(event.target.value);
                      },
                      type: "password",
                      autoComplete: "off"
                    }}
                  />
                  <span style={{ fontSize: "10px" }}>※8〜16文字の半角英数字で入力してください.</span>
                  <div className={classes.greyline}></div>
                  <div>
                    <a href="/auth/login-page"><span style={{ float:"left" }}><i className="fa fa-angle-left" style={{ width: "15px", height: "15px" }}></i>ログインページに戻る</span></a>
                    <Button style={{ backgroundColor: "red", float: "right" }} onClick={recoverClick}>
                      <b>送信する</b>
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
  recoverPass: authAction.RecoverPass,
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RecoverPassPage))
