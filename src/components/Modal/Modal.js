import './Modal.css';

function Modal(props) {

    return (
        <div className={`modal ${props.openModal ? "modal__open" : ""}`} onClick={props.onOverlayAndEscClick}>
            <div className="modal__content">
                <button className="modal__close" onClick={props.closeModal}/>
                <p className="modal__info">Нажимая кнопку «отправить заявку», я даю свое согласие на обработку моих
                    персональных данных, в соответствии с <a className="modal__link" href="http://www.kremlin.ru/acts/bank/24154" target="_blank">Федеральным законом от 27.07.2006 года №152-ФЗ«О персональных
                    данных»</a>, на условиях и для целей, определенных в Согласии на обработку персональных данных</p>
            </div>
        </div>

    );
}

export default Modal;
