import React from 'react'
import { Form, Input, Button, Radio, Checkbox, Row, Col,Select } from 'antd';
export const SignupForm = () => {
    return (
        <div className="sign-up-form">
            <h1>Start Your Application</h1>
            *Denote a Re1quired Field
            <Form
      layout="vertical"
    >
      <Row gutter={24} style={{ marginTop: '40px' }}>
        <Col span={12}>
        <Form.Item label="First Name">
          <Input />
        </Form.Item>
      </Col>
      <Col span={12}>
      <Form.Item label="Last Name">
          <Input />
        </Form.Item>
      </Col>
      </Row>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>
      {/* Captcha is Remaining */}
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
          Log in
        </Button>
      </Form.Item>
      <p style={{ textAlign:'center' }}>By creating your you are agreeing to the <a href="#">Terms and Condition</a> and <a href="#">Privacy Policy</a></p>
    </Form>
        </div>
    )
}
