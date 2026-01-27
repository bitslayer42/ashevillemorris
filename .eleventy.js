export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/img/*", {
        mode: "html-relative"
    });
    eleventyConfig.addPassthroughCopy("src/bundle.css", {
        mode: "html-relative"
    });
    eleventyConfig.addWatchTarget("src/bundle.css");
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
