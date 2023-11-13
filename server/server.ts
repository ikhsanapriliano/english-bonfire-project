import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { cfg } from "./config";
import passport from "passport";
import { Strategy as LinkedinStrategy } from "passport-linkedin-oauth2";
import session from "express-session";

dotenv.config();
const app = express();
const port = 3000;
const mongodbUri = process.env.MONGODB_URI;

mongoose.connect(mongodbUri);

passport.use(
  new LinkedinStrategy(
    {
      clientID: process.env.LINKEDIN_KEY,
      clientSecret: process.env.LINKEDIN_SECRET,
      callbackURL: "http://localhost:3000/linkedin/callback",
      scope: ["email", "profile", "openid"],
    },
    function (accessToken, refreshToken, profile, done) {
      process.nextTick(function () {
        return done(null, profile);
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(
  session({
    secret: cfg.secured_key,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  profile: String,
  linkedin: String,
  joinedCamp: [String],
});

const User = mongoose.model("User", userSchema);

app.get("/auth/linkedin", passport.authenticate("linkedin"));

app.get(
  "auth/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

app.get("/", (req, res) => {
  User.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
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
