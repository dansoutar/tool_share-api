'use strict'

class TestController {

    index({ request, response }){
        response.status(200).send('Hello World!');
    }

}

module.exports = TestController
