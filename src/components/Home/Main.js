import React, { Component } from "react";
import _ from "lodash";
import "./../Home/Home.css";
import { connect } from "react-redux";
import TrelloList from "./../TrelloList/TrelloList";
import TrelloButton from "../Home/TrelloButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sortCardsOrder }  from "./../../redux/actions";
function Main(props) {
  const { lists } = props;
  //synchronously update the drag and drop state
  const onDragEnd = (result) => {
    debugger;
    //rendering logic
    // destination and source objects contains the infor  that where the draggable  started and where it is ended
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    props.dispatch(
      sortCardsOrder(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="Main">
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {(provided) => (
            <div
              className="listContainer"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {lists &&
                lists.map((list, index) => {
                  if (list) {
                    return (
                      <TrelloList
                        listID={list.id}
                        index={index}
                        key={list.id}
                        title={list.title}
                        cards={list.cards}
                      />
                    );
                  }
                })}
              <TrelloButton list />
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(Main);
