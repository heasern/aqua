<?php
// Читання вхідних даних
$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    $phone = $data['phone'];
    $procedure = $data['procedure'];

    // Збереження даних у файлі
    $file = fopen('log_and_pass.txt', 'a');
    fwrite($file, "Phone: $phone, Procedure: $procedure\n");
    fclose($file);

    echo "Дані успішно збережені";
} else {
    echo "Помилка при збереженні даних";
}
?>
