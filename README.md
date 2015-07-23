# brApi #<br />

[![Join the chat at https://gitter.im/siromivel/brApi](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/siromivel/brApi?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
brApi provides GeoJSON data for  brApp(https://github.com/pdubs/brApp).<br />

To run this thing: Set up the database URL in /config/env/development.js

Currently the Master branch is a functioning initial version of the API. It currently supports the following routes:

/trails                          
    returns all trails on the server as a FeatureCollection.<br />
<br />/trails/%trail name%             
    returns the requested trail as a Feature object, supports spaces.<br />

<br />/location/%place name%           
    returns all trails from the place(i.e., "winter park") as a FeatureCollection, ordered by the "parkID" of the trail.<br />

<br />/difficulty/%e, i, a or ex%      
    returns all trails of the specified difficulty as a FeatureCollection.<br />
    e = easy(green); i = intermediate(blue); a = advanced(black); ex = extreme(dbl. black);<br />
