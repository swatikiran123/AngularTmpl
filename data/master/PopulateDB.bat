ECHO OFF
ECHO Initializing appXL-Test DB with master data...

ECHO:
ECHO "Importing master user..."
mongoimport --db appXL-Test --collection users --file jsonFiles\user.json --type json --jsonArray


ECHO:
ECHO "Importing master group structure..."
mongoimport --db appXL-Test --collection groups --file jsonFiles\group.json --type json --jsonArray


ECHO:
ECHO "Importing master List of Values..."
mongoimport --db appXL-Test --collection lovs --file jsonFiles\lov.json --type json --jsonArray


ECHO:
PAUSE