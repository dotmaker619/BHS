/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";

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

export default function ContactForms({id}) {
  // register form
  const [contactCompany, setContactCompany] = React.useState("");
  const [contactCompanyState, setContactCompanyState] = React.useState("");
  const [contactName, setContactName] = React.useState("");
  const [contactNameState, setContactNameState] = React.useState("");
  const [contactPhone, setContactPhone] = React.useState("");
  const [contactPhoneState, setContactPhoneState] = React.useState("");
  const [contactEmail, setContactEmail] = React.useState("");
  const [contactEmailState, setContactEmailState] = React.useState("");
  const [contactContent, setContactContent] = React.useState("");
  const [contactContentState, setContactContentState] = React.useState("");
 
  // function that returns true if value is email, false otherwise
  const verifyEmail = value => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };
  // function that verifies if a string has a given length or not
  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };
  // function that verifies if value contains only numbers
  const verifyNumber = value => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  };
  // verifies if value is a valid URL
  
  const contactClick = () => {
    if (contactCompanyState === "") {
      setContactCompanyState("error");
    }
    if (contactNameState === "") {
      setContactNameState("error");
    }
    if (contactPhoneState === "") {
      setContactPhoneState("error");
    }
    if (contactEmailState === "") {
      setContactEmailState("error");
    }
    if (contactContentState === "") {
      setContactContentState("error");
    }
  };
  
  const classes = useStyles();
  return (
    <div style= {{ padding: "60px 0" }} id={id}>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "16px", color: "red" }}><b>お問い合わせ</b></p>
        <p style={{ fontSize: "28px", margin: "20px 0 40px 0" }}><b>お気軽にご相談ください</b></p>
      </div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardBody>
              <form style={{ padding: "30px 90px" }}>
                <GridContainer>
                  <GridItem xs={4} sm={4}>
                    <FormLabel className={classes.labelHorizontal}>
                      <span className={classes.contactSpan}>必須</span> 会社名
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={8} sm={8}>
                    <CustomInput
                      success={contactCompanyState === "success"}
                      error={contactCompanyState === "error"}
                      labelText="例）〇〇株式会社"
                      id="contactcompany"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        onChange: event => {
                          if (verifyLength(event.target.value, 1)) {
                            setContactCompanyState("success");
                          } else {
                            setContactCompanyState("error");
                          }
                          setContactCompany(event.target.value);
                        },
                        type: "text"
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={4} sm={4}>
                    <FormLabel className={classes.labelHorizontal}>
                      <span className={classes.contactSpan}>必須</span> お名前
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={8} sm={8}> 
                    <CustomInput
                      success={contactNameState === "success"}
                      error={contactNameState === "error"}
                      labelText="例）シンプル太郎"
                      id="contactname"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: event => {
                          if (verifyLength(event.target.value, 1)) {
                            setContactNameState("success");
                          } else {
                            setContactNameState("error");
                          }
                          setContactName(event.target.value);
                        },
                        type: "text"
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={4} sm={4}>
                    <FormLabel className={classes.labelHorizontal}>
                      <span className={classes.contactSpan}>必須</span> 電話番号
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={8} sm={8}>  
                    <CustomInput
                      success={contactPhoneState === "success"}
                      error={contactPhoneState === "error"}
                      labelText="例）01234567890"
                      id="contactphone"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: event => {
                          if (verifyNumber(event.target.value)) {
                            setContactPhoneState("success");
                          } else {
                            setContactPhoneState("error");
                          }
                          setContactPhone(event.target.value);
                        },
                        type: "text"
                      }}
                    />
                  </GridItem>
                </GridContainer> 
                <GridContainer>
                  <GridItem xs={4} sm={4}>
                    <FormLabel className={classes.labelHorizontal}>
                      <span className={classes.contactSpan}>必須</span> メールアドレス
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={8} sm={8}>   
                    <CustomInput
                    success={contactEmailState === "success"}
                    error={contactEmailState === "error"}
                    labelText="例）simple@gmail.com
                    "
                    id="contactemail"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: event => {
                        if (verifyEmail(event.target.value)) {
                          setContactEmailState("success");
                        } else {
                          setContactEmailState("error");
                        }
                        setContactEmail(event.target.value);
                      },
                      type: "email"
                    }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={4} sm={4}>
                    <FormLabel className={classes.labelHorizontal}>
                      <span className={classes.contactSpan}>必須</span> お問い合わせ内容
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={8} sm={8}>
                    <CustomInput
                      success={contactContentState === "success"}
                      error={contactContentState === "error"}
                      id="contactcontent"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 15,
                        onChange: event => {
                          if (verifyLength(event.target.value, 1)) {
                            setContactContentState("success");
                          } else {
                            setContactContentState("error");
                          }
                          setContactContent(event.target.value);
                        },
                        type: "text"
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <div className={classes.center}>
                  <Button style={{ padding: "15px 50px", fontSize: "15px", backgroundColor: "red" }} onClick={contactClick}>
                    送信する
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
