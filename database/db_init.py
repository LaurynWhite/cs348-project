import mysql.connector
import os

db = mysql.connector.connect(
  host="localhost",
  user=os.environ.get('MYSQL_ROOT_USER'),
  password=os.environ.get('MYSQL_ROOT_PASSWORD'),
  database="soccermanagement"
)

cursor = db.cursor()

# mycursor.execute("CREATE DATABASE soccermanagement")

# Create the tables
# CREATE_TEAM_TABLE = """
# CREATE TABLE IF NOT EXISTS Team (
#   team_id INT PRIMARY KEY AUTO_INCREMENT,
#   team_name VARCHAR(30) NOT NULL,
#   city VARCHAR(30) NOT NULL,
#   state VARCHAR(30) NOT NULL
# );
# """
# CREATE_PLAYER_TABLE = """
# CREATE TABLE IF NOT EXISTS Player (
#   player_id INT PRIMARY KEY AUTO_INCREMENT,
#   team_id INT NOT NULL,
#   first VARCHAR(30) NOT NULL,
#   last VARCHAR(30) NOT NULL,
#   FOREIGN KEY (team_id) REFERENCES Team(team_id) ON DELETE CASCADE
# );
# """
# CREATE_POSITION_TABLE = """
# CREATE TABLE IF NOT EXISTS Positions (
#   position VARCHAR(3) PRIMARY KEY
# );
# """

# CREATE_PLAYS_TABLE = """
# CREATE TABLE IF NOT EXISTS Plays (
#   player_id INT,
#   position VARCHAR(3),
#   PRIMARY KEY (player_id, position),
#   FOREIGN KEY (player_id) REFERENCES Player(player_id) ON DELETE CASCADE,
#   FOREIGN KEY (position) REFERENCES Positions(position) ON DELETE CASCADE
# );
# """

# CREATE_FORMATION_TABLE = """
# CREATE TABLE IF NOT EXISTS Formation (
#   formation_id INT PRIMARY KEY AUTO_INCREMENT,
#   formation_name VARCHAR(30) NOT NULL
# );
# """

# CREATE_FORMATION_POSITION_TABLE = """
# CREATE TABLE IF NOT EXISTS FormationPositions (
#   formation_id INT,
#   position VARCHAR(3),
#   num_positions INT, 
#   FOREIGN KEY (formation_id) REFERENCES Formation(formation_id) ON DELETE CASCADE,
#   FOREIGN KEY (position) REFERENCES Positions(position) ON DELETE CASCADE,
#   PRIMARY KEY (formation_id, position)
# );
# """

# # cursor.execute(CREATE_FORMATION_POSITION_TABLE)


# cursor.execute("SHOW TABLES")
# tables = cursor.fetchall()

# for table in tables:
#   print(table)


# Initialize hardcoded tables
# cursor.execute("INSERT INTO Positions (position) VALUES ('GK')")
# cursor.execute("INSERT INTO Positions (position) VALUES ('LB')")
# cursor.execute("INSERT INTO Positions (position) VALUES ('RB')")
# cursor.execute("INSERT INTO Positions (position) VALUES ('CB')")
# cursor.execute("INSERT INTO Positions (position) VALUES ('CM')")
# cursor.execute("INSERT INTO Positions (position) VALUES ('CDM')")
# cursor.execute("INSERT INTO Positions (position) VALUES ('CAM')")
# cursor.execute("INSERT INTO Positions (position) VALUES ('CF')")
# cursor.execute("INSERT INTO Positions (position) VALUES ('ST')")
# cursor.execute("INSERT INTO Positions (position) VALUES ('LM')")
# cursor.execute("INSERT INTO Positions (position) VALUES ('LW')")
# cursor.execute("INSERT INTO Positions (position) VALUES ('RM')")
# cursor.execute("INSERT INTO Positions (position) VALUES ('RW')")

