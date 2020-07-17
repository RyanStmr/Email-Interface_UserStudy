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
    backgroundColor: "white",
    borderTop: "1px solid grey",
    borderBottom: "1px solid grey",
    display: "inline-flex",
    width: 980,
    height: 900,
    marginTop: "20px",
  },
  tabs: {},
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
    let selectedEmailName = props.Mails[newValue].mail.defaultProps.keyID;
    props.onNewEmail(selectedEmailName);
  };

  const resetSelectedTab = () => {
    setValue(0);
    passNewValue(0);
  };

  const forwardSelectedTab = () => {
    let newTab = value + 1;
    if (newTab > props.Mails.length - 1) {
      newTab = 0;
    }
    setValue(newTab);
    passNewValue(newTab);
  };

  const backSelectedTab = () => {
    let newTab = value - 1;

    if (newTab < 0) {
      newTab = props.Mails.length - 1;
    }
    setValue(newTab);
    passNewValue(newTab);
  };

  return (
    <div>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          style={{
            borderRight: "1px solid grey",
          }}
        >
          {props.Mails.map((email) => {
            return (
              <Tab
                style={{
                  fontSize: "10px",
                  textTransform: "none",
                  borderBottom: "1px solid grey",
                  margin: "0",
                  backgroundColor: "white",
                  width: "180px",
                }}
                label={
                  <div style={{ width: "170px" }}>
                    {email.mail.defaultProps.senderName ? (
                      <p
                        style={{
                          fontWeight: "bolder",
                          textAlign: "left",
                          fontSize: "12px",
                          margin: "0",
                        }}
                      >
                        {email.mail.defaultProps.senderName}
                      </p>
                    ) : (
                      <p
                        style={{
                          fontWeight: "bolder",
                          textAlign: "left",
                          fontSize: "12px",
                          margin: "0",
                        }}
                      >
                        {email.mail.defaultProps.sender}
                      </p>
                    )}
                    <p style={{ textAlign: "left", margin: "0" }}>
                      {email.mail.defaultProps.subject}
                    </p>
                    <p
                      style={{
                        textAlign: "left",
                        margin: "0",
                        fontSize: "8px",
                      }}
                    >
                      {email.mail.defaultProps.date}
                    </p>
                  </div>
                }
                {...a11yProps(props.Mails.indexOf(email))}
              />
            );
          })}
        </Tabs>

        {props.Mails.length === 0 && (
          <h1 style={{ margin: "0 auto", marginTop: "100px" }}>
            This inbox is empty
          </h1>
        )}

        {props.Mails.map((email) => {
          return (
            <TabPanel value={value} index={props.Mails.indexOf(email)}>
              <div
                style={{
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
                  HeaderInfo={props.HeaderInfo}
                  inEmailText={props.inEmailText}
                ></EmailWindow>
              </div>
            </TabPanel>
          );
        })}
      </div>
    </div>
  );
}
