import React, { Component } from "react";
import EmailClient from "./emailClient";

class Tracker extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.state = {
      currentEmail: undefined, //event dependant
      currentInbox: "AllInbox",
      headerInfo: [],
      inEmailText: false, //event dependant
      mousePosXPlain: 0,
      mousePosYPlain: 0,
      mousePosXTransform: 0,
      mousePosYTransform: 0,
      click: false,
      clickPosXTransform: 0,
      clickPosYTransform: 0,
      timeStamp: 0,
      gazeX: 0,
      gazeY: 0,
      gazeXTransform: 0,
      gazeYTransform: 0,
      validationGaze: 0,
      userId: 0,
      userNickname: "",
      pageScrollY: 0,
      pageScrollX: 0,
      browserWidth: 0,
      browserHeight: 0,
      marginToScreenTop: 0,
      marginToScreenLeft: 0,
      mouseGeneralField: 0,
      mouseEmailField: 0,

      //To be sent at end of study
      resultInbox: [],
      visitedLinks: [],
    };

    this.stateCollector = [];
  }

  componentDidMount() {
    this.getUserID();
    this.getNickname();
    this.startCalibration();
  }

  getUserID = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("/connect", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ userId: data.userID }));
  };

  getNickname = () => {
    //set nickname from props
    let nickname = this.props.userInfo.userName;
    this.setState({ userNickname: nickname });
  };

  startCalibration = () => {
    window.GazeCloudAPI.APIKey = "GazeBehavior_NonCommercialUse";
    window.GazeCloudAPI.StartEyeTracking();
    window.GazeCloudAPI.OnCalibrationComplete = () => {
      this.startTracking();
      console.log("gaze Calibration Complete");
    };
    this.startTracking();
  };

  startTracking = () => {
    var collectionInterval = setInterval(this.collectStates, 1000);
    var sendingIntervall = setInterval(this.sendData, 5000);
  };

  sendData = () => {
    //Send to Server
    const data = this.stateCollector;
    const response = fetch("/data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(this.resetCollector);
  };

  collectStates = () => {
    this.setAllInfo();
    this.fillCollector();
  };

  setAllInfo = () => {
    this.settingsChecker();
    this.setGazeData();
    this.setTimestamp();
  };

  setGazeData = () => {
    window.GazeCloudAPI.OnResult = (GazeData) => {
      let gazeXLoc = GazeData.docX;
      let gazeYLoc = GazeData.docY;
      let validation = GazeData.state; // 0: valid gaze, 1 : face tracking lost, 1 : gaze data uncalibrated
      this.setState({
        gazeX: gazeXLoc,
        gazeY: gazeYLoc,
        validationGaze: validation,
      });
      this.setTransformedGazePos(gazeXLoc, gazeYLoc);
    };
  };

  setTimestamp = () => {
    let currentTimeLoc = Date.now();
    let newDate = new Date(currentTimeLoc).toLocaleString("de-DE");
    this.setState({ timeStamp: newDate });
  };

  fillCollector = () => {
    this.stateCollector.push(this.state);
    this.resetStates();
  };

  resetCollector = () => {
    this.stateCollector = [];
  };

  resetStates = () => {
    //containers???
    this.setState({
      click: false,
      clickPosXTransform: 0,
      clickPosYTransform: 0,
      clickPosX: 0,
      clickPosY: 0,
      headerInfo: [],
      inEmailText: false,
    });
  };

  handleMouseMove(event) {
    let x = event.clientX;
    let y = event.clientY;
    this.setState({ mousePosXPlain: x, mousePosYPlain: y });
    this.setTransformedMousePos(x, y);
  }

  settingsChecker = () => {
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    let height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    let marginTop = window.screenTop;
    let marginLeft = window.screenLeft;

    let yScroll = window.scrollY;

    this.setState({
      browserWidth: width,
      browserHeight: height,
      marginToScreenLeft: marginLeft,
      marginToScreenTop: marginTop,
      pageScrollY: yScroll,
    });
  };

  setTransformedMousePos = (x, y) => {
    let clientWidth = 980;
    if (x > this.state.browserWidth / 2 + clientWidth / 2) {
      var xTran = (x - (this.state.browserWidth / 2 + clientWidth / 2)) * -1;
      var yTran = y + this.state.pageScrollY;
    } else {
      var xTran = (this.state.browserWidth / 2 - clientWidth / 2 - x) * -1;
      var yTran = y + this.state.pageScrollY;
    }
    this.setState({ mousePosXTransform: xTran, mousePosYTransform: yTran });
  };

  handleMouseClick(event) {
    let copy = this.state;
    copy.click = true;
    copy.clickPosX = event.clientX;
    copy.clickPosY = event.clientY;
    this.setState(copy);
  }

  handleNewCurrentEmail = (emailNr) => {
    let copy = this.state;
    copy.currentEmail = emailNr;
    this.setState(copy);
  };

  handleNewCurrentInbox = (inboxType) => {
    let copy = this.state;
    copy.currentInbox = inboxType;
    copy.currentEmail = 0;
    this.setState(copy);
  };

  handleInboxResult = (finalInboxLoc) => {
    let copy = this.state;
    copy.resultInbox = finalInboxLoc;
    this.setState(copy);
  };

  handleHeaderInfo = (whichPart) => {
    let copy = this.state;
    copy.headerInfo.push(whichPart);
    this.setState(copy);
  };

  handleInEmailText = () => {
    let copy = this.state;
    copy.inEmailText = true;
    this.setState(copy);
  };
  /*
  collectStates = () => {
    this.stateCollector.push(this.state);
    console.log(this.stateCollector);
    this.setState({ clickPosX: 0, clickPosY: 0 });
    this.startGazeHandling();
  };

  startCalib = () => {
    window.GazeCloudAPI.StartEyeTracking();
  };

  startGazeHandling = () => {
    var gazeInterval = setInterval(this.handleGaze, 1000);
  };

  handleEmailChange = (emailNr) => {
    let copy = this.state;
    copy.currentEmail = emailNr;
    this.setState(copy);
  };

  handleMouseMove(event) {
    let copy = this.state;
    copy.x = event.clientX;
    copy.y = event.clientY;

    this.setState(copy);
  }

  handleGaze = () => {
    window.GazeCloudAPI.OnResult = (GazeData) => {
      let copy = this.state;
      GazeData.docX = 3;
      GazeData.docY = 5;
      copy.gazeX = GazeData.docX;
      copy.gazeY = GazeData.docY;
      this.setState(copy);
    };
  };

  handleMouseClick(event) {
    let copy = this.state;
    copy.click = true;
    copy.clickPosX = event.clientX;
    copy.clickPosY = event.clientY;

    this.setState(copy);
  }

  componentDidMount() {
    var collectionInterval = setInterval(this.collectStates, 5000);
    var windowSettingsInterval = setInterval(this.settingsChecker, 1000);
    var timerInterval = setInterval(this.timer, 1000);

    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("/connect", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ userId: data.userID }));
  }

  settingsChecker = () => {
    var width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    var height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    var marginTop = window.screenTop;
    var marginLeft = window.screenLeft;

    this.setState({
      browserWidth: width,
      browserHeight: height,
      marginToScreenLeft: marginLeft,
      marginToScreenTop: marginTop,
    });
  };

  timer = () => {
    let copy = this.state;
    let currentTime = Date.now();
    copy.currentTime = currentTime;

    this.setState(copy);
  };

  tester = () => {
    console.log(this.state);

    const data = this.stateCollector;

    const response = fetch("/data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(this.resetCollector);
  };

  resetCollector = () => {
    this.stateCollector = [];
    console.log("resetted");
  };
*/
  render() {
    return (
      <div onMouseMove={this.handleMouseMove} onClick={this.handleMouseClick}>
        <EmailClient
          UserInfo={this.props.userInfo}
          onNewEmail={this.handleNewCurrentEmail}
          onNewInbox={this.handleNewCurrentInbox}
          setInboxResult={this.handleInboxResult}
          HeaderInfo={this.handleHeaderInfo}
          inEmailText={this.handleInEmailText}
        ></EmailClient>
      </div>
    );
  }
}

export default Tracker;
