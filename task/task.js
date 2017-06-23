const mongoose = require('mongoose'), Schema = mongoose.Schema;

const taskSchema = new Schema({
    description: String,
    checked: Boolean
});

module.exports = mongoose.model('Task', taskSchema);