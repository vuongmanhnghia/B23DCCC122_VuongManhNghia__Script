a = parseInt(prompt("Nhập số nguyên: "));
const element = document.getElementById("element");
switch (a) {
    case 2:
        document.write("Hôm nay là thứ 2");
        break;
    case 3:
        document.write("Hôm nay là thứ ba");
        break;
    case 4:
        document.write("Hôm nay là thứ tư");
        break;
    case 5:
        document.write("Hôm nay là thứ năm");
        break;
    case 6:
        document.write("Hôm nay là thứ sáu");
        break;
    case 7:
        document.write("Hôm nay là thứ bảy");
        break;
    case 8:
        document.write("Hôm nay là chủ nhật");
        break;
    default:
        document.write("Không hợp lệ");
        break;
}
