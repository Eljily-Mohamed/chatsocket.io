import loveIcon from  '../assest/love.png';

// creation de notre navbar for this project 

const  Nvbar =  () => {
      return (
         <nav className="nav-div"> 
            <div className="logo-div">
               <p>Chat<span><img stc = {loveIcon}/></span></p>
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
