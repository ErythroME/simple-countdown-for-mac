const { app, BrowserWindow } = require("electron")

const path = require("path")
const url = require("url")

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 280,
    height: 400,
    transparent: true,
    icon: path.join(__dirname, "icon.png")
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  )

  // mainWindow.webContents.openDevTools()

  mainWindow.on("closed", function() {
    mainWindow = null
  })
}

app.on("ready", createWindow)

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("active", function() {
  console.log("enter outer")
  if (mainWindow === null) {
    console.log("enter inside")
    createWindow()
  }
})
