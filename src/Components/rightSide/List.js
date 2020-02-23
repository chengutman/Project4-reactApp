import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from "./Row";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
    list: {
    width: "30%",
    marginRight: "5%",
    height: "42vh",
    overflow: "auto"
  }
});

export default function RowList(props) {
  const classes = useStyle();
  const [item, setItem] = useState([]);
  const [changed, setChanged] = useState(0);
  const handleOnSave = (id, value, index) => {
    editText(id, value, index);
  };
  const handleOnDelete = (id, index) => {
    deleteRow(id, index);
  };

  const fetchData = async () => {
    try {
      const results = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      setItem(results.data);
      
    } catch (err) {
      console.log(err);
    }
  };

  const deleteRow = (id, index) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        let newItem = item;
        newItem.splice(index, 1);
        setItem(newItem);
        setChanged(changed+1);
      });
  };
  const editText = (id, text, index) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title: text
      })
      .then(res => {
        let newItem = item;
        newItem[index].title = text;
        setItem(newItem);
        setChanged(changed+1);
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  const createRow = () => {
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, props.row)
      .then(res => {
        let newRow = item;
        newRow.unshift(res.data);
        setItem(newRow);
        setChanged(changed + 1);
      });
  };
  useEffect(() => {
    console.log("1st useEffect")
    fetchData();
  }, []);
  
  useEffect(() => {console.log("2nd useEffect")}, [ changed]);
  useEffect(() => {
    console.log("3rd useEffect")
    if (props.rowIndex !== -1) {
        createRow();
    }
  }, [props.rowIndex]);


  return (
    <div className={classes.list}>
      <List>
        {item.map((post, index) => {
          return (
            <div>
              <Row
                title={post.title}
                key={index}
                Index={index}
                Id={post.id}
                Save={handleOnSave}
                onDelete={handleOnDelete}
              />
              <Divider />
            </div>
          );
        })}
      </List>
    </div>
  );
}
