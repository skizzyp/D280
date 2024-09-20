The task was to create an interactive World-Map that allows a user to select a country and then displays information about that country.

Everything was created using the following:

IDE- Intellij
Framwework- Angular v17.2.3
Runtime- Node v20.11.1

app.component presents the interface to display the map and information about the selected country.

world.component contains the SVG file used and the event binding used to read the country clicked.

Once the country is clicked api.service communicates the country selected back to app.component which then uses the api.service again to pull the required information fro, the World Bank Api.
