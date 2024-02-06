const gi = require('node-gtk')
const Gtk = gi.require('Gtk', '3.0')
const childProcess = require('child_process')
const buildGrid = require('./grid')
const buildWindow = require('./window')

gi.startLoop()
Gtk.init()

const win = new Gtk.Window()
let grid = new Gtk.Grid()
buildWindow(win);
buildGrid(grid);


let btnHello = new Gtk.Button({ label: 'Say Hello!' })
let btnFullscreen = new Gtk.Button({ label: 'Fullscreen' })
let btnExit = new Gtk.Button({ label: 'Exit' })
btnHello.on('clicked', () => childProcess.exec('notify-send "Hello World"'))
btnFullscreen.on('clicked', () => win.fullscreen())
btnExit.on('clicked', () => win.close())

grid.attach(btnHello, 0, 0, 1, 1)
grid.attach(btnFullscreen, 0, 1, 1, 1)
grid.attach(btnExit, 0, 2, 1, 1)

win.add(grid)
win.showAll()
Gtk.main()