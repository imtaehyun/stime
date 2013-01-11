
/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', { title: 'Express' });
};

exports.find = function(req, res) {
	var http = require('http');

	console.log("requested params");
	console.log("domain : " + req.body.domain);
	var addr = req.body.domain;
	
	// 도메인만 정제하는 작업
	http.get(addr, function(response) {
		var headers = JSON.parse(JSON.stringify(response.headers));
	
		console.log('Server Time : ' + headers.date);		
		
		res.render('time', { title: 'test', address: addr, time: headers.date });

		// res.writeHead(200, { 'Content-Type': 'text/plain' });
		// res.write('현재 ' + addr + '서버의 시간은 ' + headers.date + '입니다.');
		// res.end();
	}).on('error', function(e) {
		console.log(e.message);
	});

	
};