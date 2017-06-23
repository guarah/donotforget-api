const express = require('express');
const router = express.Router();

// Mongoose Model
const ChecklistModel = require("../checklist/Checklist");

list = (req, res) => {
	ChecklistModel.find((err, checklist) => {
    if (!err) res.send(checklist);
    else console.log(`Error: ${err}`);
  });
};

add = (req, res) => {
	const checklist = new ChecklistModel({
    name: 'teste'
	});
	
	checklist.save(function (err) {
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
