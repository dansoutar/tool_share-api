'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ToolSchema extends Schema {
  up () {
    this.create('tools', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.integer('price').notNullable().defaultTo(0);
      table.timestamps();
    })
  }

  down () {
    this.drop('tools');
  }
}

module.exports = ToolSchema
