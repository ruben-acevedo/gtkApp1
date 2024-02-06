imports.gi.versions.Gtk = "4.0";
const Gtk  = imports.gi.Gtk;

let app = new Gtk.Application({ application_id: 'org.gtk.GtkApp' });

app.connect('activate', () => {
    let win = new Gtk.ApplicationWindow({ application: app });
    let grid = new Gtk.Grid();
    configWindow(win);
    configGrid(grid);

    let btn = createButton('Click to fullscreen!');
    let btn2 = createButton('Click to close!');

    btn.connect('clicked', () => { 
        win.fullscreen();
     });

    btn2.connect('clicked', () => {
        win.close();
    });

    grid.attach(btn, 0, 0, 1, 1);
    grid.attach(btn2, 0, 1, 1, 1);

    win.set_child(grid); 
    win.present();
});

configWindow = (win) => {
    win.set_title('Test-App');
    win.set_default_size(200, 200);
}

configGrid = (grid) => {
    grid.set_margin_top(10);
    grid.set_column_spacing(10);
    grid.set_row_spacing(10);
    grid.set_column_homogeneous(true);
    grid.set_row_homogeneous(true);
    grid.set_valign(Gtk.Align.CENTER);
    grid.set_halign(Gtk.Align.CENTER);
}

createButton = (label) => {
    let btn = new Gtk.Button({ label: label });
    btn.set_margin_top(10);
    btn.set_margin_bottom(10);
    btn.set_margin_start(10);
    btn.set_margin_end(10);
    btn.set_valign(Gtk.Align.CENTER);
    btn.set_halign(Gtk.Align.CENTER);
    return btn;
}

app.run([]);
