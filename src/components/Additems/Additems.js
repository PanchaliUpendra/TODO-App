import React, { useEffect } from 'react';
import Listitems from '../Listitems/Listitems';
import './Additems.css';


const getLocalItems =()=>{
    let items=localStorage.getItem('dataset');
    if(items){
        return JSON.parse(localStorage.getItem('dataset'));
    }else{
        return [];
    }
}


function Additems()
{
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    var today = new Date(),

    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const [taskname,settask]=React.useState("");
    const [dataset,setdata]=React.useState(getLocalItems());

    const funchandling=(id)=>{
        const newcontact=dataset.filter((contact)=>{
            return contact.ti!==id
        });
        setdata(newcontact);
    }

   
    

    const handling=(e)=>settask(e.target.value);
    const datahandling=(e)=>{
        e.preventDefault();
        setdata(prevstate=>{
            return[...prevstate,{
                name:taskname,
                da:date,
                ti:time
            }];
        })
        settask("");
        
        
    }

    useEffect(()=>{
        localStorage.setItem('dataset',JSON.stringify(dataset));
    },[dataset]);

    return(
        <div className='add-btn'>
            <div className='items-btn'>
            <h2 className='add-head'>Add The items Here</h2>
            <div className='input-bar'>
                <form onSubmit={datahandling}>
                    <input type='text' placeholder="Enter your task" className='input2-btn'  onChange={handling} value={taskname}/>
                    <button className='but-btn' type='submit'>Add Item</button>
                </form>
            </div>
            </div>
            <h3 className='pending-btn'>Pending Task's</h3>
            <div className='datatext'>
            <Listitems datatask={dataset} newList={funchandling}/>
            </div>
            <h3 className='completed-btn'>completed Task's</h3>
        </div>
    );
}
export default Additems;