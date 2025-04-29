from sqlalchemy import Index
from app.database import db

class Team(db.Model):
  __tablename__ = "Team"

  team_id = db.Column(db.Integer, primary_key=True)
  team_name = db.Column(db.String(30), nullable=False)
  city = db.Column(db.String(30), nullable=False)
  state = db.Column(db.String(30), nullable=False)
  
  __table_args__ = (
    Index('team_id_index', team_id, mysql_using='btree'),
  )

  # One to many relationship
  # players = db.relationship('Player', backref='player', lazy=True)
  players = db.relationship("Player", backref="team", cascade="all, delete")

  def __init__(self, team_name, city, state):
    self.team_name = team_name
    self.city = city
    self.state = state
    

class Player(db.Model):
  __tablename__ = "Player"

  player_id = db.Column(db.Integer, primary_key=True)
  team_id = db.Column(db.Integer, db.ForeignKey('Team.team_id'), nullable=False)
  first = db.Column(db.String(30), nullable=False)
  last = db.Column(db.String(30), nullable=False)
  
  __table_args__ = (
    Index('player_team_index', team_id, mysql_using='btree'), 
  )
  
  plays = db.relationship("Plays", backref="player", cascade="all, delete")
  
  def __init__(self, team_id, first, last):
    self.team_id = team_id
    self.first = first
    self.last = last


class Positions(db.Model):
  __tablename__ = "Positions"

  position = db.Column(db.String(3), primary_key=True)

  def __init__(self, position):
    self.position = position


class Plays(db.Model):
  __tablename__ = "Plays"

  player_id = db.Column(db.Integer, db.ForeignKey('Player.player_id'))
  position = db.Column(db.String(3), db.ForeignKey('Positions.position'))

  __table_args__ = (
        db.PrimaryKeyConstraint('player_id', 'position'),
        Index('plays_index', player_id, mysql_using='btree'),
    )

  def __init__(self, player_id, position):
    self.player_id = player_id
    self.position = position


class Formation(db.Model):
  __tablename__ = "Formation"

  formation_id = db.Column(db.Integer, primary_key=True)
  formation_name = db.Column(db.String(30), nullable=False)

  def __init__(self, formation_id, formation_name):
    self.formation_id = formation_id
    self.formation_name = formation_name

    
class FormationPositions(db.Model):
  __tablename__ = "FormationPositions"

  formation_id = db.Column(db.Integer, db.ForeignKey('Formation.formation_id'))
  position = db.Column(db.String(3), db.ForeignKey('Positions.position'))
  num_positions = db.Column(db.Integer)

  __table_args__ = (
    db.PrimaryKeyConstraint('formation_id', 'position'),
    Index('formation_position_index', formation_id, mysql_using='btree'),
  )

  def __init__(self, formation_id, position, num_positions):
    self.formation_id = formation_id
    self.position = position
    self.num_positions = num_positions