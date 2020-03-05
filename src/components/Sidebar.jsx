import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import './Sidebar.css'
import Clist from './Clist'
import Trans from './Transfer'




import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
var cc=[
    {dep:"CS", no:101,name:"intro to CS"},
    {dep:"CS", no:102,name:"data structure"},
    {dep:"CS", no:103,name:"programing langs"},
    {dep:"MATH", no:101,name:"intro to Math"},
    {dep:"MATH", no:102,name:"calculus"},
    {dep:"MATH", no:103,name:"linear algebra"},
    {dep:"ENG", no:101,name:"intro to ENG"},
    {dep:"ENG", no:102,name:"grammar"},
    {dep:"ENG", no:103,name:"writing fiction"}

]


export default class Sidebar extends React.Component {
  state = {
    collapsed: false,
    showing:<Clist {...cc}/>
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <PieChartOutlined />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={this.setState({showing:<Trans/>})}>
              <DesktopOutlined />
              
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <UserOutlined />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <TeamOutlined />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <FileOutlined />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {this.state.showing}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Bellevue College</Footer>
        </Layout>
      </Layout>
    );
  }
}

