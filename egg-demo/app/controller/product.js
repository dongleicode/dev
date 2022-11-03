const {Controller} = require('egg')

class ProductController extends Controller {
    async index(){
        const { ctx } = this
        const res = await ctx.service.product.index()

        ctx.body = res
    }
    async detail(){
        const { ctx } = this
        console.log(ctx.query)
        ctx.body = `id == ${ctx.query.id}`
    }
    async detail2(){
        const { ctx } = this
        console.log(ctx.params)
        ctx.body = `id == ${ctx.params.id}`
    }

    async create(){
        const { ctx } = this
        console.log(ctx.request.body)
        const {name, age} = ctx.request.body
        ctx.body = {
            name, 
            age
        }
    }

    async update(){
        const { ctx } = this
        console.log(ctx.params)
        ctx.body = {
            id: ctx.params.id
        }
    }

    async delete(){
        const { ctx } = this
        console.log(ctx.params)
        ctx.body = {
            id: ctx.params.id
        }
    }

}

module.exports = ProductController;
