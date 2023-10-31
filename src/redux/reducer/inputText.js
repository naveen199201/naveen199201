const initialState = {
    inputValue: '', // Initial state for inputText
    // searchTerm:'',
  };
  
  const inputReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_INPUT_TEXT":
        return {
          ...state,
          inputValue: action.payload,
        };

      // case "SET_SEARC_TERM":
      //     return {
      //       ...state,
      //       searchTerm: action.payload,
      //     };
      default:
          return state;
        
    }
  };
  
  export default inputReducer;

  