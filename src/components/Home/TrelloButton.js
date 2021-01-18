import React, { useState } from "react";
import "./../Home/Home.css";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import Textarea from "react-textarea-autosize";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addList, addCard } from "./../../redux/actions";


export const TrelloButton = (props) => {
  const [formOpen, setFormOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const openForm = () => {
    setFormOpen(true);
  };
  const closeForm = (e) => {
    e.preventDefault();
    setFormOpen(false);
    setUserInput("");
  };

  const handleInput = (e) => {
    if (e.target.value === "") {
      setUserInput("");
    } else {
      setUserInput(e.target.value);
    }
  };
  const handleAddList = (e) => {
  
    setUserInput(e.target.value);
    const { dispatch } = props;
    if (userInput) {
      setUserInput("");
      dispatch(addList(userInput));
    }
    return;
  };

  const handleAddCard = (e) => {
    debugger;
    const { dispatch, listID } = props;
    console.log("id", listID);
    //const {userInput}=state;
    if (userInput) {
      setUserInput("");
      dispatch(addCard(listID, userInput));
    }
    return;
  };
  const showForm = () => {
    const { list } = props;
    const placeholder = list ? "Enter a  Title" : "Enter a Card Title...";
    const buttonTitle = list ? "Add Title" : "Add Card";
    return (
      <div className="">
        <Card className="cardTextArea">
          <Textarea
            className="textBox"
            placeholder={placeholder}
            autoFocus
            onBlur={closeForm}
            value={userInput}
            onChange={handleInput}
          ></Textarea>
        </Card>
        <div>
          <Button
            variant="contained"
            onMouseDown={list ? handleAddList : handleAddCard}
          >
            {buttonTitle}{" "}
          </Button>
          <Icon style={{ marginLeft: 100, marginTop: 10, cursor: "pointer" }}>
            close
          </Icon>
        </div>
      </div>
    );
  };
  const showAddButton = () => {
    const { list } = props;
    const buttonText = list ? "Add another List" : "Add another Card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";
    return (
      <div
        className="buttonGroup"
        onClick={openForm}
        style={{
          Opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
      >
        <Icon style={{ marginTop: 6 }}>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };
  return <div>{formOpen ? showForm() : showAddButton()}</div>;
};



export default connect()(TrelloButton);
