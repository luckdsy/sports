var connection = require("./conn.js");

var CRUD = {
	insertData: function(sql, arr, callback) {
		connection.Client.query(sql, arr, function(error, result) {
			if (error) {
				console.log(error);
				return;
			}
			console.log("插入成功");
			callback(result);
		})
	},
	selectData: function(sql, arr, callback) {
		connection.Client.query(sql, arr, function(error, result) {
			if (error) {
				console.log(error);
				return;
			}
			console.log("查询成功");
			callback(result);
		})
	}
}

module.exports = CRUD;