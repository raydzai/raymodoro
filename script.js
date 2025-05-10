// Thời gian ban đầu (25 phút = 1500 giây)
let totalSeconds = 25 * 60;

// Tham chiếu đến hai phần tử giờ phút
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");

// Ở đây ta chỉ hiển thị dạng mm:ss, không cần hours, 
// nhưng ví dụ: "09:41" => hours = "09", minutes = "41".
function updatePomodoro() {
  if (totalSeconds <= 0) {
    clearInterval(intervalId);
    alert("Pomodoro kết thúc!");
    return;
  }
  
  // Giảm thời gian còn lại
  totalSeconds--;
  
  // Tính phút và giây
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  
  // Format hiển thị dạng mm:ss
  // Nếu bạn muốn hiển thị "giờ:phút" thực, có thể tách logic ra tùy ý
  const mm = m < 10 ? "0" + m : "" + m;
  const ss = s < 10 ? "0" + s : "" + s;
  
  // Cập nhật vào giao diện
  hoursEl.textContent = mm;
  minutesEl.textContent = ss;
}

// Gọi hàm update mỗi giây
const intervalId = setInterval(updatePomodoro, 1000);
