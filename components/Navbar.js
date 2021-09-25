import { Button, Menu, Typography, Avatar } from "antd";
import Link from "next/link";
import {
  HomeOutlined,
  FundOutlined,
  MenuOutlined,
  BulbOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 760) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar
          src="https://images.unsplash.com/photo-1625207970742-d2777655d440?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyeXB0b2N1cnJlbmN5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          size="large"
        />
        <Typography.Title level={2} className="logo">
          <Link href="/">
            <a>cryptoverse</a>
          </Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />} key={321}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />} key={32}>
            <Link href="/crypocurrencies">
              <a>Crypocurrencies</a>
            </Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />} key={6}>
            <Link href="/exchanges">
              <a>Exchanges</a>
            </Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />} key={5}>
            <Link href="/news">
              <a>News</a>
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
