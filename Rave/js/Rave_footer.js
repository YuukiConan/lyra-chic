fetch('./elements/footer.html')
    .then(responsefooter => responsefooter.text())
    .then(footerData => {
        document.querySelector('footer').innerHTML = footerData;
    })
    .finally(() => {
        
        // Gets the current year for id "year"
        let year = document.getElementById("year");
        if (year) {
            var getYear = new Date();
            year.innerHTML = getYear.getFullYear();
        }
        document.getElementById('back-to-top').addEventListener('click', (e) => {
            document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
        });
    })
    .catch(error => console.error("Failed to fetch:", error));
