import { Router } from "express";

const router = Router();


router.get('/', (req, res) => {
  res.json({message: "api by Caique Araújo :D."})

})






export { router as defaultRoutes };