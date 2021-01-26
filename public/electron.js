const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const url = require('url');
const path = require('path');

let mainWindow = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1000,
        minWidth: 1000,
        height: 600,
        minHeight: 600,
        frame: false,
        webPreferences: {
            // contextIsolation: true,
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });

    if(isDev) {
        mainWindow.loadURL('http://localhost:3000');
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow.loadFile(path.join(__dirname, '../build/index.html'));
    }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
})