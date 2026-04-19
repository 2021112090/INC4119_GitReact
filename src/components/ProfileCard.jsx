import React from "react";
import pikaImage from "../assets/pika.png";

const ProfileCard = () => {
  return (
    <div className="profile">
      <img src={pikaImage} alt="프로필" />
      <div className="profile-info">
        <h3>이름</h3>
        <p>안녕하세요! 저는 React를 좋아하는 개발자입니다.</p>
      </div>
    </div>
  );
};

export default ProfileCard; 