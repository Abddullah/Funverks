const INITIAL_STATE = {
  isError: null,
  isLoader: false,
  userToken: null,
  trainings: null,
  mytrainings: null,
  userprofile: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ISERROR":
      return {
        ...state,
        isError: action.payload
      };
    case "ISLOADER":
      return {
        ...state,
        isLoader: !state.isLoader
      };
    case "TOKENSET":
      return {
        ...state,
        userToken: action.payload
      };
    case "TRAINING":
      return {
        ...state,
        trainings: action.payload
      };
    case "MYTRAININGS":
      return {
        ...state,
        mytrainings: action.payload
      };
    case "USERPROFILE":
      return {
        ...state,
        userprofile: action.payload
      };
    default:
      return state;
  }
};
