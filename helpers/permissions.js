export function getUserPermissions() {
  if (typeof window === 'undefined') return {};
  const raw = document.cookie
    .split('; ')
    .find(row => row.startsWith('userPermissions='))?.split('=')[1];
  if (!raw) return {};
  try {
    const json = atob(raw);
    return JSON.parse(json);
  } catch {
    try {
      return JSON.parse(decodeURIComponent(raw));
    } catch {
      return {};
    }
  }
}

export function hasClientPermission(module, action = 'read') {
  if (typeof window === 'undefined') return false;
  const role = document.cookie
    .split('; ')
    .find(row => row.startsWith('userRole='))?.split('=')[1];
  if (role === 'superadmin') return true;
  const perms = getUserPermissions();
  return !!perms?.[module]?.[action];
}

export function getServerPermissions(cookies) {
  const raw = cookies.get('userPermissions')?.value || '';
  if (!raw) return {};
  try {
    return JSON.parse(Buffer.from(raw, 'base64').toString());
  } catch {
    try {
      return JSON.parse(decodeURIComponent(raw));
    } catch {
      return {};
    }
  }
}

export function hasServerPermission(cookies, module, action = 'read') {
  const role = cookies.get('userRole')?.value;
  if (role === 'superadmin') return true;
  const perms = getServerPermissions(cookies);
  return !!perms?.[module]?.[action];
}
