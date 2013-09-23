<?php

//$filename = 'B-large.in.txt';
//
//$inputs = array();
//$file_handle = fopen($filename, 'r');
//$i = 0;
//while (!feof($file_handle)) {
//    $line = fgets($file_handle);
//    $i++;
//    if ($i === 1) {
//        continue;
//    }
//    if (trim($line) !== '') {
//        $inputs[] = $line;
//    }
//}
//fclose($file_handle);

$inputs = array(
    '3 1 5 15 13 11',
    '3 0 8 23 22 21',
    '2 1 1 8 0',
    '6 2 8 29 20 8 18 18 21',
);


function cal($data) {
    $data   = explode(' ', trim($data));
    $intPep = intval($data[0]);
    $intSpr = intval($data[1]);
    $intMin = intval($data[2]);
    unset($data[0]);
    unset($data[1]);
    unset($data[2]);
    $cases = 0;
    foreach ($data as $score) {
        $base   = intval($score) / 3;
        switch ($score % 3) {
            case 0:
                if ($base >= $intMin) {
                    $cases++;
                } else if ($intSpr > 0 && $base > 0 && ($base + 1) >= $intMin) {            
                    $cases++;
                    $intSpr--;           
                }
                break;
            case 1:
                if ($base >= $intMin || $base + 1 >= $intMin) {
                    $cases++;
                } else if ($intMin > 0 and $base + 1 >= $intMin) {
                    $cases++;
                    $intMin--;
                }
                break;
            case 2:
                if (($base + 1) >= $intMin || $base >= $intMin) {
                    $cases++;
                } else if ($intSpr > 0 and $base + 2 >= $intMin) {
                    $cases++;
                    $intSpr--;
                }
                break;
        }
    }
    return $cases;
}

foreach ($inputs as $i => $iTerm) {
    $intCi = $i + 1;
    $intRs = cal($iTerm);
    echo "Case #{$intCi}: {$intRs}\n";
}
