describe('minified-web-promises-test.js', function() {
	
	describe('.animate()', function() {
		it('just works', function(done) {
			var s;
			$(playground).add(s = EE('span', {'@title': 0, $marginTop: '20px', $backgroundColor: '#000'})[0]);
			check(s.getAttribute('title'), 0);
			check((s.style.backgroundColor == '#000') || (s.style.backgroundColor == '#000000') || (s.style.backgroundColor == 'rgb(0, 0, 0)'));

			$(s).animate({'@title': 50, $marginTop: '2px', $backgroundColor: '#ff0'}, 300, 0).then(function() {
				try {
					check(s.getAttribute('title'), 50);
					check((s.style.backgroundColor == '#ff0') || (s.style.backgroundColor == '#ffff00') || (s.style.backgroundColor == 'rgb(255, 255, 0)'));
					done();
				}
				catch (e) {
					done(e);
				}
			});

		});
	});

	describe('request()', function() {
		it('requests', function(done) {
			var s = $.request('get', '/test/test.txt', null)
			.then(function(txt) {
				try {
					check(txt.indexOf('Used for testing') > 0);
					done();
				}
				catch (e) {
					done(e);
				}
			}, function() {
				setSuccess(false, 'onFailure called, but should not be called');
			});
			
			check(!!s);

		});
		
		it('handles 404', function(done) {

			var s = $.request('get', '/doesnotexist.txt', null)
			.then(function(txt) {
				setSuccess(false, 'onSuccess called, but should be 404');

			}, function(status) {
				try {
					check(status,  404);
					done();
				}
				catch (e) {
					done(e);
				}
			});
			
			check(!!s);

		});
	});
		
	describe('promise()', function() {
		it('can be nested', function(done) {
			if (!_)
				return done();
			
			var s = $.request('get', '/test/test.txt', null)
			.then(function(txt) {
				try {
					check(txt.indexOf('Used for testing') > 0);
				}
				catch (e) {
					done(e);
				}
			})
			.then(function(txt) {
				var p = _.promise();
				p(true, ["123"]);
				return p;
			})
			.then(function(txt) {
				check(txt, "123");
				var p = _.promise();
				p(false, ["xxx"]);
				return p;
			})
			.then(function(value) {
				done('then should be skipped after error');
			})
			.error(function(value) {
				try {
					check(value, "xxx");
				}
				catch(e) {
					done(e);
				}
				return 23;
			})
			.always(function(value) {
				try {
					check(value, 23);
					done();
				}
				catch (e) {
					done(e);
				}
			});
			check(!!s);

		});
	});

	/*
	describe('.fill()', function() {
		it('', function() {
			
		});
		it('', function() {
			
		});
		it('', function() {
			
		});
	});
	*/

});