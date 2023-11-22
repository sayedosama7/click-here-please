
document.body.addEventListener("click", function () {
    let myP = document.createElement("h4")
    myPText = document.createTextNode("You have been hacked")
    myP.className = "clone"
    myP.appendChild(myPText)
    let myP2 = document.createElement("span")
    myPText2 = document.createTextNode("")
    myP2.className = "clone2"
    myP2.appendChild(myPText2)
    myP.appendChild(myP2)
    document.body.appendChild(myP);
    
}) 