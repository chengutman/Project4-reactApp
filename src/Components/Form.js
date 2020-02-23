import React ,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  textBox: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "35%",
    boxShadow: "0px 4px 14px rgba(23, 25, 50, 0.5)",
    borderRadius: "10px",
  },
  container:{
    height:"100%",
    display:"flex",
    flexDirection:"column",
    height: "42vh",
    width: "100%",
    background: "#1c233b",
    alignItems: "center",
    justifyContent: "space-around",
  },
  textForm:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    position: "relative",
    width: "90%",
    height: "100%"
  },
 
  input: {
    marginBottom: "1.7vh",
    height: "12.5%",
    background: "white",
    "& .MuiInputBase-root": {
      height: "100%",
      // zIndex:10
    }
  },
  description: {
    height: "16.7vh",
    background: "white",
    "& .MuiInputBase-root": {
      height: "100%",
      // zIndex:10
    }
  },
  btn: {
    border: "none",
    backgroundColor: "Transparent",
    width: "15%",
    height: "6vh"
  },
  plus: {
    color: "#FD5842",
    position: "absolute",
    fontSize: "54px",
    top:"92%",
    left:"40%",
    // zIndex:2
  }
});

export default function Form(props) {
  const [post, setPost] = useState({
    userId: "",
    title: "",
    body: "",
  });
 
  const onField = (field, e) => {
    let newRow = post;
    newRow[field] = e.target.value;
    setPost(newRow);
  };
    
  const handleSend = () => {
    props.onClickPlus(post);
  };

  const classes = useStyles();
  return (
    <div className={classes.textBox}>
      <div className={classes.container}>
      <form className={classes.textForm}>
        <TextField variant="outlined" className={classes.input} />
        <TextField className={classes.input}
          variant="outlined"
          onChange={e => onField("userId",e)}/>
        <TextField className={classes.input} 
          variant="outlined"
          onChange={e => onField("title",e)}/>
        <TextField className={classes.description}  
          variant="outlined"
          onChange={e => onField("body",e)}/>
    </form>
    <button className={classes.btn} onClick={handleSend}>
        <AddCircleSharpIcon className={classes.plus} />
      </button>
    </div>
    </div>
    
  );
}

