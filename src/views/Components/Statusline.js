import React from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import * as projectService from 'services/projectService';

import Card from "components/Card/Card.js";
import styles from "./style/mainStyle.js";

const useStyles = makeStyles(styles);

const Statusline = () => {

  const [projectstatus, setProjectStatus] = React.useState([]);
  let path = window.location.pathname;
  let id = path.slice(21);
  projectService.getProjects().then(res => {
    let obj = res.data.projects.find(o => o.id == id);
    setProjectStatus(obj.status);
  });

  const classes = useStyles();

  return (
    <div>
      <Card>
        {projectstatus == '作業前' &&
          <div className={classes.statusTitle}>
              <div className={classes.tiltleRedText}>作業前</div>
              <div className={classes.tiltleGreyText}>作業中</div>
              <div className={classes.tiltleGreyText}>検収中</div>
              <div>完了</div>
          </div>
        }
        {projectstatus == '作業中' &&
          <div className={classes.statusTitle}>
              <div className={classes.tiltleRedText}>作業前</div>
              <div className={classes.tiltleRedText}>作業中</div>
              <div className={classes.tiltleGreyText}>検収中</div>
              <div>完了</div>
          </div>
        }
        {projectstatus == '納品中' &&
          <div className={classes.statusTitle}>
              <div className={classes.tiltleRedText}>作業前</div>
              <div className={classes.tiltleRedText}>作業中</div>
              <div className={classes.tiltleGreyText}>検収中</div>
              <div>完了</div>
          </div>
        }
        {projectstatus == '検収中' &&
          <div className={classes.statusTitle}>
              <div className={classes.tiltleRedText}>作業前</div>
              <div className={classes.tiltleRedText}>作業中</div>
              <div className={classes.tiltleRedText}>検収中</div>
              <div>完了</div>
          </div>
        }
        {projectstatus == '完了' &&
          <div className={classes.statusTitle}>
              <div className={classes.tiltleRedText}>作業前</div>
              <div className={classes.tiltleRedText}>作業中</div>
              <div className={classes.tiltleRedText}>検収中</div>
              <div style={{ color: "red" }}>完了</div>
          </div>
        }
        {projectstatus == '作業前' &&
          <div className={classes.proposalTimeline}>
             <div className={classes.firstgreyTimeline}>
                 <div className={classes.roundredstatus}></div>
             </div>
             <div className={classes.secondgreyTimeline}>
                <div className={classes.roundgreystatus}></div>
             </div>
             <div className={classes.thirdgreyTimeline}>
                <div className={classes.roundgreystatus}></div>
             </div>
             <div className={classes.roundgreystatus}></div>
          </div>
        }
        {projectstatus == '作業中' &&
          <div className={classes.proposalTimeline}>
             <div className={classes.firstredTimeline}>
                 <div className={classes.roundredstatus}></div>
             </div>
             <div className={classes.secondgreyTimeline}>
                <div className={classes.roundredstatus}></div>
             </div>
             <div className={classes.thirdgreyTimeline}>
                <div className={classes.roundgreystatus}></div>
             </div>
             <div className={classes.roundgreystatus}></div>
          </div>
        }
        {projectstatus == '納品中' &&
          <div className={classes.proposalTimeline}>
             <div className={classes.firstredTimeline}>
                 <div className={classes.roundredstatus}></div>
             </div>
             <div className={classes.secondgreyTimeline}>
                <div className={classes.roundredstatus}></div>
             </div>
             <div className={classes.thirdgreyTimeline}>
                <div className={classes.roundgreystatus}></div>
             </div>
             <div className={classes.roundgreystatus}></div>
          </div>
        }
        {projectstatus == '検収中' &&
          <div className={classes.proposalTimeline}>
             <div className={classes.firstredTimeline}>
                 <div className={classes.roundredstatus}></div>
             </div>
             <div className={classes.secondredTimeline}>
                <div className={classes.roundredstatus}></div>
             </div>
             <div className={classes.thirdgreyTimeline}>
                <div className={classes.roundredstatus}></div>
             </div>
             <div className={classes.roundgreystatus}></div>
          </div>
        }
        {projectstatus == '完了' &&
          <div className={classes.proposalTimeline}>
             <div className={classes.firstredTimeline}>
                 <div className={classes.roundredstatus}></div>
             </div>
             <div className={classes.secondredTimeline}>
                <div className={classes.roundredstatus}></div>
             </div>
             <div className={classes.thirdredTimeline}>
                <div className={classes.roundredstatus}></div>
             </div>
             <div className={classes.roundredstatus}></div>
          </div>
        }
      </Card>
    </div>
  );
}


const mapStateToProps = () => ({})

const mapDispatchToProps = ({})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Statusline))