// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('open-in-other-group.open-in-other-group', function () {
		if (vscode.window.activeTextEditor.viewColumn == vscode.ViewColumn.One) {
			vscode.window.showTextDocument(vscode.window.activeTextEditor.document, vscode.ViewColumn.Beside);
		} else {
			vscode.window.showTextDocument(vscode.window.activeTextEditor.document, vscode.ViewColumn.One);
		}
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
