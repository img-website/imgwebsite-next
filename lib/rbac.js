export function hasPermission(user, moduleName, action) {
  if (!user) return false;
  if (user.role === 'superadmin') return true;
  const permissions = user.permissions || {};
  const modulePerm = permissions[moduleName] || {};
  return Boolean(modulePerm[action]);
}

import { RBAC_ACTIONS } from './rbac-actions';
export { RBAC_ACTIONS } from './rbac-actions';

import { readAdminsWithNotice } from '@/app/lib/adminsFile';
import { extractToken, verifyToken } from '@/app/lib/auth';

export async function ensurePermission(req, moduleName, action) {
  const token = extractToken(req.headers);
  if (!token) return null;
  const decoded = verifyToken(token);
  if (!decoded) return null;
  if (decoded.role === 'superadmin') {
    return { _id: decoded.id, role: 'superadmin' };
  }
  const { admins } = await readAdminsWithNotice();
  const admin = admins.find((a) => a.id === decoded.id);
  if (!admin) return null;
  return hasPermission(admin, moduleName, action) ? admin : null;
}
