/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
	auth: {
		clientId: process.env.AUTH_CLIENT_KEY,
		authority: `https://login.microsoftonline.com/${process.env.AUTH_DIRECTORY_KEY}`,
		redirectUri: "http://localhost:3000",
	},
	cache: {
		cacheLocation: "sessionStorage", // This configures where your cache will be stored
		storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
	},
	system: {
		loggerOptions: {
			loggerCallback: (level: LogLevel, message: string, containsPii: unknown) => {
				if (containsPii) {
					return;
				}
				switch (level) {
					case LogLevel.Error:
						console.error(message);
						return;
					case LogLevel.Info:
						console.info(message);
						return;
					case LogLevel.Verbose:
						console.debug(message);
						return;
					case LogLevel.Warning:
						console.warn(message);
						return;
					default:
						return;
				}
			},
		},
	},
};

export const loginRequest = {
	scopes: ["User.Read"],
};

export const graphConfig = {
	graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
