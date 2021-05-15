import sqlalchemy
from sqlalchemy import create_engine
from flask import Flask, render_template, jsonify
import os


# Create an instance of Flask
app = Flask(__name__)

# Create a connection to DB
rds_connection_string = "postgres:postgres@localhost:5432/Eye"


@app.route("/")
def home():

    # Return template and data
    return render_template("index.html")


# @app.route("/")
# def default():
#     return (os.environ.get('NAME', 'Name not configured'))


@app.route("/api")
def api():
    engine = create_engine(f'postgresql://{rds_connection_string}')
    # Query database
    results = engine.execute('SELECT * FROM "Eye"').fetchall()
    data = []
    index = 0
    for item in results:
        print(item)
        data.append({'ID': results[index][0],
                     'Patient_Age': results[index][1],
                     'Patient_Sex': results[index][2],
                     'Left-Diagnostic_Keywords': results[index][3],
                     'Right-Diagnostic_Keywords': results[index][4],
                     'Normal': results[index][5],
                     'Diabetes': results[index][6],
                     'Glaucoma': results[index][7],
                     'Cataract': results[index][8],
                     'Age_Related_Macular_Degeneration': results[index][9],
                     'Hypertension': results[index][10],
                     'Myopia': results[index][11],
                     'Other': results[index][12]
                     })
        index += 1

    return jsonify(data)


port = int(os.environ.get('PORT', 8000))


if __name__ == "__main__":
    app.run(debug=True, port=port)
