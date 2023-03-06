import { IColors } from "../../interfaces/IColors";
import "./Colors.css";

const Colors = (props: IColors) => {
    const { onClick } = props;

    return (
        <div className="icons-color">
            <button className="yellow" onClick={() => onClick("yellow")} />
            <button className="red" onClick={() => onClick("red")} />
            <button className="green" onClick={() => onClick("green")} />
            <button className="blue" onClick={() => onClick("blue")} />
            <button className="orange" onClick={() => onClick("orange")} />
        </div>
    );
};

export default Colors;
