import React from "react";

import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button1 from "components/CustomButtons/Button1.js";
import logo from "assets/img/auth_logo.png";

import styles from "../style/mainStyle.js";

const useStyles = makeStyles(styles);

const TopHeader = (history) => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const classes = useStyles();
  
  return (
    <div className={classes.topbar}>
      <div className={classes.alignLeft}>
        <img src={logo} alt="..." width="100%" style={{ cursor: "pointer" }} onClick={scrollToTop}/>
      </div>
      <div className={classes.alignRight}>
        <a href="/auth/login" style={{ color: "red" }}>
          <Button1
          style={{ backgroundColor: "white", 
                    color: "red", 
                    border: "1px solid red", 
                    marginLeft: "20px",
                    
                  }} 
          >
            ログイン
          </Button1>
        </a>
        <a href="/auth/register" style={{ color: "white" }}>
          <Button1 
          style={{ backgroundColor: "red" }} 
          >
          会員登録
          </Button1>
        </a>
        <span style={{ padding: "14px", fontWeight: "bold", fontSize: "16px" }}><i className="fas fa-phone"></i> 03-6822-8754</span>
        <ul>
            <li className={classes.navitem}>
              <Link
                activeClass="active"
                to="feature"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span style={{ color: "black", fontSize: "12px" }}>特徴</span>
              </Link>
            </li>
            <li className={classes.navitem}>
              <Link
                activeClass="active"
                to="output"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span style={{ color: "black", fontSize: "12px" }}>機能</span>
              </Link>
            </li>
            <li className={classes.navitem}>
              <Link
                activeClass="active"
                to="workflow"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span style={{ color: "black", fontSize: "12px" }}>ワークフロー</span>
              </Link>
            </li>
            <li className={classes.navitem}>
              <Link
                activeClass="active"
                to="activity"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span style={{ color: "black", fontSize: "12px" }}>活⽤例</span>
              </Link>
            </li>
            <li className={classes.navitem}>
              <Link
                activeClass="active"
                to="faq"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span style={{ color: "black", fontSize: "12px" }}>Q＆A</span>
              </Link>
            </li>
            <li className={classes.navitem}>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span style={{ color: "black", fontSize: "12px" }}>お問い合わせ</span>
              </Link>
            </li>
          </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  
})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopHeader))