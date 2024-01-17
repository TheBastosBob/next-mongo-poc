import mongoose from 'mongoose';

const Name = new mongoose.Schema({
    // define the schema
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    // more fields...
});

export default mongoose.models.Name || mongoose.model('Name', Name);
