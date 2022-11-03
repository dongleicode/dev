const {
    Service
} = require('egg')

class StudentsService extends Service {
    async create(params) {
        const {
            app
        } = this
        try {
            const res = await app.mysql.insert('students', params)
            return res
        } catch (err) {
            console.log(err)
            return null
        }
    }

    async list() {
        const {
            app
        } = this
        try {
            const res = await app.mysql.select('students')
            return res
        } catch (err) {
            console.log(err)
            return null
        }
    }

    async detail(id){
        if(!id){
            console.log('id必须传递')
            return null
        }
        const {
            app
        } = this
        try {
            const res = await app.mysql.get('students', {id})
            return res
        } catch (err) {
            console.log(err)
            return null
        }
    }

    async update(obj){
        if(!obj.id){
            console.log('id必须传递')
            return null
        }
        const {
            app
        } = this
        try {
            const result = await app.mysql.update('students', obj)
            const updateSuccess = result.affectedRows === 1
            return updateSuccess
        } catch (err) {
            console.log(err)
            return null
        }
    }

    async delete(id){
        if(!id){
            console.log('id必须传递')
            return null
        }
        const {
            app
        } = this
        try {
            const res = await app.mysql.delete('students', {id})
            return res
        } catch (err) {
            console.log(err)
            return null
        }
    }
}

module.exports = StudentsService