const {Service} =  require('egg')

class ProductService extends Service {
    async index(){
       return {
        id:100,
        name: 'bus'
       }
    }
}

module.exports = ProductService