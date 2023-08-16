import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { json } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: " ",
    email: " ",
    password: " ",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log();
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostDate = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        cpassword,
      }),
    });
    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration!");
      console.log("Invalid Registration!");
    } else {
      window.alert("Registration Successful!");
      console.log("Registration Successful");

      navigate("/login");
    }
  };

  return (
    <div>
      <section class="vh-100" style={{ backgroundColor: "#eee" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Register
                      </p>

                      <form class="mx-1 mx-md-4" method="post">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              class="form-control"
                              value={user.name}
                              onChange={handleInputs}
                            />
                            <label class="form-label" for="form3Example1c">
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              class="form-control"
                              value={user.email}
                              onChange={handleInputs}
                            />
                            <label class="form-label" for="form3Example3c">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="password"
                              id="password"
                              class="form-control"
                              value={user.password}
                              onChange={handleInputs}
                            />
                            <label class="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="cpassword"
                              id="cpassword"
                              class="form-control"
                              value={user.cpassword}
                              onChange={handleInputs}
                            />
                            <label class="form-label" for="form3Example4cd">
                              Repeat your password
                            </label>
                          </div>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label class="form-check-label" for="form2Example3">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4 gap-4">
                          <button
                            type="submit"
                            class="btn btn-primary btn-lg"
                            onClick={PostDate}
                          >
                            Register
                          </button>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                          <label class="form-check-label" for="form2Example3">
                            Already has an account? <a href="/login">Log In</a>
                          </label>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid"
                        alt="Sample"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
