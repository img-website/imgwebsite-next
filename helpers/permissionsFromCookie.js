const permissionsFromCookie = () => {
  if (typeof document === 'undefined') return [];
  const str = document.cookie
    .split('; ')
    .find((row) => row.startsWith('userPermissions='))
    ?.split('=')[1];
  return str ? str.split(',').filter(Boolean) : [];
};

export default permissionsFromCookie;
