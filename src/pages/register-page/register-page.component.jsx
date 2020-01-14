import React, { PureComponent } from 'react';
import { Card, Typography, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';

import { RegisterForm } from '../../components/register-form';

import './register-page.styles.scss';

class RegisterPage extends PureComponent {
  render() {
    const { Title } = Typography;
    return (
      <div className='register-page'>
        <Card className='register-page__card'>
          <div className='register-page__card__header'>
            <Title level={4}>Register</Title>
            <Button type='link'>
              <Icon
                type='arrow-left'
                className='register-page__card__arrow-left'
              />
              <Link to='/'>Back To Home</Link>
            </Button>
          </div>
          <RegisterForm />
        </Card>
      </div>
    );
  }
}

export default RegisterPage;
