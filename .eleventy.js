const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget('public');

    eleventyConfig.addPassthroughCopy({
		"./public/": "/",
        "./favicon/": "/"
	});

    eleventyConfig.addFilter('readableDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
            'dd LLLL yyyy'
        ).toLocaleLowerCase();
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