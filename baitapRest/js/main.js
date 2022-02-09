
let getPoint1 = () => {
    let diemToan = Number(document.getElementById("inpToan").value);
    let diemLy = Number(document.getElementById("inpLy").value);
    let diemHoa = Number(document.getElementById("inpHoa").value);

    if (diemToan == '' && diemHoa == '' && diemLy == '') {
        document.getElementById("tbKhoi1").innerHTML = "Vui lòng nhập điểm"

    }
    else {

        calMark(diemToan, diemLy, diemHoa)
    }
}

let getPoint2 = () => {
    let diemVan = Number(document.getElementById("inpVan").value);
    let diemSu = Number(document.getElementById("inpSu").value);
    let diemDia = Number(document.getElementById("inpDia").value);
    let diemAnh = Number(document.getElementById("inpEnglish").value);

    if (diemVan == '' && diemSu == '' && diemDia == '' && diemAnh == "") {
        document.getElementById("tbKhoi2").innerHTML = "Vui lòng nhập điểm"

    }
    else {

        calMark(diemVan, diemSu, diemDia, diemAnh)
    }
}
let calMark = (...mark) => {
    let sum = 0;
    for (let i = 0; i < mark.length; i++) {
        sum += mark[i];

    }
    document.getElementById("tbKhoi2").innerText = (sum / mark.length).toFixed(2);
}
document.getElementById("btnKhoi1").onclick = getPoint1;
document.getElementById("btnKhoi2").onclick = getPoint2;