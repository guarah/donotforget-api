const mongoose = require('mongoose'), Schema = mongoose.Schema;

const checklistSchema = new Schema({
    name: String,
    tasks:[
      {type: Schema.Types.ObjectId, ref: 'Task'}
    ]
});

module.exports = mongoose.model('Checklist', checklistSchema);