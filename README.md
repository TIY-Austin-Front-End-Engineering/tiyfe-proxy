# Proxy server

This is a simple proxy server that allows you to sidestep CORS issues when trying to access externam APIs.

### Instructions

Make all of your requests to http://tiyfe-proxy.herokuapp.com/&lt;a urlencoded version of the API you want to query&gt;.

### Example usage

If you want to query the following API endpoint: http://growstuff.org/plantings.json ...

Query the following URL instead: http://tiyfe-proxy.herokuapp.com/http%3A%2F%2Fgrowstuff.org%2Fplantings.json

To get the urlencoded version of your API (the piece you put after the slash) you can use [URL Decoder/Encoder](http://meyerweb.com/eric/tools/dencoder/)