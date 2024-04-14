import React from 'react'
import clsx from 'clsx'

function Cards({modelnames,title,desc,url,tagname, id}) {
const color = ['badge-primary','badge-neutral','badge-info','badge-warning']
    const  models = modelnames.map((m,i)=> <div key={i} className={clsx('badge',color[i])}>{m}</div>)
    const src =  `https://picsum.photos/id/${id}/500/250`
  return (
    <div>
 <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={src} alt={tagname} /></figure>
  <div className="card-body">
    <h2 className="card-title">
      <a href={url} className='underline'>{title}</a>
      <div className="badge badge-secondary">{tagname}</div>
    </h2>
    <p>{desc}</p>
    <div className="card-actions  justify-evenly  ">
     {models}
    </div>
    <div className='relative'>
    <a className='absolute center right-0' href={url}><button className='btn btn-xs btn-neutral'>Try me</button></a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards