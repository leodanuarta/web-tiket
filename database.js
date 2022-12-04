require('dotenv').config();
const supabaseUrl = "https://jwdjglkmytcniuvtthbp.supabase.co"
const { createClient } = require('@supabase/supabase-js')
const supabaseKey = process.env.SUPABASE_KEY
console.log("Connected to supabase")

const options = {
  db: {
    schema: 'public',
  },
  global: {
    headers: { 'x-my-custom-header': 'my-app-name' },
  },
}
const supabase = createClient(supabaseUrl, supabaseKey, options)
// console.log(supabase)  
module.exports = supabase;
