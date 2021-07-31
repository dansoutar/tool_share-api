'use strict'

const User = use('App/Models/User')


class UserController {
   async index ({ request, response }) {

        const allUsers = await User.all();

        response.json(
            {
                "message": "hello from controller",
                "users": allUsers
            }
        )
    }
}

module.exports = UserController
