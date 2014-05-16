/**
 * @author iMac 9
 */
window.onload = function() {
	var vid = document.getElementById('vid')
}
$(document).ready(function() {
	
if (Modernizr.video) {
  if (Modernizr.video.webm) {
    // try WebM
    // $('video').attr('type').val('');
  } else if (Modernizr.video.ogg) {
    // try Ogg Theora + Vorbis in an Ogg container
       // $('video').attr('type').val('');
  } else if (Modernizr.video.h264){
    // try H.264 video + AAC audio in an MP4 container
       // $('video').attr('type').val('');
  }
}

	var mivideo = $('video')[0];
	
	// ejecuto el principio
	
	// $video.on('canPlay', function(){
		// $volumen.vol.volumen(0);
		// $progress.max('max', video.duration);
		// $progress.val(0);
	// })

	$('#iniciar').on('click', function(e) {
		e.preventDefault();
		if(mivideo.paused) mivideo.play();
		else mivideo.pause();

	});

	$('#Pausa').on('click', function(e) {
		e.preventDefault();
		mivideo.pause();

	});

	$('#Parar').on('click', function(e) {
		e.preventDefault();
		mivideo.currentTime = 0;
		mivideo.pause();
	});

	$('#Avanzar').on('click', function(e) {
		e.preventDefault();
		mivideo.currentTime = mivideo.currentTime + 10;
	});

	$('#Retroceder').on('click', function(e) {
		e.preventDefault();
		mivideo.currentTime = mivideo.currentTime - 10;
	});

	$('#Inicio').on('click', function(e) {
		e.preventDefault();
		mivideo.currentTime = 0;

	});

	$('#Fin').on('click', function(e) {
		e.preventDefault();
		mivideo.currentTime = mivideo.duration;
	});

	$('#PantallaCompleta').on('click', function(e) {
		console.log("pantalla completa");
		e.preventDefault();
		if(mivideo.requestFullScreen){
			//nativo
		}
		else if(mivideo.webkitRequestFullScreen){
			mivideo.webkitRequestFullscreen();
		}
		else if(mivideo.mozRequestFullScreen){
			mivideo.mozRequestFullscreen();
		}
	});

	$('#rango').on('change', function(e) {
		e.preventDefault();
		mivideo.volume = ($(this).val() / 100);
	});
 
	var $progress = $("progress").attr('max', mivideo.duration);
	 $('video').on('timeupdate', function(e) {
		$progress.attr('value',mivideo.currentTime);
	});


});

