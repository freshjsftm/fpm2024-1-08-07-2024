import TYPES from './actionTypes';
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.DATA_LOAD_PENDING: {
      return {
        ...state,
        isPending: payload,
      };
    }
    case TYPES.DATA_LOAD_SUCCESS: {
      const { users, messages } = payload;
      const usersMap = new Map();
      users.forEach((user) => usersMap.set(user.id, user));
      const messagesWithAuthor = messages.map((message) => ({
        ...message,
        author: usersMap.get(message.authorId),
      }));
      return {
        ...state,
        isPending: false,
        users,
        messages: messagesWithAuthor,
      };
    }
    case TYPES.DATA_LOAD_ERROR: {
      return {
        ...state,
        isPending: false,
        error: payload,
      };
    }
    default:
      break;
  }
  return state;
};

export default reducer;
