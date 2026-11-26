# starbot-mobile

StarBot standalone Expo / React Native mobile client under `think2do`, ready for independent customization and development.

## Quick Start

```bash
cp .env.example .env
# Edit EXPO_PUBLIC_SERVER_URL in .env
npm ci
npm run typecheck
npm run start
```

## Build & Run

- iOS simulator / device: `npm run ios`
- Android emulator / device: `npm run android`
- Type check: `npm run typecheck`

## Environment Variables

| Variable | Required | Description |
| --- | :---: | --- |
| `EXPO_PUBLIC_SERVER_URL` | Yes | Backend API origin (`https://...` in production, `http://...` allowed in `__DEV__`) |
| `EXPO_PUBLIC_OPENBOT_RELEASE` | No | Client protocol release header version (defaults to `1.2.0`) |
| `EXPO_PUBLIC_BUNDLE_ID` | No | iOS bundleIdentifier & Android package name (defaults to `com.think2do.starbot`) |
| `EXPO_PUBLIC_EAS_PROJECT_ID` | No | EAS project ID required only for push notifications on physical devices |
| `EXPO_PUBLIC_SECURITY_FLOOR_URL` | No | Optional self-hosted security floor JSON URL (disabled by default) |
