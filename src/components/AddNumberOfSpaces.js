import { Form, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useState } from "react";

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



const AddNumberOfSpaces = (props) => {
  const { setData, setActiveTab } = props;
  const [count, setCount] = useState(0);

  const Counter = () => {
  
    const dec = () => {
      if (count <= 0) {
        return;
      } else {
        setCount(count - 1);
      }
    };
  
    return (
      <div style={{width: 300, display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
        <Button type="primary" onClick={dec}> - </Button>
        <div style={{fontSize: 40}}>{count}</div>
        <Button type="primary" onClick={() => setCount(count + 1)}> + </Button>
      </div>
    );
  };

  const onFinish = (count) => {
    setData((prevState) => {
      return { ...prevState, ...count};
    });
    setActiveTab("4");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <center>
      <Form
        size={"large"}
        name="availableSpace"
        {...formItemLayout}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item style={{ display: "block" }} name="availableSpace" label="">
          <Counter />
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

export default AddNumberOfSpaces;
