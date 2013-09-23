<?php
ini_set("memory_limit", "10240000M");
$filename = 'C-large.in.txt';

$inputs = array();
$file_handle = fopen($filename, 'r');
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

$inputs = array(
    '1 9',
    '10 40',
    '100 500',
    '1111 2222',
);

function cal($data) {
    $data   = array_map(intval, explode(' ', $data));
    $magRst = array();
    $count  = 0;
    if ($data[1] > 9) {
        $intCountPsb = count($arrIntAllPsb = range($data[0], $data[1]));
        for ($i = 0; $i < $intCountPsb; $i++) {
            $strN = $strM = $arrIntAllPsb[$i];
            $intLen = strlen("{$arrIntAllPsb[$i]}");
            for ($j = 0; $j < $intLen; $j++) {
                $strM = substr($strM, -1) . substr($strM, 0, $intLen - 1);
                if ($strM <= $data[1] and $strM > $strN and $strM >= $data[0]) {
                    $magRst["#{$strN}{$strM}"] = 1;
                }
            }
        }
    }
    return count($magRst);
  }

foreach ($inputs as $i => $iTerm) {
    $intCi = $i + 1;
    $intRs = cal($iTerm);
    echo "Case #{$intCi}: {$intRs}\n";
}
