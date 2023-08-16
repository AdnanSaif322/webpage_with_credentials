import React, { useEffect , useState} from "react";
import  {useNavigate, } from "react-router-dom";

const About = () => {

  const navigate = useNavigate();
  const [userData, setUserDate] = useState({});

  const callAboutPage = async() =>{
    try{
      const respon = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await respon.json();
      console.log(data);
      setUserDate(data);

      if(!respon.status === 200){
        const error = new Error(respon.error);
        throw error;
      }

    }catch(err){
      console.log(err);
      navigate("/login");
    }
  }

  useEffect(() => {
    callAboutPage();
  },[]);

  return (
    <div className="p-4 text-center">
      <h1>Welcome {userData.name}</h1>
      <p>to your About Page</p>
      <p>Email Address: {userData.email}</p>
    </div>
  );
};

export default About;
