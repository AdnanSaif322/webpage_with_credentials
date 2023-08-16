import React,{ useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import image from "../img/best-password-manager.webp";

const Home = () => {

  const navigate = useNavigate();
  const [userName, setUserName] = useState({});
  const [show, setShow] = useState(false);

  const userHomePage = async() =>{
    try{
      const respon = await fetch('/homepage', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await respon.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);

    }catch(err){
      console.log(err);
      
    }
  }

  useEffect(() => {
    userHomePage();
  },[]);

  return (
    <>
      {/* Hero */}
      <div
        class="p-5 text-center bg-image rounded-3"
        style={{
          backgroundImage: image,
          height: "400px",
        }}
      >
        <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-white">
              <h1 class="mb-3">Password Manager</h1>
              <h4 class="mb-3">
                {show? userName : 'Where we keep your password safe and easy to access from anywhere'}
              </h4>
              <a
                class="btn btn-outline-light btn-lg"
                href="/register"
                role="button"
              >
                {show? '':'Join Now !'}
              </a>
              <h4>{show? 'Welcome back': ''}</h4>
            </div>
          </div>
        </div>
      </div>
      {/*Hero*/}
    </>
  );
};

export default Home;
