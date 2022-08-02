import React from 'react'

function DesktopIcon({ label, imgSrc, className }) {
    return (
        <div className={['text-center', className].join(' ')}>
            <img className="h-16 w-24" src={imgSrc} alt="" />
            <h4 className="text-lg text-white">{label}</h4>
        </div>
    )
}

export default DesktopIcon
