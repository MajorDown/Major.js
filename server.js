// IMPORTS
const express = require("express");
const server = express();
require("dotenv").config();
const port = process.env.PORT;
const Accueil = require("./majorSSR/pages/Accueil");
const SiteData = require("./majorDB/siteData.DB.json");

// MIDDLEWARES
server.use(express.static("./public"));

// ROUTES

// ENDPOINTS
server.get("/", (req, res) => {
  console.log("server ~> requête vers la page d'accueil");
  res.send(Accueil(SiteData));
});

// LANCER LE SERVEUR
server.listen(port, () =>
  console.log("server ~> lancement sur le port " + port)
);
