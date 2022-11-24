import { createContext, useReducer } from "react";

const initialState = {
    tasks: null,
  setTask: (task) => {},
};

const TaskContext = createContext(initialState);

const taskReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return { ...state, tasks: action.tasks };
    default:
      return state;
  }
};

export const TaskContextProvider = (props) => {
  const [taskState, dispatchTask] = useReducer(taskReducer, initialState);

  const setTaskHandler = (tasks) => {
    dispatchTask({ type: "SET_TASKS", tasks });
  };

  const content = {
    ...taskState,
    setTasks: setTaskHandler,
  };
  return (
    <TaskContext.Provider value={content}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
