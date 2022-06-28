const Works = require('./../models/worksModel')
const responser = require('../utils/responser')
const errors = require('./../utils/errors')

const { success } = responser
const { captureError } = errors

const getWorks = captureError(async (req, res, next) => {
  const data = await Works.find()
  success(res, data)
})

const postWork = captureError(async (req, res, next) => {
  const { body } = req
  const { title, subTitle, image, href } = body
  const data = await Works.create({
    title,
    subTitle,
    image,
    href
  })
  success(res, data)
})


module.exports = {
  getWorks,
  postWork
}