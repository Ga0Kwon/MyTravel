import React from 'react';
import Menu from './Menu/Menu'

import HeaderImg from '../component/img/HeaderLogo.jpg'

export default function Header() {
  return (<>
        <div style={{ display: 'flex', justifyContent: 'space-between' , backgroundSize: 'cover' , width : '100%' , height : '50px'}}>
           <img src={HeaderImg} alt="main logo" class="main-logo" />
            <div style={{ width: '100%' , display: 'flex' , justifyContent: 'right'}}>
                <Menu />
            </div>
        </div>
     </>
  );
}