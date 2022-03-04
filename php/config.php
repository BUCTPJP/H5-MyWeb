<?php
$conn=mysqli_connect("localhost";"b4_30908869";"Lmy020908520");
if (!$conn) {
    die('Could not connect'.mysqli_error());
}
mysqli_query("set names latinl");
mysqli_select_db("b4_30908869_pichai",$conn)
?>
