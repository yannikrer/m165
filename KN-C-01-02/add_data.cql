-- Daten in die Tabelle players_by_team einfügen
INSERT INTO players_by_team (team_id, player_id, name, position, age) 
VALUES (uuid(), uuid(), 'Max Mustermann', 'Stürmer', 27);

INSERT INTO players_by_team (team_id, player_id, name, position, age) 
VALUES (uuid(), uuid(), 'Anna Schmidt', 'Torwart', 25);

INSERT INTO players_by_team (team_id, player_id, name, position, age) 
VALUES (uuid(), uuid(), 'Peter Müller', 'Mittelfeld', 29);

-- Daten in die Tabelle player_details einfügen
INSERT INTO player_details (player_id, name, team_id, position, age, stats)
VALUES (uuid(), 'Max Mustermann', uuid(), 'Stürmer', 27, 'Tore: 5, Assists: 3');

INSERT INTO player_details (player_id, name, team_id, position, age, stats)
VALUES (uuid(), 'Anna Schmidt', uuid(), 'Torwart', 25, 'Saves: 15, Goals conceded: 2');
