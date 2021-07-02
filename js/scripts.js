/*!
* Start Bootstrap - Freelancer v7.0.0 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    // Switch language
    $(".en").hide();
    $(".en-smooth").hide();
    window.fr = true;

    // Tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    // Toggle dropdown menu (for switch language)
    const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
    const dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
        const dropdownMenu = new bootstrap.Dropdown(dropdownToggleEl);
        const elements = document.getElementsByClassName('dropdown-item');

        Array.from(elements).forEach((element) => {
            element.addEventListener('click', (event) => {
                const buttonText = event.target.innerText;
                
                switch (buttonText) 
                {
                    case "FR":
                        // Switch to FR
                        if (!window.fr) {
                            window.fr = true;
                        
                            $(".en").hide();
                            $(".fr").show();
                            
                            $(".en-smooth").hide(300);
                            $(".fr-smooth").show(300);
                        }
                        break;
                        
                    case "EN":
                        // Switch to EN
                        if (window.fr) {
                            window.fr = false;
    
                            $(".fr").hide();
                            $(".en").show();
                
                            $(".fr-smooth").hide(300);
                            $(".en-smooth").show(300);
                        }
                        break;
                    }
                
                dropdownMenu.toggle();
            });
        });

        return dropdownMenu;
    })
});