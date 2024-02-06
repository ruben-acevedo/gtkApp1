const gi = require('node-gtk')
const Gtk = gi.require('Gtk', '3.0')

module.exports = (win) => {
win.on('destroy', () => Gtk.mainQuit())
win.on('delete-event', () => false)
win.setDefaultSize(1920, 1080)
}