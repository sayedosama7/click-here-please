
document.body.addEventListener("click", function () {
    let myP = document.createElement("h1")
    myPText = document.createTextNode("your are been Hacked")
    myP.className = "clone"
    myP.appendChild(myPText)
    let myP2 = document.createElement("span")
    myPText2 = document.createTextNode("")
    myP2.className = "clone2"
    myP2.appendChild(myPText2)
    myP.appendChild(myP2)
    document.body.appendChild(myP);
    
}) 