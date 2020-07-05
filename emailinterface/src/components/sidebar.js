import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import EmailWindow from "./emailWindow";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    backgroundColor: "#f2f3f2",
    display: "inline-flex",
    height: 700,
    position: "fixed",
    top: "120px",
  },
  tabs: {
    borderRight: `2px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(undefined);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    //added
    passNewValue(newValue);
  };

  //hand over current Email into sidebar props for Ryan x)
  const passNewValue = (newValue) => {
    if (newValue > props.Mails.length - 1 || newValue < 0) {
      props.onNewEmail(undefined);
    } else {
      let selectedEmailID = props.Mails[newValue].id;
      props.onNewEmail(selectedEmailID);
    }
  };

  const resetSelectedTab = () => {
    setValue(undefined);
    props.onNewEmail(undefined);
  };

  const forwardSelectedTab = () => {
    let newTab = value + 1;
    setValue(newTab);
    passNewValue(newTab);
  };

  const backSelectedTab = () => {
    let newTab = value - 1;
    setValue(newTab);
    passNewValue(newTab);
  };

  return (
    <div>
      <div className={classes.root} style={{ width: "1000px" }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          style={{ width: "180px" }}
        >
          {props.Mails.map((email) => {
            return (
              <Tab
                style={{
                  fontSize: "10px",
                  textTransform: "none",
                  borderBottom: "2px solid black",
                  margin: "0",
                }}
                label={
                  <div>
                    <p
                      style={{
                        fontWeight: "bolder",
                        textAlign: "center",
                        margin: "0",
                      }}
                    >
                      {email.mail.defaultProps.sender}
                    </p>
                    <p style={{ textAlign: "center", margin: "0" }}>
                      {email.mail.defaultProps.subject}
                    </p>
                    <p style={{ textAlign: "center", margin: "0" }}>
                      {email.mail.defaultProps.date}
                    </p>
                  </div>
                }
                {...a11yProps(props.Mails.indexOf(email))}
              />
            );
          })}
        </Tabs>

        {props.Mails.map((email) => {
          return (
            <TabPanel value={value} index={props.Mails.indexOf(email)}>
              <div
                style={{
                  backgroundColor: "white",
                  overflowWrap: "break-word",
                }}
              >
                <EmailWindow
                  emailAdress={props.Recipient}
                  userName={props.userName}
                  resetSelectedTab={resetSelectedTab}
                  onNewEmail={props.onNewEmail}
                  Email={email}
                  onMoveToSpam={props.onMoveToSpam}
                  onMoveToBin={props.onMoveToBin}
                  onMoveToImportant={props.onMoveToImportant}
                  onMoveEmailForward={forwardSelectedTab}
                  onMoveEmailBackward={backSelectedTab}
                ></EmailWindow>
              </div>
            </TabPanel>
          );
        })}
      </div>
    </div>
  );
}
