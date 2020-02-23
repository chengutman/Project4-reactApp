import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  textArea: {
    backgroundColor: "#1c233b",
    color: "white",
    display: "flex"
  },
  changeData: {
    backgroundColor: "white"
  }
}));

export default function Row(props) {
  const classes = useStyles();
  let Data;
  const [edit, setEdit] = useState(true);
  const [item, setItem] = useState("");

  const SaveHandler = () => {
    props.Save(props.Id, item, props.Index);
    setEdit(false);
  };

  if (edit) {
    Data = (
      <ListItem className={classes.textArea}>
        <ListItemText primary={props.title} />
        <IconButton
          style={{ color: "white" }}
          edge="end"
          onClick={() => setEdit(false)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          style={{ color: "#FD5842" }}
          edge="end"
          onClick={() => props.onDelete(props.Id, props.Index)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
    );
  } else {
    Data = (
      <ListItem className={classes.textArea}>
        <TextField
          className={classes.changeData}
          placeholder={props.title}
          onChange={e => setItem(e.target.value)}
        />
        <ListItemSecondaryAction>
          <IconButton
            style={{ color: "white" }}
            edge="end"
            onClick={SaveHandler}
          >
            <DoneIcon />
          </IconButton>
          <IconButton
            style={{ color: "#FD5842" }}
            edge="end"
            onClick={() => {
              setEdit(true);
            }}
          >
            <CloseIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }

  return Data;
}
