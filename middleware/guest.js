'use strict'

module.exports = function isGuest (req, res, next) {
  res.redirect('/about')
}
