// We set set our default state to an object which we will add a property to, we could just store the ID but this way we can add new properties later if required.

export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        uid: action.uid,
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};
