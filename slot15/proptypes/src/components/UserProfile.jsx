import React from "react";
import PropTypes from "prop-types";
import './css/UserProfile.css';

const UserProfile = ({ name, age }) => {
  if (!name || typeof name !== "string") {
    return (
      <div className="card">
        <div id="frost">
        <span class="red"></span>
        <span class="yellow"></span>
        <span class="green"></span>
      </div>
        <h3>Thông Tin Người Dùng</h3>
        <p className="error-message">Tên không hợp lệ hoặc không được cung cấp!</p>
      </div>
    );
  }

  if (!age) {
    return (
        <div className="card">
            <div id="frost">
        <span class="red"></span>
        <span class="yellow"></span>
        <span class="green"></span>
      </div>
        <h3>Thông Tin Người Dùng</h3>
        <p>Tên: {name}</p>
        <p className="error-message">Tuổi không được để trống!</p>
      </div>
    );
  } else if (isNaN(age)) {
    return (
        <div className="card"><div id="frost">
        <span class="red"></span>
        <span class="yellow"></span>
        <span class="green"></span>
      </div>
        <h3>Thông Tin Người Dùng</h3>
        <p>Tên: {name}</p>
        <p className="error-message">Tuổi phải là một số hợp lệ!</p>
      </div>
    );
  }

  return (
    <div className="card">
      <div id="frost">
        <span class="red"></span>
        <span class="yellow"></span>
        <span class="green"></span>
      </div>
      <h3>Thông Tin Người Dùng</h3>
      <p>Tên: {name}</p>
      <p>Tuổi: {age}</p>
      
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default UserProfile;