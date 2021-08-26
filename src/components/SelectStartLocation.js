import { RightOutlined } from "@ant-design/icons";
import { Form, Button, Input } from "antd";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const SelectStartLocation = (props) => {
  //sends form data to parent
  const { setData, setActiveTab } = props;
  const onFinish = (values) => {
    setData((prevState) => {
      return { ...prevState, ...values };
    });
    setActiveTab("3");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <center>
      <Form
        size={"large"}
        name="time_related_controls"
        {...formItemLayout}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          style={{ display: "block" }}
          label=""
          name="city"
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
        >
          <Input
            placeholder="Add meg a település nevét!"
            style={{ width: 300 }}
          />
        </Form.Item>
        <Form.Item
          style={{ display: "block" }}
          label=""
          name="location"
          rules={[
            {
              required: true,
              message: "Add meg a helyszínt, ahonnan indulsz!",
            },
          ]}
        >
          <Input placeholder="Add meg a helyszínt!" style={{ width: 300 }} />
        </Form.Item>
        <Form.Item
          style={{ display: "block" }}
          wrapperCol={{
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 0,
            },
          }}
        >
          <Button type="primary" htmlType="submit" style={{ width: 300 }}>
            Következő
            <RightOutlined />
          </Button>
        </Form.Item>
      </Form>
    </center>
  );
};

export default SelectStartLocation;
