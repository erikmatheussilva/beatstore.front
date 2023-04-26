import { createContext, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import type { User } from '../models/user';
import { authApiEx } from '../API/AuthApiEx';
import { Claim } from '../models/claim';

interface State {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: User | null;
  selectedEntity: Object;
}
interface AuthContextValue extends State {
  platform: 'JWT';
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  setSelectedEntity: (entity: Object) => Promise<void>;
  passwordReset: (email: string, password: string, confirmPassword: string, code: string) => Promise<void>;
  register: (email: string, name: string, password: string, phoneNumber: string, firstName: string, lastName: string, cpfCnpj: string, role: string, dueDate: number, buildingId: string, claims: Array<Claim>) => Promise<void>;
  internalRegister: (email: string, password: string, phoneNumber: string, firstName: string, lastName: string, cpfCnpj: string, role: string, claims: Array<Claim>) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

type InitializeAction = {
  type: 'INITIALIZE';
  payload: {
    isAuthenticated: boolean;
    user: User | null;
  };
};

type LoginAction = {
  type: 'LOGIN';
  payload: {
    user: User;
  };
};

type LogoutAction = {
  type: 'LOGOUT';
};

type EntityAction = {
  type: 'ENTITY';
  payload: Object;
};

type RegisterAction = {
  type: 'REGISTER';
  payload: {
    user?: User;
  };
};

type Action =
  | InitializeAction
  | LoginAction
  | LogoutAction
  | RegisterAction
  | EntityAction;

const getLocalStorage = () => {
  const entityString = window.sessionStorage.getItem('selectedEntity');
  console.log('entityString', entityString);
  if (entityString) {
    return JSON.parse(entityString);
  }
  return { text: 'Cliente Não Selecionado', type: '' };
};

const initialState: State = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  selectedEntity: getLocalStorage(),
};

const handlers: Record<string, (state: State, action: Action) => State> = {
  INITIALIZE: (state: State, action: InitializeAction): State => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    };
  },
  LOGIN: (state: State, action: any): State => {
    const user = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  LOGOUT: (state: State): State => ({
    ...state,
    isAuthenticated: false,
    user: null
  }),
  REGISTER: (state: State, action: RegisterAction): State => {
    console.log('91', 'action', action);

    return {
      ...state,
      isAuthenticated: false,
      // user
    };
  },
  ENTITY: (state: State, action: any): State => {
    const selectedEntity = action.payload;

    return {
      ...state,
      selectedEntity
    };
  },
};

const reducer = (state: State, action: Action): State => (
  handlers[action.type] ? handlers[action.type](state, action) : state
);

const AuthContext = createContext<AuthContextValue>({
  ...initialState,
  platform: 'JWT',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  internalRegister: () => Promise.resolve(),
  passwordReset: () => Promise.resolve(),
  forgotPassword: () => Promise.resolve(),
  setSelectedEntity: () => Promise.resolve(),
});

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const login = async (email: string, password: string): Promise<void> => {
    const accessToken = await authApiEx.doAuthSupervisory(email, password);
    sessionStorage.setItem('token', accessToken.data.token);

    const { user } = accessToken.data;
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken.data.token}`;
    window.sessionStorage.setItem('token', `Bearer ${accessToken.data.token}`);
    dispatch({
      type: 'LOGIN',
      payload: user
    });

    switch (user.role) {
      case 'ADMIN':
        navigate('/authentication/condo-association-sign');
        break;
      default:
        navigate('/authentication/condo-association-sign');
        break;
    }
  };

  useEffect(() => {
    const initialize = async (): Promise<void> => {
      try {
        const accessToken = window.sessionStorage.getItem('token');
        console.log('accessToken', accessToken);
        if (accessToken) {
          axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
          const user = await authApiEx.me();

          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user
            }
          });
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null,
            }
          });
          window.sessionStorage.removeItem('token');
          axios.defaults.headers.common.Authorization = null;
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
        window.sessionStorage.removeItem('token');
        axios.defaults.headers.common.Authorization = null;
      }
    };

    initialize();
  }, []);

  const logout = async (): Promise<void> => {
    window.sessionStorage.removeItem('token');
    axios.defaults.headers.common.Authorization = null;
    dispatch({ type: 'LOGOUT' });
  };

  const register = async (
    body: any
  ): Promise<void> => {
    await authApiEx.register(body);
    dispatch({
      type: 'REGISTER',
      payload: {
        // user
      }
    });
  };

  const internalRegister = async (
    body: any
  ): Promise<void> => {
    await authApiEx.register(body);
  };

  const passwordReset = async (email: string, password: string, confirmPassword: string, code: string): Promise<void> => {
    await authApiEx.PostResetPassword(email, password, confirmPassword, code);
    dispatch({ type: 'LOGOUT' });
  };

  const forgotPassword = async (email: string): Promise<void> => {
    await authApiEx.ForgotPassword(email);
    dispatch({ type: 'LOGOUT' });
  };

  const setSelectedEntity = async (entityPayload: Object): Promise<void> => {
    window.sessionStorage.setItem('selectedEntity', JSON.stringify(entityPayload));
    dispatch({
      type: 'ENTITY',
      payload: entityPayload
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        platform: 'JWT',
        login,
        logout,
        register,
        internalRegister,
        passwordReset,
        forgotPassword,
        setSelectedEntity
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthContext;
