const wishList = [];

function showWishList() {
    console.clear();
    console.log("=== Your Wish List ===");

    if (wishList.length === 0) {
        console.log("The wish list is empty. Start adding your wishes!");
    } else {
        wishList.forEach((wish, idx) => {
            console.log(`${idx + 1}. ${wish.text} ${wish.received ? "(Received)" : ""}`);
        });
    }

    console.log("\n--- Options ---");
    console.log("1. Add a new wish");
    console.log("2. Remove a wish");
    console.log("3. Mark a wish as received");
    console.log("4. Exit");
}

function addNewWish(text) {
    const cleanedText = text.trim();
    if (!cleanedText) {
        console.log("Error: Wish cannot be blank.");
        return;
    }

    wishList.push({ text: cleanedText, received: false });
    console.log(`Wish added: "${cleanedText}"`);
}

function removeWish(index) {
    if (index < 1 || index > wishList.length || isNaN(index)) {
        console.log("Invalid index. Please try again.");
        return;
    }

    const removedWish = wishList.splice(index - 1, 1);
    console.log(`Removed wish: "${removedWish[0].text}"`);
}

function setReceived(index) {
    if (index < 1 || index > wishList.length || isNaN(index)) {
        console.log("Invalid index. Please try again.");
        return;
    }

    wishList[index - 1].received = true;
    console.log(`Marked as received: "${wishList[index - 1].text}"`);
}

function startSimulation() {
    showWishList();

    addNewWish("Make Up");
    addNewWish("Skincare");
    addNewWish("Jewerly");
    addNewWish("Trip to France");
    addNewWish("Mercedes-Benz");

    showWishList();

    setReceived(3); 
    showWishList();

    removeWish(2);
    showWishList();

    console.log("Simulation complete. Goodbye!");
}

startSimulation();