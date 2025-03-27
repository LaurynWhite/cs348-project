import copy
from flask import Flask, jsonify, request
from app.models import Team, Player, Positions, Plays, Formation, FormationPositions
from app.database import db
from sqlalchemy import text

app = Flask(__name__)

def init_routes(app):

  @app.route('/api/createTeam', methods=['POST'])
  def create_team():
      data = request.get_json()
      new_team = Team(team_name=data['teamName'], city=data['city'], state=data['state'])
      db.session.add(new_team)
      db.session.commit()
      db.session.close()
      return jsonify({"message": "Team created successfully!"}), 201
  
  @app.route('/api/teams', methods=['GET'])
  def get_teams():
      teams = Team.query.all()
      db.session.close()
      
      return jsonify([
        {'team_id': team.team_id,
         'team_name': team.team_name,
         'city': team.city,
         'state': team.state
         }
        for team in teams])
      
  @app.route('/api/team/<int:teamId>', methods=['GET'])
  def get_team_info(teamId):
    teams = (
      db.session.query(Team, Player, Plays)
             .outerjoin(Player, Team.team_id == Player.team_id)
             .outerjoin(Plays, Player.player_id == Plays.player_id)
             .filter(Team.team_id == teamId).all()
             )
    db.session.close()
    
    # Parse database result
    team = teams[0][0]
    players = {}
    
    for team, player, plays in teams:
      if player and player.player_id not in players:
        players[player.player_id] = {
            "player_id": player.player_id,
            "team_id": player.team_id,
            "first": player.first,
            "last": player.last,
            "positions": []
        }
      
      if plays:
        players[player.player_id]["positions"].append(plays.position)
        
    
    # Format data
    result = {
      "team_id": team.team_id,
      "team_name": team.team_name,
      "city": team.city,
      "state": team.state,
      "players": list(players.values())
    }
    
    return jsonify(result)
  
  @app.route('/api/team/<int:teamId>/summary', methods=['GET'])
  def get_team_summary(teamId):
    query = text(
      """
        SELECT positions.position, COUNT(plays.player_id) AS num_players
        FROM positions LEFT OUTER JOIN plays ON positions.position = plays.position
        LEFT OUTER JOIN player ON plays.player_id = player.player_id
        WHERE player.team_id = :team_id OR player.team_id IS NULL
        GROUP BY positions.position;
       """)
    
    result = db.session.execute(query, {"team_id": teamId})

    summary = result.fetchall()
    db.session.close()
    
    return jsonify([
      {'position': stat.position,
        'num_players': stat.num_players}
      for stat in summary])
  
  @app.route('/api/team/<int:teamId>/formations', methods=['GET'])
  def get_team_formations(teamId):
    query = text(
      """
        SELECT F.formation_name
        FROM formation F JOIN formationpositions FP ON F.formation_id = FP.formation_id
        LEFT OUTER JOIN (
          SELECT positions.position, COUNT(plays.player_id) AS num_players
          FROM positions LEFT OUTER JOIN plays ON positions.position = plays.position
          LEFT OUTER JOIN player ON plays.player_id = player.player_id
          WHERE player.team_id = :team_id OR player.team_id IS NULL
          GROUP BY positions.position) AS summary
        ON FP.position = summary.position
        GROUP BY F.formation_name
        HAVING COUNT(CASE WHEN summary.num_players < FP.num_positions THEN 1 ELSE NULL END) = 0;
       """)
    
    result = db.session.execute(query, {"team_id": teamId}).fetchall()
    db.session.close()
    
    formations = []
    for formation in result:
      formations.append(formation.formation_name)
      
    return formations
    
    
    
    # return jsonify([formation['formation_name']] for formation in formations)
  
  @app.route('/api/team/edit', methods=['POST'])
  def edit_team():
    data = request.get_json()
    team = db.session.query(Team).filter(Team.team_id == data['team_id']).first()

    if team:
      team.team_name = data['team_name']
      team.city = data['city']
      team.state = data['state']
      db.session.commit()
    
    db.session.close()
    return jsonify({"message": "Team delete successfully!"}), 200
  
  @app.route('/api/team/delete/<int:teamId>', methods=['GET'])
  def delete_team(teamId):
    team = db.session.query(Team).filter(Team.team_id == teamId).first()

    if team:
      db.session.delete(team)
      db.session.commit()
    
    db.session.close()
    return jsonify({"message": "Team delete successfully!"}), 200
  
  @app.route('/api/allPositions', methods=['GET'])
  def get_all_positions():
      positions = Positions.query.all()
      db.session.close()
      
      return [position.position
        for position in positions]
      
  @app.route('/api/addPlayer', methods=['POST'])
  def add_player():
      data = request.get_json()
      print(data)
      new_player = Player(team_id=data['team_id'], first=data['first'], last=data['last'])
      db.session.add(new_player)
      db.session.flush()
      
      for position in data['positions']:
        plays = Plays(player_id=new_player.player_id, position=position)
        db.session.add(plays)
      
      db.session.commit()
      db.session.close()
      return jsonify({"message": "Player created successfully!"}), 201