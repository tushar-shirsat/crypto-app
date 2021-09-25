import React from "react";
import { Navbar } from ".";
import { Layout, Typography , Space } from "antd";
import "antd/dist/antd.css";
import Link from "next/link";


const Layouts = ({ children }) => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">{children}</div>
        </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          Copyright © 2021
           <Link href="/">
            <a >Cryptoverse Inc.</a>
          </Link><br/>
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/exchanges">
            <a >Exchanges</a>
          </Link>
          <Link href="/news">
            <a >News</a>
          </Link>
        </Space>
      </div>
      </div>
    </div>
  );
};

export default Layouts;
