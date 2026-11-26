import type { ExpoConfig } from "expo/config";

const projectId = process.env.EXPO_PUBLIC_EAS_PROJECT_ID;
const bundleId = process.env.EXPO_PUBLIC_BUNDLE_ID ?? "com.think2do.starbot";
const openbotRelease = process.env.EXPO_PUBLIC_OPENBOT_RELEASE ?? "1.2.0";

const config: ExpoConfig = {
  name: "StarBot",
  slug: "starbot-mobile",
  version: "0.0.1",
  scheme: "starbotmobile",
  ios: { bundleIdentifier: bundleId, supportsTablet: true },
  android: { package: bundleId },
  plugins: [
    "expo-router",
    "expo-secure-store",
    ["expo-notifications", { defaultChannel: "starbot" }],
    // Back from linking the company account after the process died mid-sign-in: no Custom Tab left below Home.
    "./plugins/linked-cold-start",
  ],
  extra: { openbotRelease, ...(projectId ? { eas: { projectId } } : {}) },
};
export default config;
