exports.name = 'Short test';

exports.description = 'Simple short test that shows how tests are working';

exports.path = '';

exports.init = function (ws, api) {
    ws.on('message', function (message) {
        api.checkpoint('> ' + message);

        var testMessage = {
            message: '',
            sessionId: '',
            callId: '1000000000',
            did: '2070000000',
            extension: '11111',
            messageDate: '9999-99-99'
        };


        //loop 10 times
        var stopConnection = false;
        for(var i = 0; i < 10; i++) {
            var testMessageJson = JSON.stringify(testMessage);
            //api.checkpoint('>>>> sending testMessageJson = ' + testMessageJson);
            ws.send(testMessageJson);
        }

        ws.close();

        /*
        message = message.split(':');

        if (message[0] === 'pong') {
            ws.send('concat:1:'+10000+':'+100050);
        } else if (message[0] === 'concat1') {
            ws.send('concat:2:'+10040+':'+10000);
        } else if (message[0] === 'concat2') {
            ws.send('concat:3:'+21900+':'+97000);
        } else if (message[0] === 'concat3') {
            ws.close();
        }
        */
    });

    //ws.send('ping');
};
