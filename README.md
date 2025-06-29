This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/(pages)/page.jsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Running Tests

Run the unit tests with:

```bash
npm test
```

## Environment Variables

Set up a `.env` file with your MongoDB connection string:

```env
MONGODB_URI=mongodb://localhost:27017/imgwebsite
```


## Push Notifications

This project uses Firebase Cloud Messaging for blog notifications. Configure the
following variables in a `.env` file:

```env
FCM_SERVICE_ACCOUNT=<JSON service account string>
NEXT_PUBLIC_FIREBASE_API_KEY=<api key>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<auth domain>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<project id>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<sender id>
NEXT_PUBLIC_FIREBASE_APP_ID=<app id>
NEXT_PUBLIC_FIREBASE_VAPID_KEY=<vapid key>
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

When a blog is published, subscribers receive a push notification and an email
if they're in the newsletter list.

The app's Content Security Policy must allow connections to Firebase and
TinyMCE domains. The default configuration already includes
`https://fcm.googleapis.com`,
`https://firebaseinstallations.googleapis.com`,
`https://fcmregistrations.googleapis.com` and `https://cdn.tiny.cloud`.
