
//-- Menu-SILDEBAR-CATEGORY --//
const itemsliderbar = document.querySelectorAll(".category-left-li");
itemsliderbar.forEach(function(menu) {
    menu.addEventListener("click", function(e) {
        // Close all other open menus first
        itemsliderbar.forEach(function(otherMenu) {
            if (otherMenu !== menu && otherMenu.classList.contains("block")) {
                otherMenu.classList.remove("block");
            }
        });
        
        // Toggle the clicked menu
        menu.classList.toggle("block");
    });
});