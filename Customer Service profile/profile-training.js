//Sidebar:
function openNav() {
    'use strict';
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    'use strict';
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

/* Open Form */
function openForm() {
    'use strict';
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    'use strict';
  document.getElementById("myForm").style.display = "none";
}




$(document).bind('dragover',
  function (e) {
    'use strict';
    var dropZone = $('.zone'),
        timeout = window.dropZoneTimeout;
    if (!timeout) {
        dropZone.addClass('in');
    } else {
        clearTimeout(timeout);
    }
    var found = false,
        node = e.target;
    do {
        if (node === dropZone[0]) {
            found = true;
            break;
        }
        node = node.parentNode;
    } while (node !== null);
    if (found) {
        dropZone.addClass('hover');
    } else {
        dropZone.removeClass('hover');
    }
    window.dropZoneTimeout = setTimeout(function () {
        window.dropZoneTimeout = null;
        dropZone.removeClass('in hover');
    }, 100);
});