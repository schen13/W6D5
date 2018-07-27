import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

function Root() {
  return (
    <div>
      <Clock />
      <Tabs tabs = {[{title: "1", content: "TAIWAN NUMBA ONE"},
              {title: "2", content: "CHINA NUMBA TWO"},
              {title: "3", content: "NA LUL"}]}/>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
	const main = document.getElementById("main");
	ReactDOM.render(<Root/>, main);
});
