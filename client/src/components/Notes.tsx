import "./notes.css";

const Notes = () => {
    return (
        <div className="notes">

            <div className="ulist">
                <header>
                    <h2>Notas Autoadesivas</h2>
                    <input
                        type="search" name=""
                        id="" placeholder="Pesquisar..." />
                </header>

                <ul>
                    <li className="cop">
                        <p>
                            Estudar Lorem ipsum dolor sit amet consectetur adipisicing elit
                            Maxime dicta, voluptatibus obcaecati nulla consectetur
                            molestiae fugit deserunt doloremque eaque impedit nesciunt
                            magni tempore aut repellat asperiores dolorum aspernatur quos consequuntur.
                        </p>
                    </li>
                </ul>
            </div>

            <div className="texts">
                <header>
                    <h2>TEXTAO</h2>
                </header>
                <section>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                        veritatis voluptate fugit numquam. Obcaecati reprehenderit, harum
                        quas sapiente optio iste ducimus consequatur eos ex impedit eaque
                        quisquam exercitationem officiis voluptatem!
                    </p>
                </section>
            </div>

        </div >
    );
};

export default Notes;
