'use strict'
const GitHub = require('github-api')

async function getGitHubData(token) {
    let gh = new GitHub({
        token: token

    }, 'https://api.github.groupondev.com/')
    // let gh = new GitHub({
    //         token: token
    // })


    let data = {}

    console.log(me);
    let repos = await gh.listRepos()
    console.log(repos)
    let organisation = await me.listUserRepos();
    console.log(organisation);
    data.repos = repos.data
    return data
}

module.exports = getGitHubData