var fs = require('fs'), JSONStream = require('JSONStream'), es = require('event-stream');

var getStream = function () {
    var jsonData = 'obfuscated_data',
        stream = fs.createReadStream(jsonData, {encoding: 'utf8'}),
        parser = JSONStream.parse('device..device_id');
        return stream.pipe(parser);

};

 getStream().pipe(es.mapSync(function (jsonData) {
        console.log(jsonData);
  }));
