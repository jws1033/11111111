import React, { useState, useEffect } from "react";
import "../css/style.css";
import { Button, Form } from "react-bootstrap";

import Navbar from "./Navbar";

const MyOwnPage = () => {
  const [user, setUser] = useState({});



  useEffect(() => {

    fetch(`http://localhost:3001/api/user/userfind?sender=${sessionStorage.getItem('account')}`, {

      method: "GET",

      headers: {

        "Content-Type": "application/json"

      },

    })

      .then((res) => {

        if (res.status === 200) {

          return res.json();

        } else {

          const error = new Error(res.error);

          throw error;

        }


      })
      .then((user) => {
        console.log(user)
        setUser(user)
      })

      .catch((err) => {

        console.log(err);

        alert("에러")

      });

  },[]);


    return (
      <div>
        <div>
          <Navbar />      
        </div>
        <div className="section" style={{ marginTop : " 10px" }}>
          <div className="header">
            <div>
              <img src="https://www.flaticon.com/svg/static/icons/svg/2904/2904566.svg"
                width="150px">
              </img>
            </div>
            <h2>My Info</h2>
          </div>

          <div style={{ fontSize: " 20px "}}>
                닉네임 : {user.name}
            </div>
            <br></br>
            <div style={{ fontSize: " 20px "}}>
                성별 : {user.gender}
            </div>
            <br></br>
            <div style={{ fontSize: " 20px "}}>
                나이 :{user.age}
            </div>
            <br></br>
            <div style={{ fontSize: " 20px "}}>
                거주지 :{user.residence}
            </div>
            {/* <input
              type="text"
              className="newitem-form"
              name="age"
              placeholder="나이를 입력해 주세요"
              onChange={this.handleChange}
            />{" "} */}
            <br></br>
            <div style={{ fontSize: " 20px "}}>
                키 :{user.height}
            </div>
            {/* <input
              type="text"
              className="newitem-form"
              name="residence"
              placeholder="거주지를 입력해 주세요"
              onChange={this.handleChange}
            />{" "} */}
            <br></br>
            <div style={{ fontSize: " 20px "}}>
                몸무게:{user.weight}
            </div>
            {/* <input
              type="text"
              className="newitem-form"
              placeholder="키를 입력해 주세요"
            ></input>
            <br></br>
            <input
              type="text"
              className="newitem-form"
              placeholder="몸무게를 입력해 주세요"
            ></input> */}
            <br></br>
            {/* <input
              className="btn btn-warning newitem-btn"
              type="submit"
              id="register"
            /> */}

        </div>
      </div>
    );
  
}

export default MyOwnPage;
