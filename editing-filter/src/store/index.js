import { nanoid } from "nanoid";
import { combineReducers, createStore } from "redux";

const initialState = localStorage.getItem("services")
  ? JSON.parse(localStorage.getItem("services"))
  : [];

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_SERVICE": {
      const result = [
        ...state,
        {
          id: nanoid(),
          name: action.name,
          price: action.price,
        },
      ];
      localStorage.setItem("services", JSON.stringify(result));
      return result;
    }

    case "REMOVE_SERVICE": {
      const result = state.filter((service) => service.id !== action.id);
      localStorage.setItem("services", JSON.stringify(result));
      return result;
    }

    case "EDIT_SERVICE": {
      const result = state.map((service) => {
        if (service.id === action.id) {
          return { ...service, name: action.name, price: action.price };
        } else {
          return service;
        }
      });
      localStorage.setItem("services", JSON.stringify(result));
      return result
    }

    case "SEARCH_SERVICE": {
      if (!action.search.length)
        return JSON.parse(localStorage.getItem("services"));
      return state.filter((service) => service.name.includes(action.search));
    }

    default: {
      return state;
    }
  }
};

const editReducer = (state = false, action) => {
  switch (action.type) {
    case "EDIT_MODE": {
      return true;
    }
    case "ADD_MODE": {
      return false;
    }
    default: {
      return state;
    }
  }
};

const formReducer = (state = { name: "", price: "" }, action) => {
  switch (action.type) {
    case "CHANGE_NAME": {
      return { ...state, name: action.name };
    }

    case "CHANGE_PRICE": {
      return { ...state, price: action.price };
    }

    case "CHANGE_ID": {
      return { ...state, id: action.id };
    }
    default: {
      return state;
    }
  }
};

export const changeName = (name) => ({
  type: "CHANGE_NAME",
  name,
});

export const changePrice = (price) => ({
  type: "CHANGE_PRICE",
  price,
});

export const changeId = (id) => ({
  type: "CHANGE_ID",
  id,
});

export const addService = ({ name, price }) => ({
  type: "ADD_SERVICE",
  name,
  price,
});

export const removeService = (id) => ({
  type: "REMOVE_SERVICE",
  id,
});

export const editService = ({ id, name, price }) => ({
  type: "EDIT_SERVICE",
  id,
  name,
  price,
});

export const searchService = (search) => ({
    type: "SEARCH_SERVICE",
    search,
  });

const rootReducer = combineReducers({
  serviceAdd: servicesReducer,
  serviceEdit: editReducer,
  serviceForm: formReducer,
});

const store = createStore(rootReducer);
export default store;
