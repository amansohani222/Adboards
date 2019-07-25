const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('login.ejs');
});

//register
router.get('/register', (req, res) => {
    res.render('register.ejs');
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    req.logout();
    res.redirect('/');
});

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/profile');
});

// auth with facebook
router.get('/facebook', passport.authenticate('facebook', {
    scope: ['email', 'user_friends', 'manage_pages']
}));

// callback route for facebook to redirect to
router.get('/facebook/redirect', passport.authenticate('facebook'), (req, res) => {
    res.redirect('/profile');
});

module.exports = router;