import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Mail1 from "./mails/mail1";
import Mail2 from "./mails/mail2";
import Mail3 from "./mails/mail3";

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

  const emails = [
    { mail: Mail1, id: 1, title: "Email 1", type: "all" },
    { mail: Mail2, id: 2, title: "Email 2", type: "all" },
    { mail: Mail3, id: 3, title: "Email 3", type: "spam" },
    { mail: Mail1, id: 4, title: "Email 4", type: "all" },
    { mail: Mail2, id: 5, title: "Email 5", type: "all" },
    { mail: Mail3, id: 6, title: "Email 6", type: "all" },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);

    //added
    passNewValue(newValue);
  };
  //hand over current Email into sidebar props for Ryan x)
  const passNewValue = (newValue) => {
    props.onNewEmail(newValue);
  };

  const logger = (toBeLogged) => {
    console.log(toBeLogged);
  };

  const moveToSpam = (mailID) => {
    emails[mailID].type = "spam";
    console.log(emails[mailID].type);
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
        {emails.map((email) => {
          if (email.type != "spam") {
            return (
              <Tab label={email.title} {...a11yProps(emails.indexOf(email))} />
            );
          }
        })}
      </Tabs>

      {emails.map((email) => {
        const SpecificEmail = email.mail;
        return (
          <TabPanel value={value} index={emails.indexOf(email)}>
            <SpecificEmail></SpecificEmail>
            <div>
              <button
                onClick={() => moveToSpam(emails.indexOf(email))}
                style={{ color: "red", backgroundColor: "white" }}
              >
                Move to Spam
              </button>
              <button
                onClick={() => respondeMail(emails.indexOf(email))}
                style={{ color: "red", backgroundColor: "white" }}
              >
                Respond
              </button>
              <button
                onClick={() => deleteMail(emails.indexOf(email))}
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
