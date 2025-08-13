module.exports = (config) => {
	// Set Nunjucks as the default template engine for markdown files
	config.setLibrary("md", require("markdown-it")({
		html: true,
		breaks: true,
		linkify: true
	}));

	return {
		dir: {
			input: 'src',
			output: '_site',
		},
		// Set Nunjucks as the default template engine
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk"
	};
};
