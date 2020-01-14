import React, { PureComponent } from 'react';
import { Card, Typography, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';

import { LoginForm } from '../../components/login-form';

import './login-page.styles.scss';

class LoginPage extends PureComponent {
  render() {
    const { Title } = Typography;
    return (
      <div className='login-page'>
        <Card className='login-page__card'>
          <div className='login-page__card__header'>
            <Title level={4}>SIGN IN</Title>
            <Button type='link'>
              <Icon
                type='arrow-left'
                className='login-page__card__arrow-left'
              />
              <Link to='/'>Back To Home</Link>
            </Button>
          </div>
          <LoginForm />
        </Card>
      </div>
    );
  }
}

export default LoginPage;
