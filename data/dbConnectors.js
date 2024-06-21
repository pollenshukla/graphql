import mongoose from "mongoose";

async function connectMongo() {
    try {
        await mongoose.connect('mongodb://localhost/widgets');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
    }
}

connectMongo();

// Create Widget schema to interact with DB
// Note: The data types are w.r.t Mongo DB Data types.
const widgetSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    soldout: String,
    inventory: String,
    stores: Array,
});

/* Apply the MongoDB schema to database connection */
const Widgets = mongoose.model('widgets', widgetSchema);

export { Widgets };