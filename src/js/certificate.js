(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-certificate-open]'),
    closeModalBtn: document.querySelector('[data-certificate-close]'),
    modal: document.querySelector('[data-certificate]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      document.body.classList.toggle("certificate-open");
    refs.modal.classList.toggle('is-hidden');
  }
})();
