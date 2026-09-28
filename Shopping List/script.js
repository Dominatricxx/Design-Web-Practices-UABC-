document.addEventListener("DOMContentLoaded", () => {
    const btnAdd = document.getElementById("btnAdd");
    const inputItem = document.getElementById("txtItem");
    const itemList = document.getElementById("itemList");
    const errorMsg = document.getElementById("errorMsg");

    let items = [
        { name: "Laptop", purchase: false },
        { name: "Speakers", purchase: true },
        { name: "MacBook", purchase: false }
    ];

    function renderList() {
        itemList.innerHTML = "";

        items.forEach((item, index) => {
            let li = document.createElement("li");
            li.innerHTML = `<span>${item.name}</span> <button class="btn-action btn-delete">Remove</button>`;

            let btnDelete = li.querySelector("button");
            btnDelete.addEventListener("click", () => {
                items.splice(index, 1);
                renderList();
            });

            itemList.appendChild(li);
        });
    }

    btnAdd.addEventListener("click", () => {
        let text = inputItem.value;

        if (text.trim() === "") {
            errorMsg.style.display = "block";
        } else {
            errorMsg.style.display = "none";
            items.push({ name: text, purchase: false });
            inputItem.value = "";
            renderList();
        }
    });

    renderList();
});