
import { useEffect } from "react";

 import { useLocalStorage } from "../hooks/useLocalSorage";

import sun from "./../img/icons/sun.svg";
import moon from "./../img/icons/moon.svg";


const BttnDarkMode = () => {

   const [darkMode, setDarkMode] = useLocalStorage('darkMode', 'light');

  useEffect(() => {

    darkMode === 'dark' ? document.body.classList.add('dark') : document.body.classList.remove('dark')

  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((e) => {
        return e === 'dark' ? 'light' : 'dark'
      }
    )
  }

  return ( 

    <>

    
    
    <button className={darkMode === 'dark' ? 'dark-mode-btn dark-mode-btn--active' : 'dark-mode-btn'} onClick={toggleDarkMode} >
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button></>
    
   

   );
}
 
export default BttnDarkMode;