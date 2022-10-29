function newc(name, instruct, pic){
this.name = name;
this.instruct = instruct;
this.pic = pic;
}




document.getElementById("button").addEventListener("submit", function(e){
    let name = document.getElementById("cname").value;
    let instruct = document.getElementById("cinstruct").value;
    let pic = document.getElementById("cpic").value;
    console.log(name,instruct,pic);
    e.preventDefault();
});

