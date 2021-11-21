export const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };

    case 'showText':
      return { ...state, showText: !state.showText };

    default:
      return state;
  }
};

export const animeReducer = (state, action) => {
  // TODO: Need to use this
  switch (action.type) {
    case 'setDetails':
      return { ...state, details: action.payload };

    case 'setImages':
      return { ...state, images: action.payload };
    default:
      return state;
  }
};
