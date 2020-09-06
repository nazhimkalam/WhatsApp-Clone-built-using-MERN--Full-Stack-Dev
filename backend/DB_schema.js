import mongoose from 'mongoose';

// So what is a Schema ?
//  It's the structure of the database.abs

const whatsAppSchema = mongoose.Schema({
	message: String,
	name: String,
	timestamp: String,
});


export default mongoose.model('messageContent', whatsAppSchema);