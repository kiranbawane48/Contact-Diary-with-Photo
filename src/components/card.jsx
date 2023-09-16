import React from "react";
import Avatar from "../components/Avatar"
import Details from "../components/Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
        {/* <img className="circle-img" src={props.img} alt="avatar_img" /> */}
      </div>
      <div className="bottom">
       <Details detailinfo ={props.tel} />
       <Details detailinfo ={props.email} />

      </div>
    </div>
  );
}

export default Card;
