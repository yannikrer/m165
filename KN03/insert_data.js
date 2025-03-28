// Verbindung zur Datenbank

//DIESEN COMMAND SELBSTàNDIG IN MONGOSH EINFÜGEN
// use fussball_db;

// ObjectIds als Variablen
let spieler1 = ObjectId();
let spieler2 = ObjectId();
let spieler3 = ObjectId();
let mannschaft1 = ObjectId();
let spiel1 = ObjectId();
let trainer1 = ObjectId();

// Spieler einfügen (insertMany)
db.spieler.insertMany([
    { _id: spieler1, name: "AMir", position: "Stürmer", alter: 17 },
    { _id: spieler2, name: "Yannik", position: "Mittelfeld", alter: 17 },
    { _id: spieler3, name: "Noah", position: "Torwart", alter: 17 }
]);

// Mannschaft einfügen (insertOne)
db.mannschaften.insertOne({
    _id: mannschaft1,
    name: "TBZBallers",
    liga: "Kreisliga",
    trainer_id: trainer1,
    spieler: [spieler1, spieler2, spieler3]
});

// Trainer einfügen (insertOne)
db.trainer.insertOne({
    _id: trainer1,
    name: "Trainer",
    lizenzlevel: "Gut"
});

// Spiel einfügen (insertOne)
db.spiele.insertOne({
    _id: spiel1,
    datum: ISODate("2024-03-10T20:00:00Z"),
    gegner: "Gegnerisches Team",
    ergebnis: "2:1",
    spieler_ids: [spieler1, spieler2]
});

print("Daten erfolgreich hinzugefügt!");
