var BD = (function(){
	var db;
	//this.onsuccess=function(){};
	var initBD = function() {
		db = openDatabase('terremotos', '1.0', 'base de datos terremotos', 2 * 1024 * 1024);
		db.transaction(function(tx) {
			tx.executeSql('CREATE TABLE IF NOT EXISTS terremotos(id PRIMARY KEY, time UNIQUE, title, depth, mag, lat, long, link)',[],null, function errorCallback(tx, error) {
				alert(error.message);
			});
		});
	};
	
	
	var addEarthquake = function(terremoto) {
		db.transaction(function(tx) {
			tx.executeSql('INSERT OR IGNORE INTO terremotos(id, time, title, depth, mag, lat, long, link) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',[terremoto.id, terremoto.properties.time, terremoto.properties.title, 
			terremoto.geometry.coordinates[2], terremoto.properties.mag, terremoto.geometry.coordinates[0], terremoto.geometry.coordinates[1],terremoto.properties.detail], null, function errorCallback(tx, error) {
				console.log(error.message);
			});
		});
		};
	
	var getEarthquakes = function(respuesta) {
		db.transaction(function(tx) {
		this.onsuccess=respuesta;
			tx.executeSql('SELECT * FROM terremotos ORDER BY mag DESC LIMIT 20',[], function callback(tx, results) {
			  len = results.rows.length;
                        for (var i = 0; i < len; i++) {
                        	this.onsuccess(results.rows.item(i));
                        }
			}, function errorCallback(tx, error) {
				alert(error.message);
			});

		});
	};
	var getEarthquakes50 = function(respuesta) {
		 
		db.transaction(function(tx) {
		this.onsuccess=respuesta;
			tx.executeSql('SELECT * FROM terremotos ORDER BY mag DESC LIMIT 50',[], function callback(tx, results) {
			  len = results.rows.length;
                        for (var i = 0; i < len; i++) {
                        	this.onsuccess(results.rows.item(i));
                        }
			}, function errorCallback(tx, error) {
				alert(error.message);
			});

		});
	};
	
	
	var getEarthquake = function(id, respuesta) {
		console.log("id dentro de getEarthquake: "+id);
		db.transaction(function(tx) {
			this.onsuccess=respuesta;
			tx.executeSql('SELECT * FROM terremotos WHERE id = ?', [id],function(tx, results) {
				this.onsuccess(results.rows.item(0));
			}, function errorCallback(tx, error) {
				console.log(error);
			});

		});
	};
	
	return {
		initBD: initBD,
		addEarthquake: addEarthquake,
		getEarthquakes: getEarthquakes,
		getEarthquakes50: getEarthquakes50,
		getEarthquake:getEarthquake
		
	};
	
})();

