function handleModal() {
    const button1 = document.querySelector(".header__button");
    const button2 = document.querySelector(".faq__button");
    const modalController = document.querySelector(".modalController")

    button1.addEventListener("click", function () {
        modalController.showModal()
    })

    button2.addEventListener("click", function () {
        modalController.showModal()
    })

    closeModal();
}

function closeModal() {
    const closeButton = document.querySelector(".closeButton");
    const modalController = document.querySelector(".modalController")
    closeButton.addEventListener("click", function () {
        modalController.close()
    })
}

handleModal()