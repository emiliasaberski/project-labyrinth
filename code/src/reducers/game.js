import { createSlice } from '@reduxjs/toolkit';

const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    position: '',
    loading: false
    // ev history
  },
  reducers: {
    setLoading: (store, action) => {
      store.loading = action.payload;
    },
    setPosition: (store, action) => {
      store.position = action.payload;
    },
    setUsername: (store, action) => {
      store.username = action.payload;
    }
  }
})

export default game;

// Here goes the thunk
export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().game.username
      })
    };
    fetch('https://labyrinth.technigo.io/start', options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setPosition(data))
      })
      .catch((error) => console.error(error))
      .finally(() => dispatch(game.actions.setLoading(false)))
  }
}