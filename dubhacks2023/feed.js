"use strict";

(function() {
    window.addEventListener("load", init);

    function init() {
        let hearts = document.querySelectorAll(".like");
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].addEventListener("click", likeHeart);
        }
    }
    
    function likeHeart(event) {
        event.currentTarget.innerHTML = "Like this Review: ♥";
    }

})();

