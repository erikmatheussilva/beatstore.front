import { Suspense, lazy } from 'react';
import { PartialRouteObject, Route } from 'react-router';
import { Navigate } from 'react-router-dom';
import AuthGuard from './components/AuthGuard';
import BlogLayout from './components/blog/BlogLayout';
import BrowseLayout from './components/BrowseLayout';
import DashboardLayout from './components/dashboard/DashboardLayout';
import DocsLayout from './components/docs/DocsLayout';
import GuestGuard from './components/GuestGuard';
import LoadingScreen from './components/LoadingScreen';
import HomeLayout from './components/HomeLayout';
import { ImportWallet } from './components/blog';
import AclGuard from './components/AclGuard';

const Loadable = (Component) => (props) => (<Suspense fallback={<LoadingScreen />}><Component {...props} /></Suspense>);

// Browse pages
const Browse = Loadable(lazy(() => import('./pages/browse/Browse')));
const BrowseButtons = Loadable(lazy(() => import('./pages/browse/BrowseButtons')));
const BrowseCharts = Loadable(lazy(() => import('./pages/browse/BrowseCharts')));
const BrowseColors = Loadable(lazy(() => import('./pages/browse/BrowseColors')));
const BrowseDetailLists = Loadable(lazy(() => import('./pages/browse/BrowseDetailLists')));
const BrowseForms = Loadable(lazy(() => import('./pages/browse/BrowseForms')));
const BrowseGridLists = Loadable(lazy(() => import('./pages/browse/BrowseGridLists')));
const BrowseGroupedLists = Loadable(lazy(() => import('./pages/browse/BrowseGroupedLists')));
const BrowseInputs = Loadable(lazy(() => import('./pages/browse/BrowseInputs')));
const BrowseModals = Loadable(lazy(() => import('./pages/browse/BrowseModals')));
const BrowseQuickStats = Loadable(lazy(() => import('./pages/browse/BrowseQuickStats')));
const BrowseTables = Loadable(lazy(() => import('./pages/browse/BrowseTables')));
const BrowseTypography = Loadable(lazy(() => import('./pages/browse/BrowseTypography')));

// Authentication pages
const Login = Loadable(lazy(() => import('./pages/authentication/Login')));
const PasswordRecovery = Loadable(lazy(() => import('./pages/authentication/ResetPasswordViewIndex')));
const ForgotPassword = Loadable(lazy(() => import('./pages/authentication/ForgotPasswordViewIndex')));
const RegisterAdvice = Loadable(lazy(() => import('./pages/authentication/RegisterAdvice')));
const Register = Loadable(lazy(() => import('./pages/authentication/Register')));
const VerifyCode = Loadable(lazy(() => import('./pages/authentication/VerifyCode')));

// Blog pages
const BlogPostCreate = Loadable(lazy(() => import('./pages/blog/BlogPostCreate')));
const BlogPostDetails = Loadable(lazy(() => import('./pages/blog/BlogPostDetails')));
const BlogPostList = Loadable(lazy(() => import('./pages/blog/BlogPostList')));

// Dashboard pages
const Analytics = Loadable(lazy(() => import('./pages/dashboard/Analytics')));
const Calendar = Loadable(lazy(() => import('./pages/dashboard/Calendar')));
const Chat = Loadable(lazy(() => import('./pages/dashboard/Chat')));
const CustomerDetails = Loadable(lazy(() => import('./pages/dashboard/CustomerDetails')));
const CustomerEdit = Loadable(lazy(() => import('./pages/dashboard/CustomerEdit')));
const CustomerList = Loadable(lazy(() => import('./pages/dashboard/CustomerList')));
const Finance = Loadable(lazy(() => import('./pages/dashboard/Finance')));
const Kanban = Loadable(lazy(() => import('./pages/dashboard/Kanban')));
const Mail = Loadable(lazy(() => import('./pages/dashboard/Mail')));
const OrderDetails = Loadable(lazy(() => import('./pages/dashboard/OrderDetails')));
const OrderList = Loadable(lazy(() => import('./pages/dashboard/OrderList')));
const DashboardContainer = Loadable(lazy(() => import('./pages/dashboard/DashboardContainer')));
const ProductCreate = Loadable(lazy(() => import('./pages/dashboard/ProductCreate')));
const ProductList = Loadable(lazy(() => import('./pages/dashboard/ProductList')));

