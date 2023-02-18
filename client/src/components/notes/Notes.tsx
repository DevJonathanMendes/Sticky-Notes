import "./notes.css";

const Notes = () => {
    const notes = [];

    for (let i = 0; i < 12; i++) {
        notes.push(
            <li className="notes-list-item">
                <p className="notes-list-item-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Soluta atque doloremque excepturi iste enim aliquam
                    quaerat quidem perferendis? Dolorum quis doloribus
                    provident earum deleniti facere sint! Voluptates
                    voluptatum earum aut?
                </p>
            </li>
        );
    };

    return (
        <div className="notes">
            <div className="notes-list">
                <header>
                    <h2>Notes</h2>
                    <input type="search" placeholder="Research..." />
                </header>

                <div className="notes-list-container">
                    <ul>{notes}</ul>
                </div>

            </div>
            <div className="note">
                <p className="note-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                    veritatis voluptate fugit numquam. Obcaecati reprehenderit, harum
                    quas sapiente optio iste ducimus consequatur eos ex impedit eaque
                    quisquam exercitationem officiis voluptatem!

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
                    dolorem aliquid minima fuga. Ad odio qui, necessitatibus impedit
                    vero nobis vitae autem quaerat, soluta aspernatur nihil, culpa ipsa eum porro.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                    veritatis voluptate fugit numquam. Obcaecati reprehenderit, harum
                    quas sapiente optio iste ducimus consequatur eos ex impedit eaque
                    quisquam exercitationem officiis voluptatem!

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
                    dolorem aliquid minima fuga. Ad odio qui, necessitatibus impedit
                    vero nobis vitae autem quaerat, soluta aspernatur nihil, culpa ipsa eum porro.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                    veritatis voluptate fugit numquam. Obcaecati reprehenderit, harum
                    quas sapiente optio iste ducimus consequatur eos ex impedit eaque
                    quisquam exercitationem officiis voluptatem!

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
                    dolorem aliquid minima fuga. Ad odio qui, necessitatibus impedit
                    vero nobis vitae autem quaerat, soluta aspernatur nihil, culpa ipsa eum porro.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                    veritatis voluptate fugit numquam. Obcaecati reprehenderit, harum
                    quas sapiente optio iste ducimus consequatur eos ex impedit eaque
                    quisquam exercitationem officiis voluptatem!

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
                    dolorem aliquid minima fuga. Ad odio qui, necessitatibus impedit
                    vero nobis vitae autem quaerat, soluta aspernatur nihil, culpa ipsa eum porro.
                </p>
            </div>
        </div >
    );
};

export default Notes;
