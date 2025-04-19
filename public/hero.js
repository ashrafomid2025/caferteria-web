const links = [
    "../assets/images/slide1.jpg",
    "../assets/images/slide2.jpg",
    "../assets/images/slide3.jpg"
  ];
  const u = document.getElementById("u");
  
  let index = 0;
  
  setInterval(() => {
    u.style.backgroundImage = `url('${links[index]}')`;
    index = (index + 1) % links.length;
  }, 5000);
  









  //  