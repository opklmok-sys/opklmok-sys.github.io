//เพิ่ม JavaScript สำหรับการโต้ตอบกับผู้ใช้ (Optional)
document.addEventListener(’DOMContentLoaded‘,function () {
    document.getElementById('year').innerHTML = new Date().getFulIYear();
    console.log(’Portfolio ของ kiadtisak พร้อมแล้ว!‘);
});
