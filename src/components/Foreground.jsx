import React, { useRef, useState } from 'react';
import Card from './Card';
import { ImGithub } from "react-icons/im";

function Foreground() {

    const ref = useRef(null);

    const [red, setRed] = useState(false);

    const redChange = () => {
        console.log(`changed to red! ${red}`);
        setRed(true);
        setGreen(false);
        setAdd(false);
    }

    const [green, setGreen] = useState(false);

    const greenChange = () => {
        console.log(`changed to red! ${green}`);
        setGreen(true);
        setRed(false);
        setAdd(false);
    }

    const [add, setAdd] = useState(false);
    const newChange = () => {
        console.log(`changed to red! ${add}`);
        setAdd(true);
    }

    const shoot = () => {
        window.location.reload();
        console.log(`changed to red! ${add}`);
    }

    const Opengit = () => {
        window.open('https://github.com/react-icons/react-icons', '_blank').focus();
    }

    const data = [{
        desc: "One day, you'll leave this world behind So live a life you will remember.",
        filesize: ".9mb",
        iconFile: false,
        close: false,
        tag: {
            isOpen: false,
            tagTitle: "Download Now",
            tagColor: "green"
        },
    },
    {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        filesize: " .21mb",
        iconFile: true,
        close: true,
        tag: {
            isOpen: true,
            tagTitle: "Download Now",
            tagColor: "rose"
        },
    },
    {
        desc: "The secret wish list by Preeti Shenoy .epub",
        filesize: "69mb",
        iconFile: true,
        close: false,
        tag: {
            isOpen: true,
            tagTitle: "Download Now",
            tagColor: "emerald"
        },
    }
    ];

    return (

        <div ref={ref} className='relative fixed top-0 left-0 w-full h-full z-[3]  '>
            <div className='w-full p-5 flex justify-between'>
                <div>
                <button className='w-[17px] h-[17px] bg-amber-400 rounded-full mr-[5px]' onClick={shoot}></button>
                <button className='w-[17px] h-[17px] bg-red-600 rounded-full mr-[5px]' onClick={redChange}></button>
                <button className='w-[17px] h-[17px] bg-green-600 rounded-full mr-[5px]' onClick={greenChange}></button>
                <button className='w-[17px] h-[17px] bg-sky-500 rounded-full mr-[5px]' onClick={newChange} ></button>
                </div>

                <span onClick={Opengit}><ImGithub color='#3f3f46' size='1.6em' /></span>
            </div>

            <div className='relative flex gap-2 flex-wrap pl-5 pt-[7vh]  '>
                {data.map((item,index) => (
                    <Card data={item} reference={ref} redValue={red} greenValue={green} addValue={add}/>
                ))}
            </div>
        </div>

    )
}


export default Foreground