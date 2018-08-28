import React from "react";
import PropTypes from "prop-types";
import style from "./button.scss";

class Button extends React.Component {
  state = {
    countdown: 0,
    paused: false,
  };

  componentWillUnmount = () => {
    this.clearCountdown();
  };

  onClick = () => {
    const { countdown, paused } = this.state;
    const { done, delay, waiting } = this.props;

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
        // No countdown
        this.setDone();
      }
    }
  };

  setDone = () => {
    const { callback } = this.props;
    if (callback) callback();
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

    // Check done
    if (newCountdown === 0) {
      this.setDone();
      this.clearCountdown();
    }
  };

  getLabel = () => {
    const { countdown } = this.state;
    const { done, waiting } = this.props;

    if (waiting) return "Add prev";
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
    const { waiting, background } = this.props;

    return (
      <div
        style={{ background }}
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
  done: PropTypes.bool,
  delay: PropTypes.number,
  waiting: PropTypes.bool,
  callback: PropTypes.func,
  background: PropTypes.string,
};

export default Button;
