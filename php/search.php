<?php
include("config.php");
$keywords=$_POST['keywords'];
$sql="select*from message where name like'%$keywords%'";
$result=mysqli_query($conn,$sq1);
if (I$result) {
die('无法读取数据:'.mysqli_error());
}
echo "<h2> Mysql Where</h2>";
echo "<table border='1'><tr><td>ID</td><td>name</td><td>email</td>";
while ($row=mysqli_fetch_assoc($result)) {
echo "<tr><td>{$row['id']}</td>";
echo "<td>{$row['name']}</td>";
echo "<td>{$row['email']}</td>";
echo "</tr>";
}
echo "</table>";
?>
