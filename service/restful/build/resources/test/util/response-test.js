var t = require('/lib/testing');
var util = require('./response');

t.test('serveNotFound', function () {
    var result = util.serveNotFound('my message');

    t.assertJson({
        "status": 404,
        "body": {
            "status": 404,
            "message": "my message"
        },
        "contentType": "application/json"
    }, result);
});

t.test('serveError', function () {
    var result = util.serveError('my message', 405);

    t.assertJson({
        "status": 405,
        "body": {
            "status": 405,
            "message": "my message"
        },
        "contentType": "application/json"
    }, result);
});


t.test('serveJson', function () {
    var result = util.serveJson({
        a: 1,
        b: 2
    }, 201);

    t.assertJson({
        "status": 201,
        "body": {
            "a": 1,
            "b": 2
        },
        "contentType": "application/json"
    }, result);
});
