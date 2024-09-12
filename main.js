document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-btn');
    const contents = document.querySelectorAll('.content-item');

    function fetchData() {
        fetch('sample.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); 
                populateContent(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    function populateContent(imageData) {
        imageData.forEach(data => {
            const img = document.getElementById(data.id);
            if (img) {
                console.log(img);
                img.src = data.image;
                img.nextElementSibling.textContent=data.txt;
            }
    });
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            const contentId = button.getAttribute('data-content');
            document.getElementById(contentId).classList.add('active');
        });
    });

    fetchData(); 
});
