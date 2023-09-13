const Header = require("../components/Header");
const ReactApp = require("../components/ReactApp");

const Accueil = (props) => {
  return /*html*/ `
    <!DOCTYPE html>
    <html lang="fr">
        <head>
            <title>${props.head.title}</title>
            <meta charset="UTF-8">
            <meta name="description" content=${props.head.description}>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="css/styles.css" rel="stylesheet">
            </head>
            <body>
            ${Header(props.body.header)}
            <div id="app"></div>
            ${ReactApp(props.App)}
        </body>
    </html>
    `;
};

module.exports = Accueil;
