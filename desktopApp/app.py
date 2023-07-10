import numpy as np
import pandas as pd
from flask import Flask, send_file, make_response
from flask_cors import CORS




app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return "Hello, World!"


@app.route("/model/<file>")
def model(file):
    # testSet = pd.read_csv('Testing.csv')
    # fileloc = 'desktopApp/data/'+file
    # fileloc = "C:/Users/91629/Desktop/Training.csv"
    trainSet = pd.read_csv(file)

    trainSet = trainSet.loc[:, ~trainSet.columns.str.contains('^Unnamed')]
    # testSet = testSet.loc[:, ~testSet.columns.str.contains('^Unnamed')]

    x_train = trainSet[trainSet.columns.difference(['prognosis'])]
    y_train  = trainSet[['prognosis']]

    # x_test= testSet[testSet.columns.difference(['prognosis'])]
    # y_test  = testSet[['prognosis']]

    from sklearn.model_selection import cross_val_score
    from sklearn.tree import DecisionTreeClassifier
    from sklearn.metrics import accuracy_score

    clf =  DecisionTreeClassifier()
    clf = clf.fit(x_train,y_train)

    # y_pred = clf.predict(x_test)

    # acuScore = accuracy_score(y_test, y_pred)
    # print(acuScore)
    
    import joblib
    model_file = 'model-'+file+'.pkl'
    joblib.dump(clf, model_file)
    return send_file(model_file, mimetype='application/octet-stream', as_attachment=True)
    

if __name__ == "__main__":
    app.run(debug=True)