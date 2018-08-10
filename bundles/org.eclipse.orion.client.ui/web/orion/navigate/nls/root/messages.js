/*******************************************************************************
 * @license
 * Copyright (c) 2012 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 * 
 ******************************************************************************/
/*eslint-env browser, amd*/
define({//Default message bundle
	"Navigator": "Navigator",
	"Strings Xtrnalizr": "Strings Xtrnalizr",
	"Externalize strings": "Externalize strings from JavaScript files in this folder.",
	"NotSupportFileSystem":"${0} is not supported in this file system",
	"SrcNotSupportBinRead":"Source file service does not support binary read",
	"TargetNotSupportBinWrite":"Target file service does not support binary write",
	"NoFileSrv": "No matching file service for location: ${0}",
	"Choose a Folder": "Choose a Folder",
	"Copy of ${0}": "Copy of ${0}",
	"EnterName": "Enter a new name for '${0}'",
	"ChooseFolder": "Choose folder...",
	"Rename": "Rename",
	"Refresh": "Refresh",
	"RenameFilesFolders": "Rename the selected files or folders",
	"CompareEach": "Compare with each other",
	"Compare 2 files": "Compare the selected 2 files with each other",
	"Compare with...": "Compare With...",
	"CompareFolders": "Compare the selected folder with a specified folder",
	"Delete": "Delete",
	"Unknown item": "Unknown item",
	"delete item msg": "Are you sure you want to delete these ${0} items?",
	"DeleteTrg": "Are you sure you want to delete '${0}'?",
	"Zip": "Zip",
	"ZipDL": "Create a zip file of the folder contents and download it",
	"New File": "File",
	"Create a new file": "Create a new file",
	"FailedToCreateProject":"Failed to create project: ${0}",
	"FailedToCreateFile": "Failed to create file: ${0}",
	"CopyFailed": "Copy operation failed",
	"MoveFailed": "Move operation failed",
	"Name:": "Name:",
	"New Folder": "Folder",
	"Folder name:": "Folder name:",
	"Create a new folder": "Create a new folder",
	"Creating folder": "Creating folder",
	"Folder": "Folder",
	"Create an empty folder": "Create an empty folder",
	"CreateEmptyMsg": "Create an empty folder on the Orion server. You can import, upload, or create content in the editor.",
	"Sample HTML5 Site": "Sample HTML5 Site",
	"Generate a sample": "Generate a sample",
	"Generate an HTML5 \"Hello World\" website, including JavaScript, HTML, and CSS files.": "Generate an HTML5 \"Hello World\" website, including JavaScript, HTML, and CSS files.",
	"Creating a folder for ${0}": "Creating a folder for ${0}",
	"SFTP Import": "SFTP Import",
	"Import content from SFTP": "Import content from SFTP",
	"Imported Content": "Imported Content",
	"Upload a Zip": "Upload a Zip",
	"Upload content from a local zip file": "Upload content from a local zip file",
	"Uploaded Content": "Uploaded Content",
	"Clone Git Repository": "Clone Git Repository",
	"Clone a git repository": "Clone a git repository",
	"LinkContent": "Link to existing content on the server",
	"CreateLinkedFolder": "Create a folder that links to an existing folder on the server.",
	"Server path:": "Server path:",
	"NameLocationNotClear": "The name and server location were not specified.",
	"Go Up": "Go Up",
	"GoUpToParent": "Move up to the parent folder",
	"Go Into": "Go Into",
	"GoSelectedFolder": "Move into the selected folder",
	"File or zip archive": "File or Zip Archive",
	"ImportLcFile": "Import a file or zip archive from your local file system",
	"SFTP from...": "SFTP",
	"CpyFrmSftp": "Copy files and folders from a specified SFTP connection",
	"Importing from ${0}": "Importing from ${0}",
	"SFTP to...": "SFTP",
	"CpyToSftp": "Copy files and folders to a specified SFTP location",
	"Exporting": "Exporting to ${0}",
	"Pasting ${0}": "Pasting ${0}",
	"Copy to": "Copy to",
	"Move to": "Move to",
	"Copying ${0}": "Copying ${0}",
	"Moving ${0}": "Moving ${0}",
	"Renaming ${0}": "Renaming ${0}",
	"Deleting ${0}": "Deleting ${0}",
	"Creating ${0}": "Creating ${0}",
	"Linking to ${0}": "Linking to ${0}",
	"MvToLocation": "Move files and folders to a new location",
	"Cut": "Cut",
	"Copy": "Copy",
	"Fetching children of ": "Fetching children of ",
	"Paste": "Paste",
	"Open With": "Open With",
	"Loading ": "Loading ",
	"New": "New",
	"File": "File",
	"Actions": "Actions",
	"Orion Content": "Orion Content",
	"File System": "File System",
	"Root": "Root",
	"Create new content": "Create new content",
	"Import from HTTP...": "HTTP",
	"File URL:": "File URL:",
	"ImportURL": "Import a file from a URL and optionally unzip it",
	"Unzip *.zip files:": "Unzip *.zip files:",
	"Extracted from:": "Extracted from:",
	"FolderDropNotSupported": "Did not drop ${0}. Folder drop is not supported in this browser.",
	"CreateFolderErr": "You cannot copy files directly into the workspace. Create a folder first.",
	"Unzip ${0}?": "Unzip ${0}?",
	"Upload progress: ": "Upload progress: ",
	"Uploading ": "Uploading ",
	"Cancel upload": "Cancel upload",
	"UploadingFileErr": "Uploading the following file failed: ",
	"Enter project name:": "Enter project name:",
	"Create new project" : "Create new project",
	"Creating project ${0}": "Creating project ${0}",
	"NoFile": "Use the ${0} menu to create new files and folders. Click a file to start coding.",
	"Download": "Download",
	"Download_tooltips": "Download the file contents as the displayed name",
	"Downloading...": "Reading file contents...",
	"Download not supported": "Contents download is not supported in this browser.",
	"gettingContentFrom": "Getting content from ",
	"confirmLaunchDelete": "Delete Launch Configuration \"${0}\" ?",
	"deletingLaunchConfiguration": "Deleting launch configuration...",
	"deployTo": "Deploy to ",
	"deployItem": "Deploy \"${0}\"",
	"deploy": "Deploy",
	"connect": "Connect",
	"fetchContent": "Fetch content",
	"fetchContentOf": "Fetch content of ",
	"disconnectFromProject": "Disconnect from project",
	"doNotTreatThisFolder": "Do not treat this folder as a part of the project",
	"checkStatus": "Check status",
	"checkApplicationStatus": "Check application status",
	"checkApplicationState": "Check application state",
	"stop": "Stop",
	"start": "Start",
	"stopApplication": "Stop the App",
	"startApplication": "Start the application",
	"manage": "Manage",
	"manageThisApplicationOnRemote": "Manage this application on remote server",
	"deleteLaunchConfiguration": "Delete this launch configuration",
	"editLaunchConfiguration": "Edit this launch configuration",
	"deployThisApplication": "Deploy the App from the Workspace",
	"associatedFolder": "Associated Folder",
	"associateAFolderFromThe": "Associate a folder from the workspace with this project.",
	"convertToProject": "Convert to project",
	"convertThisFolderIntoA": "Convert this folder into a project",
	"thisFolderIsAProject": "This folder is a project already.",
	"basic": "Basic",
	"createAnEmptyProject.": "Create an empty project.",
	"sFTP": "SFTP",
	"createAProjectFromAn": "Create a project from an SFTP site.",
	'readMeCommandName': 'Readme File',  //$NON-NLS-0$  //$NON-NLS-1$
	'readMeCommandTooltip': 'Create a README.md file in this project',  //$NON-NLS-0$  //$NON-NLS-1$
	'zipArchiveCommandName': 'Zip Archive',  //$NON-NLS-0$  //$NON-NLS-1$
	'zipArchiveCommandTooltip': 'Create a project from a local zip archive.',  //$NON-NLS-0$  //$NON-NLS-1$
	'Url:': 'Url:',  //$NON-NLS-0$  //$NON-NLS-1$
	'notZip' : 'The following files are not zip files: ${0}. Would you like to continue the import?', //$NON-NLS-0$  //$NON-NLS-1$
	'notZipMultiple' : 'There are multiple non-zip files being uploaded. Would you like to continue the import?', //$NON-NLS-0$  //$NON-NLS-1$
	"Cancel": "Cancel", //$NON-NLS-0$  //$NON-NLS-1$
	"Ok": "Ok", //$NON-NLS-0$  //$NON-NLS-1$
	"missingCredentials": "Enter the ${0} authentication credentials associated with ${1} to check its status.", //$NON-NLS-0$  //$NON-NLS-1$
	"deploying": "deploying", //$NON-NLS-0$  //$NON-NLS-1$
	"starting": "restarting", //$NON-NLS-0$  //$NON-NLS-1$
	"stopping": "stopping", //$NON-NLS-0$  //$NON-NLS-1$
	"checkingStateShortMessage": "checking status" //$NON-NLS-0$  //$NON-NLS-1$
});
