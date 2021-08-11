let myFeature = document.querySelector(".my-feature"),    
    sectTitle = document.querySelector('.my-feature h2'),
    opportunities = document.querySelector(".opportunities"),
    orderForm = document.querySelector(".order-form h2");   

window.addEventListener('scroll', function() {    
    point = document.elementFromPoint(1,300);
    switch(point.className) {
        case "my-feature":
            sectTitle.classList.add("fadeInLeft");
            opportunities.classList.add("animated", "fadeInDown");
        break;

        case "order-form":
            orderForm.classList.add("animated", "fadeInRight");
        break; 
    }
});
