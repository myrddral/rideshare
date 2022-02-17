import { Calendar, Form, TimePicker, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

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
const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Kérlek, válassz!",
    },
  ],
};

// function onPanelChange(value, mode) {
//   console.log(value, mode);
// }

const SelectDateAndTime = (props) => {
  //sends form data to parent
  const { setData, setActiveTab } = props;
  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const values = {
      ...fieldsValue,
      "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
      "time-picker": fieldsValue["time-picker"].format("HH:mm:ss"),
    };
    setData(values);
    setActiveTab("2");
  };

  return (
    <center>
      <Form
        size={"large"}
        name="time_related_controls"
        {...formItemLayout}
        onFinish={onFinish}
      >
        <Form.Item
          style={{ display: "block" }}
          name="date-picker"
          label=""
          {...config}
        >
          <Calendar
            fullscreen={false}
            // onPanelChange={onPanelChange}
            style={{ width: "100%", maxWidth: 300 }}
          />
        </Form.Item>
        <Form.Item
          style={{ display: "block" }}
          name="time-picker"
          label=""
          {...config}
        >
          <TimePicker format={"HH:mm"} style={{ width: 300 }} />
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

export default SelectDateAndTime;
