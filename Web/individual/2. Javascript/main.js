const output = document.getElementById("ds")
var danhSachNhanVien = []

class NhanVien {
    constructor(maNV, hoTen, ngaySinh, phongBan, heSoLuong) {
        this.maNV = maNV;
        this.hoTen = hoTen;
        this.ngaySinh = ngaySinh;
        this.phongBan = phongBan;
        this.heSoLuong = heSoLuong;
    }
  
    capNhatThongTin(hoTen, ngaySinh, phongBan, heSoLuong) {
        this.hoTen = hoTen;
        this.ngaySinh = ngaySinh;
        this.phongBan = phongBan;
        this.heSoLuong = heSoLuong;
    }
  
    inThongTin() {
        return `Mã NV: ${this.maNV}, Họ và Tên: ${this.hoTen}, Ngày Sinh: ${this.ngaySinh}, Phòng Ban: ${this.phongBan}, Hệ Số Lương: ${this.heSoLuong}`
    }
}
  
  
function nhapThongTinNhanVien() {
    let maNV = prompt("Nhập mã nhân viên: ");
    let hoTen = prompt("Nhập họ và tên: ");
    let ngaySinh = prompt("Nhập ngày sinh: ");
    let phongBan = prompt("Nhập phòng ban: ");
    let heSoLuong = prompt("Nhập hệ số lương: ");
  
    return new NhanVien(maNV, hoTen, ngaySinh, phongBan, parseFloat(heSoLuong));
}

function capNhatNhanVien() {
    let maNV = prompt("Nhập mã nhân viên cần cập nhật thông tin: ");
    let canFind = false

    for (nv of danhSachNhanVien)
        if (maNV === nv.maNV) {
            canFind = true
            let hoTen = prompt("Nhập họ và tên: ");
            let ngaySinh = prompt("Nhập ngày sinh: ");
            let phongBan = prompt("Nhập phòng ban: ");
            let heSoLuong = prompt("Nhập hệ số lương: ");
            nv.capNhatThongTin(hoTen, ngaySinh, phongBan, parseFloat(heSoLuong))
            break
        }
    
    if (!canFind) alert("Không tìm thấy nhân viên có mã " + maNV)
    hienDanhSach()
}
  
function quanLyNhanVien() {
    let soLuongNhanVien = prompt("Nhập số lượng nhân viên: ");
  
    for (let i = 0; i < soLuongNhanVien; i++) 
      danhSachNhanVien.push(nhapThongTinNhanVien());
    hienDanhSach()
}

function hienDanhSach() {
    output.innerText = danhSachNhanVien.reduce((ds, nv) => ds + nv.inThongTin() + "\n", "")
}
  