import React from 'react';
import './Complete.css';
function Complete(props)
{
    const Additems=props.datacom.map(item=>{
        return(
           <div key={item.ti} className="angle">
                <div className='uppi2'>
                <h3 className='arana'>Successfully completed</h3>
                <p>{item[0].name}</p>
                <button onClick={()=>props.deletdata(item[0].name)} className='red-col'>Delete</button>
                </div>
            </div>

        );
       
    })
    return(
        <div className='uppi'>
            {Additems}
        </div>
        );
}
export default Complete;