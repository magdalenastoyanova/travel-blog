  import React, {useContext}  from "react";
  import { AuthProvider } from '../firebase/AuthProvider'
  import { Form, Input, Button } from 'antd';
  
  const SignUp = () => {
 
    
  

  return (
    <Form  name="basic">
      <Form.Item label="Email" name="username" >
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password" >
        <Input.Password />
      </Form.Item>

      <Form.Item label="Repeat Password" name="rePassword" >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button  type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
