const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")

let carrito = []

ropa.forEach((clothes) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${clothes.img}">
    <h3>${clothes.nombre}</h3>
    <p class="price"> $ ${clothes.precio}</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "¡Lo quiero!";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id: clothes.id,
            img: clothes.img,
            nombre: clothes.nombre,
            precio: clothes.precio,
        })
        console.log(carrito);
    })

    verCarrito.addEventListener("click", () => {
        modalContainer.innerHTML = "";
        modalContainer.style.display = "flex";
        const modalHeader = document.createElement("div");
        modalHeader.className = "modal-header";
        modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
        `
    });
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);


    carrito.forEach((clothes) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${clothes.img}">
        <h3>${clothes.nombre}</h3>
        <p> $ ${clothes.precio}</p>
        `;

        modalContainer.append(carritoContent);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a pagar: $ ${total}`;
    modalContainer.append(totalBuying);
});