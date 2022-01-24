// 액션
export const increase = (username) => ({
  type: 'INCREMENT',
  payload: username,
});
export const decrease = () => ({
  type: 'DECREMENT',
});

// 상태
const initstate = {
  username: '',
  number: 1,
};

// 액션의 결과를 걸러내는 친구
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { number: state.number + 1, username: action.payload };
    // return하면 호출되는 쪽에서 받는 게 아니라 액션 요청하여 리턴되는 순간 상태값이 바뀐다.
    case 'DECREMENT':
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default reducer;
