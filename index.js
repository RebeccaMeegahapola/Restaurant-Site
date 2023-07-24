function next() {
    var slider = document.getElementById('slider');
    var item = document.getElementsByClassName('item');
    slider.prepend(item[item.length - 1]);
    setTimeout(next, 1000);
}

function prev(){
    var slider = document.getElementById('slider');
    var item = document.getElementsByClassName('item');
    slider.append(item[0]);
    setTimeout(prev, 1000);
}