import React, { useState } from "react";
import { TimePicker } from "react-ios-time-picker";

function DeliveryTime(props) {
  const [value, setValue] = useState("12:00 PM");

  const onChange = (timeValue) => {
    setValue(timeValue);
  };

  return <TimePicker onChange={onChange} value={value} use12Hours />;
}
export default DeliveryTime;
