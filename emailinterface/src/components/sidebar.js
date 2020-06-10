import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useState, setState } from "react";

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
        <Box p={9}>
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
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 800,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    //added
    passNewValue(newValue);
  };
  //hand over current Email into sidebar props for Ryan x)
  const passNewValue = (newValue) => {
    //props.onNewEmail(newValue);
  };

  const reRender = () => {
    console.log("rendering new");
  };

  const respondeMail = () => {};
  const deleteMail = () => {};

  return (
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
            <SpecificEmail
              userName={props.userName}
              emailAdress={props.emailAdress}
            ></SpecificEmail>
            <div>
              <button
                onClick={() => {
                  props.onMoveToSpam(email.id);

                  reRender();
                }}
                style={{ color: "red", backgroundColor: "white" }}
              >
                Move to Spam
              </button>
              <button
                onClick={() => props.onRespondeMail(props.Mails.indexOf(email))}
                style={{ color: "red", backgroundColor: "white" }}
              >
                Respond
              </button>
              <button
                onClick={() => props.onRespondeMail(props.Mails.indexOf(email))}
                style={{ color: "red", backgroundColor: "white" }}
              >
                Delete
              </button>
            </div>
          </TabPanel>
        );
      })}
    </div>
  );
}
