from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from app.config import Config
from app.database import db

def create_app():
  app = Flask(__name__)

  app.config['SQLALCHEMY_DATABASE_URI'] = Config.db_uri
  app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

  db.init_app(app)
  
  CORS(app, resources={r"/api/*": {"origins": "*"}})

  from .routes import init_routes
  init_routes(app)
  
  return app
