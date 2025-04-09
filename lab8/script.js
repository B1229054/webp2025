var container = document.getElementById('container');
var errorCount = 0; 

window.onload = function() {
    container.textContent = add_new_chars(3);
    container.focus(); 
}

function add_new_chars(x, b = true) {
    var numsize = x;
    if (b) {
        numsize = Math.floor(Math.random() * x) + 1;
    }
    var rand_func = '';
    for (let i = 0; i < numsize; i++) {
        var numchars = 97 + Math.floor(Math.random() * 26); 
        rand_func += String.fromCharCode(numchars);
    }
    return rand_func;
}

window.addEventListener("keyup", function(e) {
    var firstChar = container.textContent.substring(0, 1);

    if (e.key === firstChar) {
        container.textContent = container.textContent.substring(1);
        errorCount = 0;
    } else {
        errorCount++; 

        if (errorCount % 3 === 0) {
            let punishmentSize = (errorCount / 3) * 6;
            container.textContent += add_new_chars(punishmentSize, false);
        }
    }

    container.textContent += add_new_chars(3);
});
