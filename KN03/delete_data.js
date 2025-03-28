// Verbindung zur Datenbank

//DIESEN COMMAND SELBSTàNDIG IN MONGOSH EINFÜGEN
// use fussball_db;

// Alle Collections löschen
db.spieler.drop();
db.mannschaften.drop();
db.trainer.drop();
db.spiele.drop();

print("Alle Collections wurden gelöscht!");
