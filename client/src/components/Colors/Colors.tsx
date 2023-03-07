import { IColors } from "../../interfaces/IColors";
import "./Colors.css";

const Colors = (props: IColors) => {
    const { noteId, style, onClick } = props;

    const id = noteId || null;

    return (
        <div className="icons-color">
            <button className={`${style} yellow`} onClick={() => onClick("yellow", id)} />
            <button className={`${style} red`} onClick={() => onClick("red", id)} />
            <button className={`${style} green`} onClick={() => onClick("green", id)} />
            <button className={`${style} blue`} onClick={() => onClick("blue", id)} />
            <button className={`${style} orange`} onClick={() => onClick("orange", id)} />
        </div>
    );
};

export default Colors;
