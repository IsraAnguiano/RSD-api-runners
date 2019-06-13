const express = require('express');
const router = express.Router();
const runners = require('../models/runner');

//GET /runners
router.get('/', function (req, res) {
  res.json(runners)
});

//GET /runners/{matricula}
router.get('/:matricula', function(req, res)  {
  const found = runners.some(runner => runner.matricula === req.params.matricula);

  if (found) {
    res.json(runners.filter(runner => runner.matricula === req.params.matricula));
  } else {
    res.status(400).json({ msg: `No se econtro runner con la matricula ${req.params.matricula}` });
  }
});

// POST /runners
router.post('/', function(req, res) {
    const runner = {
    matricula: req.body.matricula,
    nombre: req.body.nombre,
    programa: req.body.programa
  };

  if (!runner.matricula || !runner.nombre || !runner.programa) {
    return res.status(400).json({ msg: 'Favor de proporcionar matricula, nombre y programa' });
  }

  runners.push(runner);
  res.json(runners);
});

// 	PUT /runners/{matricula}
router.put('/:matricula', function(req, res) {
  const found = runners.some(runner => runner.matricula === req.params.matricula);

  if (found) {
    const saverunner = req.body;
    runners.forEach(runner => {
      if (runner.matricula === req.params.matricula) {
        runner.matricula = saverunner.matricula ? saverunner.matricula : runner.matricula;
        runner.nombre = saverunner.nombre ? saverunner.nombre : runner.nombre;
        runner.programa = saverunner.programa ? saverunner.programa : runner.programa;

        res.json({ msg: 'Runner actualizado', runner });
      }
    });
  } else {
    res.status(400).json({ msg: `No se encontro runner con la matricula ${req.params.matricula}` });
  }
});

// 	DELETE /runners/{matricula}

router.delete('/:matricula', function(req, res) {
  const found = runners.some(runner => runner.matricula === req.params.matricula);

  if (found) {
    res.json({
      msg: 'Runner Borrado',
      runners: runners.filter(runner => runner.matricula !== req.params.matricula)
    });
  } else {
    res.status(400).json({ msg: `No se encontro runner con la matricula ${req.params.matricula}` });
  }
});

module.exports = router;
