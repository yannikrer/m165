-- Keyspace erstellen (wenn er noch nicht existiert)
CREATE KEYSPACE IF NOT EXISTS my_keyspace 
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};

-- Keyspace verwenden
USE my_keyspace;

CREATE TABLE players_by_team (
    team_id uuid,
    player_id uuid,
    name text,
    position text,
    age int,
    PRIMARY KEY (team_id, player_id)
);

CREATE TABLE player_details (
    player_id uuid PRIMARY KEY,
    name text,
    team_id uuid,
    position text,
    age int,
    stats text
);

CREATE TABLE matches_by_team (
    team_id uuid,
    match_date timestamp,
    match_id uuid,
    opponent_team_id uuid,
    home_or_away text,
    PRIMARY KEY (team_id, match_date)
) WITH CLUSTERING ORDER BY (match_date DESC);

CREATE TABLE match_details (
    match_id uuid PRIMARY KEY,
    date timestamp,
    team1_id uuid,
    team2_id uuid,
    score1 int,
    score2 int
);
