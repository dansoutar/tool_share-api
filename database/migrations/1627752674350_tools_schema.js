'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ToolsSchema extends Schema {
  up () {
    this.alter('tools', (table) => {
      // alter table
      table.string('tool-name')
      table.integer('tool-price')
    })
  }

  down () {
    this.table('tools', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ToolsSchema
