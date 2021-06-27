import './App.css';
import Header from "../Header/Header";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";
import {useState, useEffect, useCallback} from "react";

function App() {

    const [modalActive, setModalActive] = useState(false);

    const openModal = () => {
        setModalActive(true);
    };

    const closeModal = () => {
        setModalActive(false);
    };

    useEffect(() => {
        window.addEventListener('keyup', (e) => {
            if (e.key === 'Escape') {
                closeModal()
            }
        });
    }, [closeModal]);

    const handleOverlayClose = useCallback((e) => {
        if (e.target.classList.contains('modal')) {
            closeModal();
        }
    }, [closeModal]);

    return (
        <div className="app">
            <Header/>
            <Form openModal={openModal}/>
            <Modal onOverlayAndEscClick={handleOverlayClose}
                   closeModal={closeModal}
                   openModal={modalActive}/>
        </div>
    );
}

export default App;
