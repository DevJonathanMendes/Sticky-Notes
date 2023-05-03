import { IColors } from "../../interfaces/IColors";

import "./Colors.css";

const Colors = (props: IColors) => {
    const { note, style, onClick } = props;
    const colors = ["yellow", "red", "green", "blue", "orange"];

    return note ?
        <div className="icons-color">{colors.map((color, index) =>
            color != note.color ?
                <button
                    key={index}
                    className={`${style} ${color}`}
                    onClick={() => onClick(color, note.id)}
                /> : null
        )
        }</div>
        :
        <div className="icons-color">{colors.map((color, index) =>
            <button
                key={index}
                className={`${style} ${color}`}
                onClick={() => onClick(color)}
            />)
        }</div>
};

export default Colors;
