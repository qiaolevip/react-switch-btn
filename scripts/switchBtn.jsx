import React, { Component, PropTypes } from 'react';

class SwitchBtn extends Component {
  render() {
    const { isChecked, id, onClick, className } = this.props;

    return (
      <div className={`switch-btn ${className}`}>
        <input id={id} type="checkbox" className="switch-checkbox" checked={isChecked} onChange={onClick} />
        <label className="switch-label" htmlFor={id} />
      </div>
    )
  }
}

SwitchBtn.defaultProps = {
  id: 'switchBtn',
  isChecked: false,
  className: ''
};

SwitchBtn.propTypes = {
  id: PropTypes.string,
  isChecked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default SwitchBtn;