var userTwitter
var userTezos
var userIP
var socialscore

var q01 = 0
var q02 = 0
var q03 = 0
var q04 = 0
var q05 = 0
var q06 = 0
var q07 = 0
var q08 = 0
var q09 = 0
var q10 = 0

function socialScoreSum(){
    socialscore = q01 + q02 + q03 + q04 + q05 + q06 + q07 + q08 + q09 + q10
}
function consoleLog(){
    console.log("User Twitter = " + userTwitter + " | User Tezos = " + userTezos + " | social score = " + socialscore);
}
function selectedAnswer(questionNumber, qyn){
    $(questionNumber).find('.btn').removeClass('selectedAnswer');
    $(questionNumber).find(qyn).addClass('selectedAnswer');
}

$('.btn_start').click(function(){
    $(this).fadeOut(100);
    $('#start_test').addClass('test_started');
    $('.test_userinfo').fadeIn(600); 
});

$('.btn_sendinfo').click(function(){
    socialscore = 0;
    userTwitter = $('#usertwitter').val();
    userTezos = $('#usertezos').val();

    $('.test').fadeIn();
    consoleLog();
});

$('#q01 .btn_yes').click(function(){
    q01 = 98;
    selectedAnswer('#q01', '.btn_yes');
    socialScoreSum();
    consoleLog();
});

$('#q01 .btn_no').click(function(){
    q01 = 0;
    selectedAnswer('#q01', '.btn_no');
    socialScoreSum();
    consoleLog();
});

$('#q02 .btn_yes').click(function(){
    q02 = 102;
    selectedAnswer('#q02', '.btn_yes');
    socialScoreSum()
    consoleLog();
});

$('#q02 .btn_no').click(function(){
    q02 = 0;
    selectedAnswer('#q02', '.btn_no');
    socialScoreSum()
    consoleLog();
});

$('#q03 .btn_yes').click(function(){
    q03 = 97;
    selectedAnswer('#q03', '.btn_yes');
    socialScoreSum()
    consoleLog();
});
$('#q03 .btn_no').click(function(){
    q03 = 0;
    selectedAnswer('#q03', '.btn_no');
    socialScoreSum()
    consoleLog();
});

$('#q04 .btn_yes').click(function(){
    q04 = 103;
    selectedAnswer('#q04', '.btn_yes');
    socialScoreSum()
    consoleLog();
});
$('#q04 .btn_no').click(function(){
    q04 = 0;
    selectedAnswer('#q04', '.btn_no');
    socialScoreSum()
    consoleLog();
});

$('#q05 .btn_yes').click(function(){
    q05 = 105;
    selectedAnswer('#q05', '.btn_yes');
    socialScoreSum()
    consoleLog();
});
$('#q05 .btn_no').click(function(){
    q05 = 0;
    selectedAnswer('#q05', '.btn_no');
    socialScoreSum()
    consoleLog();
});

$('#q06 .btn_yes').click(function(){
    q06 = 95;
    selectedAnswer('#q06', '.btn_yes');
    socialScoreSum()
    consoleLog();
});
$('#q06 .btn_no').click(function(){
    q06 = 0;
    selectedAnswer('#q06', '.btn_no');
    socialScoreSum()
    consoleLog();
});

$('#q07 .btn_yes').click(function(){
    q07 = 92;
    selectedAnswer('#q07', '.btn_yes');
    socialScoreSum()
    consoleLog();
});
$('#q07 .btn_no').click(function(){
    q07 = 0;
    selectedAnswer('#q07', '.btn_no');
    socialScoreSum()
    consoleLog();
});

$('#q08 .btn_yes').click(function(){
    q08 = 0;
    selectedAnswer('#q08', '.btn_yes');
    socialScoreSum()
    consoleLog();
});
$('#q08 .btn_no').click(function(){
    q08 = 108;
    selectedAnswer('#q08', '.btn_no');
    socialScoreSum()
    consoleLog();
});

$('#q09 .btn_yes').click(function(){
    q09 = 98;
    selectedAnswer('#q09', '.btn_yes');
    socialScoreSum()
    consoleLog();
});
$('#q09 .btn_no').click(function(){
    q09 = 0;
    selectedAnswer('#q09', '.btn_no');
    socialScoreSum()
    consoleLog();
});

$('#q10 .btn_yes').click(function(){
    q10 = 102;
    selectedAnswer('#q10', '.btn_yes');
    socialScoreSum()
    consoleLog();
});
$('#q10 .btn_no').click(function(){
    q10 = 0;
    selectedAnswer('#q10', '.btn_no');
    socialScoreSum()
    consoleLog();
});
var foregroundimg


