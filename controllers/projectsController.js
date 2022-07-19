const Projects = require('./../models/projectsModel')
const responser = require('../utils/responser')
const errors = require('./../utils/errors')

const { success } = responser
const { captureError } = errors

const getProjects = captureError(async (req, res, next) => {
  const data = await Projects.find()
  success(res, data)
})

const postProject = captureError(async (req, res, next) => {
  const { body } = req
  const { title, brief, tech, href } = body
  const data = await Projects.create({
    title,
    brief,
    tech,
    href
  })
  success(res, data)
})


module.exports = {
  getProjects,
  postProject
}