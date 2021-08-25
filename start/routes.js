'use strict'

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

// /** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
// const Route = use('Route')

// Route.on('/').render('welcome')

// Route.get('/test', ({ response }) => {
//     response.json({
//         "hi": "hello world"
//     })
// })



/**
|--------------------------------------------------------------------------
| Brett / Dan
|--------------------------------------------------------------------------
 */
const Database = use('Database')
const Route = use('Route')

// Add Users
const addTools = async () => {
  await Database
          .table('tools')
          .insert(
            {
              'tool-name': 'Hammer',
              'tool-price': 10
            }
          )
}
addTools()


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
