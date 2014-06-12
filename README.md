README
======

Description
-----------------

WebSockets Stress Test - Tool written in NodeJS that allows to make a stress test
for your application that uses WebSockets. You can create behavior scenarios that
tool will run on every connection in test.

Installation
------------

cd websockets-stress-test

npm install

node wsst.js -h


To Execute
----------

sudo node wsst.js --connections 3 --connectionsList 1,2,3 ws://localhost:65400/websockets/telephony/client-test/user_test/11111 example/shortScenario.js

sudo node wsst.js --connections 3 --connectionsList 1,1,1 ws://localhost:65400/websockets/telephony/client-thor-test/user_thor/11111 example/shortScenario.js

sudo node wsst.js --connections 10 --connectionsList 1,1,1 ws://localhost:65400/websockets/telephony/client-thor-test/user_thor/11111 example/shortScenario.js

sudo node wsst.js --connections 10 --connectionsList 1,10 ws://localhost:65400/websockets/telephony/client-thor-test/user_thor/11111 example/shortScenario.js