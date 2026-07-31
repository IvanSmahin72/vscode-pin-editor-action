import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand(
			'vscode-pin-editor-action.pinEditor',
			() => vscode.commands.executeCommand('workbench.action.pinEditor'),
		),
		vscode.commands.registerCommand(
			'vscode-pin-editor-action.unpinEditor',
			() => vscode.commands.executeCommand('workbench.action.unpinEditor'),
		),
	);
}

export function deactivate() {}
