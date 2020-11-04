import React, { useState, useEffect } from "react";
import "../css/style.css";
import { Button, Form } from "react-bootstrap";

import Navbar from "./Navbar";

const MyOwnPage = () => {
  const [survey, setSurvey] = useState({
    no : '',
    question : [],
  });



  useEffect(() => {

    fetch("http://localhost:3001/api/survey/load?no=headache", {

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
      .then((survey) => {
        console.log(survey)
        setSurvey(survey)
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
                닉네임 : {survey.no}
            </div>
            <br></br>
            <div style={{ fontSize: " 20px "}}>
                질문 : {survey.question.map((p)=>
                  {return (
                    <div>{p}</div>
                  )}
                )}
            </div>
            <br></br>
            {/* <div style={{ fontSize: " 20px "}}>
                나이 :{survey.age}
            </div>
            <br></br>
            <div style={{ fontSize: " 20px "}}>
                거주지 :{survey.residence}
            </div> */}

            {/* <br></br>
            <div style={{ fontSize: " 20px "}}>
                키 :{user.height}
            </div> */}
            {/* <br></br>
            <div style={{ fontSize: " 20px "}}>
                몸무게:{user.weight} */}
            </div>
            <br></br>
        {/* </div> */}
      </div>
    );
  
}

export default MyOwnPage;
