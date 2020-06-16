import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import EmailIcon from "@material-ui/icons/Email";
import EmailWindow from "./emailWindow";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import ErrorIcon from "@material-ui/icons/Error";

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
    flexGrow: 1,
    backgroundColor: "white",
    display: "flex",
    height: 500,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  var styles = {
    buttonsSidebar: {
      color: "red",
      backgroundColor: "white",
      margin: "3px",
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);

    //added
    passNewValue(newValue);
  };
  //hand over current Email into sidebar props for Ryan x)
  const passNewValue = (newValue) => {
    //props.onNewEmail(newValue);
  };

  return (
    <div>
      {/*<div style={{ backgroundColor: "red", width: 1000, height: 50 }}>
        <div>
          <h1
            style={{
              color: "white",
              textshadow: "5px 5px white",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            Email Inbox{" "}
            <EmailIcon
              style={{
                verticalAlign: "middle",
              }}
            ></EmailIcon>
          </h1>
        </div>
            </div>*/}
      <div className={classes.root} style={{ width: 1000 }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {props.Mails.map((email) => {
            return (
              <Tab
                label={email.title}
                {...a11yProps(props.Mails.indexOf(email))}
              />
            );
          })}
        </Tabs>

        {props.Mails.map((email) => {
          const SpecificEmail = email.mail;

          return (
            <TabPanel value={value} index={props.Mails.indexOf(email)}>
              <EmailWindow value={3}></EmailWindow>
              <SpecificEmail
                userName={props.userName}
                emailAdress={props.emailAdress}
              ></SpecificEmail>
              <div>
                <Button
                  startIcon={<ErrorIcon />}
                  style={styles.buttonsSidebar}
                  variant="contained"
                  onClick={() => {
                    props.onMoveToSpam(email.id);
                  }}
                >
                  Move to Spam
                </Button>
                <Button
                  style={styles.buttonsSidebar}
                  startIcon={<CreateIcon />}
                  variant="contained"
                  onClick={() => {
                    props.onMoveToBin(email.id);
                  }}
                >
                  Respond
                </Button>
                <Button
                  style={styles.buttonsSidebar}
                  startIcon={<DeleteIcon />}
                  variant="contained"
                  onClick={() => {
                    props.onMoveToBin(email.id);
                  }}
                >
                  Delete
                </Button>
              </div>
            </TabPanel>
          );
        })}
      </div>
    </div>
  );
}