// QODELESS [ROUTE-START {ACCOUNT}] - Rotas para a Entidade
const AccountViewIndex = Loadable(lazy(() => import('./pages/account/AccountViewIndex')));
// QODELESS [ROUTE-END {ACCOUNT}] - Rotas para a Entidade

// QODELESS [ROUTE-START {USERS}] - Rotas para a Entidade
const UsersViewIndex = Loadable(lazy(() => import('./pages/users/UsersViewIndex')));
// QODELESS [ROUTE-END {USERS}] - Rotas para a Entidade

// Docs pages
const Docs = Loadable(lazy(() => import('./pages/Docs')));

// Error pages
const AuthorizationRequired = Loadable(lazy(() => import('./pages/AuthorizationRequired')));
const NotFound = Loadable(lazy(() => import('./pages/NotFound')));
const ServerError = Loadable(lazy(() => import('./pages/ServerError')));

// Projects pages
const ProjectBrowse = Loadable(lazy(() => import('./pages/dashboard/ProjectBrowse')));
const ProjectCreate = Loadable(lazy(() => import('./pages/dashboard/ProjectCreate')));
const ProjectDetails = Loadable(lazy(() => import('./pages/dashboard/ProjectDetails')));

// Social pages
const SocialProfile = Loadable(lazy(() => import('./pages/dashboard/SocialProfile')));

// Other pages
const Checkout = Loadable(lazy(() => import('./pages/Checkout')));
const Contact = Loadable(lazy(() => import('./pages/Contact')));
const Home = Loadable(lazy(() => import('./components/home/Home')));
const Pricing = Loadable(lazy(() => import('./pages/Pricing')));

