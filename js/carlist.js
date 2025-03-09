document.addEventListener("DOMContentLoaded", function () {
  const cartToggle = document.getElementById("cart-toggle");
  const overlay = document.querySelector(".cart-overlay");
  const body = document.body;
  const html = document.documentElement;

  function toggleScroll(isDisabled) {
    if (isDisabled) {
      body.classList.add("no-scroll");
      html.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
      html.classList.remove("no-scroll");
    }
  }

  // 監聽購物車開關
  cartToggle.addEventListener("change", function () {
    toggleScroll(cartToggle.checked);
  });

  // 點擊遮罩關閉購物車
  overlay.addEventListener("click", function () {
    cartToggle.checked = false;
    toggleScroll(false);
  });
});


