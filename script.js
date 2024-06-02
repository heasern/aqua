document.getElementById('procedureForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const phone = document.getElementById('phone').value;
    const procedure = document.getElementById('procedure').value;

    // Створення об'єкта для відправки на сервер
    const data = { phone, procedure };

    // Відправка даних на сервер
    fetch('save_data.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
        alert('Дані успішно збережені');
    })
    .catch(error => {
        console.error('Помилка:', error);
    });
});
