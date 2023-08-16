const express = require("express");
const jwt = require("jsonwebtoken");
// let express to be used in auth
const router = express.Router();
const bcrypt = require("bcrypt");
const authenticate = require("../middleware/authenticate");
const cookieParser = require("cookie-parser");

// reuqire mongo and schema
require("../db/connect");
const User = require("../model/userSchema");

router.use(cookieParser());

// Ger routes
router.get("/", (req, res) => {
  res.send("Home page");
});

// Post routes
router.post("/register", async (req, res) => {
  // 2nd bracket lets you use those variable to the equal sign numorous times.
  const { name, email, password, cpassword } = req.body;

  if (!name || !email || !password || !cpassword) {
    return res.status(422).json({ error: "Please filled the field properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exist!" });
    }

    const user = new User({ name, email, password, cpassword });

    await user.save();

    res.status(201).json({ message: "Email registered successfully!" });
  } catch (err) {
    console.log(err);
  }
});

// post route for login
router.post("/login", async (req, res) => {
  {
    try {
      let token;
      const { email, password } = req.body;

      if (!email || !password) {
        return res
          .status(422)
          .json({ error: "Please fill the field properly!" });
      }

      const userExist = await User.findOne({ email: email });

      if (userExist) {
        const isMatch = await bcrypt.compare(password, userExist.password);

        token = await userExist.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true
        });

        if (isMatch) {
          return res.status(201).json({ message: "Login Successful." });
        } else {
          return res.status(400).json({ erorr: "Invalid credentials." });
        }
      } else {
        return res.status(400).json({ error: "Invalid credentials." });
      }
    } catch (err) {
      console.log(err);
    }
  }
});

// about us page
router.get("/about", authenticate, (req, res) => {
  // res.send("About page");
  res.send(req.rootUser);
});


// home page
router.get("/homepage", authenticate, (req,res) => {
  res.send(req.rootUser);
})


// logout page
router.get("/logout", (req, res) => {
  res.clearCookie("jwtoken", {path:"/"});
  res.status(200).send('User logout');
});


// exports to anywhere where it is required.
module.exports = router;
