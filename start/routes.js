'use strict'

const Database = use('Database');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/test', ({ response }) => {
    response.json({
        "hi": "hello world"
    })
})

const addTools = async () => {
    await Database
    .table('tools')
    .insert(
        {
            'tool-name':'hammer',
            'tool-price': 12
        }
    )
}

addTools();

Route.get('/tools', async () => {
    return await Database.table('tools').select('*');
})