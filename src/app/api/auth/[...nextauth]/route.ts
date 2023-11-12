import NextAuth from "next-auth/next";
import AzureADProvider from "next-auth/providers/azure-ad";

const handler = NextAuth({
	providers: [
		AzureADProvider({
			clientId: process.env.AZURE_AD_CLIENT_ID,
			clientSecret: process.env.AZURE_AD_CLIENT_SECRET_VALUE,
			tenantId: process.env.AZURE_AD_TENANT_ID,
		}),
	],
});

export { handler as GET, handler as POST };
