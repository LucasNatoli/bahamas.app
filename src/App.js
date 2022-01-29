import React from 'react';
import './App.css';
import { Breadcrumb, Button, Layout, Menu, Space, Spin, Typography } from 'antd';
const { Header, Footer, Content } = Layout;
const { Text, Link } = Typography;

const App = () => (
  <Layout className="App">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key={1}>Register</Menu.Item>
        <Menu.Item key={2}>Login</Menu.Item>
        {/* {new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })} */}
      </Menu>

    </Header>
    <Content>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>

      <div className="example">
        <Spin />
      </div>

      <Space direction="vertical">
        <Text>Default Text</Text>
      </Space>

      <Button type="link">Click!</Button>
      <Link href="https://ant.design" target="_blank">
        Link!
      </Link>

    </Content>
    <Footer>Footer</Footer>
  </Layout>


);

export default App;