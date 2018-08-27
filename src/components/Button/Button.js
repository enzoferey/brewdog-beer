import React from "react";
import PropTypes from "prop-types";
import style from "./button.scss";

class Button extends React.Component {
  state = {
    countdown: 0,
    paused: false,
    done: false,
  };

  componentWillUnmount = () => {
    this.clearCountdown();
  };

  onClick = () => {
    const { countdown, paused, done } = this.state;
    const { delay, waiting } = this.props;

    if (!waiting) {
      if (delay > 0 && !done) {
        if (countdown === 0) {
          // first click, start
          this.setCountdown(delay);
        } else if (!paused) {
          // second click, pause
          this.setState({ paused: true });
          this.clearCountdown();
        } else {
          // third click, unpause
          this.setState({ paused: false });
          this.setCountdown(countdown);
        }
      } else {
        this.setState({ done: true });
      }
    }
  };

  clearCountdown = () => {
    clearInterval(this._countdown);
  };

  setCountdown = countdown => {
    this.setState({ countdown }, () => {
      this._countdown = setInterval(this.updateCountdown, 1000);
    });
  };

  updateCountdown = () => {
    const { countdown } = this.state;

    // Update value
    const newCountdown = countdown - 1;
    this.setState({ countdown: newCountdown });

    // Check donw
    if (newCountdown === 0) {
      this.setState({ done: true });
      this.clearCountdown();
    }
  };

  getLabel = () => {
    const { done, countdown } = this.state;
    const { waiting } = this.props;

    if (waiting) return "Complete prev";
    if (done) return "Added !";
    if (countdown > 0) return `${countdown} s`;
    return "Add";
  };

  getWidth = () => {
    const { countdown } = this.state;
    const { delay } = this.props;

    return 100 - (countdown / delay) * 100;
  };

  render = () => {
    const { countdown } = this.state;
    const { waiting } = this.props;

    return (
      <div
        className={`${style.main} ${waiting ? style.waiting : ""}`}
        onClick={this.onClick}
      >
        <p className={style.label}>{this.getLabel()}</p>
        <div
          style={{
            width: `${this.getWidth()}%`,
          }}
          className={`${style.progress} ${countdown > 0 ? style.active : ""}`}
        />
      </div>
    );
  };
}

Button.propTypes = {
  delay: PropTypes.number,
  waiting: PropTypes.bool,
};

export default Button;
