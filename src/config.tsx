import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Upload from 'src/icons/Upload';

export const amplifyConfig = {
  aws_project_region: process.env.REACT_APP_AWS_PROJECT_REGION,
  aws_cognito_identity_pool_id: process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.REACT_APP_AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.REACT_APP_AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id: process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID
};

export const auth0Config = {
  client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
  domain: process.env.REACT_APP_AUTH0_DOMAIN
};

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
};

export const gtmConfig = {
  containerId: process.env.REACT_APP_GTM_CONTAINER_ID
};

export const QodelessApiConfig = {
  baseURL: 'https://api.administrei.com.br/api/'
  // baseURL: 'http://localhost:5000/api/'

};

export const QodelessConfig = {
  baseURL: 'http://localhost:3000/'
};

export const sidebarConfig = [
  {
    requiredRole: 'ADMIN',
    title: 'Carteira',
    path: '/carteira',
    claims: [],
    icon: <Upload fontSize="small" />
  },
];

export const offlineSidebarConfig = [
  {
    title: 'BEATS',
    path: '/',
    icon: <FontAwesomeIcon icon={faCompactDisc} />
  },
  // {
  //   title: 'Map',
  //   path: '/browse/map',
  //   icon: <FontAwesomeIcon icon={faCompactDisc} />
  // },
];
