/*
VolumeMeter component:
- takes a Uint8Array as input
- Computes RMS value and emit a Volume Event with data
- Plots it on Canvas
*/
import {useRef,useState, useEffect} from 'react'

type AudioSample = {
    dataArray: Uint8Array
}
export type {AudioSample};

function VolumeMeter({dataArray}:AudioSample) {
    const canvasRef = useRef<HTMLCanvasElement>(null)  
    
    const [volume,setVolume]=useState([])
    
    useEffect(()=>{
        const bufferLength = dataArray.length;
        function sumOfSqr(sum:number,d:number) {
            const abs = Math.abs(d-128);
            sum = sum + abs*abs
            return sum;
        }
        const _sum = dataArray.reduce(sumOfSqr,0)
        const rms = Math.sqrt(_sum/bufferLength)
        const vol = volume;
        vol.push(rms);
        setVolume(vol);
        // plot it
        const canvasCtx = canvasRef.current?.getContext("2d");
        const sliceWidth = (canvasRef?.current?.width * 1.0) / bufferLength;
        canvasCtx.lineWidth = 1;
        canvasCtx.strokeStyle = "rgb(255 0 0)";
        canvasCtx.beginPath();
   
        let x = 0;
        let sum=0;
        for (let i = 0; i < bufferLength; i++) {
            const v = dataArray[i] / 128.0;
            const y = (v * canvasRef?.current.height) / 2;
            const absval = Math.abs(dataArray[i]-128)
            sum = sum+ absval*absval; // for rms calc
            if (i === 0) {
                canvasCtx?.moveTo(x, y);
                } else {
                canvasCtx?.lineTo(x, y);
            }

            x += sliceWidth;
        }

        canvasCtx?.clearRect(0,0,canvasRef?.current?.width, canvasRef?.current?.height);
        canvasCtx?.lineTo(canvasRef?.current?.width, canvasRef?.current?.height / 2);
        canvasCtx?.stroke(); 
        // emit event with {rms: rms, tstamp:performance.now()}
        console.log("Volume Event :",{ volume : rms, tstamp:performance.now()})
    },[dataArray])
    
    return (
    <canvas ref={canvasRef}></canvas>
  )
}


export default VolumeMeter