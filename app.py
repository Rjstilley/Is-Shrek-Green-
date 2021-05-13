import sqlalchemy
from sqlalchemy import create_engine, func
from flask import Flask, jsonify


# Create a link to DB
# session = Session(engine)

# results = session.query(Eye.Eye).all()
# session.close()

# return jsonify(results)


# for x in data:
#     print(x)

# Create an instance of Flask
app = Flask(__name__)

# Create a connection to DB
rds_connection_string = "postgres:postgres@localhost:5432/Eye"
engine = create_engine(f'postgresql://{rds_connection_string}')

# Query database
data = engine.execute('SELECT * FROM "Eye"')

# Route to render index.html template using data from Postgres


@app.route("/")
def home():

    # Return template and data
    return render_template("index.html", name=data)


if __name__ == "__main__":
    app.run(debug=True)
