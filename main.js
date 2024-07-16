// const { app, BrowserWindow } = require('electron/main')

// const createWindow = () => {
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       contextIsolation: true,  // Isolate the context
//       sandbox: true,           // Enable sandboxing
//     }
//   })

//   mainWindow.loadFile('index.html');
 
//   // mainWindow.loadURL('https://imagegallery0.netlify.app/');
//   // mainWindow.loadURL('https://ecostate.vercel.app/');
 
// }

// app.enableSandbox();

// // console.log("process",process.platform);

// app.whenReady().then(() => {
//   createWindow()

//   app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//       createWindow()
//     }
//   })
// })

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })

const { app, BrowserWindow } = require('electron');
const path = require('path');
require('./server');


function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      sandbox: true,  
    },
  });

  // if (isDev) {
  //   mainWindow.loadURL('http://localhost:3000');
  // } else {

  // }
  mainWindow.loadFile(path.join(__dirname, 'index.html'));


}

app.on('ready', () => {
  // Start the Node.js server
  createWindow();
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});