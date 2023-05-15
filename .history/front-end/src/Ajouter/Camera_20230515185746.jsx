import react,{useRef,useEffect,useState} from 'react';
import Webcam from 'react-webcam';

function Camera() {
    const videoRef=useRef(null);
    const photoRef=useRef(null);

    const [hasPhoto,setHasPhoto]=useState(false);

    const getVideo=()=>{
        navigator.mediaDevices.getUserMedia({video:{width:1920,heigt:1080}}).
        then(stream =>{
            let video=videoRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch(err=>{
            console.log(err)
        })
}

export default Camera
