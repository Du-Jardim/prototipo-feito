 // Função para rolagem suave do carrossel
 const carousel = document.querySelector('.carrossel');
 let scrollAmount = 0;
 
 function scrollCarousel() {
     if (scrollAmount < carrossel.scrollWidth - carrossel.offsetWidth) {
         scrollAmount += 300;
         carrossel.scrollTo({
             left: scrollAmount,
             behavior: 'smooth'
         });
     } else {
         scrollAmount = 0;
         carrossel.scrollTo({
             left: scrollAmount,
             behavior: 'smooth'
         });
     }
 }
 
 // Intervalo para rolar automaticamente
 setInterval(autoScrollCarrossel, 3000);