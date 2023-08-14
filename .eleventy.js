const { DateTime } = require('luxon');
const markdownIt = require("markdown-it");
const hljs = require('highlight.js');

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

    let options = {
        html: true,
        breaks: true,
        linkify: true,
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(str, { language: lang }).value;
                } catch (__) {}
            }
          
            return ''; // use external default escaping
        }
    };

    var md = markdownIt(options);
    md.use(require('markdown-it-mark'));

    eleventyConfig.setLibrary("md", md);

    return {
        dir: {
            input: "content",
            includes: "../_includes",
            data: "../_data",
            output: "_site"
        }
    }
}