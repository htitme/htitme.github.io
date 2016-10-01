var fs = require("fs");


for(var j=1;j<=100;j++){
	var fd = fs.openSync('hmtl'+j+'.html','w');


var data = "<!DOCTYPE html>"+"\n"+
'<html lang="en">'+"\n"+
'<head>'+"\n"+
	'<meta charset="UTF-8">'+"\n"+
	'<meta http-equiv="refresh" content = "1">'+"\n"+ 
	'<title>Test Page</title>'+"\n"+
	
'</head>'+"\n"+
'<body>'+"\n";


	fs.writeSync(fd,data);  	data = "";

	for(var i=j;i>0;i--){
		data += "<input type='text' value = '"+'=?shadowcrypt-977610ce582578c28dd4a1c9135ef175ba39d2238828d2e3b63915000bed4d83?C5kdFyWrFE/CvCjTOro5R5A8QwIovfnxzb8epBI=??='+"'>";
		data += "\n";
	}

	fs.writeSync(fd,data);     data = "";

	data = '<span id="sta"></span>	<span id="res"></span>';

	fs.writeSync(fd,data);     data = "";

	data = "<script>"+"\n"+


	'function error(e){'+"\n"+
		'alert(e.message);'+"\n"+
		'alert("error");'+"\n"+
	'}'+"\n"+
	'function onInitFs(fs){'+"\n"+
		'fs.root.getFile("log-1.txt",{create:true,exclusive:false},function(fileEntry){'+"\n"+
				'fileEntry.createWriter(function(fileWriter){'+"\n"+
					'fileWriter.truncate(0);'+"\n"+
					'if(fileWriter.length != 0)'+"\n"+
						'fileWriter.seek(fileWriter.length);'+"\n"+
	
					'fileWriter.onwriteend = function(e){'+"\n"+
						'console.log("Write completed.");'+"\n"+
					'};'+"\n"+
					'fileWriter.onerror = function(e){'+"\n"+
						'console.log("Write failed:" + e.toString());'+"\n"+
					'};'+"\n"+
	
					
						'var res = document.getElementById("res");'+"\n"+
						'var b = res.innerText;'+"\n"+

						'var bb = new Blob([b+"\\n"]);'+"\n"+
						
						'fileWriter.write(bb);'+"\n"+
					
				'},error);'+"\n"+
			
			'},error);'+"\n"+
		'fs.root.getFile("log-1.txt",{},function(fileEntry){'+"\n"+
			'fileEntry.file(function(file){'+"\n"+
				'var reader = new FileReader();'+"\n"+
				'var url = window.URL.createObjectURL(file);'+"\n"+
				'//window.open(url,"_blank");'+"\n"+
				'reader.onloadend = function(e){'+"\n"+
				'	console.log("reader content is :" + this.result);'+"\n"+
				'};'+"\n"+
				'reader.readAsText(file);'+"\n"+
			'},error);'+"\n"+
		'},error);'+"\n"+
		
	'}'+"\n"+
	'navigator.webkitPersistentStorage.requestQuota(1024,function(grantedBytes){'+"\n"+
	'window.webkitRequestFileSystem(window.PERSISTENT,1024,onInitFs,error);},function(e){alert("quota error   " + e.message);});'+"\n"+	
'</script>'+"\n"+
'</body>'+"\n"+
'</html>';
fs.writeSync(fd,data);     data = "";

fs.closeSync(fd);

};