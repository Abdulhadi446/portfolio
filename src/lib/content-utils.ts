export function safeImage(src?: string): string {
  return src && src.trim().length > 0 ? src : "/avatars/default-avatar.svg";
}

export function safeLabel(label: string, fallback = "Untitled"): string {
  const trimmed = label.trim();
  return trimmed.length > 0 ? trimmed : fallback;
}

export function isSafeUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "mailto:";
  } catch {
    return false;
  }
}
