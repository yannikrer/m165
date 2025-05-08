-- Löschen eines Spielers aus einem Team
DELETE FROM players_by_team WHERE team_id = <team_id> AND player_id = <player_id>;

-- Löschen der Spieler-Details für einen bestimmten Spieler
DELETE FROM player_details WHERE player_id = <player_id>;

-- Löschen einer einzelnen Spalte eines Spielers (z.B. stats)
ALTER TABLE player_details DROP stats;
