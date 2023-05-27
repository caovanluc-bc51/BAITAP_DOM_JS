/**
 * MÔ HÌNH 3 KHỐI BÀI 1: TÍNH TIỀN LƯƠNG NHÂN VIÊN
 * ĐẦU VÀO:
 * -soNgayLam
 * XỬ LÝ:
 * -tienLuong = soNgayLam * 100000
 * ĐẦU RA:
 * -tạo thẻ p --> in ra tienLuong
 */
document.getElementById("btnTinhLuong").onclick = function(){
    var soNgayLam = document.getElementById("soNgayLam").value*1;
    var tienLuong = soNgayLam*100000;
    var numberFormat = new Intl.NumberFormat("VN-vn");
    var result = "<p>SỐ TIỀN LƯƠNG LÀ: " +numberFormat.format(tienLuong)+" VND</p>"
    document.getElementById("footerTinhTienLuong").innerHTML = result;
};

/**
 * MÔ HÌNH 3 KHỐI BÀI 2: TÍNH GIÁ TRỊ TRUNG BÌNH
 * ĐẦU VÀO: 
 * -soThuNhat; soThuHai; soThuBa; soThuTu; soThuNam;
 * XỬ LÝ:
 * -giaTriTrungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam)/5;
 * ĐẦU RA:
 * -tạo 1 thẻ p -->in ra giaTriTrungBinh
 */
document.getElementById("btnGiaTriTrungBinh").onclick = function(){
    var soThuNhat = document.getElementById("soThuNhat").value*1;
    var soThuHai = document.getElementById("soThuHai").value*1;
    var soThuBa = document.getElementById("soThuBa").value*1;
    var soThuTu = document.getElementById("soThuTu").value*1;
    var soThuNam = document.getElementById("soThuNam").value*1;
    var giaTriTrungBinh = (soThuNhat+soThuHai+soThuBa+soThuTu+soThuNam)/5;
    var result ="<p>GIÁ TRỊ TRUNG BÌNH LÀ: "+ giaTriTrungBinh +"</p>";
    document.getElementById("footerGiaTriTrungBinh").innerHTML = result;
};
/**
 * MÔ HÌNH 3 KHỐI BÀI 3: QUY ĐỔI TIỀN
 * ĐẦU VÀO:
 * -soUSD
 * XỬ LÝ:
 * - quyDoi = soUSD*23500
 * ĐẦU RA:
 * -tạo thẻ p -->in ra số tiền quy đổi
 */
document.getElementById("btnQuyDoi").onclick = function(){
    var soUSD = document.getElementById("soUSD").value*1;
    var quyDoi = soUSD*23500;
    var numberFormat = new Intl.NumberFormat("VN-vn")
    var result = "<p>GIÁ TRỊ QUY ĐỔI LÀ: " + numberFormat.format(quyDoi) +" VND</p>"
    document.getElementById("footerQuyDoi").innerHTML = result;
};
/**
 * MÔ HÌNH 3 KHỐI BÀI 4: TÍNH DIỆN TÍCH - CHU VI HÌNH CHỮ NHẬT
 * ĐẦU VÀO:
 * -chieuDai; chieuRong
 * XỬ LÝ:
 * -dienTich = chieuDai*chieuRong;
 * -chuVi = (chieuDai + chieuRong)*2;
 * ĐẦU RA:
 * -tạo thẻ p --> in ra chieuDai; chieuRong của hình chữ nhật
 */
document.getElementById("btnDienTichChuVi").onclick = function(){
    var chieuDai = document.getElementById("chieuDai").value*1;
    var chieuRong = document.getElementById("chieuRong").value*1;
    var dienTich = chieuDai*chieuRong;
    var chuVi = (chieuDai+chieuRong)*2;
    var content = "";
    content += "<p>DIỆN TÍCH HÌNH CHỮ NHẬT LÀ: " + dienTich +"</p>"
    content += "<p>CHU VI HÌNH CHỮ NHẬT LÀ: " + chuVi +"</p>"
    document.getElementById("footerDienTichChuVi").innerHTML = content;
    
};
/**
 * MÔ HÌNH 3 KHỐI BÀI 5: TÍNH TỔNG 2 KÝ SỐ
 * ĐẦU VÀO:
 * -soHaiChuSo;
 * XỬ LÝ:
 * -hangChuc = soHaiChuSo % 100 / 10;
 * -hangDonVi = soHaiChuSo % 10 ;
 * -tongHaiKySo = hangChuc + hangDonVi;
 * ĐẦU RA:
 * -tạo thẻ p --> in ra tongHaiKySo;
 */
document.getElementById("btnSoHaiChuSo").onclick = function(){
    var soHaiChuSo = document.getElementById("soHaiChuSo").value*1;
    var hangChuc = Math.floor(soHaiChuSo%100/10);
    var hangDonVi = soHaiChuSo%10;
    var tongHaiKySo = hangChuc + hangDonVi;
    var result = "<p>TỔNG 2 KÝ SỐ LÀ: "+ tongHaiKySo +"</p>";
    document.getElementById("footerSoHaiChuSo").innerHTML = result;
};