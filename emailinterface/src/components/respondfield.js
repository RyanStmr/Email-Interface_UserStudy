import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "500px",
      height: "100px",
      float: "left",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
    },
  },
}));

export default function MultilineTextFields(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="filled-secondary"
          color="secondary"
          label="Response"
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
          onChange={handleChange}
        />
        <div>
          <Button
            variant="contained"
            onClick={() => {
              props.Response(value);
            }}
            style={{
              marginTop: "15px",
              marginLeft: "25px",
              color: "#f2f3f2",
              backgroundColor: "#ff5353",
            }}
          >
            Send
          </Button>
        </div>
      </div>
    </form>
  );
}