const routes: PartialRouteObject[] = [
  {
    path: 'authentication',
    children: [
      {
        path: 'login',
        element: (
          <GuestGuard>
            <Login />
          </GuestGuard>
        )
      },
      {
        path: 'login-unguarded',
        element: <Login />
      },
      {
        path: 'password-recovery',
        element: <PasswordRecovery />
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'password-reset',
        element: <PasswordRecovery />,
        caseSensitive: true,
        children: [
          {
            element: (
              <Route path="/?code=code">
                <PasswordRecovery />
              </Route>
            )
          }
        ]
      },
      {
        path: 'register',
        element: (
          <GuestGuard>
            <Register />
          </GuestGuard>
        )
      },
      {
        path: 'registeradvice',
        element: (
          <GuestGuard>
            <RegisterAdvice />
          </GuestGuard>
        )
      },
      {
        path: 'register-unguarded',
        element: <Register />
      },
      {
        path: 'verify-code',
        element: <VerifyCode />
      }
    ]
  },
  {
    path: 'blog',
    element: <BlogLayout />,
    children: [
      {
        path: '/',
        element: <BlogPostList />
      },
      {
        path: 'new',
        element: <BlogPostCreate />
      },
      {
        path: ':postId',
        element: <BlogPostDetails />
      }
    ]
  },
  {
    path: 'contact',
    element: <Contact />
  },
  {
    path: 'dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: '/',
        element: <DashboardContainer />
      },
      {
        path: 'account',
        element: <AccountViewIndex />
      },
      {
        path: 'analytics',
        element: <Analytics />
      },
      {
        path: 'calendar',
        element: <Calendar />
      },
      {
        path: 'chat',
        children: [
          {
            path: '/',
            element: <Chat />
          },
          {
            path: 'new',
            element: <Chat />
          },
          {
            path: ':threadKey',
            element: <Chat />
          }
        ]
      },
      {
        path: 'customers',
        children: [
          {
            path: '/',
            element: <CustomerList />
          },
          {
            path: ':customerId',
            element: <CustomerDetails />
          },
          {
            path: ':customerId/edit',
            element: <CustomerEdit />
          }
        ]
      },
      {
        path: 'kanban',
        element: <Kanban />
      },
      {
        path: 'mail',
        children: [
          {
            path: '/',
            element: (
              <Navigate
                to="/dashboard/mail/all"
                replace
              />
            )
          },
          {
            path: 'label/:customLabel',
            element: <Mail />
          },
          {
            path: 'label/:customLabel/:emailId',
            element: <Mail />
          },
          {
            path: ':systemLabel',
            element: <Mail />
          },
          {
            path: ':systemLabel/:emailId',
            element: <Mail />
          }
        ]
      },
      {
        path: 'orders',
        children: [
          {
            path: '/',
            element: <OrderList />
          },
          {
            path: ':orderId',
            element: <OrderDetails />
          }
        ]
      },
      {
        path: 'finance',
        element: <Finance />
      },
      {
        path: 'products',
        children: [
          {
            path: '/',
            element: <ProductList />
          },
          {
            path: 'new',
            element: <ProductCreate />
          }
        ]
      },
      {
        path: 'projects',
        children: [
          {
            path: 'browse',
            element: <ProjectBrowse />
          },
          {
            path: 'new',
            element: <ProjectCreate />
          },
          {
            path: ':projectId',
            element: <ProjectDetails />
          }
        ]
      },
      {
        path: 'social',
        children: [
          {
            path: 'profile',
            element: <SocialProfile />
          }
        ]
      }
    ]
  },
  {
    path: 'docs',
    element: <DocsLayout />,
    children: [
      {
        path: '/',
        element: (
          <Navigate
            to="/docs/overview/welcome"
            replace
          />
        )
      },
      {
        path: '*',
        element: <Docs />
      }
    ]
  },
  {
    path: '*',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'browse',
        element: <BrowseLayout />,
        children: [
          {
            path: '/',
            element: <Browse />
          },
          {
            path: '/buttons',
            element: <BrowseButtons />
          },
          {
            path: '/inputs',
            element: <BrowseInputs />
          },
          {
            path: '/charts',
            element: <BrowseCharts />
          },
          {
            path: '/colors',
            element: <BrowseColors />
          },
          {
            path: '/data-display/detail-lists',
            element: <BrowseDetailLists />
          },
          {
            path: '/data-display/quick-stats',
            element: <BrowseQuickStats />
          },
          {
            path: '/data-display/tables',
            element: <BrowseTables />
          },
          {
            path: '/forms',
            element: <BrowseForms />
          },
          {
            path: '/modals',
            element: <BrowseModals />
          },
          {
            path: '/lists/grouped-lists',
            element: <BrowseGroupedLists />
          },
          {
            path: '/lists/grid-lists',
            element: <BrowseGridLists />
          },
          {
            path: '/typography',
            element: <BrowseTypography />
          }
        ]
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'pricing',
        element: <Pricing />
      },
      {
        path: '401',
        element: <AuthorizationRequired />
      },
      {
        path: '404',
        element: <NotFound />
      },
      {
        path: '500',
        element: <ServerError />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },

  // QODELESS [PATH-START {ACCOUNT}] - Rotas para a Entidade
  {
    path: 'account',
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: '/',
        element: <AccountViewIndex />
      }
    ]
  },
  // QODELESS [PATH-START {END}] - Rotas para a Entidade
  // QODELESS [PATH-START {ACCOUNTGAME}] - Rotas para a Entidade
  {
    path: 'carteira',
    element: (
      <AuthGuard>
        <AclGuard claims={['WALLET.READ']}>
          <DashboardLayout />
        </AclGuard>
      </AuthGuard>
    ),
    children: [
      {
        path: '/',
        element: <ImportWallet />
      }
    ]
  },
  // QODELESS [PATH-END {ACCOUNTGAME}] - Rotas para a Entidade

  // QODELESS [PATH-START {USERS}] - Rotas para a Entidade
  {
    path: 'users',
    element: (
      <AuthGuard>
        <AclGuard claims={['USERS.READ']}>
          <DashboardLayout />
        </AclGuard>
      </AuthGuard>
    ),
    children: [
      {
        path: '/',
        element: <UsersViewIndex />
      },
    ]
  },
  // QODELESS [PATH-END {DWELLER}] - Rotas para a Entidade
];

export default routes;
