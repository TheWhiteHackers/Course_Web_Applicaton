function newc(name, instruct, pic){
this.name = name;
this.instruct = instruct;
this.pic = pic;
}

document.getElementById("cform").addEventListener("submit", function(e){
    const name = document.getElementById("cname").value;
    const instruct = document.getElementById("cinstruct").value;
    const pic = document.getElementById("cpic").value;

    const cnew = new newc(name, instruct, pic)
    e.preventDefault();
    console.log(cnew);

}); 

document.getElementById("cbtn").addEventListener("click", modalf);

function modalf() {
    const fname = document.getElementById("cname").value;
    const finstruct = document.getElementById("cinstruct").value;
    const fpic = document.getElementById("cpic").value;

    const fnew = new newc(fname, finstruct, fpic)
    console.log(fname, finstruct, fpic);

    let tag = document.createElement("p");
    let text = document.createTextNode("Instructor: " + fnew.instruct)
    console.log(fnew.instruct);
    tag.appendChild(text);
    tag.appendChild(document.createElement("br"))
    let element = document.getElementById("mbody");
    element.appendChild(tag);

    let tag2 = document.createElement("h3");
    let text2 = document.createTextNode(fnew.name)
    console.log(fnew.name);
    tag2.appendChild(text2);
    let element2 = document.getElementById("mname");
    element2.appendChild(tag2);

    let tag3 = document.createElement("p");
    let text3 = document.createTextNode("Description: " + fnew.pic)
    console.log(fnew.pic);
    tag.appendChild(text3);
    let element3 = document.getElementById("mbody");
    element3.appendChild(tag3);
}