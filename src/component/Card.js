import React,{useState} from "react";
import "./card.css";

function Card({ users }) {
    
  return (
    <div className="grid gap-[1px] grid-cols-2 grid-rows-4 sm:grid-cols-3 lg:grid-cols-4  ">
      {users?.length >= 0 &&
        users?.map((user, id) => {
          return (
            <div key={id} className="card">
              <div className="card-image"></div>
              <div className="category"> {user.title} </div>
              <div className="heading">
                {user.body}
                <div className="author">
           
                  By <span className="name">{user.userId}</span> 
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Card;
