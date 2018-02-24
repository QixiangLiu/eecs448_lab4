<?php
//access the global array called $_POST to get the values from the text fields
$name = $_POST["name"];
$Q1 = $_POST["Q1"];
$Q2 = $_POST["Q2"];
$Q3 = $_POST["Q3"];
$Q4 = $_POST["Q4"];
$Q5 = $_POST["Q5"];
$correct = 0;
$total = 5;
echo "Name: " . $name . "<br>";

if($Q1 == "Earth"){
  $correct++;
}
if($Q2 == "China"){
  $correct++;
}
if($Q3 == "iPhone 4"){
  $correct++;
}
if($Q4 == "Battlefield 3"){
  $correct++;
}
if($Q5 == "Basketball"){
  $correct++;
}
echo "Question 1: Where are you from?<br>";
echo "Your answer: ".$Q1."<br>";
echo "Current answer: Earth <br><br>";
echo "Question 2: Where is Qixiang's hometown?<br>";
echo "Your answer: ".$Q2."<br>";
echo "Current answer: China <br><br>";
echo "Question 3: What is the best iPhone series created by Steve Jobs?<br>";
echo "Your answer: ".$Q3."<br>";
echo "Current answer: iPhone 4 <br><br>";
echo "Question 4: What is best <b>Battlefield</b> series?<br>";
echo "Your answer: ".$Q4."<br>";
echo "Current answer: Battlefield 3 <br><br>";
echo "Question 5: What is Jaobao's favorite hobby?<br>";
echo "Your answer: ".$Q5."<br>";
echo "Current answer: Basketball <br><br>";
$percent = $correct/$total *100;
echo "Score: ".$percent."%";

?>
