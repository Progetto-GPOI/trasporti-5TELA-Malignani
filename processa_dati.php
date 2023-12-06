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
