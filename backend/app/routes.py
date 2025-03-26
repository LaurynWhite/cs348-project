from flask import Flask

app = Flask(__name__)

def init_routes(app):
  
  @app.route('/', methods=['GET'])
  def get_something():
      return 'Hello World'