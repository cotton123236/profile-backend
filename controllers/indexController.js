const Index = require('./../models/indexModel')
const responser = require('../utils/responser')
const errors = require('./../utils/errors')

const { success } = responser
const { captureError } = errors

const getIndex = captureError(async (req, res, next) => {
  const data = await Index.find()
  .populate({
    path: 'about works',
  })
  success(res, data[0])
})


module.exports = {
  getIndex
}