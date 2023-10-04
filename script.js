//array of objects
var arr = [
  {
    dp: "https://images.unsplash.com/photo-1611042553365-9b101441c135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80",
    story:
      "https://images.unsplash.com/photo-1610642433569-fb4f62b3795f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    story:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1598519102179-6547728a67b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    story:
      "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1543&q=80",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1677622923387-71062ea4b667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    story:
      "https://images.unsplash.com/photo-1681713670707-dab2de9965de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1518306727298-4c17e1bf6942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    story:
      "https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
];
var clutter = "";
var storyBox = document.querySelector("#story-container");

arr.forEach((elem, indx) => {
  //indx is the index of object in the array and elem is the elements of the array
  //Use of template literal
  clutter += `<div id="story">
<img id="${indx}" src="${elem.dp}" alt="" />
</div>`;
});
storyBox.innerHTML = clutter; // the clutter will be assigned inside the storyBox

var screen = document.querySelector("#full-screen");
storyBox.addEventListener("click", (deta) => {
  screen.style.display = "block";
  screen.style.backgroundImage = `url(${arr[deta.target.id].story})`; //this array is the objects array where it will get into details target then from its target to the id, then it will get in the index object story
  setTimeout(() => {
    screen.style.display = "none";
  }, 2500);
});
//bug: the click event is on the whole story container rather than in the story so it shows an empty story while clicking on the story container
