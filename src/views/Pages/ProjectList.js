import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';

import * as userService from 'services/userService';
import * as projectService from 'services/projectService';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Button1 from "components/CustomButtons/Button1.js";
import Button2 from "components/CustomButtons/Button2.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import styles from "../Components/style/mainStyle";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ProjectList = ({user,history}) => {

    const [asignProjectModal, setAsignProjectModal] = React.useState(false);
    const [deleteProjectModal, setDeleteProjectModal] = React.useState(false);
    const [businessData, setBusinessData] = React.useState([]);

    const orderButtons = [
        { color: "rose", icon: AttachFileOutlinedIcon },
      ].map((prop, key) => {
        return (
          <Button1
            color={prop.color}
            simple
            key={key}
          >
            <prop.icon />
          </Button1>
        );
      });

      const invoiceButtons = [
        { color: "rose", icon: AttachFileOutlinedIcon },
      ].map((prop, key) => {
        return (
          <Button1
            color={prop.color}
            simple
            key={key}
          >
            <prop.icon />
          </Button1>
        );
      });

      const asignButtons = (id) => [
        { color: "rose"},
      ].map((prop, key) => {
        return (
          <Button2
            color={prop.color}
            simple 
            key={key}
            onClick={() => selectAssign(id)}
          >
           割当
          </Button2>
        );
      });

      const selectAssign = (id) => {
        console.log(id);
        setAsignProjectModal(true);
      }
    
      
      const removeProjectsButtons = [
        { color: "rose"},
      ].map((prop, key) => {
        return (
          <Button2
            color={prop.color}
            simple
            key={key}
            style={{ padding: "none" }}
            onClick={(event) => {
              event.stopPropagation()
              setDeleteProjectModal(true)
            }
            }
          >
           削除
          </Button2>
        );
      });
    
    const [projectsTableData, setProjectsTableData] = React.useState([]);

    useEffect(() => {
        projectService.getProjects().then(res => {
            console.log(res.data.projects, user.roles[0].id,  'ddddddddddddddddddd')
            if (res.data.projects){
                setProjectsTableData(res.data.projects.map((project, index) => {
                    switch (user.roles[0].id) {
                        case 1:
                            return [index+1, project.title, project.client.company, project.amount,  project.delivery_date, project.delivery_date, project.status, asignButtons(project.id), removeProjectsButtons,
                            project.id
                          ]
                        case 2:
                            return [index+1, project.title, project.amount, project.delivery_date, project.delivery_date, orderButtons, invoiceButtons, project.status,
                           project.id, 
                          ]
                        case 3:
                            return [index+1, project.title, project.delivery_date, project.delivery_date, project.status,
                           project.id
                          ]
                        default:
                            break;
                    }
                }))
            }
            else {
            console.log('error');
            }
        });

        userService.getBusinesspeople().then(result => {
          console.log(result.data, 'businesses')
          if(result.data.businesses){
            setBusinessData(result.data.businesses.map((businessman, key) => {
              return[key+1, businessman.name]
            }))
          }
          else{
            console.log('error');
          }

        });
    }, [])

    const classes = useStyles();

    return (
        <div>
            <Dialog
              open={asignProjectModal}
              TransitionComponent={Transition}
              onClose={() => setAsignProjectModal(false)}
            >
              <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
                style={{ borderBottom: "1px solid lightgrey" }}
              >
                <h4><b>割当アカウントを選択してください</b></h4>
              </DialogTitle>
              <DialogContent
                id="classic-modal-slide-description"
                style={{ padding: "0 24px 16px 24px" }}
              >
                {/* {businessData} */}
                {businessData.map((arr, key) => {
                  return (
                  <GridContainer justify="center" key={key} style={{borderBottom: "1px solid lightgrey"}}>
                    <GridItem xs={12} sm={6} style={{ display: "flex", alignItems: "center" }}><span>{arr[1]}</span></GridItem>
                    <GridItem xs={12} sm={6}>
                      <Button1 style={{ backgroundColor: "red", margin: "10px 0" }} 
                        // onClick={() => setClassicModal1(true)}
                      >
                        アカウント発行
                      </Button1>
                    </GridItem>
                  </GridContainer>  
                )}
                )}
              </DialogContent>
            </Dialog>

            <Dialog
              classes={{
                root: classes.center + " " + classes.modalRoot,
                paper: classes.modal
              }}
              open={deleteProjectModal}
              TransitionComponent={Transition}
              keepMounted
              onClose={() => setDeleteProjectModal(false)}
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
                  onClick={() => setDeleteProjectModal(false)}
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
                  
            <Card>
                <CardBody>
                    {user.roles[0].id == 3 && 
                        <Table
                            className={ classes.fontSize }
                            tableHeaderColor="primary"
                            tableHead={["No", "案件名", "発注日", "目安納品日", "ステータス"]}
                            tableData={projectsTableData}
                            coloredColls={[4]}
                            onRowClick={(rowData) => {
                              history.push("/admin/projectdetail/" + rowData[5] + "");
                            }}
                            colorsColls={["primary"]}
                        />
                    }
                    {user.roles[0].id == 2 && 
                         <Table
                            className={ classes.fontSize }
                            tableHeaderColor="primary"
                            tableHead={["No", "案件名", "発注金額", "発注日", "目安納品日", "発注請書", "請求書", "ステータス"]}
                            tableData={projectsTableData}
                            coloredColls={[7]}
                            onRowClick={(rowData) => {
                              history.push("/admin/projectdetail/" + rowData[8] + "");
                            }}
                            colorsColls={["primary"]}
                       />
                    }
                    {user.roles[0].id == 1 && 
                         <Table
                            className={ classes.fontSize }
                            tableHeaderColor="primary"
                            tableHead={["No", "案件名", "発注企業", "発注金額", "発注日", "目安納品日", "ステータス", "割当", "削除"]}
                            tableData={projectsTableData}
                            coloredColls={[6]}
                            onRowClick={(rowData) => {
                              history.push("/admin/projectdetail/" + rowData[9] + "");
                            }}
                            colorsColls={["primary"]}
                       />
                    }
                </CardBody>
            </Card>
        </div>
    );
}


const mapStateToProps = (state, ownProps) => ({
    user: state.auth.user
})
  
const mapDispatchToProps = ({})
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProjectList))