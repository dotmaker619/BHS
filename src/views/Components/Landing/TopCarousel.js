import React from "react";

import image3 from "assets/img/card-3.jpeg";
import logo from "assets/img/auth_logo.png";

import Button from "components/CustomButtons/Button.js";

export default function TopCarousel() {
  return (
    <div style={{ width: "100%", 
                  height: "500px", 
                  backgroundSize: "cover", 
                  backgroundImage: "url(" + image3 + ")",
                  padding: "150px 10%" }}
    > 
      <img src={logo} alt="..." width="400px"/><br /><br />
      <p style={{ fontSize: "22px" }}><b>Simple-Pointは誰でもお⼿軽に</b></p>
      <p style={{ fontSize: "22px" }}><b>点群データの解析を依頼できるWebサービスです</b></p>
      <Button style={{ backgroundColor: "red", color: "white", fontSize: "16px", marginTop: "50px" }}><a href="/auth/register" style={{ color: "white" }}>会員登録はこちら</a></Button>
    </div>
  );
}
