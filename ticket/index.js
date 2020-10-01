'use strict'

const options = {
    authorizationURL : 'https://github.groupondev.com/login/oauth/authorize',
    tokenURL: 'https://github.groupondev.com/login/oauth/access_token',
    userProfileURL: 'https://api.github.groupondev.com/user'
}

const express = require('express');
const exphbs = require('express-handlebars')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const crypto = require('crypto')
const passport = require('passport')
const GithubStrategy = require('passport-github').Strategy
const { stringify } = require('flatted')
const _ = require('underscore')
const app = express();
const getGitHubData = require('./api')
const GITHUB_CLIENT_ID = "b7fd090fa5f227cace05"
const GITHUB_CLIENT_SECRET= "0a145a3b586305644d67e9bc7bebd3f9096a9d1c"
//
// const GITHUB_CLIENT_ID = "d286184d1a3883de3927"
// const GITHUB_CLIENT_SECRET = "e363134da2ee76183910339f5669a8be68628de0"
const PORT = 3000

let scopes = ['notifications', 'user:email', 'read:org', 'repo']
require('dotenv').config()

// const port = process.env.PORT;
const COOKIE = "githubToken"
const port = PORT;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

passport.use(
    new GithubStrategy(
        {
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: 'http://localhost:3000/login/github/return',
            scope: scopes.join(' '),
            ...options
            // userAgent: 'https://github.groupondev.com/'
        },
        function(token, tokenSecret, profile, cb) {
            return cb(null, { profile: profile, token: token })
        }
    )
)

passport.serializeUser(function(user, done) {
    done(null, user)
})

passport.deserializeUser(function(obj, done) {
    done(null, obj)
})

app.use(passport.initialize())
app.use(passport.session())


app.use(cookieParser())
app.use(
    expressSession({
        secret: crypto.randomBytes(64).toString('hex'),
        resave: true,
        saveUninitialized: true
    })
)

const hbs = exphbs.create({
    layoutsDir: __dirname + '/views'
})

app.engine('handlebars', hbs.engine)
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.get('/', async (req, res) => {
    let data = {
        session: req.cookies[COOKIE] && JSON.parse(req.cookies[COOKIE])
    }

    if (data.session && data.session.token) {
        let githubData
        try {
            githubData = await getGitHubData(data.session.token)
        } catch (error) {
            githubData = { error: error }
        }
        _.extend(data, githubData)
    }

    if (data.session) {
        data.session.token = 'mildly obfuscated.'
    }
    data.json = stringify(data, null, 2)

    res.render('main', data)
})

// app.get('/', (req, res) => {
//     res.status(200).send('Server is working.')
// })

app.get('/logoff', function(req, res) {
    res.clearCookie(COOKIE)
    res.redirect('/')
})

app.get('/auth/github', passport.authenticate('github'))

app.get(
    '/login/github/return',
    passport.authenticate('github', { successRedirect: '/setcookie', failureRedirect: '/' })
)

app.get('/setcookie', function(req, res) {
    let data = {
        user: req.session.passport.user.profile._json,
        token: req.session.passport.user.token
    }
    res.cookie(COOKIE, JSON.stringify(data))
    res.redirect('/')
})

// app.get('/', (req, res) => {
//     res.render('main')
// })
app.post('/post/data', (req, res) => {
    console.log(res.body);
    res.status(200).send('Server is working , we have received you data');
})

app.listen(port, () => {
    console.log(`🌏 Server is running at http://localhost:${port}`)
})













