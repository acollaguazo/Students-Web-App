const {Router} = require("express");
const router = Router();
const{ getEstudiantes, addEstudiantes } =  require("../controller/estudiante.controller");

//router.get('/', getEstudiantes);
//router.post('/', addEstudiantes);
//router.get('/:id', getEstudiantes);

router.route('/')
    .get(getEstudiantes)
    .post(addEstudiantes);

module.exports = router;


