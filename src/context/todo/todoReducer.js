import types from '../types';

// Новая запись Reducer
// [types.ADD_TODO] будет записан ключ по типу

const handlers = {
  [types.ADD_TODO]: (state, { payload }) => ({
    ...state,
    todos: [
      ...state.todos,
      {
        id: Date.now().toString(),
        title: payload,
      },
    ],
  }),

  [types.REMOVE_TODO]: (state, { payload }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== payload),
  }),
  [types.EDIT_TODO]: (state, { payload }) => ({
    ...state,

    todos: state.todos.map((todo) => {
      if (todo.id === payload.id) {
        todo.title = payload.title;
      }
      return todo;
    }),
  }),

  DEFAULT: (state) => state,
};

export const todoReducer = (state, action) => {
  // если не будет передан тип то выполнится handlers.DEFAULT
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

//Стандартная запись Reducer

// export const todoReducer = (state, { type, payload }) => {
//   switch (type) {
//     case types.ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             id: Date.now().toString(),
//             title: payload,
//           },
//         ],
//       };
//     case types.EDIT_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo) => {
//           if (todo.id === payload.id) {
//             todo.title = payload.title;
//           }
//           return todo;
//         }),
//       };
//     case types.REMOVE_TODO:
//       return { ...state, todos: state.todos.filter((todo) => todo.id !== payload) };
//     default:
//       return state;
//   }
// };
