const destinasiBali = async (req, res, next) => {
  return res.render("destinasi/destinasiBali");
}

const destinasiBogor = async (req, res, next) => {
  return res.render("destinasi/destinasiBogor");
}

const destinasiJakarta = async (req, res, next) => {
  return res.render("destinasi/destinasiJakarta");
}

const destinasiJogja = async (req, res, next) => {
  return res.render("destinasi/destinasiJogja");
}

const destinasiLombok = async (req, res, next) => {
  return res.render("destinasi/destinasiLombok");
}

module.exports = {
  destinasiBali,
  destinasiBogor,
  destinasiJakarta,
  destinasiJogja,
  destinasiLombok,
}