const express = require('express')
const router = express.Router()
const {
  getProjects,
  postProject
} = require('./../controllers/projectsController')


router.get('/', getProjects)
router.post('/', postProject)


module.exports = router
