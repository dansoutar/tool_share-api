'use strict'

const Tool = use('App/Models/Tool')

class ToolController {

    // Index should return a list of all records (GET)
    async index({ request, response, params }){

        let allTools = await Tool.all();

        response.status(200).json({ 
            message: 'ToolController INDEX',
            tools: allTools,
        });
    }

    // Store should accept a new record to be created (POST)
    async store({ request, response, params }){

        let newTool = await Tool.create({
            name: request.body.name,
            price: Number(request.body.price)
        });

        response.status(200).json({ 
            message: 'ToolController STORE',
            tool: newTool
        });
    }

    // Create should return a view containing a form that submits the data of the new record (GET - not used with API)
    async create({ request, response, params }){
        response.status(200).json({ 
            message: 'ToolController CREATE'
        });
    }

    // Show should return a single record
    async show({ request, response, params }){

        let tool = await Tool.findOrFail(params.id);

        response.status(200).json({ 
            message: 'ToolController SHOW',
            tool: tool
        });
    }

    // Update should accept data fields to update on a specific record (PUT | PATCH)
    async update({ request, response, params }){

        let tool = await Tool.findOrFail(params.id);

        tool.name = request.body.name || tool.name;
        tool.price = Number(request.body.price || tool.price);

        await tool.save();

        response.status(200).json({ 
            message: 'ToolController UPDATE',
            tool: tool
        });
    }

    // Edit should return a view containing a form that submits the data to update on the record (GET - not used with API)
    async edit({ request, response, params }){
        response.status(200).json({ 
            message: 'ToolController EDIT'
        });
    }

    // Destroy will remove a record (DELETE)
    async destroy({ request, response, params }){

        let tool = await Tool.findOrFail(params.id);

        await tool.delete();

        response.status(200).json({ 
            message: 'ToolController DESTROY',
            tool: tool
        });
    }
}

module.exports = ToolController
