import * as mongoose from 'mongoose'
mongoose.connect(`mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
mongoose.connection.on('open', () => console.log('Mongo connection is opened!'))
mongoose.connection.on('error', (error) => console.log('Connection faild', error.message))
mongoose.set('useCreateIndex', true)