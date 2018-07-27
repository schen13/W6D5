import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.handle = 0;
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({ time: new Date() });
  }


  render() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let hours = this.state.time.getHours();
    hours = (hours < 10) ? `0${hours}` : `${hours}`;
    let minutes = this.state.time.getMinutes();
    minutes = (minutes < 10) ? `0${minutes}` : `${minutes}`;
    let seconds = this.state.time.getSeconds();
    seconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;
    return (
      <div className={"clock"}>
      <h1>Best Frickin Clock</h1>
        <section className={"inner-clock"}><ul>
          <li>Time: </li>
          <li>{hours}:{minutes}:{seconds}</li>
          </ul>
          <ul>
          <li>Date: </li>
          <li>
            {days[this.state.time.getDay()]}    {this.state.time.getMonth() + 1}/
            {this.state.time.getDate()}/
            {this.state.time.getFullYear()}
          </li>
        </ul>
        </section>
    </div>
  );
  }

  componentDidMount() {
    this.handle = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
    this.handle = 0;
  }
}
export default Clock;
