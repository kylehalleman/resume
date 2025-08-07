import {
	IdAttributePlugin
} from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import fs from 'node:fs'

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addBundle("css");
	eleventyConfig.addWatchTarget("css/**/*.css");

	eleventyConfig.addPlugin(IdAttributePlugin);

	eleventyConfig
		.addPassthroughCopy({
			"./public/": "/",
		})

	eleventyConfig.addShortcode("svgIcon", function (filename) {
		return fs.readFileSync(`./public/${filename}.svg`, 'utf8');
	});
};