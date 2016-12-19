import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';

const RangePicker = DatePicker.RangePicker;

var untilDate = new Date(2017,7,31);

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  if (!current) return true;
  console.log(current);
  //设置今天为可选
  if (current._d.getDate() == new Date().getDate() && current._d.getMonth() == new Date().getMonth() && current._d.getYear() == new Date().getYear()) {
    return false;
  } else {
    //设置可选区间
    return current && (current.valueOf() < Date.now() || current.valueOf() >  untilDate)  ;
  }
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}

ReactDOM.render(
  <div>
    <DatePicker format="YYYY-MM-DD HH:mm:ss" disabledDate={disabledDate} disabledTime={disabledDateTime} showTime />
    <br />
  </div>,
  document.getElementById('root')
);
