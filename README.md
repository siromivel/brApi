# brApi #<br />
brApi provides GeoJSON data for  brApp(https://github.com/pdubs/brApp).<br />

To run this thing: Add the config/env/dev/dev.json file it complains about and the "database" property.
Database should be the URL of your mongoDB server.

Currently the Master branch is a functioning initial version of the API. It currently supports the following routes:

/trails                          -returns a FeatureCollection of all trails on the server.<br />
/trails/%trail name%             -returns the requested trail if the name is found in the collection. supports spaces.<br />

/location/%place name%           -returns all trails from the place (i.e., "winter park"), ordered by the "parkID" of the trail.<br />

/difficulty/%e, i, a or ex%      -returns all trails of the specified difficulty.<br />
                                 e = easy(green); i = intermediate(blue); a = advanced(black); ex = extreme(dbl. black);<br />

A major refactor to implement an MVC setup is in progress on the development branch.<br />
