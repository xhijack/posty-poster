/**
 * Config file
 * Duplicate this file and rename it to config.ts.
 */

let language: string = "en";
let watermarkLabel: string = "@wikislam";

let idHostnames: string[] = [
    "wikislam.sopwer.net",
    "wikislam.sopwer.net"
];

if (idHostnames.indexOf(window.location.hostname) > -1) {
    language = "id";
    watermarkLabel = "@wikislam";
    window.document.title = "Wikislam";
} else {
    window.document.title = "Wikislam Poster";

}

export const config = {

    // Watermark to be used in the poster
    watermarkLabel: watermarkLabel,

    // Google Analytics ID
    googleAnalytics: "X",
    
    // Url of design data, including design-packs and design-assets
    designDataApi: "http://localhost:60572/data",

    // Set language, en or id
    language: language
}