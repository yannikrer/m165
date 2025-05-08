from neo4j import GraphDatabase
 
# Verbindung zur Neo4j-Datenbank

uri = "bolt://13.216.18.229:7687"

user = "neo4j"

password = "Amirneo4j"  
 
driver = GraphDatabase.driver(uri, auth=(user, password))
 
# Funktion zum Erstellen eines Knotens

def erstelle_knoten(tx):

    tx.run("CREATE (:Spieler {name: 'Amir', position: 'Stürmer', alter: 17})")
 
# Funktion zum Abfragen aller Knoten

def abfrage(tx):

    result = tx.run("MATCH (n) RETURN n")

    for record in result:

        print(record["n"])
 
# Verbindung öffnen und beide Funktionen ausführen

with driver.session() as session:

    print("Knoten wird erstellt...")

    session.execute_write(erstelle_knoten)
 
    print("Knoten abfragen...")

    session.execute_read(abfrage)
 
# Verbindung schließen

driver.close()

 