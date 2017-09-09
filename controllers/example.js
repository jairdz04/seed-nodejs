const co = require("co");
const Example = require("../middlewares/example");

exports.getAllExample = (req, res)=>{
	co(function*() {
		const examples = yield Example.search();
		res.json(examples);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};

exports.getExampleById = (req, res)=>{
	const id_example = req.params.id;
	co(function*() {
		const example = yield Example.find(id_example);
		if(!example) return res.status(404).send({});
		res.json(example);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};

exports.postExample = (req, res)=>{
	const params = req.body;
	co(function*() {
		const example = yield Example.add(params);
		res.json(example);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};

exports.putExample = (req, res)=>{
	const params = req.body;
	const id_example = req.params.id;
	co(function*() {
		const example = yield Example.update(id_example, params);
		res.json(example);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};

exports.deleteExample = (req, res)=>{
	const id_example = req.params.id;
	co(function*() {
		const example = yield Example.delete(id_example);
		res.json(example);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};