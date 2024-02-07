 var arr = [

    {dp:"https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJpcmR8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJpcmR8ZW58MHx8MHx8fDA%3D"},
    
    {dp:"https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyZHxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyZHxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://media.istockphoto.com/id/1459784086/photo/male-house-finch.webp?b=1&s=170667a&w=0&k=20&c=9ntupLsKNJ7IsliOmJ4N5uCs9RRHOsmFblHkSnRorts=",story:"https://media.istockphoto.com/id/1459784086/photo/male-house-finch.webp?b=1&s=170667a&w=0&k=20&c=9ntupLsKNJ7IsliOmJ4N5uCs9RRHOsmFblHkSnRorts="},
    {dp:"https://media.istockphoto.com/id/1302540155/photo/american-robin-in-winter-american-robin-in-winter.webp?b=1&s=170667a&w=0&k=20&c=s4JvK9nihltVYfxiEiwhoAbUPA68NpHOCxzW0KPLErc=",story:"https://media.istockphoto.com/id/1302540155/photo/american-robin-in-winter-american-robin-in-winter.webp?b=1&s=170667a&w=0&k=20&c=s4JvK9nihltVYfxiEiwhoAbUPA68NpHOCxzW0KPLErc="},
    
    
    

];
var storiya = document.querySelector("#storiya")
var clutter = "";
arr.forEach(function (elem, idx) {
   clutter += `<div class="story">
   <img id="${idx}" src="${elem.dp}" alt="">

</div>`;
  
});

storiya.innerHTML = clutter;
storiya.addEventListener("click", function (dets) {
       
       document.querySelector("#full-screen").style.display = "block"
       document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

       setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
       },3000)
});
