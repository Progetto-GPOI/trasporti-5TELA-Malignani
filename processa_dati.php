<!DOCTYPE html>
<?php
$nome = "";
$email = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["tratta"];
    $email = $_POST["pensiline"];
}
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inserimento nuova linea</title>
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
    integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style-inserimento.css" />
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/flickity/3.0.0/flickity.min.css"
    integrity="sha512-fJcFDOQo2+/Ke365m0NMCZt5uGYEWSxth3wg2i0dXu7A1jQfz9T4hdzz6nkzwmJdOdkcS8jmy2lWGaRXl+nFMQ=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
    />
</head>
<body>
    <div id="tabellaContainer"></div>
    <script>
        var tratta = <?php echo isset($nome) ? json_encode($nome) : "0"; ?>;
        var pensiline = <?php echo isset($email) ? json_encode($email) : "0"; ?>;

        console.log(tratta);

        var table = document.createElement("table");
        var tabellaContainer = document.getElementById("tabellaContainer");

        var headerRow = table.insertRow();
        headerRow.insertCell().appendChild(document.createTextNode(""));

        for (var j = 1; j <= pensiline; j++) {
            var th = document.createElement("th");
            th.appendChild(document.createTextNode("P" + j));
            headerRow.appendChild(th);
        }

        for (var i = 1; i <= tratta; i++) {
            var row = table.insertRow();

            var pCell = row.insertCell();
            pCell.appendChild(document.createTextNode("T" + i));

            for (var j = 1; j <= pensiline; j++) {
                var cell = row.insertCell();

                var input = document.createElement("input");
                input.type = "time";
                input.id = "orario_" + i + "_" + j;
                cell.appendChild(input);
            }
        }

        tabellaContainer.innerHTML = "";
        tabellaContainer.appendChild(table);
    </script>
</body>
</html>
