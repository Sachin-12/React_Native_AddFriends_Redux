import {DATA_LOADED,LOAD_PEOPLE, DO_NOTHING, ADD_FRIEND,FRIENDS_DATA,DELETE_PEOPLE, ADD_PEOPLE} from '../Constants/constants';

const initialState ={
    people:[],
    friends:[]
}
function rootReducer(state = initialState, action) {
    // console.log("inside reducer")
    // console.log(action.type)
    // console.log(action.payload)
    if(action.type === DATA_LOADED){
        // console.log(action.payload)
      return Object.assign( 
        {},
        state,
        {people: state.people.concat(action.payload)}
        )
    }
    if(action.type === DO_NOTHING){
        return state
    }
    if(action.type === ADD_FRIEND){
        console.log(action.payload)
        return Object.assign(
            {},
            state,
            {friends:state.friends.concat(action.payload)}
        )
    }
    if(action.type === FRIENDS_DATA){
        return state
    }
    if(action.type === DELETE_PEOPLE){
        return Object.assign(
            {},
            state,
            {people:action.payload.updatedPeople,friends:state.friends.concat(action.payload.person)}
        )
    }
    if(action.type === LOAD_PEOPLE){
        return state
    }
    if(action.type === ADD_PEOPLE){
        return Object.assign(
            {},
            state,
            {friends:action.payload.updatedFriends,people:state.people.concat(action.payload.person)}
        )
    }
    
    return state;
  }
  
export default rootReducer;