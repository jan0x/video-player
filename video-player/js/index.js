const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

function handleBackward(){
    $video.currentTime = $video.currentTime -10
    console.log('hiciste click atras 10 secs' + $video.currentTime)
}
function handleForward(){
    $video.currentTime = $video.currentTime +10
    console.log('hiciste click adelante 10 secs'+$video.currentTime)
}
function handlePlay(){
  $video.play()
  $play.hidden = true
  $pause.hidden = false
  console.log('hiciste click play')
}
function handlePause(){
  $video.pause()
  $pause.hidden = true
  $play.hidden = false
  console.log('hiciste click en pausa')
}
const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
function handleLoaded(){
    $progress.max = $video.duration
        console.log('ha cargado el video', $video.duration)
    }
$video.addEventListener('timeupdate', handleTimeUpdate)
function handleTimeUpdate(){
    $progress.value = $video.currentTime
         console.log('tiempo actual', $video.currentTime)
    }
$progress.addEventListener('input', handleInput)
function handleInput(){
    $video.currentTime = $progress.value
        // console.log($progress.value)
}