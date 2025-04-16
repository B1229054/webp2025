// Flickr API - Get recent images list
var imglist_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';

function getimg() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', imglist_Url, true);
    xhr.send();
    xhr.onload = function() {
        var data = JSON.parse(this.responseText);
        add_new_img(data.photos.photo);
    }
}

function add_new_img(dataset) {
    var gallery = document.getElementById('gallery');
    gallery.innerHTML = '';  // 清空舊圖片

    dataset.forEach(function(photo) {
        var imgSrc = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`;
        var img = document.createElement('img');
        img.src = imgSrc;
        img.style.width = '200px';
        img.style.margin = '5px';
        gallery.appendChild(img);
    });
}
