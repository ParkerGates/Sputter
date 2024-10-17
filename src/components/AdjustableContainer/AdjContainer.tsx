import { useState } from 'react';
import "./AdjContainer.css";

type xy = "x"|"y"

interface AdjState {
    selected: null|xy
    x: string;
    y: string;
}

const AdjContainer = () => {
    const [mLocation, setMLocation] = useState(0);
    const [adjCont, setAdjCont] = useState<AdjState>({selected:null, x:"70vw",y:"50vh"});

    const adjContMouseDown = (e, axis: xy) => {
        e.preventDefault();
        console.log("mouse down");
        setAdjCont({...adjCont, selected:"x"})

        return () => {
            console.log("done");
        }
    }

    const getMouseLocation = (e:any) => {
        if (adjCont.selected === "x") {
            console.log("x");
        }
        else if (adjCont.selected === "y") {
            console.log("y")
        }
    }

    const adjContMouseUp = (e: any) => {
        console.log("mouse up");
        setAdjCont({...adjCont, selected:null})
    }

    return (
        <div className='adj_cont' onMouseMove={getMouseLocation} onMouseUp={adjContMouseUp}>
            <div className='adj_cont_left' style={{width:adjCont.x}}>
                <div className='adj_cont_left_content'></div>
                <div className='adj_cont_resize_hor' onMouseDown={(e)=>{adjContMouseDown(e, "x")}}></div>
            </div>
            <div className='adj_cont_right'>
                <div className='adj_cont_right_g'>
                    <div className='adj_cont_right_top'></div>
                    <div className='adj_cont_resize_vert'></div>
                    <div className='adj_cont_right_bot'></div>
                </div>
            </div>
        </div>
    );
}

export default AdjContainer;