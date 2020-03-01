import {DATA_LOADED,FRIENDS_DATA,ADD_FRIEND,DELETE_FRIEND,LOAD_PEOPLE} from '../Constants/constants';

export function getPeopleData() {
    // console.log("inside thunk")
  return function(dispatch){
  return fetch("https://reqres.in/api/users?page=2")
    .then(response => response.json())
    .then(json => {
        // console.log(json.data)
        json = json.data
      dispatch({ type: DATA_LOADED, payload: json });
    })
    .catch(err=>{
        console.log(err)
    })
}
}

export function getPeopleDataFromState(){
    return {type:LOAD_PEOPLE}
}

export function getFriendsData() {
    // console.log("inside thunk")
  return { type: FRIENDS_DATA}
}

export function addFriend(payload){
    return {type:ADD_FRIEND,payload}
}

export function removeFriend(payload){
    return { type: DELETE_FRIEND,payload}
}