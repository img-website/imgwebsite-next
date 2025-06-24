import TokenFromCookie from "@/helpers/tokenFromCookie";

export async function deleteRedirection(fromUrl) {
  const token = TokenFromCookie();
  // 1. Get all redirections
  const resList = await fetch(`/api/v1/admin/redirections`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const listData = await resList.json();
  if (!listData.success || !Array.isArray(listData.data)) return { success: false };
  // 2. Find redirection by fromUrl
  const found = listData.data.find((r) => r.from === fromUrl);
  if (!found) return { success: true };
  // 3. Delete by id
  const res = await fetch(`/api/v1/admin/redirections/${found._id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  const text = await res.text();
  if (!text) return { success: true };
  try {
    return JSON.parse(text);
  } catch {
    return { success: true };
  }
}
