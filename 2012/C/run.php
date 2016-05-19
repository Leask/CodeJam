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
    '1 9',
    '10 40',
    '100 500',
    '1111 2222',
);

$arrAllOrder = array();

function getAllOrder($intMin, $intMax) {
    $arrResult = array();
    for ($i = $intMin; $i <= $intMax; $i++) {
        if ($i > 9) {
            $arrResult[] = $i;
        }
    }
    return $arrResult;
}

function getAllOrderFromStr($strRaw) {
    $arrRaw = array_map(intval, explode(' ', $strRaw));
    return getAllOrder($arrRaw[0], $arrRaw[1]);
}

function buildHashMap($arrOrderSet) {
    $arrHash = array();
    foreach ($arrOrderSet as $aosI => $aosItem) {
        $arrPreHash = str_split("{$aosItem}");
        sort($arrPreHash);
        $strHashKey = '#' . implode($arrPreHash);
        if (!isset($arrHash[$strHashKey])) {
            $arrHash[$strHashKey] = array();
        }
        $arrHash[$strHashKey][] = $aosItem;
    }
    foreach ($arrHash as $ahI => $ahItem) {
        if (sizeof($ahItem) < 2) {
            unset($arrHash[$ahI]);
        }
    }
    return $arrHash;
}

function checkPossibility($arrInput) {
    
}

foreach ($inputs as $i => $iTerm) {
    $intCi = $i + 1;
    $allOdItem = getAllOrderFromStr($iTerm);
    $arrHash = buildHashMap($allOdItem);
    
    print_r($arrHash);
    if ($i > 0) {
       // break;
    }
    //$intRs = cal($iTerm);
    //echo "Case #{$intCi}: {$intRs}\n";
}
