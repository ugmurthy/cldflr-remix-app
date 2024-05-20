/*
FreqMeter component:
- takes a Uint8Array as input
- plots Freq spectrum on canvas
*/
import {useRef,useState, useEffect} from 'react'

type AudioSample = {
    dataArray: Uint8Array
}
export type {AudioSample};

function FreqMeter({dataArray}:AudioSample) {
    const canvasRef = useRef<HTMLCanvasElement>(null)  
    
    const [volume,setVolume]=useState([])
    
    useEffect(()=>{
        const bufferLength = dataArray.length;
        const canvas = canvasRef.current;
        const canvasCtx = canvas?.getContext("2d");
        const WIDTH = canvas?.width || 0;
        const HEIGHT = canvas?.height || 0;

        canvasCtx?.clearRect(0,0,WIDTH,HEIGHT);
        canvasCtx.fillStyle="rgb(0 0 0)";
        canvasCtx?.fillRect(0,0,WIDTH,HEIGHT);
        const barWidth = (WIDTH/bufferLength)*2.5;
        let barHeight;
        let x=0;

        // plot it
        for (let i=0;i<bufferLength;i++) {
            barHeight = dataArray[i]/256 *HEIGHT
            //canvasCtx.fillStyle = `rgb(${barHeight+100} 50 50)`
            const hue = i/bufferLength*360
            canvasCtx.fillStyle = `hsl(${hue} 100% 50%)`
            canvasCtx.fillRect(x,HEIGHT-barHeight,barWidth,barHeight)
            x += barWidth+1
        }
        
    },[dataArray])
    
    return (
    <canvas width="200" height="50" ref={canvasRef}></canvas>
  )
}


export default FreqMeter