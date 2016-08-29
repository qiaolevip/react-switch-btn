import React from 'react';
import { render } from 'react-dom';
import SwitchBtn from './switchBtn.jsx';

const container = document.getElementById('app');

let arr = {};
Array.apply(null, {length: 10}).map((v, i) =>
  arr[`btn${i}`] = i % 2 == 0
);

const onClick = (e) => {
  const { id } = e.target;
  arr[id] = !arr[id];
  console.log(arr);
};

const btnList = () => {
  return <div>
    {
      Array.apply(null, {length: 10}).map((v, i) =>
        <SwitchBtn id={`btn${i}`} key={i} isChecked={arr[`btn${i}`]} onClick={onClick} />
      )
    }
  </div>;
};

render(btnList(), container);
