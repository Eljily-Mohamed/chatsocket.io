import loveIcon from  '../assest/love.png';

// creation de notre navbar for this project 

const  Nvbar =  () => {
      return (
         <nav className='nav-div'> 
            <div className="logo-div">
               <p><span>Chat</span><img src={loveIcon}/><span>App</span></p>
            </div>
            <div className="links-div"> 
               <ul> 
               <li>Home</li>
               <li>login</li>
               </ul>
            </div>
         </nav>
      )
}

export default Nvbar;
