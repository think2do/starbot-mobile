/**
 * Optional self-hosted security floor endpoints (set EXPO_PUBLIC_SECURITY_FLOOR_URL if needed).
 * Empty by default so this standalone app makes no requests to external release feeds.
 */
const configured = process.env.EXPO_PUBLIC_SECURITY_FLOOR_URL?.trim();

export const SECURITY_FLOOR_ADDRESSES: readonly string[] = configured
  ? [configured]
  : [];
