import react,{useRef,useEffect,useState} from 'react';
import Webcam from 'react-webcam';

export default function Camera() {
     
    useEffect(()=>{
        getVideo();
    },[videoRef])
    
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

    return (
            <>
            <div className='camera'>
             <video ref={videoRef}></video>
             <button>SNAP!</button>
            </div>
            <div className={'result' + (hasPhoto ? 'hasPhoto':'')}>
                <canvas ref={photoRef}></canvas>
                <button>CLOSE!</button>
            </div>
            </>
        )
}