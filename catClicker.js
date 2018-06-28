var cats = {
    fluffy: {
        image: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
        clickCount: 0
    },
    chewie: {
        image: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
        clickCount: 0
    },
    beckie: {
        image: "https://www.rd.com/wp-content/uploads/2016/04/01-cat-wants-to-tell-you-laptop-760x506.jpg",
        clickCount: 0
    },
    johnie: {
        image: "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg",
        clickCount: 0
    },
    boris: {
        image:"http://2.bp.blogspot.com/_YMOXQUoxk08/TSPhdmoON8I/AAAAAAAAFwA/YMSypPpR2hE/s400/klaxons-cat-astronaut-album.jpg",
        clickCount: 0
    }
};

function renderCatSidebar() {
    var catSidebarDiv = document.createElement("div");

    for (var cat in cats) {
        var button = document.createElement("button");
            button.id = cat + "Button";
            button.addEventListener("click", function (_cat) {
                return function () {
                    renderCat(_cat);
                };
            }(cat), false);
            button.appendChild(
                document.createTextNode(cat)
            );
        catSidebarDiv.appendChild(button);
    };
    document.body.appendChild(catSidebarDiv);
}

function catClick () {
    return function () {
        var catDiv = document.getElementById("catImageDiv");
        var catName = catDiv.firstChild.id;
        cats[catName].clickCount++;
        document.getElementById("counter").innerHTML = cats[catName].clickCount;
    }
};

function renderCat(catName) {
    catNameElem = document.getElementById("catName");
    catNameElem.innerHTML = catName;

    catPictureDiv = document.getElementById("catImageDiv");

    if (catPictureDiv.firstChild) {
        catPictureDiv.removeChild(catPictureDiv.firstChild);
    }

    var catImage = new Image();
    catImage.id = catName;
    catImage.src = cats[catName].image
    catPictureDiv.appendChild(catImage);

    document.getElementById("counter").innerHTML = cats[catName].clickCount;
}

function renderCatPlaceholder () {
    var catNameElement = document.createElement("p");
    catNameElement.id = "catName";
    
    var catImageDiv = document.createElement("div");
    catImageDiv.id = "catImageDiv";
    catImageDiv.addEventListener("click", catClick(), false);

    document.body.appendChild(catNameElement);
    document.body.appendChild(catImageDiv);

    var divCountElement = document.createElement("div");
    divCountElement.appendChild(
        document.createTextNode("Clicks ")
    );
    clickCountElement = document.createElement("p");
    clickCountElement.id = "counter";
    divCountElement.appendChild(clickCountElement);
    document.body.appendChild(divCountElement);
}

document.body.onload = renderCatSidebar();
document.body.onload = renderCatPlaceholder();