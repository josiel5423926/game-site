//este arquivo é para gerenciar rotas
//todas as rotas vão chegar aqui e vai ser redirecionada para a rota adequada

const router = require("express").Router();
const todaRequisicoesJogo = require("./todas-requisicoes-jogo");
require("../db/mongoConnection");

router.get("/", (req, res) => {
  res.json({
    success: false,
    message: "please, do not call /api, it is for our server",
  });
});

//quando cair na rota /jogo redirecione para o arquivo todaRequisicoesJogo
router.use("/jogo", todaRequisicoesJogo);

module.exports = router;
