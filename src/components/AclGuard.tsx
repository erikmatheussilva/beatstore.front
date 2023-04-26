import type { FC, ReactNode } from 'react';
import useAuth from '../hooks/useAuth';
import { Claim } from '../models/claim';

interface AclGuardProps {
  children: ReactNode;
  claims?: Array<string>;
  requiredRole?: string;
  showForbidden?: boolean;
}

const AclGuard: FC<AclGuardProps> = ({ children, claims = [], requiredRole, showForbidden = true }: AclGuardProps) => {
  if ((!claims || claims.length === 0) && !requiredRole) {
    return <>{children}</>;
  }

  const auth = useAuth();

  const userHasAllClaims = claims.every((requiredClaim: string) => auth.user.claims.some((userClaim: Claim) => requiredClaim === `${userClaim.claimType}.${userClaim.claimValue}`));
  const userIsOfRole = auth.user.role === requiredRole;

  if ((claims.length > 0 && userHasAllClaims) || (requiredRole && userIsOfRole)) {
    return <>{children}</>;
  }

  if (showForbidden) {
    return <></>;
  }

  return <></>;
};

export default AclGuard;
