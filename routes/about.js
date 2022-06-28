const express = require('express')
const router = express.Router()
const {
  getAbout,
  postAbout,
  patchAbout
} = require('./../controllers/aboutController')

/* GET home page. */
router.get('/', getAbout)
router.post('/', postAbout)
router.patch('/', patchAbout)

module.exports = router
