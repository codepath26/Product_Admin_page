const express = require('express')
const useController = require('../controllers/user')
const router = express.Router();


router.get('/productDetails',useController.getDetails)
router.get('/productDetails/:id',useController.getDetailsbyId)
router.post('/productDetails' , useController.postDetail)
router.delete('/productDetails/:id' , useController.deletDetail)
router.put('/productDetails/:id' , useController.updateDetail)
// router.get('/appointmentDetailbyId',useController.getDetailbyId)


module.exports = router;