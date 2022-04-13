import React from 'react'
import ReactLoading from 'react-loading';

function Loading(props) {

    return (
            <div className='w-full h-screen bg-white absolute z-10 flex items-center justify-center flex-col'>
                <ReactLoading type={"bars"} color={"blue"} height={'10%'} width={'10%'} className="mb-2 sm:mb-20"/>
                <p>{props.msg}</p>
            </div>
            
    )
}

export default Loading