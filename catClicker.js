document.body.onload = addCats();

function addCats () {
    var cats = [
        {
            name: "fluffy",
            image: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
            clickCount: 0
        },
        {
            name: "chewie",
            image: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
            clickCount: 0
        }
    ];
    cats.forEach(function (cat) {

        var catNameElement = document.createElement("p");
        catNameElement.appendChild(
            document.createTextNode(cat.name)
        );

        document.body.appendChild(catNameElement);

        var catImage = new Image();
        catImage.id = cat.name;
        catImage.src = cat.image;

        document.body.appendChild(catImage);

        var divCountElement = document.createElement("div");
        divCountElement.appendChild(
            document.createTextNode("Clicks ")
        );
        clickCountElement = document.createElement("p");
        clickCountElement.id = cat.name + "Count";
        divCountElement.appendChild(clickCountElement);
        
        document.body.appendChild(divCountElement);

        var catElem = document.getElementById(cat.name);
        catElem.addEventListener("click", function () {
            cat.clickCount++;
            document.getElementById(cat.name + "Count").innerHTML = cat.clickCount;
        }, false);
    });
}

function registerClick (cat) {
    cat.clickCount++;
    document.getElementById(cat.name + "Count").innerHTML = cat.clickCount;
}