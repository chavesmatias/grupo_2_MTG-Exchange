// menu overlay

function openNav() {
    document.getElementById("myNav").style.width = "30%"
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%"
  }
  
  function changeIt(img)
  {
      var name = img.src;
      alert(name);
  
  document.getElementById('imageBox').src = name;
  }