# Insert Formations
# cursor.execute("INSERT INTO Formation(formation_name) VALUES ('4-4-2')")
# cursor.execute("INSERT INTO Formation(formation_name) VALUES ('4-3-3')")
# cursor.execute("INSERT INTO Formation(formation_name) VALUES ('4-2-3-1')")
# cursor.execute("INSERT INTO Formation(formation_name) VALUES ('3-5-2')")
# cursor.execute("INSERT INTO Formation(formation_name) VALUES ('5-3-2')")
# cursor.execute("INSERT INTO Formation(formation_name) VALUES ('3-4-3')")
# cursor.execute("INSERT INTO Formation(formation_name) VALUES ('4-1-4-1')")
# cursor.execute("INSERT INTO Formation(formation_name) VALUES ('4-4-1-1')")
# cursor.execute("INSERT INTO Formation(formation_name) VALUES ('4-3-1-2')")

# Insert FormationPositions
# # 4-4-2 (formation_id = 1)
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (1, 'GK', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (1, 'CB', 2)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (1, 'LB', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (1, 'RB', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (1, 'CM', 2)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (1, 'LM', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (1, 'RM', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (1, 'ST', 2)")

# # 4-3-3 (formation_id = 2)
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (2, 'GK', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (2, 'CB', 2)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (2, 'LB', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (2, 'RB', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (2, 'CDM', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (2, 'CM', 2)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (2, 'LW', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (2, 'RW', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (2, 'ST', 1)")

# # 4-2-3-1 (formation_id = 3)
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (3, 'GK', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (3, 'CB', 2)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (3, 'LB', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (3, 'RB', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (3, 'CDM', 2)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (3, 'CAM', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (3, 'LW', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (3, 'RW', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (3, 'ST', 1)")

# # 3-5-2 (formation_id = 4) - Changed CMs to CDMs
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (4, 'GK', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (4, 'CB', 3)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (4, 'LM', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (4, 'RM', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (4, 'CDM', 2)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (4, 'CAM', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (4, 'ST', 2)")

# # 5-3-2 (formation_id = 5) - Changed 2 CDMs + 1 CM to 3 CMs
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (5, 'GK', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (5, 'CB', 3)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (5, 'LB', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (5, 'RB', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (5, 'CM', 3)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (5, 'ST', 2)")

# # 3-4-3 (formation_id = 6)
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (6, 'GK', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (6, 'CB', 3)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (6, 'LM', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (6, 'RM', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (6, 'CM', 2)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (6, 'LW', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (6, 'RW', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (6, 'ST', 1)")

# # 4-1-4-1 (formation_id = 7)
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (7, 'GK', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (7, 'CB', 2)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (7, 'LB', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (7, 'RB', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (7, 'CDM', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (7, 'CM', 2)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (7, 'LM', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (7, 'RM', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (7, 'ST', 1)")

# # 4-4-1-1 (formation_id = 8) - Changed CAM to CF
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (8, 'GK', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (8, 'CB', 2)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (8, 'LB', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (8, 'RB', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (8, 'CM', 2)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (8, 'LM', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (8, 'RM', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (8, 'CF', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (8, 'ST', 1)")

# 4-3-1-2 (formation_id = 11)
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (11, 'GK', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (11, 'CB', 2)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (11, 'LB', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (11, 'RB', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (11, 'CM', 3)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (11, 'CAM', 1)")
# cursor.execute("INSERT INTO FormationPositions (formation_id, position, num_positions) VALUES (11, 'ST', 2)")

# cursor.execute("CREATE INDEX team_id_index ON Team (team_id) USING BTREE;")
# cursor.execute("CREATE INDEX player_team_index ON Player (team_id) USING BTREE;")
# cursor.execute("CREATE INDEX plays_index ON Plays (player_id) USING BTREE;")
# cursor.execute("CREATE INDEX formation_position_index ON FormationPositions (formation_id) USING BTREE;")


# Save the transaction
db.commit()

# Verify content
# cursor.execute("SELECT * FROM FormationPositions;")
# rows = cursor.fetchall()
# for row in rows:
#   print(row)
cursor.execute("SHOW INDEXES FROM Team;")


cursor.close()
db.close()