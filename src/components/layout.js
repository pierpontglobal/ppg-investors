/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { Table, Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import logo from "../images/light.svg"
import styled from "styled-components"

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const Logo = styled.div`
width: 100%;
background-image: url(${logo});
background-repeat: no-repeat;
background-position: center;
background-size: 60%;
height: 100px;
`;

const LayoutMain = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}>
          <Logo src={logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="bank" />
              <span>Investments</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="rollback" />
              <span>Return to hub</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="logout" />
              <span>Logout</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <div
          style={{
            overflow: 'auto',
            width: '100%',
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
      </ Layout>
    </>
  )
}

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutMain;
