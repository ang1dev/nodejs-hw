import express from "express"
//// TUKA TREBA DA GI DODADAM RUTITE
const router = express.Router()

router.use('/zoo',zooRouter);
router.use('/admin',adminRouter)

export default router