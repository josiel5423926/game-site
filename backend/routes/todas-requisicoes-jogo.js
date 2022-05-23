const router = require("express").Router();
//const res = require("express/lib/response");
const DbShemaJogo = require("../models/DbShemaJogo");
//get único usuário
router.get("/:slug", async (req, res) => {
  //acess bd
  try {
    const userJogo = await DbShemaJogo.findOne({
      slug: req.params.slug,
    });
    res.json({
      sucesso: true,
      data: userJogo,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
});
//update user
router.patch("/:slug", async (req, res) => {
  //acess bd
  try {
    const updateUser = await DbShemaJogo.updateOne(
      {
        slug: req.params.slug,
      },
      {
        valorMoeda: req.body.valorMoeda,
      }
    );
    res.json({
      sucesso: true,
      updated: updateUser.modifiedCount,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
});

router.post("/", async (req, res) => {
  const inserirDadosPost = new DbShemaJogo({
    hash: req.body.hash,
    valorMoeda: req.body.valorMoeda,
  });

  try {
    const saveDadosPost = await inserirDadosPost.save();
    res.json({
      success: true,
      data: saveDadosPost,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
});

module.exports = router;
