"use client";

import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";
import { MsalProvider } from "@azure/msal-react";

const msalInstance = new PublicClientApplication(msalConfig);

type Props = {
	children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
	return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
};

export default AuthProvider;
