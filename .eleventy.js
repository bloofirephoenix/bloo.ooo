module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget('public');

    eleventyConfig.addPassthroughCopy({
		"./public/": "/"
	});

    return {
        dir: {
            input: "content",
            includes: "../_includes",
            data: "../_data",
            output: "_site"
        }
    }
}