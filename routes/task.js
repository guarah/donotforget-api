const express = require('express');
const router = express.Router();

// Mongoose Model
const TaskModel = require("../task/Task");

list = (req, res) => {
	TaskModel.find((err, task) => {
    if (!err) res.send(task);
    else console.log(`Error: ${err}`);
  });
};

add = (req, res) => {
	const task = new TaskModel({
     description: 'teste'
	});
	
	task.save(function (err) {
		if (!err) {
			return console.log("created");
		} else {
			//TODO: return page with errors
			return console.log(err);
		}
	});
};

router.get('/', list);
router.post('/add', add);

module.exports = router;
