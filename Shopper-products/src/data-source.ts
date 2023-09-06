import 'dotenv/config'
import { DataSource, DataSourceOptions } from 'typeorm'
import path from 'path'

const settings = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, './entity/**.{ts,js}');
    const migrationPath: string = path.join(__dirname, './migrations/**.{ts,js}');

    return {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
        synchronize: false,
        logging: false,
        entities: [entitiesPath],
        migrations: [migrationPath],
        subscribers: [],
    }
  
}

export const AppDataSource = new DataSource(settings())
