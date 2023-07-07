import React from "react";
import "./ContactUs.css";
import imgBackgroud from "../images/Group 8.png";
import { Button, Form, Input, InputNumber } from "antd";
import imgInput from "../images/BG.png";
import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


export default function ContactUs() {
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values) => {
    swal({
      icon: 'error',
      type: 'error',
      title: 'Oops...',
      text: 'The server is under maintenance, please contact us by phone or email for support!',
      footer: '<a href="">Why do I have this issue?</a>',
      className: 'title-err'
    });
  };
  return (
    <>
      <div>
        <img src={imgBackgroud} alt="" className="w-100" />
      </div>
      <div className="container container-contactus ">
        <div className="row">
          <div className="col-10 m-auto">
            <Form
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <div className="row">
                <div className="col-6 container-input">
                  <h1 className="mt-5 mb-5">CONTACT US</h1>
                  <p className="mb-5">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>

                  <div className="row input-contactus">
                    <div className="col-6">
                      <label>
                        Name <span className="text-danger">*</span>
                      </label>
                      <Form.Item
                        name={["user", "name"]}
                        rules={[{ required: true }]}
                      >
                        <Input className="w-100" id="input-centent-contact"  />
                      </Form.Item>

                      <label>
                        Phone <span className="text-danger">*</span>
                      </label>
                      <Form.Item
                        name={["user","phone"]}
                      >
                        <Input
                        type="number"
                          className="w-100"
                          id="input-centent-contact" 
                        />
                      </Form.Item>
                      <label>
                        Quantity <span className="text-danger">*</span>
                      </label>
                      <Form.Item
                        name={["user", "quantity"]}
                        rules={[
                          { type: "number", min: 0, max: 99, required: true },
                        ]}
                      >
                        <InputNumber className="w-100"  id="input-centent-contact"  />
                      </Form.Item>
                    </div>
                    <div className="col-6">
                      <label>
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <Form.Item
                        name={["user", "email"]}
                        rules={[{ type: "email", required: true }]}
                      >
                        <Input  id="input-centent-contact"  />
                      </Form.Item>
                      <label>
                        Requested Completion Date <>*</>
                      </label>
                      <Form.Item
                        name={["user", "date"]}
                        rules={[{ type: "date", required: true }]}
                      >
                        <Input type="date" id="input-centent-contact"  />
                      </Form.Item>
                      <label>
                        Company/Project Name{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <Form.Item
                        name={["user", "projectName"]}
                        rules={[{ required: true }]}
                      >
                        <Input className="w-100"  id="input-centent-contact" />
                      </Form.Item>
                    </div>


                  </div>
                </div>
                <div className="col-6 img-container-contact-us-col-6">
                  <img src={imgInput} alt="" className="w-100 img-backgroud-contact-content" />
                </div>
                <div className="description col-12">
                      <label>
                        Project Description{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <Form.Item
                        name={["user", "description"]}
                        rules={[{ required: true }]}
                      >
                        <Input.TextArea className="w-100" />
                      </Form.Item>
                    </div>
                    <Form.Item className="mt-3 your-agree text-center">
                      <input type="checkbox" />
                      <label>You agree to our friendly privacy policy.</label>
                    </Form.Item>
                    <Form.Item className="text-center">
                      <Button type="primary" htmlType="submit" id="btn-send-msg">
                        Send message
                      </Button>
                    </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
