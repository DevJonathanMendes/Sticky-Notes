import { IColors } from "../../interfaces/IColors";
import "./Colors.css";

const Colors = (props: IColors) => {
    const { noteId, onClick } = props;

    const id = noteId || null;

    return (
        <div className="icons-color">
            <button className="yellow" onClick={() => onClick("yellow", id)} />
            <button className="red" onClick={() => onClick("red", id)} />
            <button className="green" onClick={() => onClick("green", id)} />
            <button className="blue" onClick={() => onClick("blue", id)} />
            <button className="orange" onClick={() => onClick("orange", id)} />
        </div>
    );
};

export default Colors;
