import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
// @material-ui/core components
import * as mainAction from 'redux/actions/main';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

// page components
import ProjectList from "views/Pages/ProjectList.js";
import ProfileUpdate from "views/Pages/ProfileUpdate.js";
import ProposalCreate from "views/Pages/ProjectCreate.js";
import PriceList from "views/Pages/PriceList.js";
import UserList from "views/Pages/UserList.js";

const ClientDashboard = (user) => {
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={9}>
          {user.user.roles[0].id == 2 &&
            <NavPills
              color="rose"
              tabs={[
                {
                  tabButton: "案件一覧",
                  tabContent: (
                    <ProjectList />
                  )
                },
                {
                  tabButton: "案件作成",
                  tabContent: (
                    <ProposalCreate />
                  )
                },
                {
                  tabButton: "登録情報",
                  tabContent: (
                    <ProfileUpdate />
                  )
                }
              ]}
            /> 
          }   
          {user.user.roles[0].id == 1 &&
            <NavPills
              color="rose"
              tabs={[
                {
                  tabButton: "案件一覧",
                  tabContent: (
                    <ProjectList />
                  )
                },
                {
                  tabButton: "アカウント管理",
                  tabContent: (
                    <UserList />                      
                  )
                },
                {
                  tabButton: "料金表編集",
                  tabContent: (
                    <PriceList />
                  )
                },
                {
                  tabButton: "登録情報",
                  tabContent: (
                    <ProfileUpdate />
                  )
                }
              ]}
            /> 
          }  
          {user.user.roles[0].id == 3 &&
            <NavPills
              color="rose"
              tabs={[
                {
                  tabButton: "案件一覧",
                  tabContent: (
                    <ProjectList />
                  )
                },
                {
                  tabButton: "登録情報",
                  tabContent: (
                    <ProfileUpdate />
                  )
                }
              ]}
            /> 
          } 
        </GridItem>
      </GridContainer>
    </div>
  );
}


const mapStateToProps = (state, ownProps) => ({
  user: state.auth.user
})

const mapDispatchToProps = ({
  MiniActive: mainAction.MiniActive
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ClientDashboard))