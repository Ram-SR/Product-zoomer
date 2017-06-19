/**
 * Register carousel-slide element with the browser
 */
Polymer({
    is  :   "carousel-slide",
    ready: function() {
    },

    /* Add listeners */
    listeners: {
        'mouseover': 'onMouseEnter'
    },

    /* Add properties to carousel-slide */
    properties  :   {
        currentImage   :   {
            type    :   String,
            value   :   "site/images/mobile1.jpg",
            notify  :   true,
            reflectToAttribute: true
        }
    },

    /**
     * Listener function definitions 
     * @param {Object} e ===> mouseover event object
     */
    onMouseEnter:   function(e) {
        var target          = e.currentTarget; // store current targetted element
        var imgUrl          = target.querySelector('img'); // get img element to get it's url
        this.currentImage   = imgUrl.src; // change current image url

        // add/remove class to highlight the current hovered element
        var carouselSlides  = document.querySelectorAll('carousel-slide'); // get all slides

        Array.prototype.forEach.call(carouselSlides, function(currentSlide){
            currentSlide.classList.remove('image-hover-wrapper-hover'); // remove class if exists
        });

        if(!(target.classList.contains('image-hover-wrapper-hover'))) { // if there is no class
            target.classList += " image-hover-wrapper-hover"; // add class
        } else { // otherwise
            // do nothing
        }
    },

    /* Observer function when image is updated */
    imageUpdated: function() {
        console.log('*********Image Updated!*************');
    }
})