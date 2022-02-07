import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {
  Button,
  Layout,
  Menu
} from 'antd';
import './App.css';
import { Form, Input, Checkbox } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { PostsList } from './features/posts/PostsList';
import { AddPostForm } from './features/posts/AddPostForm';
import { SinglePostPage } from './features/posts/SinglePostPage'


const { Header, Footer, Content } = Layout;

const App = () => (
  <Router>
    <Layout className="App">

      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key={1}><Link to="/">Home</Link> </Menu.Item>
          <Menu.Item key={2}><Link to="/login">Login</Link> </Menu.Item>
          <Menu.Item key={3}><Link to="/register">Registrarse</Link> </Menu.Item>
        </Menu>
      </Header>

      <Content>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/posts/:postId" children={SinglePostPage} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Content>

      <Footer>Pie de página</Footer>
    </Layout>
  </Router>
);

function Login() {
  return (
    <div className='login-canvas'>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
      // onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            { type: 'email', message: 'No es una direccion de email valida!' },
            { required: true, message: 'Por favor ingrese su dirección de email!' }
          ]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Por favor ingrese su contraseña!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Contraseña"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Recuerdame</Checkbox>
          </Form.Item>
          <Form.Item>
            <Link to="/forgot-password">
              Olvide mi contraseña
            </Link>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
        <Form.Item>
          O <Link to="/register">Registrarse</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

function Register() {
  return (
    <div><h2>Register</h2></div>
  );
};

function Home() {
  return (
    <div>
      <AddPostForm />
      <PostsList />
    </div>
  );
}
export default App;