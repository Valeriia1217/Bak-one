import * as mongoose from 'mongoose';

export default () => {
    mongoose.connect("mongodb+srv://root:root@cluster0-hqqhb.mongodb.net/test", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected DB..')
}
