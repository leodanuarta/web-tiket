const supabase = require('../database');

const regist = async (req, res, next) => {
  return res.render('user/register')
}

const register = async (req, res, next) => {
  return res.render('user/register')
}

module.exports ={
  regist,
  register,
}