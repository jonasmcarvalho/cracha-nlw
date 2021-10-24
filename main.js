const linksSocialMedia = {
    github: 'jonasmcarvalho',
    youtube: 'channel/UCqLeXR,dARtCBln3bHCJbojw',
    facebook: 'jonas.carvalho',
    instagram: 'carvalhojonas_',
    twitter: 'JonasCa86037080'
}

function changeSocialMediaLinks() {
    /* document.getElementById('userName').
    textContent = 'Olivia' */

    /* userName.textContent = "Marcelo" //vantagem de usar
    //id, colocando o id.ocomandonafrente -> ele já entende
    //que vc quer manipular a tag com aquele id */

    for(let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }


}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userGit.href = data.html_url
            userImage.src = data.avatar_url
            userLogin.textContent = data.login
        })
}

getGitHubProfileInfos()

