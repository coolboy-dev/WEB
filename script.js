window.onload = function() {
    var url = window.location.href;

    if (url.endsWith("/home")) {
        loadPage("home.html");
    } else if (url.endsWith("/onboarding")) {
        loadPage("onboarding/index.html");
    }
};

function loadPage(page) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", page, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("content").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}
