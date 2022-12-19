import Header from "../components/header/Header";


const Home = () => {

    const fontSize ={
        fontSize: '24px'
    }

  return ( 

    <>
    <Header />
    
    <main className="section">
        <div className="container">

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p><strong style={fontSize}>JavaScript</strong>, <strong style={fontSize}>TypeScript</strong>, <strong style={fontSize}>ReactJS</strong>, Angular, Redux, <strong style={fontSize}>HTML</strong>, <strong style={fontSize}>CSS</strong>, <strong style={fontSize}>TailwindCSS</strong>, <strong style={fontSize}>NPM</strong>, BootStrap, MaterialUI, Yarn, StyledComponents</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                    </li>
                </ul>

        </div>
    </main>
    </>

   );
}
 
export default Home;