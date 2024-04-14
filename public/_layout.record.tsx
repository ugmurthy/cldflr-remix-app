import { useState } from 'react'
import Audio from '../app/components/Audio'
import Mic from '../app/components/Mic'
import Up from '~/components/Up'
export async function loader() {
  return {}
}

function record() {
  const url="/whisper"
  
  
  return (
    <div className='container pt-32 mx-auto max-w-6xl px-4'>
    <Audio url={url}/>
    <Up isBusy={true} busy={"loading-ring text-primary"}></Up>
    </div>
  )
}

//{responseData!==null?<pre>{JSON.stringify(responseData,null,2)}</pre>:""}

export default record