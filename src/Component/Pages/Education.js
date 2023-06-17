import React from 'react';
import petit from '../../Asset/images/codi.jpg'
import cxr from '../../Asset/images/cdv.jpg'
import rca from '../../Asset/images/coding.jpg'


function EDUCATION(props) {
    return (
        <div className='edu-content'>
      <div className='myExperience'>
     <div className='EX-content'>
    <h1 className='years'> PRIMARY, O 'LVEL  AND  A 'LEVEL</h1>
    <p className='para-exp'>My EDUCATION</p>
         </div>
       <div className='my-experience'>
        <div className='develop-img'>
        <img src={petit} alt='devolop experience' className='img_devops' />
        </div>
            <div className='exp-desc'>
                <h2 className='tit-exp'>2008-2016</h2>
                <p className='exp-develop'>Nursary & Primary school</p>
                <p className='exp-develop'>Les Petit Prince</p>
            </div>
            <div className='exp-butto'><button>CONTACT</button></div>
       </div>



       <div className='my-experience'>
        <div className='develop-img'>
        <img src={cxr} alt='devolop experience' className='img_devops' />
        </div>
            <div className='exp-desc'>
                <h2 className='tit-exp'>2017-2020</h2>
                <p className='exp-develop'>O' level</p>
                <p className='exp-develop'>College Du Christ Roi , Nyanza</p>
            </div>
            <div className='exp-butto'><button>CONTACT</button></div>
       </div>





       <div className='my-experience'>
        <div className='develop-img'>
        <img src={rca} alt='devolop experience' className='img_devops' />
        </div>
            <div className='exp-desc'>
                <h2 className='tit-exp'>2021-2024</h2>
                <p className='exp-develop'>A' level</p>
                <p className='exp-develop'>Rwanda  Coding Academy</p>
            </div>
            <div className='exp-butto'><button>CONTACT</button></div>
       </div>
       
        </div>     


        </div>
    );
}

export default EDUCATION;