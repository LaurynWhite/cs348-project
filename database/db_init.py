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
CREATE_TEAM_TABLE = """
CREATE TABLE IF NOT EXISTS Team (
  team_id INT PRIMARY KEY AUTO_INCREMENT,
  team_name VARCHAR(30) NOT NULL,
  city VARCHAR(30) NOT NULL,
  state VARCHAR(30) NOT NULL
);
"""
CREATE_PLAYER_TABLE = """
CREATE TABLE IF NOT EXISTS Player (
  player_id INT PRIMARY KEY AUTO_INCREMENT,
  team_id INT NOT NULL,
  first VARCHAR(30) NOT NULL,
  last VARCHAR(30) NOT NULL,
  FOREIGN KEY (team_id) REFERENCES Team(team_id) ON DELETE CASCADE
);
"""
CREATE_POSITION_TABLE = """
CREATE TABLE IF NOT EXISTS Positions (
  position VARCHAR(3) PRIMARY KEY
);
"""

CREATE_PLAYS_TABLE = """
CREATE TABLE IF NOT EXISTS Plays (
  player_id INT,
  position VARCHAR(3),
  PRIMARY KEY (player_id, position),
  FOREIGN KEY (player_id) REFERENCES Player(player_id) ON DELETE CASCADE,
  FOREIGN KEY (position) REFERENCES Positions(position) ON DELETE CASCADE
);
"""

CREATE_FORMATION_TABLE = """
CREATE TABLE IF NOT EXISTS Formation (
  formation_id INT PRIMARY KEY AUTO_INCREMENT,
  formation_name VARCHAR(30) NOT NULL
);
"""

CREATE_FORMATION_POSITION_TABLE = """
CREATE TABLE IF NOT EXISTS FormationPositions (
  formation_id INT,
  position VARCHAR(3),
  num_positions INT, 
  FOREIGN KEY (formation_id) REFERENCES Formation(formation_id) ON DELETE CASCADE,
  FOREIGN KEY (position) REFERENCES Positions(position) ON DELETE CASCADE,
  PRIMARY KEY (formation_id, position)
);
"""

# cursor.execute(CREATE_FORMATION_POSITION_TABLE)


cursor.execute("SHOW TABLES")
tables = cursor.fetchall()

for table in tables:
  print(table)


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

# Save the transaction
# db.commit()


# Verify content
cursor.execute("SELECT * FROM Positions;")
rows = cursor.fetchall()
for row in rows:
  print(row)


cursor.close()
db.close()