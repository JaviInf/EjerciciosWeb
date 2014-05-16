var BD = (function(){
	var db;
	//this.onsuccess=function(){};
	var iniciarBD = function() {
		
		db = openDatabase('myTeewts', '1.0', 'My first database', 2 * 1024 * 1024);
		db.transaction(function(tx) {
			tx.executeSql('CREATE TABLE IF NOT EXISTS tweets(id, user, date, text)',[],null, function errorCallback(tx, error) {
				alert(error.message);
			});
			tx.executeSql('CREATE TABLE IF NOT EXISTS usuarios(id, name, image)', [], null, function errorCallback(tx, error) {
				alert(error.message);
			});
		});
	};
	
	var addTweet = function(tweet) {
		db.transaction(function(tx) {
			// Insertar usuario
			tx.executeSql('INSERT OR IGNORE INTO usuarios (id, name, image) VALUES (?, ?, ?)', [tweet.user.id, tweet.user.name, tweet.user.profile_image_url], null, function(tx, error) {
				console.log(error);
			});
			
			var time = (new Date(Date.parse(tweet.created_at))).getTime();
			tx.executeSql('INSERT OR IGNORE INTO tweets (id, user, date, text) VALUES (?, ?, ?, ?)', [tweet.id, tweet.from_user, time / 1000, tweet.text], null, function errorCallback(tx, error) {
				console.log(error.message);
			});
		});
	};
	
	var removeTweet = function(id, respuesta) {
		db.transaction(function(tx) {
			this.onsuccess=respuesta;
			tx.executeSql('DELETE FROM tweets WHERE id=?', [id], function callback(tx, results) {
			this.onsuccess(results.rows.item(0));
			}, function errorCallback(tx, error) {
				alert(error.message);
			});
		});
	};

	var updateTweet = function(tweet) {
		db.transaction(function(tx) {
			var time = (new Date(Date.parse(tweet.created_at))).getTime();
			tx.executeSql('UPDATE tweets SET date=? text=? WHERE id=?)', [time / 1000, tweet.text, tweet.id], null, function errorCallback(tx, error) {
				console.log(error.message);
			});
		});
	};

	var getTweets = function(fecha) {
		db.transaction(function(tx) {
			tx.executeSql('SELECT * FROM tweets WHERE date > ?', [fecha], function callback(tx, results) {
			  len = results.rows.length;
                        for (var i = 0; i < len; i++) {
                          console.log(results.rows.item(i));
                        }
			}, function errorCallback(tx, error) {
				alert(error.message);
			});

		});
	};
	
	var getTweet = function(id, respuesta) {
		db.transaction(function(tx) {
			this.onsuccess=respuesta;
			tx.executeSql('SELECT * FROM tweets WHERE id = ?', [id],function(tx, results) {
				this.onsuccess(results.rows.item(1));
			}, function errorCallback(tx, error) {
				console.log(error);
			});

		});
	};
	
	return {
		iniciarBD: iniciarBD,
		addTweet: addTweet,
		getTweet: getTweet,
		removeTweet: removeTweet,
		updateTweet:updateTweet,
		getTweets:getTweets
		
	};
	
})();

// var BD = {
	
	// iniciarBD : function() {
// 		
		// db = openDatabase('myTeewts', '1.0', 'My first database', 2 * 1024 * 1024);
		// db.transaction(function(tx) {
			// tx.executeSql('CREATE TABLE IF NOT EXISTS tweets(id, user, date, text)',[],null, function errorCallback(tx, error) {
				// alert(error.message);
			// });
			// tx.executeSql('CREATE TABLE IF NOT EXISTS usuarios(id, name, image)', [], null, function errorCallback(tx, error) {
				// alert(error.message);
			// });
		// });
	// },

	// addTweet : function(tweet) {
		// db.transaction(function(tx) {
			// var time = (new Date(Date.parse(tweet.created_at))).getTime();
			// tx.executeSql('INSERT INTO tweets (id, user, date, text) VALUES (?, ?, ?, ?)', [tweet.id, tweet.from_user, time / 1000, tweet.text], null, function errorCallback(tx, error) {
				// alert(error.message);
			// });
			// tx.executeSql('SELECT * FROM usuarios WHERE name = ?', [tweet.from_user], function callback(tx, results) {
				// var len = results.rows.length;
				// if (len === 0) {
					// tx.executeSql('INSERT INTO usuarios (id, user, image)', [tweet.from_user_id, tweet.from_user, tweet.profile_image_url]);
				// }
			// }, function errorCallback(tx, error) {
				// alert(error.message);
			// });
		// });
	// },

	// removeTweet : function(id) {
		// db.transaction(function(tx) {
			// tx.executeSql('DELETE FROM tweets WHERE id=?', [id], function callback(tx, results) {
				// var html=[];
				// html.push('<li>' + results.rows.item(1).text + '</li>');
			// }, function errorCallback(tx, error) {
				// alert(error.message);
			// });
		// });
	// },
// 
	// updateTweet : function(tweet) {
		// db.transaction(function(tx) {
			// var time = (new Date(Date.parse(tweet.created_at))).getTime();
			// tx.executeSql('UPDATE tweets SET date=? text=? WHERE id=?)', [time / 1000, tweet.text, tweet.id], null, function errorCallback(tx, error) {
				// alert(error.message);
			// });
		// });
	// },
// 
	// getTweets : function(fecha) {
		// db.transaction(function(tx) {
			// tx.executeSql('SELECT * FROM tweets WHERE date > ?', [fecha], function callback(tx, results) {
			 // var html = [], len = results.rows.length;
                        // for (var i = 0; i < len; i++) {
                            // html.push('<li>' + results.rows.item(i).text + '</li>');
                        // }
			// }, function errorCallback(tx, error) {
				// alert(error.message);
			// });
// 
		// });
	// }
// };

// function Bd(){var db;}
//
// Bd.prototype.iniciarBD=function(){
	

// };
//
// Bd.prototype.addTweet=function(){




// };


// Bd.prototype.updateTweet=function(){






// };
// Bd.prototype.removeTweet=function(){
	
	
	
	
// };

// Bd.prototype.getTweets=function(){





// };
