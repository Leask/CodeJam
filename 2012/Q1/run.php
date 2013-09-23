<?php

//phpinfo();
// return;
// print_r($_SERVER['argv']);
//echo 'php://filter';
$filename = 'php://filter';
//return;
$inputs = array();
$file_handle = fopen($filename, "r");
$i = 0;
while (!feof($file_handle)) {
    $line = fgets($file_handle);
    $i++;
    if ($i === 1) {
        continue;
    }
    if (trim($line) !== '') {
        $inputs[] = $line;
    }
}
fclose($file_handle);

$testCases = array(
    'ejp mysljylc kd kxveddknmc re jsicpdrysi'
 => 'our language is impossible to understand',
    'rbcpc ypc rtcsra dkh wyfrepkym veddknkmkrkcd'
 => 'there are twenty six factorial possibilities',  
    'de kr kd eoya kw aej tysr re ujdr lkgc jv'
 => 'so it is okay if you want to just give up',
);

// an Googlerese to English mapping
$mapping = array(
    'e' => 'o',
    'q' => 'z',    
    'y' => 'a',
    'z' => 'q', // some thing you did't tell us
);

function learnMapping($strG, $strE) {
    global $mapping;
    $intLen = strlen($strG);
    for ($i = 0; $i < $intLen; $i++) {
        $lteG = substr($strG, $i, 1);
        $lteE = substr($strE, $i, 1);
        if (!array_key_exists($lteG, $mapping)) {
            $mapping[$lteG] = $lteE;
        }
    }
} 

foreach ($testCases as $tcI => $tcItem) {
    learnMapping($tcI, $tcItem);
}

function translateCore($strG) {
    global $mapping;
    $intLen = strlen($strG);
    $strResult = '';
    for ($i = 0; $i < $intLen; $i++) {
        $strResult .= $mapping[substr($strG, $i, 1)];
    }
    return $strResult;
}

function doTranslate($arrStrG) {
    foreach ($arrStrG as $iI => $iItem) {
        $intN = $iI + 1;
        $steE = translateCore($iItem);
        echo "Case #{$intN}: {$steE}\n";
    }
}

doTranslate($inputs);
