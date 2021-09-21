import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import * as userService from 'services/userService';
import * as projectService from 'services/projectService';

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Check from "@material-ui/icons/Check";
import Snackbar from "components/Snackbar/Snackbar.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import FormControl from "@material-ui/core/FormControl";
import Datetime from "react-datetime";
import InputLabel from "@material-ui/core/InputLabel";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import AnnouncementIcon from '@material-ui/icons/Announcement';
import AddAlert from "@material-ui/icons/AddAlert";

import styles from "../Components/style/mainStyle";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ProposalCreate = ({history, user}) => {

  const [show, setShow] = useState(false);
  const [place, setPlace] = useState('br');
  const [message, setMessage] = useState('');
  const admin_id = '1';

  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedValue, setSelectedValue] = React.useState("");
  const [selectedValue2, setSelectedValue2] = React.useState("");
  const [createProjectModal, setCreateProjectModal] = React.useState(false);
  const [notificationModal, setNotificationModal] = React.useState(false);
  
  const [selectdata, setSelectdata] = React.useState([]);
  const [selectdata1, setSelectdata1] = React.useState([]);
  const [selectdata2, setSelectdata2] = React.useState([]);
  const [selectdata3, setSelectdata3] = React.useState([]);
  const [selectdata4, setSelectdata4] = React.useState([]);
  const [selectdata5, setSelectdata5] = React.useState([]);
  const [selectdata6, setSelectdata6] = React.useState([]);
  const [selectdata7, setSelectdata7] = React.useState([]);

  const [title, setTitle] = React.useState("");
  const [deliverDate, setDeliverDate] = React.useState("");
  const [inputdata1, setInputData1] = React.useState("");
  const [inputErrorState1, setInputErrorState1] = React.useState("");
  const [inputdata2, setInputData2] = React.useState("");
  const [inputdata3, setInputData3] = React.useState("");
  const [inputdata4, setInputData4] = React.useState("");
  const [inputdata5, setInputData5] = React.useState("");
  const [inputdata6, setInputData6] = React.useState("");
  const [inputdata7, setInputData7] = React.useState("");
  const [inputdata8, setInputData8] = React.useState("");

  const [simpleSelect1, setSimpleSelect1] = React.useState("");
  const [selectErrorState1, setSelectErrorState1] = React.useState("");
  const [simpleSelect2, setSimpleSelect2] = React.useState("");
  const [simpleSelect3, setSimpleSelect3] = React.useState("");
  const [simpleSelect4, setSimpleSelect4] = React.useState("");
  const [simpleSelect5, setSimpleSelect5] = React.useState("");
  const [simpleSelect6, setSimpleSelect6] = React.useState("");
  const [simpleSelect7, setSimpleSelect7] = React.useState("");
  const [simpleSelect8, setSimpleSelect8] = React.useState("");

  const subtotal = () => {
    return inputdata1 * 10 + inputdata2 * 6 +inputdata3 * 4;
  }

  const consumption = () => {
    return inputdata1 * 20 + inputdata2 * 12 + inputdata5 * 6;
  }

  const total = () => {
    return subtotal() + consumption();
  }

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  const handleChange2 = event => {
    setSelectedValue2(event.target.value);
  };

  const handleSimple1 = event => {
    setSimpleSelect1(event.target.value);
  };
  const handleSimple2 = event => {
    setSimpleSelect2(event.target.value);
  };
  const handleSimple3 = event => {
    setSimpleSelect3(event.target.value);
  };
  const handleSimple4 = event => {
    setSimpleSelect4(event.target.value);
  };
  const handleSimple5 = event => {
    setSimpleSelect5(event.target.value);
  };
  const handleSimple6 = event => {
    setSimpleSelect6(event.target.value);
  };
  const handleSimple7 = event => {
    setSimpleSelect7(event.target.value);
  };
  const handleSimple8 = event => {
    setSimpleSelect8(event.target.value);
  };

  const handleChangeDate = date => {
    setDeliverDate(date.format());
    ///...
  };

  const showNotification = (place, message) => {
    setPlace(place);
    setMessage(message);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 6000);
  };

  const handleToggle = value => {
  
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      //setInputErrorState1("");
    } else {
      newChecked.splice(currentIndex, 1);
      if(value == 1) {
        setInputErrorState1("success");
        setSelectErrorState1("success");
        setInputData1("");
        setSimpleSelect1("");
      }
    }
    setChecked(newChecked);

  };

  // const errorText = [ {backgroundColor: "rose" } ].map((prop, key) => {
  //   return (
  //     <div color={prop.backgroundColor} key={key} style={{ padding: "10px 20px", color: "white" }}>
  //         <span>エラーメッセージ</span>
  //     </div>
  //   );
  // });
  const [errorContent, setErrorContent] = React.useState("");

  const errorText = () => {
    return (
      <div style={{ backgroundColor: "#FBF2F3", padding: "10px 20px", color: "red", borderRadius: "5px" }}>
          <span>エラーメッセージ</span>
      </div>
    );
  }

  const createProject = () => {

    if (inputdata1 === "") {
      setInputErrorState1("error");
    } else {
      setInputErrorState1("success");
    }

    if (simpleSelect1 === "") {
      setSelectErrorState1("error");
    } else {
      setSelectErrorState1("success");
    }
    
    if (inputErrorState1 === "error" || selectErrorState1 === "error") {
      setErrorContent(errorText);
    }
    else {
      setErrorContent("");
    }
    if (user.id !== "" && title !== "" && deliverDate !== "" && total() !== 0 && errorContent === ""){
      projectService.createProject({  
                                      client_id: user.id, 
                                      admin_id: admin_id,
                                      title: title, 
                                      amount: total(), 
                                      delivery_date: deliverDate, 
                                      ground_data: inputdata1, 
                                      ground_data_output: simpleSelect1[0],
                                      simplified_drawing: inputdata2, 
                                      simplified_drawing_output: simpleSelect2[0],
                                      simplified_drawing_rank: selectedValue,
                                      simplified_drawing_scale: selectedValue2,
                                      contour_data: inputdata3,
                                      contour_data_output: simpleSelect3[0], 
                                      longitudinal_data: inputdata4, 
                                      longitudinal_data_output: simpleSelect4[0], 
                                      simple_orthphoto: inputdata5, 
                                      simple_orthphoto_output: simpleSelect5[0], 
                                      mesh_soil_volume: inputdata6, 
                                      mesh_soil_volume_output: simpleSelect6[0], 
                                      simple_accuracy_table: inputdata7, 
                                      simple_accuracy_table_output: simpleSelect7[0], 
                                      public_accuracy_table: inputdata8, 
                                      public_accuracy_table_output: simpleSelect8[0]     
                                  }).then(({status, data}) => {
                                    if(status === 200){
                                      history.push("/admin/projectdetail/"+ data.project.id +"" );
                                    } else {
                                      showNotification('br', 'Register failed');
                                    }
                                  })
    } else {
      setCreateProjectModal(false);
      //setNotificationModal(true);
    } 
  }

  useEffect(() => {
    console.log(user);
    projectService.getProjectFormats().then(result => {
      console.log(result.data.work_output_formats, 'users')
      if(result.data.work_output_formats){
        setSelectdata(result.data.work_output_formats[0].output_formats.map((type) => {
          return[type.format]
        }))
        setSelectdata1(result.data.work_output_formats[1].output_formats.map((type) => {
          return[type.format]
        }))
        setSelectdata2(result.data.work_output_formats[2].output_formats.map((type) => {
          return[type.format]
        }))
        setSelectdata3(result.data.work_output_formats[3].output_formats.map((type) => {
          return[type.format]
        }))
        setSelectdata4(result.data.work_output_formats[4].output_formats.map((type) => {
          return[type.format]
        }))
        setSelectdata5(result.data.work_output_formats[5].output_formats.map((type) => {
          return[type.format]
        }))
        setSelectdata6(result.data.work_output_formats[6].output_formats.map((type) => {
          return[type.format]
        }))
        setSelectdata7(result.data.work_output_formats[7].output_formats.map((type) => {
          return[type.format]
        }))
      }
      else{
        console.log('error');
      }
    });
}, [])


