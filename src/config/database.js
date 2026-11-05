import { Sequelize } from 'sequelize'


class Database {
    constructor() {
        this.init()
    }

    init(){
        this.db = new Sequelize({
            dialect:'postgres',
            database: 'example_6nc9',
            username:'example_6nc9_user',
            password:'KhRyZKg7r6qUMef2mcghYsl2EjRtXfo6',
            host:'dpg-dbh8eo5g1s2s73dgun60-a.oregon-postgres.render.com',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        })
    }
}

export default new Database()