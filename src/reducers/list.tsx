export default function list(state = {data: []}, action: any) {
  switch (action.type) {
    case 'GET_LIST_DATA':
      // let count = action.payload;
      console.log('reducer : ' + JSON.stringify(action.payload));
      return {...state, data: action.payload};

    default:
      return state;
  }
}
