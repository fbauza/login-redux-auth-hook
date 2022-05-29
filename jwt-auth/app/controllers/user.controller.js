exports.allAccess = (req, res) => {
  res.status(200).send("Contenido publico.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("usuario.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Administrador.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderador.");
};
