require('dotenv').config();
<<<<<<< HEAD
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://jwdjglkmytcniuvtthbp.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY

=======
const supabaseUrl = "https://jwdjglkmytcniuvtthbp.supabase.co"
const { createClient } = require('@supabase/supabase-js')
const supabaseKey = process.env.SUPABASE_KEY
console.log("Connected to supabase")

>>>>>>> ea05db05ab55d4700189275a6a1b0887629e7def
const options = {
  db: {
    schema: 'public',
  },
  global: {
    headers: { 'x-my-custom-header': 'my-app-name' },
  },
}
const supabase = createClient(supabaseUrl, supabaseKey, options)
<<<<<<< HEAD
=======
// console.log(supabase)  
>>>>>>> ea05db05ab55d4700189275a6a1b0887629e7def
module.exports = supabase;
