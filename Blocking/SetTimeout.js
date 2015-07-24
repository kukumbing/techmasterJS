function now(txt) {
    console.log(new Date().toLocaleTimeString() + ' ' + txt);
}


now('> Start to wait');
setTimeout(function() {
    now('> End of waiting');
}, 5000);
now('> Do other task');