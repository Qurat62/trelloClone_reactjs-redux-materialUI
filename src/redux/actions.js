import { CONSTANTS } from "../redux/actionTypes";


export function addList(title)

 {
     return{
        type: CONSTANTS.ADD_LIST,
        payload:title
     }
   
  }
  export function addCard(listID,text)
  {
      return{
         type: CONSTANTS.ADD_CARD,
         payload:{listID,text}
      }
    
   }
export function editListTitle (listID, newListTitle)  {
  return {
    type: CONSTANTS.EDIT_LIST_TITLE,
    payload: {
      listID,
      newListTitle,
    },
  };
};
export function deleteList(listID)
{

  return {
    type: CONSTANTS.DELETE_LIST,
    payload: { listID },
  };
};
export function deleteCard(listID,cardID)
{
  
  return {
    type: CONSTANTS.DELETE_CARD,
    payload: { listID,cardID },
  };
};
export function editCard(listID,cardID)
{
  
  return {
    type: CONSTANTS.EDIT_CARD,
    payload: { listID,cardID },
  };
};

  export function sortCardsOrder(droppableStart,droppableEnd,droppableIndexStart,droppableIndexEnd,draggableId,type)
  {
      return{
      type: CONSTANTS.DRAG_CARD,
      payload:
      {
          droppableStart,
          droppableEnd,
          droppableIndexStart,
          droppableIndexEnd,
          draggableId,
          type

      }
      }
  }
  
