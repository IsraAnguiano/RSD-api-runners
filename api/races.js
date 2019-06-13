const express = require('express');
const router = express.Router();
const races = require('../models/race');

// 	GET /races
router.get('/', function(req, res) {
  res.json(races);
});

// GET /races/{codigo}
router.get('/:codigo', function(req, res) {
  const found = races.some(race => race.codigo === req.params.codigo);

  if (found) {
    res.json(races.filter(race => race.codigo === req.params.codigo));
  } else {
    res.status(400).json({ msg: `No se encontro la race con el codigo ${req.params.codigo}` });
  }
});

// 	POST /races
router.post('/', function(req, res) {
  const race = {
    codigo: req.body.codigo,
    nombre: req.body.nombre,
    ruta: req.body.ruta,

  };

  if (!race.codigo || !race.nombre || !race.ruta) {
    return res.status(400).json({ msg: 'Favor de proporcionar codigo, nombre, ruta' });
  }

  races.push(race);
  res.json(races);
});

// PUT /races/{codigo}
router.put('/:codigo', (req, res) => {
  const found = races.some(race => race.codigo === req.params.codigo);

  if (found) {
    const saverace = req.body;
    races.forEach(race => {
      if (race.codigo === req.params.codigo) {
        race.codigo = saverace.codigo ? saverace.codigo : race.codigo;
        race.nombre = saverace.nombre ? saverace.nombre : race.nombre;
        race.ruta = saverace.ruta ? saverace.ruta : race.ruta;

        res.json({ msg: 'Race actualizada', ruta });
      }
    });
  } else {
    res.status(400).json({ msg: `No se encontro la ruta con el codigo ${req.params.codigo}` });
  }
});

// 	DELETE /races/{codigo}
router.delete('/:codigo', (req, res) => {
  const found = races.some(race => race.codigo === req.params.codigo);

  if (found) {
    res.json({
      msg: 'race Borrada',
      races: races.filter(race => race.codigo !== req.params.codigo)
    });
  } else {
    res.status(400).json({ msg: `No se encontro la race con el codigo ${req.params.codigo}` });
  }
});

module.exports = router;
