import './Header.css'


export const Header = () => {
  return (
    <header className='Header'>
  
      <nav className='Nav'>
        
        <ul>
        <img src='./src/assets/What_2_Wear.svg'/>
          <li><a href='/'>HOME</a></li>
          <li><a href='/about'>ABOUT</a></li>
          <li><a href='/closet'>CLOSET</a></li>
          <li><a href='/myoutfit'>MYOUTFIT</a></li>
          <li><a href='trending'>TRENDING</a></li>
         
        </ul>

      </nav>
      <div className='Login'>
        <button onClick="/login">Log In</button>
       <button onClick='/register'>Sign Up</button>
        </div>
    </header>
 

  )
}
