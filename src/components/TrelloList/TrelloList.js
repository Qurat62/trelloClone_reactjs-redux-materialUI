import React, { Component, useState } from "react";
import _ from "lodash";
import "./../Home/Home.css";
import "../TrelloList/TrelloList.css";
import { connect } from "react-redux";
import TrelloCard from "./../TrelloCard/TrelloCard";
import TrelloButton from "./../Home/TrelloButton";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Droppable, Draggable } from "react-beautiful-dnd";
import {editListTitle,deleteList} from "./../../redux/actions";

const TrelloList = ({ title, cards, listID, index,dispatch}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [listTitle, setListTitle] = useState(title);
  const renderEditInput = () => {
    return (
      <form onSubmit={handleEditting}>
        <input
          type="text"
          value={listTitle}
          onChange={handleChange}
          autoFocus
          onFocus={handleFocus}
          onBlur={handleEditting}
        />
      </form>
    );
  };
  const handleEditting = (e) => {
    debugger;
    setIsEditing(false);

    dispatch(editListTitle(listID, listTitle));
  };
  const handleFocus = (e) => {
    e.target.select();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setListTitle(e.target.value);
  };
  const handleDeleteList = (e) => {
    debugger;
    console.log("List: delete list: ", listID);
     dispatch(deleteList(listID));
  };
  return (
    //ref used to point to the dom node
    <Draggable draggableId={String(listID)} index={index}>
      {(provided) => (
        <div
          className="container"
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}>
          <Droppable droppableId={String(listID)}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <Button
                  className="btnColorWhite"
                  onMouseDown={handleDeleteList}
                >
                  {" "}
                  {<DeleteIcon />}{" "}
                </Button>

                {isEditing ? (
                  renderEditInput()
                ) : (
                  <div className="titleContainer">
                    {/* shows old title {title} */}
                    <h3>{listTitle}</h3>
                    <Button
                      className="btnColorWhite"
                      onClick={() => setIsEditing(true)}
                    >
                      {" "}
                      {<EditIcon />}{" "}
                    </Button>
                  </div>
                )}

                {cards.map((card, index) => (
                  <TrelloCard
                    key={card.id}
                    index={index}
                    text={card.text}
                    cardID={card.id}
                    listID={listID}
                  />
                ))}
                <TrelloButton listID={listID} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default connect()(TrelloList);
