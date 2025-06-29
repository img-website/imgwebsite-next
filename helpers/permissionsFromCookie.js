const permissionsFromCookie = () => {
  const str = document.cookie
    .split('; ')
    .find(row => row.startsWith('userPermissions='))
    ?.split('=')[1];
  return str ? str.split(',').filter(Boolean) : [];
};

export default permissionsFromCookie;
