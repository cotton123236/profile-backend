const express = require('express')
const router = express.Router()
const {
  getWorks,
  postWork
} = require('./../controllers/worksController')


router.get('/', getWorks)
router.post('/', postWork)


module.exports = router
