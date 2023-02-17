import "./notes.css";

const Notes = () => {
    const notes = [];
    for (let i = 0; i < 12; i++) {
        notes.push(<li>
            <p className="text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Soluta atque doloremque excepturi iste enim aliquam
                quaerat quidem perferendis? Dolorum quis doloribus
                provident earum deleniti facere sint! Voluptates
                voluptatum earum aut?
            </p>
        </li>);
    };

    return (
        <div className="notes">
            <div className="ulist">
                <header>
                    <h2>Notes</h2>
                    <input type="search" placeholder="Research..." />
                </header>
                <div className="ulist2">
                    <ul>{notes}</ul>
                </div>
            </div>
            <div className="texts">
                <p className="currentText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                    veritatis voluptate fugit numquam. Obcaecati reprehenderit, harum
                    quas sapiente optio iste ducimus consequatur eos ex impedit eaque
                    quisquam exercitationem officiis voluptatem!

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi dolorem aliquid minima fuga. Ad odio qui, necessitatibus impedit vero nobis vitae autem quaerat, soluta aspernatur nihil, culpa ipsa eum porro.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                    veritatis voluptate fugit numquam. Obcaecati reprehenderit, harum
                    quas sapiente optio iste ducimus consequatur eos ex impedit eaque
                    quisquam exercitationem officiis voluptatem!

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi dolorem aliquid minima fuga. Ad odio qui, necessitatibus impedit vero nobis vitae autem quaerat, soluta aspernatur nihil, culpa ipsa eum porro.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                    veritatis voluptate fugit numquam. Obcaecati reprehenderit, harum
                    quas sapiente optio iste ducimus consequatur eos ex impedit eaque
                    quisquam exercitationem officiis voluptatem!

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi dolorem aliquid minima fuga. Ad odio qui, necessitatibus impedit vero nobis vitae autem quaerat, soluta aspernatur nihil, culpa ipsa eum porro.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                    veritatis voluptate fugit numquam. Obcaecati reprehenderit, harum
                    quas sapiente optio iste ducimus consequatur eos ex impedit eaque
                    quisquam exercitationem officiis voluptatem!

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi dolorem aliquid minima fuga. Ad odio qui, necessitatibus impedit vero nobis vitae autem quaerat, soluta aspernatur nihil, culpa ipsa eum porro.
                </p>
            </div>
        </div >
    );
};

export default Notes;
