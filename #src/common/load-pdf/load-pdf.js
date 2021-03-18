{
    let loadCards = document.querySelectorAll('.load-pdf__card');
    if(loadCards.length) {
        let popup = document.getElementById('pdfPopup');
        let downloadBtn = popup.querySelector('._download-btn');
        let openInWindowBtn = popup.querySelector('._open-in-window');

        loadCards.forEach(card => {
            card.addEventListener('click', () => {
                let pdfUrl = card.dataset.pdfurl;
                if(pdfUrl) {
                   downloadBtn.href = pdfUrl;
                   openInWindowBtn.href = pdfUrl;

                   popupOpen(popup);
                }

            })
        })
    }
}
