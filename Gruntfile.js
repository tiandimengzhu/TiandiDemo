module.exports=function(grunt){
    var config = {
		pkg: grunt.file.readJSON('package.json')
		,connect: {
			server: {
				options: {
					hostname: 'localhost'
					// ,port: 8000
					//,base: 'app'
					,open: 'http://localhost:8000'
				}
			}
		}
	};
	grunt.initConfig({config})

	grunt.registerTask('server', ['connect']);
};
