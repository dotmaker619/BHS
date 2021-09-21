import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
// @material-ui/core components

import LandingFooter  from "views/Components/Landing/LandingFooter";
import TopHeader from "views/Components/Landing/TopHeader.js";
import TopCarousel from "views/Components/Landing/TopCarousel.js";
import ContactForm from "views/Components/Landing/ContactForms.js";
import Activity from "views/Components/Landing/Activity.js";
import Feature from "views/Components/Landing/Feature.js";
import Output from "views/Components/Landing/Output.js";
import Workflow from "views/Components/Landing/Workflow.js";
import Faq from "views/Components/Landing/Faq.js";


const Landing = (user, props) => {
    const { ...rest } = props;
    return (
        <div>
            <TopHeader />
            <TopCarousel />
            <Feature id="feature" />
            <Output id="output" />
            <Workflow id="workflow" />
            <Activity id="activity" />
            <Faq id="faq" />
            <ContactForm id="contact" />
            <LandingFooter />
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    user: state.auth.user
  })
  
  const mapDispatchToProps = ({

  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Landing))