/*******************************************************************************
 * Copyright (c) 2013, 2015 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
 
// optimization script to concat/minify the Orion editor javascript code
/* eslint-disable missing-nls */
({
    baseUrl: '.',
	paths: {
        i18n: 'requirejs/i18n',
        text: 'requirejs/text',
        "orion/i18n": "compare/builder/i18n"
 	},
	name: "compare/builder/compare",
	preserveLicenseComments: false,
	wrap: {
		start: "/* orion compare */ ", //start cannot be empty
		end: " define(['compare/builder/compare'], function(compare) {return compare;});"
	}
});
