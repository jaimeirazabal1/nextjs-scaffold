
import { applyMiddleware, compose,createStore, Reducer } from 'redux';
import { StateType } from 'typesafe-actions'
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


interface IinitialState {
  // Aquí puedes establecer el estado inicial de tu aplicación
  auth:{
    username:string | null;
    roleId:number | null;
  }
}

const initialState:IinitialState = {
  // Aquí puedes establecer el estado inicial de tu aplicación
  auth:{
    username:null,
    roleId:null
  }
};

const reducer: Reducer<IinitialState> = (state = initialState, action) => {
  // Aquí puedes escribir las funciones reductoras que manejarán las acciones
  // y actualizarán el estado de tu aplicación
  console.log(action);
  switch (action.type) {
    
    case 'LOGIN':
      return { ...state, 
        auth: {
          username:action.payload[0].username,
          roleId:action.payload[0].roleId
        }
      };
    default:
      return state;
  }
};

const store = createStore(reducer, composeEnhancers(applyMiddleware()));

export type RootState = StateType<typeof reducer>
export default store;
