// Verbindung zur Datenbank

//DIESEN COMMAND SELBSTàNDIG IN MONGOSH EINFÜGEN
// use fussball_db;

// Einzelnen Spieler löschen mit deleteOne()
db.spieler.deleteOne({ name: "Noah" });

// Mehrere Spieler löschen mit deleteMany() (ODER-Verknüpfung)
db.spieler.deleteMany({
    $or: [{ alter: { $lt: 17 } }, { position: "Torwart" }]
});

print("Daten wurden erfolgreich gelöscht!");
