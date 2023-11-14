import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import axios from "axios";
import qs from "querystring";

dotenv.config();
const app = express();
const port = 3000;
const mongodbUri = process.env.MONGODB_URI;

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
  firstName: String,
  lastName: String,
  profile: String,
  linkedin: String,
  joinedCamp: [String],
});

const User = mongoose.model("User", userSchema);

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
    const user = await axiosInstance.get("https://api.linkedin.com/v2/userinfo");
    console.log(user.data);
    res.send(user.data);
  } catch (error) {
    res.send(error);
  }
});

app.get("/", (req, res) => {
  res.send("err");
});

app.get("/profile", (req: any, res) => {
  res.send("success");
});

app.post("/newUser", (req, res) => {
  const newUser = new User({
    firstName: "ikhsan",
    lastName: "apriliano",
    profile: "www.yutube.com",
    linkedin: "www.linkedin.com",
    joinedCamp: ["S1E1B1", "S1E2B1"],
  });
  newUser
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`your app is running on port ${port}`);
});
