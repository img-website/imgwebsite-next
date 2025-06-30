import * as React from 'react';
import { hasClientPermission } from '@/helpers/permissions';

export function usePermission(module, action = 'read') {
  const [allowed, setAllowed] = React.useState(false);

  React.useEffect(() => {
    setAllowed(hasClientPermission(module, action));
  }, [module, action]);

  return allowed;
}
