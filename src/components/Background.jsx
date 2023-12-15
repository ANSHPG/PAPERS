import React from 'react'

function Background() {
    return (
        <div>
            <>
                <div className='fixed z-[2] w-full h-screen'>
                    <div className='w-full text-zinc-700 text-[22px] flex justify-center py-[5vh] font-mono font-semibold tracking-wide'>Notes.</div>
                    <h1 className='absolute text-[11vw] text-zinc-800 leading-none tracking-tighter left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-Gilroy font-light font-mono'>Papers.</h1>
                    <span className='absolute text-[2.3vw] text-orange-800 leading-none tracking-tighter left-[54vw] top-[60.5vh] font-mono'>by anshp</span>
                </div>
            </>
        </div>
    )
}

export default Background