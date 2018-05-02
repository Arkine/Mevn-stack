import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
	title: String,
	description: String,
});

module.exports = mongoose.model('Event', EventSchema);