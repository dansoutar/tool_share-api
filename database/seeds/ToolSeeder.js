'use strict'

/*
|--------------------------------------------------------------------------
| ToolSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ToolSeeder {
  async run () {
    let toolsArr = await Factory.model('App/Models/Tool').createMany(100);

    toolsArr.forEach((tool) => {
      tool.save();
    });
  }
}

module.exports = ToolSeeder
