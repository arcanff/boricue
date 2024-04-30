// HOMEPAGE //

import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/acerca', (req, res) => {
    res.render('acerca');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/contactanos', (req, res) => {
    res.render('contactanos');
});

router.get('/preguntas', (req, res) => {
    res.render('preguntas');
});

router.get('/servicios', (req, res) => {
    res.render('servicios');
});

router.get('/T&C', (req, res) => {
    res.render('tyc');
});

//DASHBOARD//

router.get('/Inicio', (req, res) => {
    res.render('dashInicio');
});

router.get('/Publicaciones', (req, res) => {
    res.render('dashPublicaciones');
});

router.get('/CrearPublicacion', (req, res) => {
    res.render('dashCrearPubli');
});

router.get('/EditarPublicacion', (req, res) => {
    res.render('dashEditarPubli');
});

router.get('/Chat', (req, res) => {
    res.render('dashChat');
});

router.get('/Perfil', (req, res) => {
    res.render('dashPerfil');
});

router.get('/EditarPerfil', (req, res) => {
    res.render('dashEditarPerfil');
});

router.get('/Reportes', (req, res) => {
    res.render('dashReportes');
});

export default router;