const verifyLength = (value, length) => {
  if (value.length >= length) {
    return true;
  }
  return false;
};



  const classes = useStyles();

  


  return (
      <div>
        <Snackbar
          place={place}
          color="danger"
          icon={AddAlert}
          message={message}
          open={show}
          closeNotification={() => setShow(false)}
          close
        />
        <Dialog
          classes={{
            root: classes.center + " " + classes.modalRoot,
            paper: classes.modal
          }}
          open={createProjectModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setCreateProjectModal(false)}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <h4><b>発注しますか？</b></h4>
          </DialogTitle>
          <DialogActions
            className={
              classes.modalFooter + " " + classes.modalFooterCenter
            }
          >
            <Button
              onClick={() => setCreateProjectModal(false)}
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
              onClick={createProject}
            >
              発注する
            </Button>
          </DialogActions>            
        </Dialog>
        <Dialog
          open={notificationModal}
          TransitionComponent={Transition}
          onClose={() => setNotificationModal(false)}
          style={{ overflow: "auto" }}
        >
          <DialogTitle>
            <h4><b>Register failed!!!</b></h4>
          </DialogTitle>         
        </Dialog>
        <Card>
          <CardBody>
            <div className={classes.cardbody}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={8}>
                  <GridContainer style={{marginBottom: "20px"}}>
                    <span style={{ marginLeft: "16px", fontWeight: "bold" }}>案件名</span>
                    <GridItem xs={12} sm={12}>
                      <CustomInput
                        id=""
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => {
                            setTitle(event.target.value);
                          },
                          placeholder: "1~50",
                          disabled: false
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={6}>
                      <p><b>目安納品日</b></p>
                      <Datetime
                        timeFormat={false}
                        onChange={handleChangeDate}
                        inputProps={{
                          placeholder: "目安納品日" }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12}>
                      <GridContainer>
                        <div
                          className={
                            classes.checkboxAndRadio +
                            " " +
                            classes.checkboxAndRadioHorizontal
                          }
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                tabIndex={-1}
                                onClick={() => handleToggle(1)}
                                checkedIcon={
                                  <Check className={classes.checkedIcon} />
                                }
                                icon={<Check className={classes.uncheckedIcon} />}
                                classes={{
                                  checked: classes.checked,
                                  root: classes.checkRoot
                                }}
                              />
                            }
                            classes={{
                              label: classes.label,
                              root: classes.labelRoot
                            }}
                            label="グラウンドデータ(DTM)"
                          />
                        </div>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={6}>
                          <CustomInput
                            tabIndex={-1}
                            id="firstValue"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: event => {
                                if (verifyLength(event.target.value, 1)) {
                                  setInputErrorState1("success");
                                } else {
                                  setInputErrorState1("error");
                                }
                                setInputData1(event.target.value);
                              }, 
                              placeholder: "1~200",
                              disabled: checked.indexOf(1) < 0,
                              value: inputdata1
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={1}></GridItem>
                        <GridItem xs={12} sm={5}>
                        <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                        >
                          <InputLabel
                            htmlFor="simple-select"
                            className={classes.selectLabel}
                          >
                            出力形式を選択
                          </InputLabel>
                          <Select
                            MenuProps={{
                              className: classes.selectMenu
                            }}
                            classes={{
                              select: classes.select
                            }}
                            value={simpleSelect1}
                            inputProps={{
                              onChange: event => {
                                if (verifyLength(event.target.value, 1)) {
                                  setSelectErrorState1("success");
                                } else {
                                  setSelectErrorState1("error");
                                }
                                setSimpleSelect1(event.target.value);
                              },
                              name: "simpleSelect",
                              id: "simple-select",
                              disabled: checked.indexOf(1) < 0
                            }}
                          >
                            <MenuItem
                              disabled
                              classes={{
                                root: classes.selectMenuItem
                              }}
                            >
                              出力形式を選択
                            </MenuItem>
                            {
                              selectdata.map((format) => {
                                return ( 
                                  <MenuItem
                                    key={format}
                                    classes={{
                                      root: classes.selectMenuItem,
                                      selected: classes.selectMenuItemSelected
                                    }}
                                    value={format}
                                  >
                                    {format}
                                  </MenuItem>
                                )
                              })
                            } 
                          </Select> 
                        </FormControl>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12}>
                      <GridContainer>
                        <div
                          className={
                            classes.checkboxAndRadio +
                            " " +
                            classes.checkboxAndRadioHorizontal
                          }
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                tabIndex={-1}
                                onClick={() => handleToggle(2)}
                                checkedIcon={
                                  <Check className={classes.checkedIcon} />
                                }
                                icon={<Check className={classes.uncheckedIcon} />}
                                classes={{
                                  checked: classes.checked,
                                  root: classes.checkRoot
                                }}
                              />
                            }
                            classes={{
                              label: classes.label,
                              root: classes.labelRoot
                            }}
                            label="簡易図化(一般図)"
                          />
                        </div>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={6}>
                          <CustomInput
                            id=""
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: event => {
                                setInputData2(event.target.value);
                              },
                              placeholder: "1~200",
                              disabled: checked.indexOf(2) < 0
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={1}></GridItem>
                        <GridItem xs={12} sm={5}>
                        <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                        >
                          <InputLabel
                            htmlFor="simple-select"
                            className={classes.selectLabel}
                          >
                            出力形式を選択
                          </InputLabel>
                          <Select
                            MenuProps={{
                              className: classes.selectMenu
                            }}
                            classes={{
                              select: classes.select
                            }}
                            value={simpleSelect2}
                            onChange={handleSimple2}
                              inputProps={{
                              name: "simpleSelect2",
                              id: "simple-select2",
                              disabled: checked.indexOf(2) < 0
                            }}
                          >
                            <MenuItem
                              disabled
                              classes={{
                                root: classes.selectMenuItem
                              }}
                            >
                              出力形式を選択
                            </MenuItem>
                            {
                              selectdata1.map((format) => {
                                return ( 
                                  <MenuItem
                                    key={format}
                                    classes={{
                                      root: classes.selectMenuItem,
                                      selected: classes.selectMenuItemSelected
                                    }}
                                    value={format}
                                  >
                                    {format}
                                  </MenuItem>
                                )
                              })
                            } 
                          </Select> 
                        </FormControl>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                  </GridContainer>
                  
                  {checked.indexOf(2) > 0 && <div className={classes.selectType}>
                      <b>図化対象</b>
                      <GridContainer>
                        <GridItem xs={12} sm={4}>
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
                                  checked={selectedValue === "1"}
                                  onChange={handleChange}
                                  value="1"
                                  name="A"
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
                              label="Aランク"
                            />
                          </div>
                        </GridItem>
                        <GridItem xs={12} sm={4}>
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
                                  checked={selectedValue === "2"}
                                  onChange={handleChange}
                                  value="2"
                                  name="B"
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
                              label="Bランク"
                            />
                          </div>
                        </GridItem>
                        <GridItem xs={12} sm={4}>
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
                                  checked={selectedValue === "3"}
                                  onChange={handleChange}
                                  value="3"
                                  name="C"
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
                              label="Cランク"
                            />
                          </div>
                        </GridItem>
                      </GridContainer>
                      <b> 縮尺</b>
                      <GridContainer>
                        <GridItem xs={12} sm={4}>
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
                                  checked={selectedValue2 === "500"}
                                  onChange={handleChange2}
                                  value="500"
                                  name="500"
                                  aria-label="500"
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
                              label="1/500"
                            />
                          </div>
                        </GridItem>
                        <GridItem xs={12} sm={4}>
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
                                  checked={selectedValue2 === "1000"}
                                  onChange={handleChange2}
                                  value="1000"
                                  name="1000"
                                  aria-label="1000"
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
                              label="1/1,000"
                            />
                          </div>
                        </GridItem>
                    </GridContainer>
                  </div>
                  }  
                  <GridContainer>
                    <GridItem xs={12} sm={12}>
                      <GridContainer>
                        <div
                          className={
                            classes.checkboxAndRadio +
                            " " +
                            classes.checkboxAndRadioHorizontal
                          }
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                tabIndex={-1}
                                onClick={() => handleToggle(3)}
                                checkedIcon={
                                  <Check className={classes.checkedIcon} />
                                }
                                icon={<Check className={classes.uncheckedIcon} />}
                                classes={{
                                  checked: classes.checked,
                                  root: classes.checkRoot
                                }}
                              />
                            }
                            classes={{
                              label: classes.label,
                              root: classes.labelRoot
                            }}
                            label="等高線"
                          />
                        </div>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={6}>
                          <CustomInput
                            id=""
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: event => {
                                setInputData3(event.target.value);
                              },
                              placeholder: "1~200",
                              disabled: checked.indexOf(3) < 0
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={1}></GridItem>
                        <GridItem xs={12} sm={5}>
                        <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                        >
                          <InputLabel
                            htmlFor="simple-select"
                            className={classes.selectLabel}
                          >
                            出力形式を選択
                          </InputLabel>
                          <Select
                            MenuProps={{
                              className: classes.selectMenu
                            }}
                            classes={{
                              select: classes.select
                            }}
                            value={simpleSelect3}
                            onChange={handleSimple3}
                              inputProps={{
                              name: "simpleSelect3",
                              id: "simple-select3",
                              disabled: checked.indexOf(3) < 0
                            }}
                          >
                            <MenuItem
                              disabled
                              classes={{
                                root: classes.selectMenuItem
                              }}
                            >
                              出力形式を選択
                            </MenuItem>
                            {
                              selectdata2.map((format) => {
                                return ( 
                                  <MenuItem
                                    key={format}
                                    classes={{
                                      root: classes.selectMenuItem,
                                      selected: classes.selectMenuItemSelected
                                    }}
                                    value={format}
                                  >
                                    {format}
                                  </MenuItem>
                                )
                              })
                            } 
                          </Select> 
                        </FormControl>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12}>
                      <GridContainer>
                        <div
                          className={
                            classes.checkboxAndRadio +
                            " " +
                            classes.checkboxAndRadioHorizontal
                          }
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                tabIndex={-1}
                                onClick={() => handleToggle(4)}
                                checkedIcon={
                                  <Check className={classes.checkedIcon} />
                                }
                                icon={<Check className={classes.uncheckedIcon} />}
                                classes={{
                                  checked: classes.checked,
                                  root: classes.checkRoot
                                }}
                              />
                            }
                            classes={{
                              label: classes.label,
                              root: classes.labelRoot
                            }}
                            label="縦横断図"
                          />
                        </div>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={6}>
                          <CustomInput
                            id=""
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: "1~200",
                              onChange: event => {
                                setInputData4(event.target.value);
                              },
                              disabled: checked.indexOf(4) < 0
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={1}></GridItem>
                        <GridItem xs={12} sm={5}>
                        <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                        >
                          <InputLabel
                            htmlFor="simple-select"
                            className={classes.selectLabel}
                          >
                            出力形式を選択
                          </InputLabel>
                          <Select
                            MenuProps={{
                              className: classes.selectMenu
                            }}
                            classes={{
                              select: classes.select
                            }}
                            value={simpleSelect4}
                            onChange={handleSimple4}
                              inputProps={{
                              name: "simpleSelect4",
                              id: "simple-select4",
                              disabled: checked.indexOf(4) < 0
                            }}
                          >
                            <MenuItem
                              disabled
                              classes={{
                                root: classes.selectMenuItem
                              }}
                            >
                              出力形式を選択
                            </MenuItem>
                            {
                              selectdata3.map((format) => {
                                return ( 
                                  <MenuItem
                                    key={format}
                                    classes={{
                                      root: classes.selectMenuItem,
                                      selected: classes.selectMenuItemSelected
                                    }}
                                    value={format}
                                  >
                                    {format}
                                  </MenuItem>
                                )
                              })
                            } 
                          </Select> 
                        </FormControl>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12}>
                      <GridContainer>
                        <div
                          className={
                            classes.checkboxAndRadio +
                            " " +
                            classes.checkboxAndRadioHorizontal
                          }
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                tabIndex={-1}
                                onClick={() => handleToggle(5)}
                                checkedIcon={
                                  <Check className={classes.checkedIcon} />
                                }
                                icon={<Check className={classes.uncheckedIcon} />}
                                classes={{
                                  checked: classes.checked,
                                  root: classes.checkRoot
                                }}
                              />
                            }
                            classes={{
                              label: classes.label,
                              root: classes.labelRoot
                            }}
                            label="土量計算（メッシュ法）"
                          />
                        </div>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={6}>
                          <CustomInput
                            id=""
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: event => {
                                setInputData5(event.target.value);
                              },
                              placeholder: "1~200",
                              disabled: checked.indexOf(5) < 0
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={1}></GridItem>
                        <GridItem xs={12} sm={5}>
                        <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                        >
                          <InputLabel
                            htmlFor="simple-select"
                            className={classes.selectLabel}
                          >
                            出力形式を選択
                          </InputLabel>
                          <Select
                            MenuProps={{
                              className: classes.selectMenu
                            }}
                            classes={{
                              select: classes.select
                            }}
                            value={simpleSelect5}
                            onChange={handleSimple5}
                              inputProps={{
                              name: "simpleSelect5",
                              id: "simple-select5",
                              disabled: checked.indexOf(5) < 0
                            }}
                          >
                            <MenuItem
                              disabled
                              classes={{
                                root: classes.selectMenuItem
                              }}
                            >
                              出力形式を選択
                            </MenuItem>
                            {
                              selectdata4.map((format) => {
                                return ( 
                                  <MenuItem
                                    key={format}
                                    classes={{
                                      root: classes.selectMenuItem,
                                      selected: classes.selectMenuItemSelected
                                    }}
                                    value={format}
                                  >
                                    {format}
                                  </MenuItem>
                                )
                              })
                            } 
                          </Select> 
                        </FormControl>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12}>
                      <GridContainer>
                        <div
                          className={
                            classes.checkboxAndRadio +
                            " " +
                            classes.checkboxAndRadioHorizontal
                          }
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                tabIndex={-1}
                                onClick={() => handleToggle(6)}
                                checkedIcon={
                                  <Check className={classes.checkedIcon} />
                                }
                                icon={<Check className={classes.uncheckedIcon} />}
                                classes={{
                                  checked: classes.checked,
                                  root: classes.checkRoot
                                }}
                              />
                            }
                            classes={{
                              label: classes.label,
                              root: classes.labelRoot
                            }}
                            label="オルソ画像"
                          />
                        </div>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={6}>
                          <CustomInput
                            id=""
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: event => {
                                setInputData6(event.target.value);
                              },
                              placeholder: "1~200",
                              disabled: checked.indexOf(6) < 0
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={1}></GridItem>
                        <GridItem xs={12} sm={5}>
                        <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                        >
                          <InputLabel
                            htmlFor="simple-select"
                            className={classes.selectLabel}
                          >
                            出力形式を選択
                          </InputLabel>
                          <Select
                            MenuProps={{
                              className: classes.selectMenu
                            }}
                            classes={{
                              select: classes.select
                            }}
                            value={simpleSelect6}
                            onChange={handleSimple6}
                              inputProps={{
                              name: "simpleSelect6",
                              id: "simple-select6",
                              disabled: checked.indexOf(6) < 0
                            }}
                          >
                            <MenuItem
                              disabled
                              classes={{
                                root: classes.selectMenuItem
                              }}
                            >
                              出力形式を選択
                            </MenuItem>
                            {
                              selectdata5.map((format) => {
                                return ( 
                                  <MenuItem
                                    key={format}
                                    classes={{
                                      root: classes.selectMenuItem,
                                      selected: classes.selectMenuItemSelected
                                    }}
                                    value={format}
                                  >
                                    {format}
                                  </MenuItem>
                                )
                              })
                            } 
                          </Select> 
                        </FormControl>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12}>
                      <GridContainer>
                        <div
                          className={
                            classes.checkboxAndRadio +
                            " " +
                            classes.checkboxAndRadioHorizontal
                          }
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                tabIndex={-1}
                                onClick={() => handleToggle(7)}
                                checkedIcon={
                                  <Check className={classes.checkedIcon} />
                                }
                                icon={<Check className={classes.uncheckedIcon} />}
                                classes={{
                                  checked: classes.checked,
                                  root: classes.checkRoot
                                }}
                              />
                            }
                            classes={{
                              label: classes.label,
                              root: classes.labelRoot
                            }}
                            label="簡易精度管理表"
                          />
                        </div>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={6}>
                          <CustomInput
                            id=""
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: event => {
                                setInputData7(event.target.value);
                              },
                              placeholder: "1~200",
                              disabled: checked.indexOf(7) < 0
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={1}></GridItem>
                        <GridItem xs={12} sm={5}>
                        <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                        >
                          <InputLabel
                            htmlFor="simple-select"
                            className={classes.selectLabel}
                          >
                            出力形式を選択
                          </InputLabel>
                          <Select
                            MenuProps={{
                              className: classes.selectMenu
                            }}
                            classes={{
                              select: classes.select
                            }}
                            value={simpleSelect7}
                            onChange={handleSimple7}
                              inputProps={{
                              name: "simpleSelect7",
                              id: "simple-select7",
                              disabled: checked.indexOf(7) < 0
                            }}
                          >
                            <MenuItem
                              disabled
                              classes={{
                                root: classes.selectMenuItem
                              }}
                            >
                              出力形式を選択
                            </MenuItem>
                            {
                              selectdata6.map((format) => {
                                return ( 
                                  <MenuItem
                                    key={format}
                                    classes={{
                                      root: classes.selectMenuItem,
                                      selected: classes.selectMenuItemSelected
                                    }}
                                    value={format}
                                  >
                                    {format}
                                  </MenuItem>
                                )
                              })
                            } 
                          </Select> 
                        </FormControl>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12}>
                      <GridContainer>
                        <div
                          className={
                            classes.checkboxAndRadio +
                            " " +
                            classes.checkboxAndRadioHorizontal
                          }
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                tabIndex={-1}
                                onClick={() => handleToggle(8)}
                                checkedIcon={
                                  <Check className={classes.checkedIcon} />
                                }
                                icon={<Check className={classes.uncheckedIcon} />}
                                classes={{
                                  checked: classes.checked,
                                  root: classes.checkRoot
                                }}
                              />
                            }
                            classes={{
                              label: classes.label,
                              root: classes.labelRoot
                            }}
                            label="公共精度管理表"
                          />
                        </div>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={6}>
                          <CustomInput
                            id=""
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: event => {
                                setInputData8(event.target.value);
                              },
                              placeholder: "1~200",
                              disabled: checked.indexOf(8) < 0
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={1}></GridItem>
                        <GridItem xs={12} sm={5}>
                        <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                        >
                          <InputLabel
                            htmlFor="simple-select"
                            className={classes.selectLabel}
                          >
                            出力形式を選択
                          </InputLabel>
                          <Select
                            MenuProps={{
                              className: classes.selectMenu
                            }}
                            classes={{
                              select: classes.select
                            }}
                            value={simpleSelect8}
                            onChange={handleSimple8}
                              inputProps={{
                              name: "simpleSelect8",
                              id: "simple-select8",
                              disabled: checked.indexOf(8) < 0
                            }}
                          >
                            <MenuItem
                              disabled
                              classes={{
                                root: classes.selectMenuItem
                              }}
                            >
                              出力形式を選択
                            </MenuItem>
                            {
                              selectdata7.map((format) => {
                                return ( 
                                  <MenuItem
                                    key={format}
                                    classes={{
                                      root: classes.selectMenuItem,
                                      selected: classes.selectMenuItemSelected
                                    }}
                                    value={format}
                                  >
                                    {format}
                                  </MenuItem>
                                )
                              })
                            } 
                          </Select> 
                        </FormControl>
                        </GridItem>
                      </GridContainer>
                      <div className={classes.greyline}></div>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={6}>
                      <div className={classes.fullWidthContent}>
                        <div className={classes.leftContent}>小計</div>
                        <div className={classes.rightContent}>{subtotal()}</div>
                      </div>
                      <div className={classes.fullWidthContent}>
                        <div className={classes.leftContent}>消費税</div>
                        <div className={classes.rightContent}>{consumption()}</div>
                      </div>
                      <div className={classes.bitunderline}></div>
                      <div className={classes.fullWidthContent}>
                        <div className={classes.leftContent}>合計</div>
                        <div className={classes.rightContent}>{total()}</div>
                      </div>
                    </GridItem>
                    <GridItem xs={12} sm={1}></GridItem>
                    <GridItem xs={12} sm={5}>
                      <Button onClick={() => setCreateProjectModal(true)} style={{ backgroundColor: "red", padding: "12px 50px" }}>
                        発注する
                      </Button>
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem xs={12} sm={4}>
                  {errorContent}
                </GridItem>
              </GridContainer>
            </div>
          </CardBody>
         
        </Card>
      </div>
  );
}


const mapStateToProps = (state, ownProps) => ({
    user: state.auth.user
})
  
const mapDispatchToProps = ({})
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProposalCreate))