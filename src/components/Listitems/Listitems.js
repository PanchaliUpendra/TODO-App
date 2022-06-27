import React from 'react';
import './Listitems.css';
function Listitems(props){
   
    const thingsElements=props.datatask.map((sap)=>{
      return(
        <div className='item' key={sap.ti}>
                <div className='wrapper'>
                    <div className='pract2' onClick={()=>props.comdata(sap.name)}><strong>Done</strong></div>
                <div className='top'>
                    <div><strong>{sap.name}</strong></div>
                    <div>{`${sap.da} || ${sap.ti}`}</div>
                </div>
                <i className='trash  icon'
                style={{color:"rgb(18, 26, 175)",marginTop:"-30px"}}
                onClick={()=>props.newList(sap.ti)}></i>
                </div>
                </div>
         );
    })
    return(
        <div className='jithu'>
            {thingsElements}
        </div>
    );
}
export default Listitems;