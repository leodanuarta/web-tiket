const getIndex = async (req, res, next) => {
  return res.render("index")
}

const cekOrder = async (req, res, next) => {
  return res.render("cekorder")
}





module.exports ={
  getIndex,
  cekOrder,
};