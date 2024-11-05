import React, { Component } from "react";

// Complete this Component
const ListItem = (props) => {
  const { social } = props;
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor: social.bgColor,
      }}
    >
      <img src={social.icon} alt={social.name} />
      <a href={social.link}>{social.name}</a>
    </div>
  );
};

export default ListItem;
