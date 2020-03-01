import {DATA_LOADED,ADD_PEOPLE, DO_NOTHING,FRIENDS_DATA,ADD_FRIEND,DELETE_PEOPLE,DELETE_FRIEND} from '../Constants/constants';


export function preventDataDuplication({ dispatch,getState }) {
    return function(next){
      return function(action){
        if(action.type === DATA_LOADED){
            let state = getState()
            if(state.people.length !== 0){
                return dispatch({type:DO_NOTHING})
            }   
        }
        else if(action.type === ADD_FRIEND){
            let state = getState()
            currentPeople = state.people
            updatedPeople = currentPeople.filter((person)=>{
                return person.email !== action.payload.email 
            })
            return dispatch({type:DELETE_PEOPLE,payload:{updatedPeople,person:action.payload}})
        }

        else if(action.type === DELETE_FRIEND){
            let state = getState()
            currentFriends = state.friends
            updatedFriends = currentFriends.filter((person)=>{
                return person.email !== action.payload.email
            })
            return dispatch({type:ADD_PEOPLE,payload:{updatedFriends,person:action.payload}})
        }
        return next(action);
      }
    }
  }

