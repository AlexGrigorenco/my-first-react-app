


const Contacts = () => {
  return ( 

    <main className="section">
    <div className="container">
            <h1 className="title-1">Contacts</h1>

            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Location</h2>
                    <p>Chisinay <br />
                     Republic of Moldova</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Telegram</h2>
                    <p><a href="tel:+37369768235">+373 69768235</a></p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Email</h2>
                    <p><a href="mailto:grigoaxgrigo@gmail.com">grigoaxgrigo@gmail.com</a></p>
                </li>
            </ul>

    </div>
</main>

   );
}
 
export default Contacts;