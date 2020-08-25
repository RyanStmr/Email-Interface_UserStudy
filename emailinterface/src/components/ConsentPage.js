import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "./useForm";
import "./Startpage.css";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import ErrorIcon from "@material-ui/icons/Error";
import Logos from "./Logos.png";
import Cam from "./CorruptCam.PNG";

const ConsentPage = (props) => {
  const [values, handleChange] = useForm({
    email: "",
    name: "",
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateProp = () => {
    let email = values.email;
    let name = values.name;
    email === "" ? (email = "MaxM@globalConnect.com") : (email = email);
    name === "" ? (name = "Max Mustermann") : (name = name);
    props.updatedData(email, name);
  };

  var styles = {
    buttonsSidebar: {
      color: "#2E2E2E",
      margin: "10px",
    },
  };

  return (
    <div className="StartPage">
      <img src={Logos} alt="Logos" width="900" height="100"></img>
      <hr></hr>
      <h1>The study</h1>
      <br></br>
      <p>
        In this study we are trying to investigate how users experience and
        evaluate emails in an email client.{" "}
      </p>
      <br></br>
      <p>
        With starting the study you will be asked to calibrate your webcam.{" "}
        <br></br>
        <strong>Please follow the steps shown on your screen.</strong>{" "}
      </p>
      <p>After the calibration step you are ready to go!</p>
      <br></br>
      <p>
        Make sure to complete the study in one continous session, meaning you
        should not stop the study and continue later on.{" "}
      </p>
      <p>
        You might see your webcam footage pop up, if the webcam is having
        trouble tracking you. It will disappear once it can track you again.
      </p>
      <br></br>
      <img src={Cam} alt="CamFaulty" width="250" height="150"></img>
      <hr></hr>
      <p>
        <strong>Your task: </strong>Pretend you are working as a secretary in a
        start-up called Global-Connect. Your job is to go through your and your
        bosses custom emails as your first task in the morning.
      </p>
      <p>
        Your boss is off on holidays for the week, after having had several
        meetings with a company called "Imotion" last week. Therefore, your
        inbox and your bosses have been joined together.
      </p>
      <p>
        Go through <strong>all the emails </strong>and{" "}
        <strong>select the right inbox for each email</strong>. There are three
        different inboxes to select from:
      </p>
      <ol style={{ listStyleType: "clear" }}>
        <br></br>
        <li>
          <strong>Important</strong>
        </li>
        <li>
          <strong>Bin</strong>
        </li>
        <li>
          <strong>Spam</strong>
        </li>
      </ol>
      <br></br>
      <p>
        You can move the email to an inbox by clicking{" "}
        <strong>"Move to Important"</strong>,<strong> "Move to Spam"</strong> or{" "}
        <strong>"Move to Bin"</strong> inside each email window.
      </p>
      <Button
        style={styles.buttonsSidebar}
        startIcon={<EmailIcon />}
        variant="outlined"
      >
        Move to Important
      </Button>
      <Button
        startIcon={<ErrorIcon />}
        style={styles.buttonsSidebar}
        variant="outlined"
      >
        Move to Spam
      </Button>
      <Button
        style={styles.buttonsSidebar}
        startIcon={<DeleteIcon />}
        variant="outlined"
      >
        Move to Bin
      </Button>
      <br></br>
      <p>
        <strong>After you have finished your task</strong> click
        <Button
          variant="contained"
          style={{ backgroundColor: "#04B45F", margin: "10px" }}
        >
          <ExitToAppIcon></ExitToAppIcon>Submit
        </Button>{" "}
        on the top right of your email client before continuing with the
        <strong> accuracy test </strong> and the
        <strong> post study questionnaires</strong>.
      </p>
      <hr></hr>
      <p style={{ color: "red" }}>
        <strong>
          Choose a name and email which will be used to address you throughout
          the study. (This does not have to be your real email or name.):
        </strong>
      </p>
      <br></br>
      Email:{" "}
      <input
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        style={{ width: "20%", marginRight: "20px" }}
        required
        placeholder="maxM@globalConnect.de"
      ></input>
      Firstname & lastname:{" "}
      <input
        name="name"
        style={{ width: "20%", marginRight: "20px" }}
        value={values.name}
        onChange={handleChange}
        required
        placeholder="Max Mustermann"
      ></input>
      <hr></hr>
      <h2>Consent:</h2>
      <br></br>
      <p>
        <strong>
          <p>
            Please agree with the terms and conditions below before proceeding.{" "}
          </p>
        </strong>
      </p>
      <br></br>
      <p>
        {" "}
        1. I am aware that the collection, processing and use of my data is
        voluntary. The experiment can be canceled by me at any time without
        mentioning reasons and without causing me any disadvantages. In the
        event of cancellation, all data recorded of me will be irrevocably
        deleted.{" "}
      </p>
      <p>
        2. I agree that my following data are processed: a) demographics b) Gaze
        data and mouse movements, c) feedback questionnaires. The webcam video
        feed is not stored. Only gaze coordinates will be extracted and saved.
      </p>
      <br></br>
      <p>
        3. I agree that the above mentioned data will be collected, processed,
        stored and used by Bundeswehr University Munich for the following
        purposes: a) analysis of the data for reporting in scientific
        publications. The data is published completely anonymously, i.e., the
        collected data cannot be related to respective participants. b)
        Publication of dataset on the university website. c) The anonymized data
        is stored for an indefinite period of time. Due to the anonymization,
        data cannot be deleted after the study.
      </p>
      <br></br>
      <p>
        4. I have been informed that my personal data collected in the context
        of the above purposes will be processed in compliance with the General
        Data Protection Regulation (GDPR and BayDSG).
      </p>
      <br></br>
      <p>
        5. I am aware that I can only participate in this study once and will
        only be reimbursed once. In addition, finishing the study is mandatory
        for receiving any reimbursement.
      </p>
      <p>
        If you have questiones or concerns, please contact:
        <strong> ryan.steimer@campus.lmu.de </strong>or{" "}
        <strong>yasmeen.essam@unibw.de</strong>
      </p>
      <br></br>
      <Link
        to="/EmailClient"
        activeClassName="active"
        style={{ marginBottom: "40px", marginLeft: "40px" }}
      >
        <Button
          onClick={updateProp}
          style={{
            width: "300px",
            marginBottom: "40px",
            backgroundColor: "#04B45F",
          }}
        >
          I agree
        </Button>
      </Link>
    </div>
  );
};

export default ConsentPage;
