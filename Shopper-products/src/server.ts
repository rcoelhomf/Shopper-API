import app from './app'
import { AppDataSource } from './data-source'

AppDataSource.initialize()
  .then((): void => {
    console.log('Server is running')

    app.listen(3000, () => console.log(`App running on port 3000`))
  })
  .catch((err: unknown): void => {
    console.error('Error during Data Source initialization', err)
  });
