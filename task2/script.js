console.log(document.getElementById('text').clientHeight);

visina=document.getElementById('text').clientHeight;
if(visina=420){function show_text(){
    document.getElementById("read-more").style.display = "block";
    document.getElementById("learn-more-button").style.display = "none";
    let id = null;
    const elem = document.getElementById("text");   
    const elemt = document.getElementById("read-more");   
    let pos = 111;
    clearInterval(id);
    id = setInterval(frame, 20);
    function frame() {
      if (pos == 160) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.height = pos + "vw"; 

        
        
      }
    }
    let dd = null;
    let poss = 0;
    clearInterval(dd);
    dd = setInterval(frameone, 40);
    function frameone() {
      if (poss == 1) {
        clearInterval(dd);
      } else {
        poss=poss+0.025; 
         
        elemt.style.opacity = poss  
        
      }
    }
}
    
   
    
    
    
  
  }else{
    function show_text(){
        document.getElementById("read-more").style.display = "block";
        document.getElementById("learn-more-button").style.display = "none";
        let id = null;
        const elem = document.getElementById("text");   
        const elemt = document.getElementById("read-more");   
        let pos = 35;
        clearInterval(id);
        id = setInterval(frame, 50);
        function frame() {
          if (pos == 46) {
            clearInterval(id);
          } else {
            pos++; 
            elem.style.height = pos + "vw"; 
    
            
            
          }
        }
        let dd = null;
        let poss = 0;
        clearInterval(dd);
        dd = setInterval(frameone, 40);
        function frameone() {
          if (poss == 1) {
            clearInterval(dd);
          } else {
            poss=poss+0.025; 
             
            elemt.style.opacity = poss  
            
          }
        }
        
       
        
        
        
      
      }
  }

    



