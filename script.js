function views(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M"

    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + "k"
    }
    else {
        return num.toString();
    }
}


function createCard(title, cName, views, monthsOld, duration, thumbnail) {

    let viewStr;
    if (viewStr < 1000) {
        viewStr = views

    } else if (viewStr > 1000000) {
        viewStr = views / 1000000 + "M";
    } else {
        viewStr = views / 1000 + "k";
    }

    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html

}
createCard("Installing Vs Code & How websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 3000000, "3", "31.22", "https://th.bing.com/th/id/OIP.SY0FtFRGZWgSpY2KEi5axAHaE8?w=269&h=180&c=7&r=0&o=5&pid=1.7")

createCard("Installing Vs Code & How websites Work | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", 34567, "3", "31.22", "https://th.bing.com/th/id/OIP.SY0FtFRGZWgSpY2KEi5axAHaE8?w=269&h=180&c=7&r=0&o=5&pid=1.7")


