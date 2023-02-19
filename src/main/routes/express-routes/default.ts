import { Router } from "express";

const router = Router();
const rootDir = require('path').resolve('./');
const fs = require("fs");


router.get('/', (req, res) => {
  res.json({message: "apae-api by Caique Araújo :D."})

})

router.get('/sambiquira', (req, res) => {
  res.json({save: "Um salve a todos do sambiquira, enois"})
});

router.get('/corno', (req, res) => {
  res.json({save: "um grande salve à todos os amigos chifrudos!"})
});




export { router as defaultRoutes };