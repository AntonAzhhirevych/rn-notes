import types from '../types';

export const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case types.FETCH_TODOS:
      return { ...state, todos: payload };

    case types.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now().toString(),
            title: payload,
          },
        ],
      };
    case types.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload.id) {
            todo.title = payload.title;
          }
          return todo;
        }),
      };
    case types.REMOVE_TODO:
      return { ...state, todos: state.todos.filter((todo) => todo.id !== payload) };

    case types.SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };

    case types.HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };

    case types.CLEAR_ERROR:
      return { ...state, error: null };

    case types.SHOW_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

//Один из вариантов записи редюсера

// [types.ADD_TODO] будет записан ключ по типу

// const handlers = {
//   [types.ADD_TODO]: (state, { payload }) => ({
//     ...state,
//     todos: [
//       ...state.todos,
//       {
//         id: Date.now().toString(),
//         title: payload,
//       },
//     ],
//   }),

//   [types.REMOVE_TODO]: (state, { payload }) => ({
//     ...state,
//     todos: state.todos.filter((todo) => todo.id !== payload),
//   }),
//   [types.EDIT_TODO]: (state, { payload }) => ({
//     ...state,

//     todos: state.todos.map((todo) => {
//       if (todo.id === payload.id) {
//         todo.title = payload.title;
//       }
//       return todo;
//     }),
//   }),

//   DEFAULT: (state) => state,
// };

// export const todoReducer = (state, action) => {
//   // если не будет передан тип то выполнится handlers.DEFAULT
//   const handler = handlers[action.type] || handlers.DEFAULT;
//   return handler(state, action);
// };
