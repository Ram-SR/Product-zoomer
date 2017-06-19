/**
 * Register phone-carousel element with the browser
 */
Polymer({
    is  :   "phone-carousel",
    ready: function() {
        console.log(this);
    },
    
    /* Add listeners */
    properties  :   {
        currentImage   :   {
            type    :   String,
            value   :   "site/images/mobile1.jpg",
            notify  :   true,
            reflectToAttribute: true,
            observer: 'imageUpdated'
        }
    },

    /* Observer function when image is updated */    
    imageUpdated: function() {
        console.log('********Image Updated!**************')
    },

    zoomIn : function(event) {
        var element = document.getElementById("hovered-zoom-image"),  // Overlay image on hover
            hoverWrapper = document.getElementsByClassName("hovered-image-wrapper")[0], //Wrapper
            hoverPointer = document.getElementById("hover-pointer-box"), //Image points the part of the image being zoomed
            hwWidth = hoverWrapper.offsetWidth, // Wrapper width
            hwHeight = hoverWrapper.offsetHeight,  // Wrapper height
            img = document.getElementById("hovered-image"), //Source image of hover
            posX = (event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft),  // X Position of mouse 
            posY = (event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop),  // Y Position of mouse

            mouseClientX = event.clientX, // X position of mouse from document
            mouseClientY = event.clientY;  // Y position of mouse from document

        document.getElementById("hovered-zoom-image-wrapper").style.display = "block"; //Make overlay visible by changing display of its wrapper
        hoverPointer.style.display = "block"; // make it display
        element.style.backgroundImage = 'url('+ event.target.src +')'; // Make zoom of image

        hoverPointer.style.left = mouseClientX - hoverPointer.offsetWidth/2  + "px";
        hoverPointer.style.top = mouseClientY - hoverPointer.offsetHeight/2 + "px";

        // Positioning the image in overlay
        element.style.backgroundPosition = (-posX + 20) + "px " + (-posY) + "px";
    },

    zoomOut : function () {
        var element = document.getElementById("hovered-zoom-image-wrapper");
        var hoverPointer = document.getElementById("hover-pointer-box");
        element.style.display = "none";
        hoverPointer.style.display = "none";
    }
})