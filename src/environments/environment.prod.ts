export const environment = {
	production: true,
	googleLoginProviderId: process.env.GOOGLE_PROVIDER_ID,
	FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
	firebase: {
		apiKey: process.env.FIREBASE_API_KEY,
		authDomain: process.env.FIREBASE_AUTH_DOMAIN,
		databaseURL: process.env.FIREBASE_DATABASE_URL,
		projectId: process.env.FIREBASE_PROJECT_ID,
		storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
		messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
		appId: process.env.FIREBASE_APP_ID
	}
};
