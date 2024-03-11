document.addEventListener("DOMContentLoaded", function () {
    const orderButton = document.getElementById("orderButton");
    const orderMessage = document.getElementById("orderMessage");
    const orderAgainButton = document.getElementById("orderAgainButton");

    orderButton.addEventListener("click", function () {
        const items = document.querySelectorAll(".item");
        let total = 0;
        

        items.forEach((item) => {
            const price = parseFloat(item.querySelector(".price").textContent);
            const quantity = parseFloat(item.querySelector(".quantity").value) || 0;
            total += price * quantity;
        });

        // Display order completion message
        orderMessage.textContent = `Order successful! Total: $${total.toFixed(2)}`;

        // Show the order again button
        orderAgainButton.style.display = "block";
    });

    orderAgainButton.addEventListener("click", function () {
        // Reset the order message and hide the order again button
        orderMessage.textContent = "";
        orderAgainButton.style.display = "none";
        

        // Reset quantity inputs
        const quantityInputs = document.querySelectorAll(".quantity");
        quantityInputs.forEach((input) => {
            input.value = "";
        });
    });
});
