<?php
$html = file_get_contents("./index.html");
//Задание 1
$a = -1;
$b = 2;
if($a >= 0 and $b >= 0)
    $result = "a и b положительные, вывести их разность: " . $a-$b;
else if($a < 0 and $b < 0)
    $result = "а и b отрицательные, вывести их произведение: " . $a*$b;
else
    $result = "а и b разных знаков, вывести их сумму: " . $a+$b;
$html = str_replace('{{ ex1 }}', $result, $html);
/*если $a и $b положительные, вывести их разность;
если $а и $b отрицательные, вывести их произведение;
если $а и $b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.*/
//Задание 2
$a = 11;
$result = '';
switch ($a){
    case 0:
        $result = $result . "0 ";
    case 1:
        $result = $result . "1 ";
    case 2:
        $result = $result . "2 ";
    case 3:
        $result = $result . "3 ";
    case 4:
        $result = $result . "4 ";
    case 5:
        $result = $result . "5 ";
    case 6:
        $result = $result . "6 ";
    case 7:
        $result = $result . "7 ";
    case 8:
        $result = $result . "8 ";
    case 9:
        $result = $result . "9 ";
    case 10:
        $result = $result . "10 ";
    case 11:
        $result = $result . "11 ";
    case 12:
        $result = $result . "12 ";
    case 13:
        $result = $result . "13 ";
    case 14:
        $result = $result . "14 ";
    case 15:
        $result = $result . "15 ";
}
$html = str_replace('{{ ex2 }}', $result, $html);
//Задание 3
$a = 5;
$b = 10;
$result = 'Сумма: ' . Sum($a,$b).
    '</br>Разность: ' . Dif($a,$b).
    '</br>Произведение: ' . Multip($a,$b).
    '</br>Деление: ' . Div($a,$b);
$html = str_replace('{{ ex3 }}', $result, $html);

function Sum($a,$b){
    return($a + $b);
}
function Dif($a,$b){
    return($a - $b);
}
function Multip($a,$b){
    return($a * $b);
}
function Div($a,$b){
    return($a / $b);
}
//Задание 4
$a = 4;
$b = 4;
$result = 'Сумма: ' . mathOperation($a,$b,'+').
    '</br>Разность: ' . mathOperation($a,$b,'-').
    '</br>Произведение: ' . mathOperation($a,$b,'*').
    '</br>Деление: ' . mathOperation($a,$b,'/');
$html = str_replace('{{ ex4 }}', $result, $html);
function mathOperation($arg1,$arg2,$operation){
    if($operation == '+')
        return Sum($arg1,$arg2);
    if($operation == '-')
        return Dif($arg1,$arg2);
    if($operation == '*')
        return Multip($arg1,$arg2);
    if($operation == '/')
        return Div($arg1,$arg2);
}
//Задание 5
$year = date('Текущий год: '.'Y');
//1 способ
$html = str_replace('{{ ex5 }}', '1 способ: ' . $year, $html);
//2 способ
echo '2 Способ: '.$year;
//3 способ
?>
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{{ title }}</title>


        <link rel="stylesheet">
        <meta property="og:title" content="Заголовок страницы в OG">
        <meta property="og:description" content="Описание страницы в OG">
        <meta property="og:image" content="https://example.com/image.jpg">
        <meta property="og:url" content="https://example.com/">
    </head>
    <body>
    <header>
        <h1>Способ 3:</h1>
        <p><?= $year ?></p>
        <nav>
            <ul>
                <li><a href="index.html">Эта страница</a></li>
            </ul>
        </nav>
    </header>
    </body>
    </html>
<?php
//Задание 6
$result = power(4,4);
$html = str_replace('{{ ex6 }}', $result, $html);
echo $html;
function power($val,$pow){
    if($pow == 0 and $val <> 0)
        return 1;
    elseif($pow > 0){
        return $val*power($val,$pow-1);
    }
    elseif($pow < 0)
        return 1/$val*power($val,$pow+1);
}
