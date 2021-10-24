import { JSDOM } from 'jsdom';

const metaTags = `
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
`;

const faviconTags = `
<link rel="shortcut icon" href="./favicon.ico" />
<link rel="icon" href="./favicon.ico" />
`;

const fontTags = `
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Hind:wght@400;600&display=swap"
  rel="stylesheet"
/>
`;

const pageStyles = `
<style>
  body {
    font-family: 'Hind', sans-serif;
    background-color: #222;
    margin: 0px;
  }
</style>
`;

const getEmptyPage = () => `
<!DOCTYPE html>
<html lang="en">
  <head>
    ${metaTags}

    ${faviconTags}

    ${fontTags}

    <link rel="stylesheet" href="./dist/main.css" />

    <title>Yash Kulshrestha</title>

    ${pageStyles}
  </head>
  <body>
    <div id="app-root"></div>
    <script src="./dist/main.js" type="text/javascript"></script>
  </body>
</html>
`;

const page = new JSDOM(getEmptyPage());
global.document = page.window.document;

import App from './App';

page.window.document.body.innerHTML = new App().render();

export default page;
