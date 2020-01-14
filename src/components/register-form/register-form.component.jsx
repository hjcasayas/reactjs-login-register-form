import React, { PureComponent } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

class registerform extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      confirmDirty: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        this.props.form.resetFields();
      }
    });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;

    if (value && value !== form.getFieldValue('password')) {
      callback('Passwords does not match!');
    } else {
      callback();
    }
  };

  compareToNextPassword = (rule, value, callback) => {
    const { form } = this.props;

    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    } else {
      callback();
    }
  };

  handleConfirmBlur = e => {
    const { value } = e.target;

    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  render() {
    console.log(this.props);
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className='register-form' onSubmit={this.handleSubmit}>
        {/* EMAIL */}
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please input a valid email' }
            ]
          })(
            <Input
              prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Email'
              size='large'
            />
          )}
        </Form.Item>

        {/* PASSWORD */}
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
                validator: this.compareToFirstPassword
              }
            ]
          })(
            <Input.Password
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Password'
              size='large'
            />
          )}
        </Form.Item>

        {/* CONFIRM PASSWORD */}
        <Form.Item>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
                validator: this.compareToFirstPassword
              }
            ]
          })(
            <Input.Password
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Confirm Password'
              size='large'
              onBlur={this.handleConfirmBlur}
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' size='large' block>
            Register
          </Button>
          <Button htmlType='button' type='link' size='large' block>
            <Link to='/login'>Sign In</Link>
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const Registerform = Form.create({ name: 'register-form' })(registerform);

export default Registerform;
