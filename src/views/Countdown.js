import React, { useState, useEffect } from "react";

class CountDown extends React.Component {
  state = {
    count: 10,
  };
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ count: this.state.count - 1 });
    // }, 1000);
    // setTimeout chỉ chạy 1 lần
    // setInterval lặp vô tận
    // cleanInterval để dừng
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count - 1 });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        clearInterval(this.timer);
        this.props.onTimesup();
      }
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

//---------------Function Component ( HOOKS )
const NewCountDown = (props) => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      props.onTimesup();
      return;
    }
    let timer = setInterval(() => {
      console.log("run me");
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return <div>{count}</div>;
};

export { CountDown, NewCountDown };
