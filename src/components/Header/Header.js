import './Header.css';
import {useState, useEffect} from "react";
import logo from "./../../images/logo.png";

function Header() {

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`09/29/${year}`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="логотип Роснефть"/>
            <div className="timer">
                <h2 className="timer__title">До начала семинара осталось:</h2>
                <div className="timer__rest">
                    <div className="timer__item">{timeLeft.days} <span>дней</span></div>
                    <div className="timer__item">{timeLeft.hours} <span>часов</span></div>
                    <div className="timer__item">{timeLeft.minutes} <span>минут</span></div>
                    <div className="timer__item">{timeLeft.seconds} <span>секунд</span></div>
                </div>
                <p className="timer__info">Ждем вас на семинаре с 29 сентября по 1 октября 2021 года</p>
            </div>
        </header>
    );
}

export default Header;
