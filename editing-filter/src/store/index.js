import { nanoid } from 'nanoid';
import { createStore} from 'redux';



const services = (state = [], action) => {
    switch (action.type) {
      case "ADD_SERVICE": {
        return [
          ...state,
          {
            id: nanoid(),
            name: action.name,
            price: action.price
          }
        ];
      }
      case "REMOVE_SERVICE": {
        return state.filter((service) => service.id !== action.id);
      }
      
      default: {
        return state;
      }
    }
  };

  export const addService = ({name, price}) => ({
    type: "ADD_SERVICE",
    name,
    price
  });
  export const removeService = (id) => ({
    type: "REMOVE_SERVICE",
    id
  });

const store = createStore(services);
export default store;
