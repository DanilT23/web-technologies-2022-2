<?php
//define('DIR_IMG', './gallery_img', false);
const DIR_IMG = './gallery_img';
function renderTemplate($page, $arrImg = [], $arrHtml = []) {
    ob_start();
    include $page . ".php";
    return ob_get_clean();
}

function logging() {
    $day = date('G:i:s d:m:Y');
}

function renderArr() {
    $arr = [];
    $scanDir = scandir(DIR_IMG);
    for ($i = 0; $i < count($scanDir); $i++) {
        if (strlen($scanDir[$i]) > 2) {
            $scanDirImg = scanDir(DIR_IMG . "/" . $scanDir[$i]);
            for ($j = 0; $j < count($scanDirImg); $j++) {
                if (strlen($scanDirImg[$j]) > 2) {
                    $arr[$i - 2][$j - 2] = DIR_IMG . "/" . $scanDir[$i] . "/" . $scanDirImg[$j];
                }
            }
        }
    }

    return $arr;
}

$arrImg = renderArr();

$gallery = renderTemplate('gallery', $arrImg);

$arrHtml = array($gallery);

echo renderTemplate('main', $arrImg, $arrHtml);


logging();


$messages = [
    'ok'=>'Файл загружен',
    'error0' => 'Ошибка загрузки, выберете файл',
    'error1' => 'Неподходящий размер файла',
    'error2' => 'Неподходящий формат, только jpg'
];

if(!empty($_FILES)){
    $path = "gallery_img/small/".$_FILES["myfile"]["name"];
    if($_FILES["myFile"]["size"] > 1024 * 1024){
        $message = 'error1';
    }
    elseif(mime_content_type($_FILES['myfile']['tmp_name']) != 'image/jpeg'){
        $message = 'error2';
    }
    elseif(move_uploaded_file($_FILES["myfile"]["tmp_name"],$path)){
        $message = 'ok';
    }
    else{
        $message ='error0';
    }
    header("Location: index.php?status=$message");

}


$message = $messages[$_GET['status']]
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <title>Document</title>
</head>

<body>
    <h2 class="message"><?=$message?></h2><br>
    <div class="add">
        <form method="post" enctype="multipart/form-data">
            <input id="file" type="file" name="myfile">
            <input id="submit" type="submit" value="Загрузить">
        </form>
    </div>
</body>

</html>
