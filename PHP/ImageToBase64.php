<?php
$file = "image.jpg";
$info = getimagesize($file);
#echo var_dump($info);
$mime = $info["mime"];
switch($info[2]){
	case 1:
		$ext="gif";
		break;
	case 2:
		$ext="jpg";
		break;
	case 3:
		$ext="png";
		break;
	default:
		$ext="bin";
}
$body = file_get_contents($file);
$code = base64_encode($body);
?>
<img src="<?php echo "data:$mime;base64,$code"; ?>" />