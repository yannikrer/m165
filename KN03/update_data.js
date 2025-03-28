// use fussball_db vorher manuell ausführen

// Setzt bei allen Spielern den Namen auf "Name geändert"
db.spieler.updateMany({}, { $set: { name: "Name geändert" } });

print("Alle Spielernamen wurden erfolgreich geändert!");
