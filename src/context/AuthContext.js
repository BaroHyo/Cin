import * as React from 'react';
import { AuthReducer } from '../reducers/AuthReducer';

export const AuthContext = React.createContext({});

const authInicialState = {
  status: 'checking',
  codigo: null,
  user: null,
  errorMessage: '',
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(AuthReducer, authInicialState);

  return (
    <AuthContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