// fix socialscorewidth with scale to fit body width
function setSocialScoreScale(){
    var lightboxW = $('.lightbox').width();
    var socialdivwidth = $('.socialscore').width();
    var findScale = lightboxW / (socialdivwidth + 60);
    
    $('.socialscore').css('transform', 'scale(' + findScale + ' )');

}

$('#submitTest').click(function(){
    window.scrollTo(0,0);

    $('.lightbox').fadeIn();

    $('.socialscore').fadeIn();
    $('.yoursocialscore').text(socialscore);
    $('#socialscorenumber span').text(socialscore);
 
    if(socialscore >= 300 && socialscore <= 499 ){
        foregroundimg = "img/foreground_300.png";
        $('#foreground').attr("src", foregroundimg);
        console.log(foregroundimg)
    }else if(socialscore >= 500){
        foregroundimg = "img/foreground_500.png";
        $('#foreground').attr("src", foregroundimg);
    }else {
        foregroundimg = "img/foreground_0.png";
        $('#foreground').attr("src", foregroundimg);
    }


    function toDataURL(src, callback){
        var image = new Image();
        image.crossOrigin = 'Anonymous';
        image.onload = function(){
           var canvas = document.createElement('canvas');
           var context = canvas.getContext('2d');
           canvas.height = this.naturalHeight;
           canvas.width = this.naturalWidth;
           context.drawImage(this, 0, 0);
           var dataURL = canvas.toDataURL('image/png');
           callback(dataURL);
        };
        image.src = src;
     }


     toDataURL(foregroundimg, function(dataURL){
       // alert(dataURL);
     })
     

     setSocialScoreScale()

}); // submit test



$( window ).on( "resize", function() {

   setSocialScoreScale()
  } );

$('.close').click(function(){
    $('.lightbox').fadeOut();

    $('.socialscore').fadeOut();

});


// upload profile pic
$(document).ready(function(){
	$pic = $('<img id = "image_avatar" />');
	$("#photo").change(function(){
		var files = !!this.files ? this.files : [];
		if(!files.length || !window.FileReader){
			$("#image_avatar").remove();
			$lbl.appendTo("#preview");
		}
		if(/^image/.test(files[0].type)){
			var reader = new FileReader();
			reader.readAsDataURL(files[0]);
			reader.onloadend = function(){
				$pic.appendTo("#preview");
				$("#image_avatar").attr("src", this.result);
			} 
	}});

    
    const captureButton = document.getElementById('descargar-avatar');
    captureButton.addEventListener('click', function() {
    const options = {
        width: 500,
        height: 500,
    };

    // Jack : takeover from here 
    console.log('process image merging here.')

    // get canvas context :
    const canvas = document.getElementById("offScreenCanvas")
    const canvasCtx = canvas.getContext("2d")
    // define size :
    canvas.width = 500
    canvas.height = 500
    // get images to compile :
    const ImgUserProfile = document.getElementById(`image_avatar`)
    const ImgForeground = document.getElementById(`foreground`)
    // compute center-square to crop :
    let dX = ImgUserProfile.naturalWidth
    let dY = ImgUserProfile.naturalHeight
    let ratio = dX/dY
    const sX = ratio > 1 ? 1 * (dX - dY)/2 : 0
    const sY = ratio < 1 ? 1 * (dY - dX)/2 : 0
    const sW = ratio > 1 ? dX - sX*2 : dX
    const sH = ratio < 1 ? dY - sY*2 : dY
    // drawing cropped user profile :
    canvasCtx.drawImage(ImgUserProfile, 
        sX, sY, sW, sH, 
        0, 0, canvas.width, canvas.height)
    // draw foreground over :
    canvasCtx.drawImage(ImgForeground, 0, 0,  canvas.width, canvas.height)
    // setup font to draw :
    canvasCtx.font = "24px Kremlin"
    canvasCtx.fillStyle = "#fff"
    // align number :
    const alignFontX = 24 + (socialscore === 0 ? 15 : (socialscore < 100 ? 7 : (socialscore < 200 ? 3 : -2 )))
    const alignFontY = canvas.height - 34
    // draw social score :
    canvasCtx.fillText(socialscore, alignFontX, alignFontY)
    // show canvas :
    const HTMLcanvas = document.getElementById(`canvas`)
    HTMLcanvas.style.opacity = 1
    HTMLcanvas.style.position = `static`
    
    // assign to link DOWNLOAD :
    const link = document.createElement('a')
    link.href = canvas.toDataURL()
    link.download = 'gigacorp_profile.png'
    
    // trigger :
    link.click()

    });
});



