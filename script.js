const posts =[
    {
        title: "EUR/USD Weekly Outlook",
        content: "The pair is consolidating near support. Watch for breakdown opportunities around 1.0750.",
        date : "Sep 13, 2025"
    },
    {
        title:"Gold Analtsis",
        content:"XAU/USD shows bullish moment above $1900. Traders may look for buying opportunities.",
        date:"Sep 12, 2025"
    },
    {
        title:"Risk Management Tip",
        content:"Always risk less than 2% of your account onassingle trade. Consistency beats luck.",
        date: "Sep 10, 2025"
    }
];

const blogContainer =
document.getElementById("blog");

if (blogContainer) {
    posts.forEach(post=>{
        const div= document.createElement("div");
        div.classList.add("blog-post");

        div.innerHTML=`
        <h4>${post.title}</h4>
        <small>${post.date}</small>
        <p>${post.content}</p>
        `;
        blogContainer.appendChild(div)
    })
}