import TokenFromCookie from "./tokenFromCookie";

export default function apiFetch(url, options = {}) {
  const token = TokenFromCookie();
  const { data, headers = {}, ...rest } = options;
  const fetchOptions = { headers: { ...headers }, ...rest };
  if (token) {
    fetchOptions.headers["Authorization"] = `Bearer ${token}`;
  }
  if (data !== undefined) {
    fetchOptions.headers["Content-Type"] = "application/json";
    fetchOptions.body = JSON.stringify(data);
  }
  return fetch(url, fetchOptions);
}
