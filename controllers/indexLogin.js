const supabase = require('../database');

const login = async (req, res, next) => {
  return res.render('user/login')
}

// function untuk login setelah register
const userRegister = async (req, res, next) => {
  console.log(req.body)
  const { data: signup, error: signupErr } = await supabase.auth.signUp({
    email: req.body.email,
    password: req.body.password1,
  })

  const { data: signupData, error: signupDataError } = await supabase
  .from('account')
  .insert([
    { 
      id: signup.user.id, 
      namadepan: req.body.firstname, 
      namabelakang: req.body.lastname, 
      dob: req.body.dob, 
      notel: req.body.notel,
    }
  ])

  console.log(signup, signupErr)
  console.log(signupData)
  return res.redirect('/login')
}

const userLogin = async (req, res, next) => {

  // console.log(req.body)
  const { data: signin, error: signinErr } = await supabase.auth.signInWithPassword({
    email: req.body.email,
    password: req.body.password
  })
  // console.log(signin, signinErr)
  const { data: userData, error: userDataErr } = await supabase
  .from('account')
  .select()
  .eq('id', signin.user.id)
 
  res.render('indexUser', {user: userData})
}

const userLogout = async (req, res, next) => {
  const { error } = await supabase.auth.signOut()

  console.log(error)

  res.redirect('/')
}

module.exports ={
  login,
  userRegister,
  userLogin,
  userLogout,
}
