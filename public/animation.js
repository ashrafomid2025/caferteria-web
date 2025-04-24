
 
const h1s = document.querySelectorAll(".mb-3");

function countUp(el, target) {
    let current = 0;
    const increment = target / 100;

    

    const updateCount = ()=> {
      current += increment;
      if (current < target) {
        // round off
        // round up 
       

        el.textContent = Math.ceil(current);
        requestAnimationFrame(updateCount);
        // setInterval(updateCount,0.01);
        
      } else {
        el.textContent = target;
      }
    };
    
    updateCount();
  }

  const observer = new IntersectionObserver(
    (entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = +el.getAttribute("data-target");
          countUp(el, target);
          observer.unobserve(el); // Run only once
        }
      });
    },
    {
      threshold: 0.6, 
    }
  );

  h1s.forEach((h1) => observer.observe(h1));