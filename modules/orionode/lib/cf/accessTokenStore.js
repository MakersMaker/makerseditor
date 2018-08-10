/*******************************************************************************
 * Copyright (c) 2017 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
/*eslint-env node */
var userBearerTokens = {};

exports.defaultStore = {
	getBearerToken: function(userId, target) {
		return Promise.resolve(userBearerTokens[userId]);
	},
	setBearerToken: function(userId, bearerToken) {
		userBearerTokens[userId] = bearerToken;
	}
}

var tokenStore = exports.defaultStore;

exports.setBearerTokenStore = function(store) {
	tokenStore = store;
}

exports.getBearerTokenStore = function() {
	return tokenStore;
}