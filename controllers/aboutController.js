const About = require('./../models/aboutModel')
const responser = require('../utils/responser')
const errors = require('./../utils/errors')

const { success } = responser
const { captureError, createError } = errors

const getAbout = captureError(async (req, res, next) => {
  const data = await About.find()
  success(res, data[0])
})

const postAbout = captureError(async (req, res, next) => {
  const { body } = req
  const { avatar, note, nameTw, nameEn, slogan, brief } = body
  const data = await About.create({
    avatar,
    note,
    nameTw,
    nameEn,
    slogan,
    brief
  })
  success(res, data)
})

const patchAbout = captureError(async (req, res, next) => {
  const { body } = req
  const { avatar, note, nameTw, nameEn, slogan, brief } = body
  const aboutId = '62bac4885c145ef2c9bad74e'
  const isAboutExist = await About.findById(aboutId).exec()
  if (!isAboutExist) {
    return next(createError())
  }
  await About.findByIdAndUpdate(aboutId, {
    avatar,
    note,
    nameTw,
    nameEn,
    slogan,
    brief
  })
  const data = await About.findById(aboutId)
  success(res, data)
})


module.exports = {
  getAbout,
  postAbout,
  patchAbout
}