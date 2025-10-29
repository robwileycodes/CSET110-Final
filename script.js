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
            nav.style.transitionDuration = '1s'
            title.style.color = "#000"
            home.style.color = '#F69314'
            link1.style.color = '#000'
            link2.style.color = '#000'
            link3.style.color = '#000'
            link4.style.color = '#000'
            link5.style.color = '#000'
        } else {
            nav.style.backgroundColor = '#484D53';
            nav.style.padding = '30px'
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
