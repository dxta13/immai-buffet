document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;
    });

    const discount = totalItems >= 5 ? totalPrice * 0.1 : 0; // ส่วนลด 10% หากครบ 5 รายการ
    const finalPrice = totalPrice - discount;

    document.getElementById("total-items").textContent = `${totalItems} รายการ`;
    document.getElementById("total-price").textContent = `${totalPrice} บาท`;
    document.getElementById("discount-price").textContent = `-${discount.toFixed(2)} บาท`;
    document.getElementById("final-price").textContent = `${finalPrice.toFixed(2)} บาท`;
});

function confirmPayment() {
    alert("การชำระเงินเสร็จสิ้น! ขอบคุณที่ใช้บริการ 🎉");
    localStorage.clear(); // ล้างข้อมูลใน localStorage
    window.location.href = "index.html"; // กลับไปยังหน้าแรก
}
