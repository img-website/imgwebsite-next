export function hasPermission(user, moduleName, action) {
  if (!user) return false;
  if (user.role === 'superadmin') return true;
  const permissions = user.permissions || {};
  const modulePerm = permissions[moduleName] || {};
  return Boolean(modulePerm[action]);
}

export const RBAC_ACTIONS = ['read', 'write', 'edit', 'delete'];

import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';
import { extractToken, verifyToken } from '@/app/lib/auth';

export async function ensurePermission(req, moduleName, action) {
  const token = extractToken(req.headers);
  if (!token) return null;
  const decoded = verifyToken(token);
  if (!decoded) return null;
  await connectDB();
  const admin = await Admin.findById(decoded.id).lean();
  if (!admin) return null;
  return hasPermission(admin, moduleName, action) ? admin : null;
}
