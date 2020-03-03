
function renderTweets(tweets) {
    return `
        ${tweets.map(tests).join("")}
    `
}
function tests(tests) {
    var image = '<img class="verified-icon" src="cards/verified-badge.jpg">'
    var retweetimage = '<img class="retweet" src="cards/retweet.png">'
    var likeImage = '<img class="like" src="cards/Like_Twitter.png">'
    var replayImage = '<img class="reply" src="cards/replay.png">'
    var emailIcon = '<img class="reply" src="cards/email-icon.png">'


    return `

    <img class="profile-pic" src="${tests.user.profilePic}"> 
    <h5>${tests.user.username}  <span>${tests.user.isVerified ? image : ''}</span></h5>
    <p> ${tests.user.handle}</p>
   
    <h3 class="text">${tests.text}</h3>
    <div class="tweets">
    
    <p>
    <span> ${likeImage}${tests.likes} </span>
    <span>${retweetimage}${tests.retweets} </span>
    <span>${replayImage} ${tests.replies} </span>
    <span>${emailIcon} </span>

    </p>
    </div>

    `
}
function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}