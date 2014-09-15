module.exports = {
	assets: {
		options: {
			jshintrc: '.jshintrc'
		},
		src: ['<%= paths.authorAssets %>js/{,*/}*.js']
	},
	grunt: {
		options: {
			jshintrc: '.gruntjshintrc'
		},
		src: [
			'<%= files.grunt %>',
			'<%= files.config %>'
		]
	}
};
