import apiFetch from "@/helpers/apiFetch";

export async function deleteRedirection(fromUrl) {
  // 1. Get all redirections
  const resList = await apiFetch(`/api/v1/admin/redirections`);
  const listData = await resList.json();
  if (!listData.success || !Array.isArray(listData.data)) return { success: false };
  // 2. Find redirection by fromUrl
  const found = listData.data.find((r) => r.from === fromUrl);
  if (!found) return { success: true };
  // 3. Delete by id
  const res = await apiFetch(`/api/v1/admin/redirections/${found.id}`, {
    method: "DELETE",
  });
  const text = await res.text();
  if (!text) return { success: true };
  try {
    return JSON.parse(text);
  } catch {
    return { success: true };
  }
}
