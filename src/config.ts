/**
 * Config file
 * Duplicate this file and rename it to config.ts.
 */

let language: string = "en";
let watermarkLabel: string = "@wikislam";

let idHostnames: string[] = [
    "wikislam.sopwer.net"
];

if (idHostnames.indexOf(window.location.hostname) > -1) {
    language = "id";
    watermarkLabel = "@wikislam",
    window.document.title = "WikislamPoster";
} else {
    window.document.title = "WikislamPoster";

}

export const config = {

    // Watermark to be used in the poster
    watermarkLabel: watermarkLabel,

    // Google Analytics ID
    googleAnalytics: "X",
    
    // Url of design data, including design-packs and design-assets
    designDataApi: "https://sopwer.net/data",

    // Set language, en or id
    language: language
}