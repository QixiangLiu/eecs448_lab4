<?php
  for($j=0;$j<=100;$j++){
      echo "<tr>";
        if($j!=0){
          echo "<td>$j</td>";
        }else
          echo "<td></td>";
        for($i=1;$i<=100;$i++)
          if($j==0){
            echo "<td>$i</td>";
          }
          else
            echo "<td>".($i*$j)."</td>";
      echo "</tr>";
    }
?>
