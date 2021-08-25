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

<<<<<<< HEAD
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
=======
Route.get('/test', 'TestController.index');

// Tool resource route
Route.resource('tools', 'ToolController');

// // resource route equates to this:
// Route.get('tools', 'ToolController.index').as('tools.index');
// Route.post('tools', 'ToolController.store').as('tools.store');
// Route.get('tools/create', 'ToolController.create').as('tools.create');   // Returns view (not for use with API)
// Route.get('tools/:id', 'ToolController.show').as('tools.show');
// Route.put('tools/:id', 'ToolController.update').as('tools.update');
// Route.patch('tools/:id', 'ToolController.update');
// Route.get('tools/:id/edit', 'ToolController.edit').as('tools.edit');     // Returns view (not for use with API)
// Route.delete('tools/:id', 'ToolController.destroy').as('tools.destroy');
>>>>>>> d125d073e1a5c030e9ce587806ca5b3f78c62618
