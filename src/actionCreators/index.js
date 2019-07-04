import * as types from '../actionTypes/ActionTypes'


export function changeWord(name) {
    return {
        type: types.CHANGE_NAME,
        name
    }
}

export function changeNumber(number){
    return {
        type: types.CHANGE_NUMBER,
        number
    }
}

export const  fetchPosts = (name,number) => dispatch => {
    console.log('hello')
    dispatch(changeWord(name))
      .then(dispatch(changeNumber(number)))
  }


