$(document).ready(function() {
    var i = 1; // Khởi tạo số thứ tự
    // Viết code vào
    $("#btn2").click(function() {
        $("#myModal").modal();
    });
    
    function kiemTraTen() {
        var i = 1;
        let mauKT = /([A-Z]{1}[a-z]\[A-Z]{1}[a-z]\[A-Z]{1}[a-z]$)/;
        if ($("#Name").val() == "") {
            $("#tbName").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Name").val())) {
            $("#tbName").html("Nhap sai");
            return true;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemTraMa);


    function KiemTraCLB(){
        if($("#CLB").val()==""){
            $("#tbCLB").html("Không để trống");
            return false;
        }
        $("#tbCLB").html("*");
        return true;
    }
    $("#CLB").blur(KiemTraDD);


    function KiemTraNgay(){
        if($("#NTT").val()==""){
            $("#tbNTT").html("Không để trống");
            return false;
        }
        var day = new Date($("#NTT").val());
        var today = new Date();
        today.setDate(today.getDate()+ 30);
        if(day < today){
            $("#tbNTT").html("Nhap sai");
            return false;
        }
        $("#tbNTT").html("*");
        return true;
    }


    $("#Save").click(function() {
        if (kiemTraMa() == true && KiemTraDD() == true ) {
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#SoAo").val() + "</th>";
            row += "<th>" + $("#CLB").val() + "</th>";
            row += "<th>" + $("#NTT").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            row += "<th>" + $("#ADD").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
    })
    
})