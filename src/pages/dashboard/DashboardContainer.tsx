import type { FC } from 'react';
import useAuth from 'src/hooks/useAuth';
import Overview2 from './Overview2';

const DashboardContainer: FC = () => {
  const auth = useAuth();

  if (!auth) {
    return null;
  }

  switch (auth.user.role.toUpperCase()) {
    case 'ADMIN': return <Overview2 />;
    case 'BILLINGADVICE': return <Overview2 />;
    default: return null;
  }
};

export default DashboardContainer;
