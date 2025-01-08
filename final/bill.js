document.addEventListener("DOMContentLoaded", () => {
    // ดึงข้อมูลจาก LocalStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const tableBody = document.getElementById("bill-items");
    const totalPriceElement = document.getElementById("total-price");
    const discountPriceElement = document.getElementById("discount-price");
    const finalPriceElement = document.getElementById("final-price");

    let totalPrice = 0;

    // สร้างแถวสำหรับแต่ละรายการในตะกร้า
    cart.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>x${item.quantity}</td>
            <td>${(item.price * item.quantity).toFixed(2)} บาท</td>
        `;
        tableBody.appendChild(row);
        totalPrice += item.price * item.quantity; // รวมราคาทั้งหมด
    });

    // แสดงราคารวม
    totalPriceElement.textContent = totalPrice.toFixed(2);

    // คำนวณส่วนลด
    let discount = 0;
    if (cart.length >= 5) { // เงื่อนไขสำหรับส่วนลด 10%
        discount = totalPrice * 0.1;
    }
    discountPriceElement.textContent = `-${discount.toFixed(2)}`;

    // แสดงราคาสุทธิหลังหักส่วนลด
    const finalPrice = totalPrice - discount;
    finalPriceElement.textContent = finalPrice.toFixed(2);
});

// ฟังก์ชันเปลี่ยนไปหน้าชำระเงิน
function goToPayment() {
    window.location.href = "payment.html";
}
