import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DeliveryDate(props) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    props.onDateChange(date);
  }
  const maxSelectableDate = new Date();
  maxSelectableDate.setMonth(maxSelectableDate.getMonth() + 1);

  return (
    <DatePicker
      className={props.className}
      selected={selectedDate}
      onChange={handleDateChange}
      minDate={new Date()}
      maxDate={maxSelectableDate}
      dateFormat="dd/MM/yyyy"
      formatWeekday={(weekday) => weekday.substr(0, 3)}
      placeholderText="Select date"
    />
  );
}
export default DeliveryDate;
