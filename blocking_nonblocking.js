

function donDepLauChui(coKhach) {
    if (coKhach) process.nextTick(donDepLauChui);
    else donDepLauChui();
}

function kiemKeHangHoa(coKhach) {
    if (coKhach) process.nextTick(kiemKeHangHoa);
    else kiemKeHangHoa();
}

var coKhach = checkXemCoKhachHayKhong(); // true or false
var chuaDongCua = checkGioDongCua();
function shopKeeping() {
    moCuaTiem();                // Blocking
    while (chuaDongCua) {
        donDepLauChui(coKhach); // non-Blocking
        kiemKeHangHoa(coKhach); // non-Blocking
        if (coKhach) tiepKhach();   // Blocking
    }
    dongCua();
}
shopKeeping();