import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Canvas from "./canvas.js";

class AccuracyTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testComplete: false,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      positionX: window.innerWidth / 2,
      positionY: window.innerHeight / 2,
      intro: true,
    };

    this.counter = 1;
    this.accuracyInterval = null;
    this.positionXNew = 0;
    this.positionYNew = 0;
  }

  componentDidMount = () => {
    const timer = setTimeout(this.startAccuracyTest, 3000);
  };

  startAccuracyTest = () => {
    this.accuracyInterval = setInterval(this.drawNewCircle, 2500);
  };

  drawNewCircle = () => {
    switch (this.counter) {
      case 1:
        this.setState({ intro: false });
        this.positionXNew = 100;
        this.positionYNew = 100;
        this.changeCirclePosition(this.positionXNew, this.positionYNew);
        this.props.collectAccuracyData(
          this.counter,
          this.positionXNew,
          this.positionYNew
        );
        this.counter++;
        break;
      case 2:
        this.positionXNew = this.state.screenWidth / 2;
        this.positionYNew = 100;
        this.changeCirclePosition(this.positionXNew, this.positionYNew);
        this.props.collectAccuracyData(
          this.counter,
          this.positionXNew,
          this.positionYNew
        );
        this.counter++;
        break;
      case 3:
        this.positionXNew = this.state.screenWidth - 100;
        this.positionYNew = 100;
        this.changeCirclePosition(this.positionXNew, this.positionYNew);
        this.props.collectAccuracyData(
          this.counter,
          this.positionXNew,
          this.positionYNew
        );
        this.counter++;
        break;
      case 4:
        this.positionXNew = 100;
        this.positionYNew = this.state.screenHeight / 2;
        this.changeCirclePosition(this.positionXNew, this.positionYNew);
        this.props.collectAccuracyData(
          this.counter,
          this.positionXNew,
          this.positionYNew
        );
        this.counter++;
        break;
      case 5:
        this.positionXNew = this.state.screenWidth / 2;
        this.positionYNew = this.state.screenHeight / 2;
        this.changeCirclePosition(this.positionXNew, this.positionYNew);
        this.props.collectAccuracyData(
          this.counter,
          this.positionXNew,
          this.positionYNew
        );
        this.counter++;
        break;
      case 6:
        this.positionXNew = this.state.screenWidth - 100;
        this.positionYNew = this.state.screenHeight / 2;
        this.changeCirclePosition(this.positionXNew, this.positionYNew);
        this.props.collectAccuracyData(
          this.counter,
          this.positionXNew,
          this.positionYNew
        );
        this.counter++;
        break;
      case 7:
        this.positionXNew = 100;
        this.positionYNew = this.state.screenHeight - 100;
        this.changeCirclePosition(this.positionXNew, this.positionYNew);
        this.props.collectAccuracyData(
          this.counter,
          this.positionXNew,
          this.positionYNew
        );
        this.counter++;
        break;
      case 8:
        this.positionXNew = this.state.screenWidth / 2;
        this.positionYNew = this.state.screenHeight - 100;
        this.changeCirclePosition(this.positionXNew, this.positionYNew);
        this.props.collectAccuracyData(
          this.counter,
          this.positionXNew,
          this.positionYNew
        );
        this.counter++;
        break;
      case 9:
        this.positionXNew = this.state.screenWidth - 100;
        this.positionYNew = this.state.screenHeight - 100;
        this.changeCirclePosition(this.positionXNew, this.positionYNew);
        this.props.collectAccuracyData(
          this.counter,
          this.positionXNew,
          this.positionYNew
        );
        clearInterval(this.accuracyInterval);
        const timer = setTimeout(this.stopAccuracyTest, 2500);
        break;

      default:
    }
  };

  changeCirclePosition = (xPos, yPos) => {
    this.setState({ positionX: xPos, positionY: yPos });
  };

  stopAccuracyTest = () => {
    this.setState({ testComplete: true });
    this.props.stopAccuracyTest();
  };

  render() {
    let canvas;

    if (this.state.intro === true) {
      canvas = (
        <Canvas
          draw={(ctx) => {
            ctx.clearRect(
              0,
              0,
              this.state.screenWidth,
              this.state.screenHeight
            );
            ctx.fillStyle = "#000000";
            ctx.fillRect(
              0,
              0,
              this.state.screenWidth - 17,
              this.state.screenHeight - 17
            );
            ctx.fillStyle = "white";
            ctx.font = "30px Arial";

            ctx.fillText(
              "Please follow the red circle with your eyes",
              this.state.screenWidth / 2 - 300,
              this.state.screenHeight / 2
            );
          }}
        />
      );
    } else {
      canvas = (
        <Canvas
          draw={(ctx) => {
            ctx.clearRect(
              0,
              0,
              this.state.screenWidth,
              this.state.screenHeight
            );
            ctx.fillStyle = "#000000";
            ctx.fillRect(
              0,
              0,
              this.state.screenWidth - 17,
              this.state.screenHeight - 17
            );
            ctx.lineWidth = 5;
            ctx.strokeStyle = "#fc0b0b";
            ctx.arc(
              this.state.positionX,
              this.state.positionY,
              20,
              0,
              2 * Math.PI
            );
            ctx.closePath();
            ctx.stroke();
          }}
        />
      );
    }

    return (
      <div>
        {!this.state.testComplete ? (
          canvas
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link
              to="/SurveyComponent"
              activeClassName="active"
              style={{ width: "380px" }}
            >
              <Button
                variant="contained"
                style={{ backgroundColor: "#04B45F", margin: "10px" }}
                onClick={this.props.sendAccuracyData}
              >
                <ExitToAppIcon></ExitToAppIcon>Go To Survey
              </Button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default AccuracyTest;
/*<Link
  to="/SurveyComponent"
  activeClassName="active"
  style={{ width: "380px" }}
></Link>;*/
