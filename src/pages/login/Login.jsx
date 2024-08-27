import React, { useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "@/api/index";
import { useNavigate } from "react-router-dom";
import { reducer } from "@/context/reducer";
import { useStateValue } from "@/context";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [state, dispatch] = useStateValue();
  const handleLogin = (values) => {
    setLoading(true);

    axios
      .post("/auth/login", values)
      .then((res) => {
        console.log(res.data),
          messageApi.success("Registrasiya Muvaffaqiyatli bo'ldi!");
        dispatch({ type: "LOGIN", payload: res.data.token });
        navigate("/");
      })

      .catch((err) => {
        console.log(err), messageApi.error("Login yoki Parol Xato!");
      })
      .finally(setLoading(false));
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      {contextHolder}
      <div className=" w-[400px]">
        <h3 className="text-center text-3xl mb-3">Login</h3>
        <Form
          className=""
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={handleLogin}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            initialValue={"emilys"}
            rules={[
              {
                required: true,
                message: "Ism kiriting!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            initialValue={"emilyspass"}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button className="w-full" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
