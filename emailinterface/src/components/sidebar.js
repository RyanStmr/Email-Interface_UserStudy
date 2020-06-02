import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import EmailIcon from "@material-ui/icons/Email";
import Mail1 from "./mails/mail1";
import Mail2 from "./mails/mail2";

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
    props.onNewEmail(newValue);
  };

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
        <Tab label={"Inbox (7)"} {...a11yProps(0)} style={{ color: "red" }} />
        <Tab label="Mail 1" {...a11yProps(1)} />
        <Tab label="Mail 2" {...a11yProps(2)} />
        <Tab label="Mail 3" {...a11yProps(3)} />
        <Tab label="Mail 4" {...a11yProps(4)} />
        <Tab label="Mail 5" {...a11yProps(5)} />
        <Tab label="Mail 6" {...a11yProps(6)} />
        <Tab label="Mail 7" {...a11yProps(7)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        Welcome to our study
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Mail1></Mail1>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Mail2></Mail2>
      </TabPanel>
      <TabPanel value={value} index={3}></TabPanel>
      <TabPanel value={value} index={4}>
        Mail Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={8}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={9}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={10}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={11}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={12}>
        Item Seven
      </TabPanel>
    </div>
  );
}
