import { CONSTANTS } from "../redux/actionTypes";

let listID = 2;
let cardID = 2;

const initialState = [
  {
    title: "1st Episode",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${1}`,
        text: "hi",
      },
     
    ],
  },
 
];

const listsReducers = (state = initialState, action) => {

  switch (action.type) {

    
    case CONSTANTS.ADD_LIST: {
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`,
      };
      listID += 1;

      
        return [...state,newList];
    }
    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`,
      };
      cardID += 1;
      
      const newState = state.map((list) => {
        if (list != undefined && list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });

      return newState;
    }
    case CONSTANTS.EDIT_CARD: {
        const { listID, cardID, cardText } = action.payload;
        
        const newState = state.map( list => {
          if(list != undefined && list.id === listID){
            list.cards.map(c => {
              if(c.id === cardID){
                return { ...c, text : cardText };
              }
              return c;
            });
            return { ...list };
          }
          return list;
        });
     
        return newState;
      }
    case CONSTANTS.DELETE_CARD: {
        const { listID,cardID } = action.payload;

        const newState = state.map((list) => {
          if (list != undefined && list.id === listID) {
            return { ...list, cards: list.cards.filter((c) => c.id !== cardID) };
            
          }
  
          return { ...list };
        });
  
        return newState;
      }
      case CONSTANTS.DELETE_LIST: {
        const { listID } = action.payload;
        console.log("delete list id", listID);
        
       // const newState = { ...state };
           
         const newState=state.map((list)=>
        {  
            console.log("shoe map list",list);
            if(list != undefined && list.id!==listID)
          {
          return{...list};
          }
        })  
        console.log("newState",newState);
        return newState;
      }
      case CONSTANTS.EDIT_LIST_TITLE: {
            
              const { listID, newListTitle } = action.payload;
              const newState = state;
              return newState;
          
            }
    case CONSTANTS.DRAG_CARD:
      const {
        droppableStart,
        droppableEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type
      } = action.payload;
      const newState = [...state];

      if(type==="list")
      {
        //grab the list from newState. newState is an array of list
        const pickListBox=newState.splice(droppableIndexStart,1);
        newState.splice(droppableIndexEnd,0,...pickListBox);
        return newState;
      }
      //in same list
      if (droppableStart === droppableEnd) {
        
        const list = state.find((list) => droppableStart === list.id);
        //from droppableIndexEnd we need to remove one item
        const card = list.cards.splice(droppableIndexStart, 1); 
    
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      if(droppableStart !== droppableEnd)
      {
        //other list in which we need to move
        const nextListStart=state.find((list) => droppableStart === list.id);
        //find the list from where card is dragged
        const card =nextListStart.cards.splice(droppableIndexStart,1);
        //find the list where dragged item will be placed
        const nextListEnd=state.find((list=>droppableEnd===list.id));
        //put the card in the new list
        nextListEnd.cards.splice(droppableIndexEnd,0,...card);
      }
      return newState;
    default:
      return state;
  }
};
export default listsReducers;
