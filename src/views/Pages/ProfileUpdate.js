import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import AddAlert from "@material-ui/icons/AddAlert";
import { makeStyles } from "@material-ui/core/styles";

import * as mainAction from 'redux/actions/main';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Snackbar from "components/Snackbar/Snackbar.js";
import Slide from "@material-ui/core/Slide";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "../Components/style/mainStyle";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const ProfileUpdate = ({MiniActive, user}) => {

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

    const [classicModal, setClassicModal] = React.useState(false);
    const [show, setShow] = useState(false);
    const [place, setPlace] = useState('br');
    const [message, setMessage] = useState('');

    const [company, setCompany] = React.useState();
    const [companyState, setCompanyState] = React.useState("");
    const [chargeMan, setchargeMan] = React.useState("");
    const [chargeManState, setchargeManState] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [phoneState, setPhoneState] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [EmailState, setEmailState] = React.useState("");

    const changeClick = () => {
    if (companyState === "") {
        setCompanyState("error");
    }
    if (chargeManState === "") {
        setchargeManState("error");
    }
    if (phoneState === "") {
        setPhoneState("error");
    }
    if (EmailState === "") {
        setEmailState("error");
    }
    if(companyState !== "" && chargeManState !== "" && phoneState !== "" && EmailState !== ""){
        showNotification('br', '会員登録が完了しました。登録したメールアドレスとパスワードでログインしてください。');
    }
    }; 

    const showNotification = (place, message) => {
        setPlace(place);
        setMessage(message);
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 6000);
    };

    useEffect(() => {
    console.log('object');
        MiniActive(false)
    }, [])

    const classes = useStyles();

    return(
        <div>
            <Card>
                <CardBody>
                    <div className={ classes.changeProfile }>
                    <GridContainer>
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
                            <h4><b>登録情報</b></h4>
                        </DialogTitle>
                        <DialogContent
                            id="classic-modal-slide-description"
                            className={classes.modalBody}
                        >
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
                                type: "text",
                                autoComplete: "off"
                            }}
                            />
                            <CustomInput
                            success={chargeManState === "success"}
                            error={chargeManState === "error"}
                            labelText="担当者名 *"
                            id="chargeman"
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
                            id="phone"
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
                            success={EmailState === "success"}
                            error={EmailState === "error"}
                            labelText="メールアドレス *"
                            id="email"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                onChange: event => {
                                if (verifyEmail(event.target.value)) {
                                    setEmailState("success");
                                } else {
                                    setEmailState("error");
                                }
                                setEmail(event.target.value);
                                },
                                type: "email"
                            }}
                            />
                        </DialogContent>
                        <DialogActions className={classes.modalFooter}>
                            <Button color="transparent" onClick={changeClick}>変更</Button>
                            <Button
                            onClick={() => setClassicModal(false)}
                            color="danger"
                            simple
                            >
                            キャンセル
                            </Button>
                        </DialogActions>
                        </Dialog>

                        <GridItem xs={12} sm={4} md={4}>
                        <FormLabel className={classes.labelHorizontal}>
                            会社名
                        </FormLabel>
                        </GridItem>
                        <GridItem xs={12} sm={5} md={5}>
                        <CustomInput
                            id="disabled"
                            formControlProps={{
                            fullWidth: true
                            }}
                            inputProps={{
                            value: user.company,
                            disabled: true
                            }}
                        />
                        </GridItem>
                        <GridItem xs={12} sm={1} md={1}></GridItem>
                        <GridItem xs={12} sm={2} md={2}>
                        <Button style={{ backgroundColor: "red" }} onClick={() => setClassicModal(true)}>
                            変更
                        </Button>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} sm={4}>
                        <FormLabel className={classes.labelHorizontal}>
                            担当者名
                        </FormLabel>
                        </GridItem>
                        <GridItem xs={12} sm={5}>
                        <CustomInput
                            id="disabled"
                            formControlProps={{
                            fullWidth: true
                            }}
                            inputProps={{
                            value: user.name,
                            disabled: true
                            }}
                        />
                        </GridItem>
                        <GridItem xs={12} sm={3}></GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} sm={4}>
                        <FormLabel className={classes.labelHorizontal}>
                            電話番号
                        </FormLabel>
                        </GridItem>
                        <GridItem xs={12} sm={5}>
                        <CustomInput
                            id="disabled"
                            formControlProps={{
                            fullWidth: true
                            }}
                            inputProps={{
                            value: user.phone,
                            disabled: true
                            }}
                        />
                        </GridItem>
                        <GridItem xs={12} sm={3}></GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} sm={4}>
                        <FormLabel className={classes.labelHorizontal}>
                            メールアドレス
                        </FormLabel>
                        </GridItem>
                        <GridItem xs={12} sm={5}>
                        <CustomInput
                            id="disabled"
                            formControlProps={{
                            fullWidth: true
                            }}
                            inputProps={{
                            value: user.email,
                            disabled: true
                            }}
                        />
                        </GridItem>
                        <GridItem xs={12} sm={3}></GridItem>
                    </GridContainer>
                    </div>

                    <Snackbar
                        place={place}
                        color="danger"
                        icon={AddAlert}
                        message={message}
                        open={show}
                        closeNotification={() => setShow(false)}
                        close
                    />  
                </CardBody>
            </Card>
        </div>
    );

}

const mapStateToProps = (state, ownProps) => ({
    user: state.auth.user
})
  
const mapDispatchToProps = ({
    MiniActive: mainAction.MiniActive
})
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileUpdate))