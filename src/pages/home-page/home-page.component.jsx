import React from 'react';
import { Typography, Button } from 'antd';
import { Link } from 'react-router-dom';

import './home-page.styles.scss';

const HomePage = () => {
  const { Title, Text } = Typography;

  return (
    <div className='home-page'>
      <Title>Welcome!</Title>
      <Text className='text' strong>
        To ReactJS Sign In and Registration Form Demo
      </Text>
      <div className='home-page__button-container'>
        <Button.Group size='large'>
          <Button type='primary'>
            <Link to='/login'>Sign In</Link>
          </Button>
          <Button type='default'>
            <Link to='/register'>Register</Link>
          </Button>
        </Button.Group>
      </div>
    </div>
  );
};

export default HomePage;
