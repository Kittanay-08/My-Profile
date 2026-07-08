// ===== State =====
let isDark = false;
 
// ===== Element References =====
const toggleButton = document.querySelector('#theme-toggle');
const footer = document.querySelector('#card-footer');
const nameInput = document.querySelector('#name-input'); // ➕ ดึงกล่องข้อความ
const cardName = document.querySelector('.card__name');   // ➕ ดึงแท็กแสดงชื่อ
 
// ===== Event: สลับธีม =====
toggleButton.addEventListener('click', () => {
  isDark = !isDark;
  document.body.classList.toggle('dark', isDark);
 
  toggleButton.textContent = isDark ? `☀️ โหมดกลางวัน` : `🌙 โหมดกลางคืน`;
});
 
// ===== Footer: ปีอัตโนมัติด้วย template literal =====
const currentYear = new Date().getFullYear();
footer.textContent = `© ${currentYear} — Deploy ด้วย GitHub Pages 🚀`;

// ===== ➕ Event: อัปเดตชื่อตามกล่องข้อความแบบ Real-time =====
nameInput.addEventListener('input', () => {
  // หากในกล่องข้อความว่างเปล่า ให้ใส่ชื่อเริ่มต้นคืนกลับไป
  cardName.textContent = nameInput.value.trim() !== '' ? nameInput.value : 'Kittanay Donsaeng';
});