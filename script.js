window.addEventListener('scroll', function() {
        const nav = document.getElementById('nav');
        const home = document.getElementById('home')
        const link1 = document.getElementById('link1')
        const link2 = document.getElementById('link2')
        const link3 = document.getElementById('link3')
        const link4 = document.getElementById('link4')
        const link5 = document.getElementById('link5')
        const scrollThreshold = 1; 

        if (window.scrollY > scrollThreshold) {
            nav.style.backgroundColor = '#fff';
            nav.style.padding = '25px'
            title.style.color = "#000"
            home.style.color = '#F69314'
            link1.style.color = '#000'
            link2.style.color = '#000'
            link3.style.color = '#000'
            link4.style.color = '#000'
            link5.style.color = '#000'
        } else {
            nav.style.backgroundColor = '#484D53';
            nav.style.transitionDuration = '0.3s'
            title.style.color = '#fff'
            home.style.color = '#fff'
            link1.style.color = '#949495'
            link2.style.color = '#949495'
            link3.style.color = '#949495'
            link4.style.color = '#949495'
            link5.style.color = '#949495'
        }
    });

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


var slideIndex1 = 1;
showDivs1(slideIndex1);

function plusDivs1(n) {
  showDivs1(slideIndex1 += n);
}

function showDivs1(n) {
  var i;
  var x1 = document.getElementsByClassName("mySlides1");
  if (n > x1.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = x1.length} ;
  for (i = 0; i < x1.length; i++) {
    x1[i].style.display = "none";
  }
  x1[slideIndex1-1].style.display = "grid";
}
