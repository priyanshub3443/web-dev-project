console.log("lest wrte java script")

async function main() {

    let a = await fetch("https://github.com/priyanshub3443/web-dev-project/tree/main/spotify_clone")
    let response=await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML=response;
    let as = div.getElementsByTagName("a")
    let songs=[]
    for(let index =0; index<as.length;index++){
        const element=as[index];
        if(element.href.endsWith(".mp3")){
            sessionStorage.push(element.href)
        }
    }
return songs
}

main()