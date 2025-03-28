// Verbindung zur Datenbank

//DIESEN COMMAND SELBSTàNDIG IN MONGOSH EINFÜGEN
// use fussball_db;

// 1. Alle Spieler anzeigen
db.spieler.find();

// 2. Abfrage mit DateTime-Feld (Spiel nach Datum filtern)
db.spiele.find({ datum: { $gte: ISODate("2024-03-01T00:00:00Z") } });

// 3. ODER-Verknüpfung (Spieler mit bestimmter Position oder Alter)
db.spieler.find({
    $or: [{ position: "Mittelfeld" }, { alter: { $lt: 17 } }]
});

// 4. UND-Verknüpfung (Mannschaften mit bestimmter Liga & Trainer-ID)
db.mannschaften.find({
    $and: [{ liga: "La Liga" }, { trainer_id: { $exists: true } }]
});

// 5. Regex-Abfrage (Suche nach Spielernamen mit "Messi")
db.spieler.find({ name: { $regex: "Luca", $options: "i" } });

// 6. Projektion mit _id
db.spieler.find({}, { name: 1, position: 1, _id: 1 });

// 7. Projektion ohne _id
db.spieler.find({}, { name: 1, position: 1, _id: 0 });

print("Abfragen erfolgreich ausgeführt!");
