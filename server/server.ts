import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import axios from "axios";
import qs from "querystring";
import cors from "cors";

dotenv.config();
const app = express();
const port = 3000;
const mongodbUri = process.env.MONGODB_URI;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

mongoose.connect(mongodbUri);

const Authorization = () => {
  return encodeURI(`https://linkedin.com/oauth/v2/authorization?client_id=${process.env.LINKEDIN_ID}&response_type=code&scope=${process.env.SCOPE}&redirect_uri=${process.env.REDIRECT_URI}`);
};

const Redirect = async (code) => {
  const payLoad = {
    client_id: process.env.LINKEDIN_ID,
    client_secret: process.env.LINKEDIN_SECRET,
    redirect_uri: process.env.REDIRECT_URI,
    grant_type: "authorization_code",
    code: code,
  };
  const { data } = await axios({
    url: `https://linkedin.com/oauth/v2/accessToken?${qs.stringify(payLoad)}`,
    method: "POST",
    headers: {
      "Content-Type": "x-www-form-urlencoded",
    },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return data;
};

const userSchema = new mongoose.Schema({
  sub: String,
  firstName: String,
  lastName: String,
  profile: String,
});

const campSchema = new mongoose.Schema({
  season: Number,
  episode: Number,
  bevouac1: [String],
  bevouac2: [String],
  bevouac3: [String],
});

let identity = "";
const User = mongoose.model("User", userSchema);
const Camp = mongoose.model("Camps", campSchema);

app.get("/auth/linkedin", (req, res) => {
  return res.redirect(Authorization());
});

app.get("/auth/linkedin/callback", async (req: any, res) => {
  const code = await Redirect(req.query.code);
  const token = code.access_token;
  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  try {
    const fetch = await axiosInstance.get("https://api.linkedin.com/v2/userinfo");
    const result = await fetch.data;
    const { sub, given_name, family_name, picture } = result;
    const exist = await User.findOne({ sub: sub });
    if (exist === null) {
      const newUser = new User({
        sub: sub,
        firstName: given_name,
        lastName: family_name,
        profile: picture,
      });
      newUser.save().then(() => {
        console.log("new account");
        identity = newUser.sub;
        res.redirect("http://localhost:5173/dashboard");
      });
    } else {
      console.log("account found");
      identity = sub;
      res.redirect("http://localhost:5173/dashboard");
    }
  } catch (error) {
    res.send(error);
  }
});

app.get("/user", async (req, res) => {
  const user = await User.findOne({ sub: identity });
  res.json(user);
});

app.get("/community", async (req, res) => {
  const community = await User.findOne();
  res.json(community);
});

app.listen(port, () => {
  console.log(`your app is running on port ${port}`);
});
