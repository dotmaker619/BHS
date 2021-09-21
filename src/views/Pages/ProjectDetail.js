import React from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import Statusline from "views/Components/Statusline.js";
import TimelineContent from "views/Components/TimelineContent.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const ProjectDetail = () => {
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={9}>
          <a href="/admin/dashboard/">
            <i className="fas fa-angle-left"></i>
            <b>キャンセル</b>
          </a>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={9}>
            <Statusline /> 
            <TimelineContent /> 
        </GridItem>
      </GridContainer>
    </div>
  );
}


const mapStateToProps = () => ({})

const mapDispatchToProps = ({})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProjectDetail))