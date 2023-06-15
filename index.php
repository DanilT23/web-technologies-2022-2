<?php
$html = file_get_contents("./index.html");

$title = str_replace('{{ title }}', 'Title', $html);

$h1 = str_replace('{{ h1 }}', 'h1', $title);

$year = date('Текущий год : '.'Y') ;

$content = str_replace('{{ year }}', $year, $h1);

//echo $content;

$hour = date('H') + 2;
//echo $hour;
$minutes = date('i');
//echo $minutes;

$time = myFunc($hour,$minutes);
$content = str_replace('{{ time }}', $time, $content);
echo $content;

function myFunc($h,$m){
    $s = '';
    if($h == 1 or $h == 21)
        $s = "$h час ";
    else if(($h > 1 and $h < 5) or ($h >= 22 and $h <= 23))
        $s = "$h часа";
    else if(($h > 4 and $h < 20) or $h == 0)
        $s = "$h часов";

    if($m > 4 and $m < 21)
        $s = $s . " $m минут";
    else{
        $ost = $m % 10;
        switch ($ost){
            case 1:
                $s = $s . " $m минута";
                break;
            case 2:
            case 3:
            case 4:
                $s = $s . " $m минуты";
                break;
            default:
                $s = $s . " $m минут";
        }
    }
    return $s;

}