import React from "react";
import mn from "./assets/mn.jpg";
import baidu from "./assets/baidu.png";

import("./style/format.less");

export default function App() {
  return (
    <div>
      <h1>这是一个页面!!</h1>
      <div className="card">卡片宽度正好是页面宽度</div>
      <img src={baidu} alt="" />
      <img src={mn} alt="" />
    </div>
  );
}
