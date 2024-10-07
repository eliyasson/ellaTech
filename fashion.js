/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId)

	if(toggle && nav)
	{
		toggle.addEventListener('click', ()=>{
			nav.classList.toggle('show')
		})
	}
}

showMenu('nav-toggle','nav-menu')


/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction()
{
	// Active link
	navLink.forEach(n => n.classList.remove('active'))
	this.classList.add('active')

	// Remove menu mobile
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Add event listener to all images with the "toggle-image" class
document.querySelectorAll('.toggle-image').forEach(function(img) {
    img.addEventListener('click', function() {
        // Get the two images from the data-images attribute
        let images = this.getAttribute('data-images').split(',');

        // Swap the image src with the other image
        if (this.src.includes(images[0])) {
            this.src = images[1];
        } else {
            this.src = images[0];
        }
    });
});
