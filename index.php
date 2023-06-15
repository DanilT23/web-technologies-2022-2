<?php
$html = file_get_contents("./index.html");
//Задание 1
$i = 0;
$result ='';
do {
    if($i % 2 == 1)
        $result = $result . "$i - нечётное число.</br>";
    elseif($i % 2 == 0 and $i > 0)
        $result = $result . "$i - чётное число.</br>";
    else {
        $result = $result . "$i - это ноль.</br>";
    }
    $i++;
} while($i < 11);
$html = str_replace('{{ ex1 }}', $result, $html);
echo $html;
//Задание 2

$arr = [];
$arr = [
    'Московская область' => ['Москва', 'Зеленоград', 'Клин'],
    'Ленинградская область' => ['Санкт-Петербург', 'Всеволожск', 'Павловск', 'Кронштадт'],
    'Рязанская область' => ['Рязань', 'Ряжск', 'Шацк', 'Рыбное', 'Скопин', 'Касимов', 'Михайлов']
];

foreach ($arr as $key => $city) {
    echo $key . ':</br>';
    echo implode(', ', $city) . '.<br>';
}

//Задание 3
echo "</br> <h2>Задание 3:</h2>";
$arr =[
    'a' => 'a',
    'б' => 'b',
    'в' => 'v',
    'г' => 'g',
    'д' => 'd',
    'е' => 'e',
    'ё' => 'yo',
    'ж' => 'zh',
    'з' => 'z',
    'и' => 'i',
    'й' => 'j',
    'к' => 'k',
    'л' => 'l',
    'м' => 'm',
    'н' => 'n',
    'о' => 'o',
    'п' => 'p',
    'р' => 'r',
    'с' => 's',
    'т' => 't',
    'у' => 'u',
    'ф' => 'f',
    'х' => 'x',
    'ц' => 'cz',
    'ч' => 'ch',
    'ш' => 'sh',
    'щ' => 'shh',
    'ъ' => '',
    'ы' => 'y',
    'ь' => '',
    'э' => 'e',
    'ю' => 'yu',
    'я' => 'ya'
];
$text = 'какой то текст';
$new_text = convertToTranslit($text,$arr);
echo "$new_text<br>";

function convertToTranslit($s,$arr){
    return strtr(mb_strtolower($s), $arr);
}
//Задание 4
echo "</br> <h2>Задание 4:</h2>";

$menu = [
    'Страница',
    'Меню' => [
        'Подменю 1',
        'Подменю 2'
    ],
    'Меню 2' => [
    'Подменю 1',
    'Подменю 2'
],
];

echo '<ul>';
foreach ($menu as $key => $value) {
    if (is_array($value)) {
        echo '<li> <a href="index.html"> ' . $key . ' </a> <ul>';
        foreach ($value as $new_value) {
            echo '<li> <a href="index.html"> ' . $new_value . ' </a> </li>';
        }
        echo '</ul>' . '</li>';
    }
    else {
        echo '<li> <a href="index.html">' . $value . '</a></li>';
    }
}
echo '</ul>';

//Задание 5
echo "</br> <h2>Задание 5:</h2>";

//Задание 6
echo "</br> <h2>Задание 6:</h2>";

$arr = [];
$arr = [
    'Московская область' => ['Москва', 'Зеленоград', 'Клин'],
    'Ленинградская область' => ['Санкт-Петербург', 'Всеволожск', 'Павловск', 'Кронштадт'],
    'Рязанская область' => ['Рязань', 'Ряжск' , 'Шацк', 'Рыбное', 'Скопин', 'Касимов', 'Михайлов']
];
foreach ($arr as $key => $value) {
    if (is_array($value)) {
        foreach ($value as $new_key => $new_value) {
            if (mb_substr($new_value, 0,1) == 'К') {
                echo $new_value.' ';
            }
        }
    }
}
echo '<br>';

