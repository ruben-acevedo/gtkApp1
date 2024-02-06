const gi = require('node-gtk')
const Gtk = gi.require('Gtk', '3.0')

module.exports = (grid) => {
grid.setRowSpacing(10)
grid.setColumnSpacing(10)
grid.valign = Gtk.Align.CENTER
grid.halign = Gtk.Align.CENTER
}