import React, { useEffect,useState } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import FormLabel from "@material-ui/core/FormLabel";
import Button1 from "components/CustomButtons/Button1.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomInput1 from "components/CustomInput/CustomInput1.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import styles from "../Components/style/mainStyle";

const useStyles = makeStyles(styles);

const PriceList = () => {
  
  const [firstValue, setFirstValue] = React.useState(100);
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");

  const displayValue = () => {
    console.log("firstValue", firstValue);
  }

  const classes = useStyles();

  return (
      <div>      
          <Card className={classes[cardAnimaton]}>
              <CardHeader
                style={{borderBottom: "1px solid lightgrey"}}
              >
              <GridContainer justify="center">
                <GridItem xs={12} sm={3} className={classes.textAlign}>項目名</GridItem>
                <GridItem xs={12} sm={4} className={classes.textAlign}>金額</GridItem>
                <GridItem xs={12} sm={5} className={classes.textAlign}>作業期間</GridItem>
              </GridContainer>
              </CardHeader>
              <CardBody>
              <GridContainer justify="center" style={{borderBottom: "1px solid lightgrey", margin: "0 0 20px -15px"}}>
                <GridItem xs={12} sm={2} className={classes.textAlign}>グラウンドデータ(DTM)</GridItem>
                <GridItem xs={12} sm={5}>
                  <GridContainer>
                    <GridItem xs={12} sm={3}></GridItem>
                    <GridItem xs={12} sm={5}>
                      <CustomInput1
                        id="placeholder"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "円/ha",
                          value: firstValue,
                          onChange: event => {
                            setFirstValue(event.target.value);
                          },
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={classes.labelHorizontal1}>
                        円/ha
                      </FormLabel>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={3}></GridItem>
                    <GridItem xs={12} sm={5}>
                      <CustomInput1
                        id="placeholder"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "円(基本料金)"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={classes.labelHorizontal1}>
                        円(基本料金)
                      </FormLabel>
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem xs={12} sm={5}>
                  <GridContainer>
                    <GridItem xs={12} sm={9}>
                      <GridContainer>
                        <GridItem xs={12} sm={7}>
                          <CustomInput1
                            id="placeholder"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: "営業日/〜20ha"
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={5}>
                          <FormLabel className={classes.labelHorizontal1}>
                            営業日/〜20ha
                          </FormLabel>
                        </GridItem>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={7}>
                          <CustomInput1
                            id="placeholder"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: "営業日/10ha"
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={5}>
                          <FormLabel className={classes.labelHorizontal1}>
                            営業日/10ha
                          </FormLabel>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                    <GridItem xs={12} sm={3}>
                      <Button1 style={{ backgroundColor: "red" }} onClick={displayValue}> 
                        変更
                      </Button1>
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center" style={{borderBottom: "1px solid lightgrey", margin: "0 0 20px -15px"}}>
                <GridItem xs={12} sm={2} className={classes.textAlign}>簡易図化(一般図)</GridItem>
                <GridItem xs={12} sm={5}>
                  <GridContainer>
                    <GridItem xs={12} sm={3}>
                      <FormLabel className={classes.labelHorizontal1}>
                        図化対象
                      </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={5}>
                      <CustomInput1
                        id="placeholder"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "円/ha(Aランク)"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={classes.labelHorizontal1}>
                        円/ha(Aランク)
                      </FormLabel>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={3}></GridItem>
                    <GridItem xs={12} sm={5}>
                      <CustomInput1
                        id="placeholder"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "円/ha(Bランク)"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={classes.labelHorizontal1}>
                        円/ha(Bランク)
                      </FormLabel>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={3}></GridItem>
                    <GridItem xs={12} sm={5}>
                      <CustomInput1
                        id="placeholder"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "円/ha(Cランク)"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={classes.labelHorizontal1}>
                        円/ha(Cランク)
                      </FormLabel>
                    </GridItem>
                  </GridContainer>		
                  <GridContainer>
                    <GridItem xs={12} sm={3}>
                      <FormLabel className={classes.labelHorizontal1}>
                        縮尺
                      </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={5}>
                      <CustomInput1
                        id="placeholder"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "円/ha(レベル500)"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={classes.labelHorizontal1}>
                        円/ha(レベル500)
                      </FormLabel>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={3}></GridItem>
                    <GridItem xs={12} sm={5}>
                      <CustomInput1
                        id="placeholder"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "円/ha(レベル1000)"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={classes.labelHorizontal1}>
                        円/ha(レベル1000)
                      </FormLabel>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={3}>
                      <FormLabel className={classes.labelHorizontal1}>
                        基本料金
                      </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={5}>
                      <CustomInput1
                        id="placeholder"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "円(基本料金)"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={classes.labelHorizontal1}>
                        円(基本料金)
                      </FormLabel>
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem xs={12} sm={5}>
                  <GridContainer>
                    <GridItem xs={12} sm={9}>
                      <GridContainer>
                        <GridItem xs={12} sm={8}>
                          <CustomInput1
                            id="placeholder"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: "営業日/50ha"
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={4}>
                          <FormLabel className={classes.labelHorizontal1}>
                            営業日/50ha
                          </FormLabel>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                    <GridItem xs={12} sm={3}>
                      <Button1 style={{ backgroundColor: "red" }}>
                        変更
                      </Button1>
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center" style={{borderBottom: "1px solid lightgrey", margin: "0 0 20px -15px"}}>
                <GridItem xs={12} sm={2} className={classes.textAlign}>等高線</GridItem>
                <GridItem xs={12} sm={5}>
                  <GridContainer>
                    <GridItem xs={12} sm={3}></GridItem>
                    <GridItem xs={12} sm={5}>
                      <CustomInput1
                        id="placeholder"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "円/ha"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={classes.labelHorizontal1}>
                        円/ha
                      </FormLabel>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={3}></GridItem>
                    <GridItem xs={12} sm={5}>
                      <CustomInput1
                        id="placeholder"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "円(基本料金)"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={classes.labelHorizontal1}>
                        円(基本料金)
                      </FormLabel>
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem xs={12} sm={5}>
                  <GridContainer>
                    <GridItem xs={12} sm={9}>
                      <GridContainer>
                        <GridItem xs={12} sm={7}>
                          <CustomInput1
                            id="placeholder"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: "営業日/〜20ha"
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={5}>
                          <FormLabel className={classes.labelHorizontal1}>
                            営業日/〜20ha
                          </FormLabel>
                        </GridItem>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={7}>
                          <CustomInput1
                            id="placeholder"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: "営業日/10ha"
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={5}>
                          <FormLabel className={classes.labelHorizontal1}>
                            営業日/10ha
                          </FormLabel>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                    <GridItem xs={12} sm={3}>
                      <Button1 style={{ backgroundColor: "red" }}>
                        変更
                      </Button1>
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer> 
              <GridContainer justify="center" style={{borderBottom: "1px solid lightgrey", margin: "0 0 20px -15px"}}>
                <GridItem xs={12} sm={2} className={classes.textAlign}>縦横断図</GridItem>
                <GridItem xs={12} sm={5}>
                  <GridContainer>
                    <GridItem xs={12} sm={3}></GridItem>
                    <GridItem xs={12} sm={5}>
                      <CustomInput1
                        id="placeholder"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "円/本"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={classes.labelHorizontal1}>
                        円/本
                      </FormLabel>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={3}></GridItem>
                    <GridItem xs={12} sm={5}>
                      <CustomInput1
                        id="placeholder"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "円(基本料金)"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={classes.labelHorizontal1}>
                        円(基本料金)
                      </FormLabel>
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem xs={12} sm={5}>
                  <GridContainer>
                    <GridItem xs={12} sm={9}>
                      <GridContainer>
                        <GridItem xs={12} sm={7}>
                          <CustomInput1
                            id="placeholder"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: "営業日/40本"
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={5}>
                          <FormLabel className={classes.labelHorizontal1}>
                            営業日/40本
                          </FormLabel>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                    <GridItem xs={12} sm={3}>
                      <Button1 style={{ backgroundColor: "red" }}>
                        変更
                      </Button1>
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer> 
              <GridContainer justify="center" style={{borderBottom: "1px solid lightgrey", margin: "0 0 20px -15px"}}>
                <GridItem xs={12} sm={2} className={classes.textAlign}>土量計算（メッシュ法）</GridItem>
                <GridItem xs={12} sm={5}>
                  <GridContainer>
                    <GridItem xs={12} sm={3}></GridItem>
                    <GridItem xs={12} sm={5}>
                      <CustomInput1
                        id="placeholder"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "円"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={classes.labelHorizontal1}>
                        円
                      </FormLabel>
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem xs={12} sm={5}>
                  <GridContainer>
                    <GridItem xs={12} sm={9}>
                      <GridContainer>
                        <GridItem xs={12} sm={7}>
                          <CustomInput1
                            id="placeholder"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: "営業日/式"
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={5}>
                          <FormLabel className={classes.labelHorizontal1}>
                            営業日/式
                          </FormLabel>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                    <GridItem xs={12} sm={3}>
                      <Button1 style={{ backgroundColor: "red" }}>
                        変更
                      </Button1>
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center" style={{borderBottom: "1px solid lightgrey", margin: "0 0 20px -15px"}}>
                <GridItem xs={12} sm={2} className={classes.textAlign}>オルソ画像</GridItem>
                <GridItem xs={12} sm={5}>
                  <GridContainer>
                    <GridItem xs={12} sm={3}></GridItem>
                    <GridItem xs={12} sm={5}>
                      <CustomInput1
                        id="placeholder"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "円"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={classes.labelHorizontal1}>
                        円
                      </FormLabel>
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem xs={12} sm={5}>
                  <GridContainer>
                    <GridItem xs={12} sm={9}>
                      <GridContainer>
                        <GridItem xs={12} sm={7}>
                          <CustomInput1
                            id="placeholder"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: "営業日/式"
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={5}>
                          <FormLabel className={classes.labelHorizontal1}>
                            営業日/式
                          </FormLabel>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                    <GridItem xs={12} sm={3}>
                      <Button1 style={{ backgroundColor: "red" }}>
                        変更
                      </Button1>
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center" style={{borderBottom: "1px solid lightgrey", margin: "0 0 20px -15px"}}>
                <GridItem xs={12} sm={2} className={classes.textAlign}>簡易精度管理表</GridItem>
                <GridItem xs={12} sm={5}>
                  <GridContainer>
                    <GridItem xs={12} sm={3}></GridItem>
                    <GridItem xs={12} sm={5}>
                      <CustomInput1
                        id="placeholder"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "円"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={classes.labelHorizontal1}>
                        円
                      </FormLabel>
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem xs={12} sm={5}>
                  <GridContainer>
                    <GridItem xs={12} sm={9}>
                      <GridContainer>
                        <GridItem xs={12} sm={7}>
                          <CustomInput1
                            id="placeholder"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: "営業日/式"
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={5}>
                          <FormLabel className={classes.labelHorizontal1}>
                            営業日/式
                          </FormLabel>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                    <GridItem xs={12} sm={3}>
                      <Button1 style={{ backgroundColor: "red" }}>
                        変更
                      </Button1>
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center" style={{borderBottom: "1px solid lightgrey", margin: "0 0 20px -15px"}}>
                <GridItem xs={12} sm={2} className={classes.textAlign}>公共精度管理表</GridItem>
                <GridItem xs={12} sm={5}>
                  <GridContainer>
                    <GridItem xs={12} sm={3}></GridItem>
                    <GridItem xs={12} sm={5}>
                      <CustomInput1
                        id="placeholder"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "円"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={classes.labelHorizontal1}>
                        円
                      </FormLabel>
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem xs={12} sm={5}>
                  <GridContainer>
                    <GridItem xs={12} sm={9}>
                      <GridContainer>
                        <GridItem xs={12} sm={7}>
                          <CustomInput1
                            id="placeholder"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: "営業日/式"
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={5}>
                          <FormLabel className={classes.labelHorizontal1}>
                            営業日/式
                          </FormLabel>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                    <GridItem xs={12} sm={3}>
                      <Button1 style={{ backgroundColor: "red" }}>
                        変更
                      </Button1>
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>                               
            </CardBody>
          </Card>      
      </div>
  );
}


const mapStateToProps = (state, ownProps) => ({
    user: state.auth.user
})
  
const mapDispatchToProps = ({})
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PriceList))