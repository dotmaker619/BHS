import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import AddAlert from "@material-ui/icons/AddAlert";

import * as userService from 'services/userService';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Button1 from "components/CustomButtons/Button1.js";
import Button2 from "components/CustomButtons/Button2.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Snackbar from "components/Snackbar/Snackbar.js";
import Slide from "@material-ui/core/Slide";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import SweetAlert from "react-bootstrap-sweetalert";

import styles from "../Components/style/mainStyle";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const UserList = (props) => {

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

    const [deleteUsertModal, setDeleteUserModal] = React.useState(false);
    const [classicModal, setClassicModal] = React.useState(false);
    const [createUserModal, setCreateUserModal] = React.useState(false);
    const [usersTableData, setUsersTableData] = React.useState([]);
    const [alert, setAlert] = React.useState(null);
    const [selectedValue, setSelectedValue] = React.useState('business');

    const [show, setShow] = useState(false);
    const [place, setPlace] = useState('br');
    const [message, setMessage] = useState('');

    const [createCompany, setCreateCompany] = React.useState("");
    const [createCompanyState, setCreateCompanyState] = React.useState("");
    const [createChargeMan, setCreateChargeMan] = React.useState("");
    const [createChargeManState, setCreateChargeManState] = React.useState("");
    const [createPhone, setCreatePhone] = React.useState("");
    const [createPhoneState, setCreatePhoneState] = React.useState("");
    const [createEmail, setCreateEmail] = React.useState("");
    const [createEmailState, setCreateEmailState] = React.useState("");
    const [createPassword, setCreatePassword] = React.useState("");
    const [createPasswordState, setCreatePasswordState] = React.useState("");
    const [createConfirmPassword, setCreateConfirmPassword] = React.useState("");
    const [createConfirmPasswordState, setCreateConfirmPasswordState] = React.useState("");

    const createUserClick = () => {
      if (createCompanyState === "") {
        setCreateCompanyState("error");
      }
      if (createChargeManState === "") {
        setCreateChargeManState("error");
      }
      if (createPhoneState === "") {
        setCreatePhoneState("error");
      }
      if (createEmailState === "") {
        setCreateEmailState("error");
      }
      if (createPasswordState === "") {
        setCreatePasswordState("error");
      }
      if (createConfirmPasswordState === "") {
        setCreateConfirmPasswordState("error");
      }
      if(createCompanyState !== "" && createChargeManState !== "" && createPhoneState !== "" && createEmailState !== "" && createPasswordState !== "" && createConfirmPasswordState !== "" && createPasswordState === createConfirmPasswordState){
        userService.createUser({company: createCompany, name: createChargeMan, phone: createPhone, email: createEmail, password: createPassword, role: selectedValue }).then(result => {
          if(result.status === 200){
            showNotification('br', 'Create Success!。');
             setTimeout(() => {
                window.location.reload(false);
             }, 2000);
           } else {
             showNotification('br', 'Create Failed');
           }
         })
        showNotification('br', '会員登録が完了しました。登録したメールアドレスとパスワードでログインしてください。');
      }
    };

    const removeUsersBtn = () => {
  
    }

    const handleChange = event => {
      setSelectedValue(event.target.value);
    };

    const removeUsersButtons = [
      { color: "rose"},
    ].map((prop, key) => {
      return (
        <Button2
          color={prop.color}
          simple
          key={key}
          style={{ padding: "none" }}
          onClick={() => setDeleteUserModal(true)}
        >
          削除
        </Button2>
      );
    });

    useEffect(() => {
        userService.getUsers().then(result => {
            console.log(result.data.users, 'users')
            if(result.data.users){
                setUsersTableData(result.data.users.map((user, index) => {
                    return [index+1, user.company, user.name, user.phone, user.email, removeUsersButtons]
            }))
            }
            else{
              console.log('error');
            }
        });
    }, [])

    const showNotification = (place, message) => {
      setPlace(place);
      setMessage(message);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 6000);
    };

    const classes = useStyles();

    return (
        <div>
            <Dialog
              open={deleteUsertModal}
              TransitionComponent={Transition}
              keepMounted
              onClose={() => setDeleteUserModal(false)}
              aria-labelledby="classic-modal-slide-title"
              aria-describedby="classic-modal-slide-description"
            >
              <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
              >
                <h4><b>本当に削除しますか？</b></h4>
              </DialogTitle>
              <DialogActions
                className={
                  classes.modalFooter + " " + classes.modalFooterCenter
                }
              >
                <Button
                  onClick={() => setDeleteUserModal(false)}
                  color="transparent"
                  className={classes.modalSmallFooterFirstButton}
                >
                  キャンセル
                </Button>
                <Button
                  // onClick={() => setDeleteProjectModal(false)}
                  color="danger"
                  simple
                  className={
                    classes.modalSmallFooterFirstButton +
                    " " +
                    classes.modalSmallFooterSecondButton
                  }
                >
                  削除する
                </Button>
              </DialogActions>            
            </Dialog>
            <Dialog
              classes={{
                root: classes.center + " " + classes.modalRoot,
                paper: classes.modal
              }}
              open={classicModal}
              TransitionComponent={Transition}
              keepMounted
              onClose={() => setClassicModal(false)}
              aria-labelledby="classic-modal-slide-title"
              aria-describedby="classic-modal-slide-description"
            >
              <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
              >
                <h4><b>割当アカウントを選択してください</b></h4>
              </DialogTitle>
              <DialogContent
                id="classic-modal-slide-description"
                className={classes.modalBody}
              >
              </DialogContent>
            </Dialog>
            <Dialog
              classes={{
                root: classes.center + " " + classes.modalRoot,
                paper: classes.modal
              }}
              open={createUserModal}
              TransitionComponent={Transition}
              keepMounted
              onClose={() => setCreateUserModal(false)}
              aria-labelledby="classic-modal-slide-title"
              aria-describedby="classic-modal-slide-description"
            >
              <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
                style={{ borderBottom: "1px solid lightgrey" }}
                className={classes.modalHeader}
              >
                <h4><b>アカウント発行</b></h4>
              </DialogTitle>
              <DialogContent
                id="classic-modal-slide-description"
                style={{ padding: "8px 30px" }}
              >
              <form>
                <CustomInput
                  success={createCompanyState === "success"}
                  error={createCompanyState === "error"}
                  labelText="会社名 *"
                  id="company"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: event => {
                      if (verifyLength(event.target.value, 1)) {
                        setCreateCompanyState("success");
                      } else {
                        setCreateCompanyState("error");
                      }
                      setCreateCompany(event.target.value);
                    },
                    type: "text"
                  }}
                />
                <CustomInput
                  success={createChargeManState === "success"}
                  error={createChargeManState === "error"}
                  labelText="担当者名 *"
                  id="registerchargeman"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: event => {
                      if (verifyLength(event.target.value, 1)) {
                        setCreateChargeManState("success");
                      } else {
                        setCreateChargeManState("error");
                      }
                      setCreateChargeMan(event.target.value);
                    },
                    type: "text"
                  }}
                />
                <CustomInput
                  success={createPhoneState === "success"}
                  error={createPhoneState === "error"}
                  labelText="電話番号 *"
                  id="registerphone"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: event => {
                      if (verifyNumber(event.target.value)) {
                        setCreatePhoneState("success");
                      } else {
                        setCreatePhoneState("error");
                      }
                      setCreatePhone(event.target.value);
                    },
                    type: "text"
                  }}
                />
                <CustomInput
                  success={createEmailState === "success"}
                  error={createEmailState === "error"}
                  labelText="メールアドレス *"
                  id="registeremail"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: event => {
                      if (verifyEmail(event.target.value)) {
                        setCreateEmailState("success");
                      } else {
                        setCreateEmailState("error");
                      }
                      setCreateEmail(event.target.value);
                    },
                    type: "email"
                  }}
                />
                <CustomInput
                  success={createPasswordState === "success"}
                  error={createPasswordState === "error"}
                  labelText="パスワード *"
                  id="registerpassword"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: event => {
                      if (verifyLength(event.target.value, 1)) {
                        setCreatePasswordState("success");
                      } else {
                        setCreatePasswordState("error");
                      }
                      setCreatePassword(event.target.value);
                    },
                    type: "password",
                    autoComplete: "off"
                  }}
                />
                <span style={{ fontSize: "10px" }}>※8〜16文字の半角英数字で入力してください.</span>
                <CustomInput
                  success={createConfirmPasswordState === "success"}
                  error={createConfirmPasswordState === "error"}
                  labelText="パスワード（確認用） *"
                  id="registerconfirmpassword"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: event => {
                      if (createPassword === event.target.value) {
                        setCreateConfirmPasswordState("success");
                      } else {
                        setCreateConfirmPasswordState("error");
                      }
                      setCreateConfirmPassword(event.target.value);
                    },
                    type: "password",
                    autoComplete: "off"
                  }}
                />
                <span>アカウント権限</span>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={3}>
                    <div
                    className={
                      classes.checkboxAndRadio +
                      " " +
                      classes.checkboxAndRadioHorizontal
                    }
                    >
                      <FormControlLabel
                        control={
                          <Radio
                            checked={selectedValue === "client"}
                            onChange={handleChange}
                            value="client"
                            name="client radio"
                            aria-label="2"
                            icon={
                              <FiberManualRecord
                                className={classes.radioUnchecked}
                              />
                            }
                            checkedIcon={
                              <FiberManualRecord
                                className={classes.radioChecked}
                              />
                            }
                            classes={{
                              checked: classes.radio,
                              root: classes.radioRoot
                            }}
                          />
                        }
                        classes={{
                          label: classes.label,
                          root: classes.labelRoot
                        }}
                        label="サービス利用者"
                      />
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={3}>
                    <div
                    className={
                      classes.checkboxAndRadio +
                      " " +
                      classes.checkboxAndRadioHorizontal
                    }
                    >
                      <FormControlLabel
                        control={
                          <Radio
                            checked={selectedValue === "business"}
                            onChange={handleChange}
                            value="business"
                            name="business radio"
                            aria-label="3"
                            icon={
                              <FiberManualRecord
                                className={classes.radioUnchecked}
                              />
                            }
                            checkedIcon={
                              <FiberManualRecord
                                className={classes.radioChecked}
                              />
                            }
                            classes={{
                              checked: classes.radio,
                              root: classes.radioRoot
                            }}
                          />
                        }
                        classes={{
                          label: classes.label,
                          root: classes.labelRoot
                        }}
                        label="事業者"
                      />
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={3}>
                    <div
                    className={
                      classes.checkboxAndRadio +
                      " " +
                      classes.checkboxAndRadioHorizontal
                    }
                    >
                      <FormControlLabel
                        control={
                          <Radio
                            checked={selectedValue === "admin"}
                            onChange={handleChange}
                            value="admin"
                            name="admin radio"
                            aria-label="1"
                            icon={
                              <FiberManualRecord
                                className={classes.radioUnchecked}
                              />
                            }
                            checkedIcon={
                              <FiberManualRecord
                                className={classes.radioChecked}
                              />
                            }
                            classes={{
                              checked: classes.radio,
                              root: classes.radioRoot
                            }}
                          />
                        }
                        classes={{
                          label: classes.label,
                          root: classes.labelRoot
                        }}
                        label="管理者"
                      />
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={3}></GridItem>
                </GridContainer>
                <div className={classes.greyline}></div>
                <div style={{ marginBottom: "30px" }}>
                  <Button style={{ backgroundColor: "success", float: "left" }} onClick={() => setCreateUserModal(false)}>
                    <b>キャンセル</b>
                  </Button>
                  <Button style={{ backgroundColor: "red", float: "right" }} onClick={createUserClick}>
                    <b>登録する</b>
                  </Button>
                </div>
              </form>
              </DialogContent>
              <DialogActions></DialogActions>
            </Dialog>                          
        
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={10}>
                  <Card>
                    <CardBody>
                      <Table
                        className={ classes.fontSize }
                        tableHeaderColor="primary"
                        tableHead={["No", "会社名", "担当者名", "電話番号", "メールアドレス", "削除"]}
                        tableData={usersTableData}
                        coloredColls={[4]}
                        colorsColls={["primary"]}
                      />
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={2} style={{ marginTop: "30px", marginLeft: "-10px" }}>
                  <Button1 style={{ backgroundColor: "red" }} 
                    onClick={() => setCreateUserModal(true)}
                  >
                    アカウント発行
                  </Button1>
                </GridItem>
                <Snackbar
                  place={place}
                  color="danger"
                  icon={AddAlert}
                  message={message}
                  open={show}
                  closeNotification={() => setShow(false)}
                  close
                />  
            </GridContainer>
        </div>
    );
}


const mapStateToProps = (state, ownProps) => ({
    user: state.auth.user
})
  
const mapDispatchToProps = ({})
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserList))