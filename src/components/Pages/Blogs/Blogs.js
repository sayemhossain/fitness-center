import React from "react";
import "./Blogs.css";
import firebaseImg from "../../../Images/firebase11.jpg";

const Blogs = () => {
  return (
    <div className="container blogs pb-5 px-4">
      <div>
        <h2 className="text-center pt-5 fw-bold text-uppercase ">
          Some Basic <span style={{ color: "#ff7722" }}>Question</span>
        </h2>
        <hr className="w-50 mx-auto " />
      </div>
      <div>
        <div className="row my-5">
          <h4 className="my-4">
            Why are you using Firebase? What other options do you have to
            implement authentication?
          </h4>
          <div className="col-lg-7">
            <p>
              Firebase can be seen as a server-less backend for your mobile
              apps, web apps, etc. It is a service provided by Google. As an
              Android developer I use Firebase in most of my projects. It has
              many features like Realtime database, Cloud functions, Analytics,
              Crashlytics, Cloud Firestore, etc.
            </p>
            <h6>Other option for authentication:</h6>
            <p className="mb-0">1. STYTCH</p>
            <p className="mt-0 mb-0">2. Ory</p>
            <p className="mt-0 mb-0">3. Supabase</p>
            <p className="mt-0 mb-0">4. Okta</p>
            <p className="mt-0 mb-0">5. PingIdentity</p>
          </div>
          <div className="col-lg-5 mt-4">
            <img className="img-fluid" src={firebaseImg} alt="" />
          </div>
        </div>
      </div>
      <h4 className="mb-3">
        Difference between authorization and authentication.
      </h4>
      <div className="row blogs-container">
        <div className="col-lg-6 feist-blog">
          <h3 className="rounded text-center text-white mb-4 bg-success w-50 pb-2 mx-auto">
            Authentication
          </h3>
          <div>
            <p>1. Authentication verifies who the user is.</p>
            <p>
              2. Authentication works through passwords, one-time pins,
              biometric information, and other information provided or entered
              by the user.
            </p>
            <p>
              3. Authentication is the first step of a good identity and access
              management process.
            </p>
            <p>
              4. Authentication is visible to and partially changeable by the
              user.
            </p>
            <p>
              5. Example: By verifying their identity, employees can gain access
              to an HR application that includes their personal pay information,
              vacation time, and 401K data.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className="rounded pb-2 text-center text-white mb-4 bg-danger w-50 mx-auto">
            Authorization
          </h3>
          <div>
            <p>1. Authorization determines what resources a user can access.</p>
            <p>
              2. Authorization works through settings that are implemented and
              maintained by the organization.
            </p>
            <p>3. Authorization always takes place after authentication.</p>
            <p>4. Authorization isn’t visible to or changeable by the user.</p>
            <p>
              5. Example: Once their level of access is authorized, employees
              and HR managers can access different levels of data based on the
              permissions set by the organization.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="row">
          <h4 className="mt-3">
            What other services does firebase provide other than authentication?
          </h4>
          <div className="col-lg-12">
            <h6>
              There are many services which Firebase provides, Most useful of
              them are:
            </h6>
            <p className="mb-0">1. Cloud Firestore</p>
            <p className="mt-0 mb-0">2. Hosting</p>
            <p className="mt-0 mb-0">3. Cloud Storage</p>
            <p className="mt-0 mb-0">4. Google Analytics</p>
            <p className="mt-0 mb-0">5. Predictions</p>
            <p className="mt-0 mb-0">6. Cloud Messaging</p>
            <p className="mt-0 mb-0">7. PredicDynamic Links</p>
            <p className="mt-0 mb-0">8 Remote Config</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
