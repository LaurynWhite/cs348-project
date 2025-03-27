
import os

class Config:
  db_user = os.environ.get('MYSQL_ROOT_USER')
  db_pass = os.environ.get('MYSQL_ROOT_PASSWORD')
  db_name = "soccermanagement"
  db_uri = f'mysql+mysqlconnector://{db_user}:{db_pass}@localhost/{db_name}'
  