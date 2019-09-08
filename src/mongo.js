const mongojs = require("mongojs"),
    uri = "mongodb://demo_user:demo_password@ds027769.mongolab.com:27769/demo_database",
    db = mongojs.connect(uri, ["demo_collection"]);
