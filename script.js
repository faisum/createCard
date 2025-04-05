function views(num) {
    if (num>=1000000) {
        return (num/1000000).toFixed(1)+"M"
        
    }else if(num>=1000){
        return (num/1000).toFixed(1)+"k"
       }
       else{
        return num.toString();
       }
}


function createCard(title,cName,views,monthsOld,duration,thumbnail) {

`<div class="container">
    <div class="card">
        <div class="img">
            <img src=${thumbnail}">
        </div>
        <div class="content">
            <p class="h1">${title}</p>
            <p>${cName} . ${views} views . ${monthsOld} months ago</p>
        </div>
    </div>`
    
    
}
createCard("Installing Vs Code & How websites Work | Sigma Web Development Course - Tutorial #1","CodeWithHarry",3000000,"3Month","https://th.bing.com/th/id/OIP.SY0FtFRGZWgSpY2KEi5axAHaE8?w=269&h=180&c=7&r=0&o=5&pid=1.7")


