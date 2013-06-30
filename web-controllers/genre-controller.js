var resource = require('./resource');

module.exports = function(app){
    app.get('/api/genre', function(req, res){

        resource.genre.get({},{},cbSuccess,cbFailure);

        function cbSuccess(data){
            res.send(getGenreArray(data));
        };

        function cbFailure(error, respHeader){
            throw "REST API error";
        };

        function getGenreArray(data){

            var genre = [ ];
            for (i = 0, length = data.result.length; i < length; i++) {
                var obj = data.result[i];
                genre.push({key:obj.Key,value:obj.Value});
            }
            return genre;
        };

    });
};
