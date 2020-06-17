import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "500px",
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
          id="outlined-multiline-static"
          label="Response"
          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
          onChange={handleChange}
        />
      </div>
      <Button
        variant="contained"
        onClick={() => {
          props.Response(value);
        }}
      >
        Send
      </Button>
    </form>
  );
}
