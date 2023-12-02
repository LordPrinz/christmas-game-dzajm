import AzureADProvider from "next-auth/providers/azure-ad";

export const options = {
	providers: [
		AzureADProvider({
			clientId: process.env.AZURE_AD_CLIENT_ID,
			clientSecret: process.env.AZURE_AD_CLIENT_SECRET_VALUE,
			tenantId: process.env.AZURE_AD_TENANT_ID,
		}),
	],
	pages: {
		signIn: "/auth/signIn",
	},
};
