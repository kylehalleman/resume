import {
	IdAttributePlugin
} from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addBundle("css");
	eleventyConfig.addWatchTarget("css/**/*.css");

	eleventyConfig.addPlugin(IdAttributePlugin);
};