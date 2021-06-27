import React, {useState} from "react";
import {useForm} from "react-hook-form";
import './Form.css';
import {company, lectures} from "../../data/data";

export default function Form(props) {
    const [listener, setListener] = useState(false)
    const [personaldata, setPersonalData] = useState(false)
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>

            {/* ФИО */}
            <label className="form__label required">
                <input
                    className="form__input"
                    type="text"
                    placeholder="Фамилия"
                    required {...register("Фамилия")}
                />
            </label>
            <label className="form__label required">
                <input
                    className="form__input"
                    type="text"
                    placeholder="Имя"
                    required {...register("Имя")}
                />
            </label>
            <label className="form__label required">
                <input
                    className="form__input"
                    type="text"
                    placeholder="Отчество"
                    name="middleName"
                    required {...register("Отчество")}
                />
            </label>

            {/* Компания */}
            <label className="form__label required form__label_max ">
                <input
                    className="form__input form__datalist"
                    list="company"
                    placeholder="Компания"
                    required {...register("Компания")}
                />
                <datalist id="company">
                    {company.map((name, index) => (<option value={name} key={index}></option>))}
                </datalist>
                <button className="form__btn-add-company" type="button" onClick={() => alert("Форма добавления будет доступна позже")}>+ добавить компанию</button>
            </label>
            <label className="form__label required form__label_max ">
                <input
                    className="form__input"
                    type="text"
                    placeholder="Должность"
                    required {...register("Должность")}
                />
            </label>

            {/* Роль */}
            <div className="role">
                <p className="role__text">Участвую в докладе как:</p>
                <div className="form__participation">
                    <div className="form_radio_btn">
                        <input
                            className="form_radio_btn"
                            id="speaker"
                            type="radio"
                            name="role-options"
                            value="Докладчик/соавтор"
                            {...register("Роль")}
                        />
                        <label htmlFor="speaker" onClick={() => setListener(true)}>Докладчик/соавтор</label>
                    </div>
                    <div className="form_radio_btn">
                        <input
                            className="form_radio_btn"
                            id="listener"
                            type="radio"
                            name="role-options"
                            value="Слушатель"
                            defaultChecked
                            {...register("Роль")}
                        />
                        <label htmlFor="listener" onClick={() => setListener(false)}>Слушатель</label>
                    </div>
                </div>
            </div>

            {/* Доклад */}
            {listener ?
                <>
                    <label className="form__label required form__label_max ">
                        <input
                            className="form__input form__datalist"
                            list="lecture"
                            placeholder="Направление доклада"
                            required {...register("Направление доклада")}
                        />
                        <datalist id="lecture">
                            {lectures.map((lecture, index) => (<option value={lecture} key={index}></option>))}
                        </datalist>
                    </label>

                    <div className="role__choice form__label_max">
                        <div className="form_radio_btn">
                            <input
                                className="form_radio_btn"
                                id="author"
                                type="radio"
                                name="author"
                                value="Докладчик"
                                defaultChecked
                                {...register ("Авторство")}
                            />
                            <label htmlFor="author">Докладчик</label>
                        </div>
                        <div className="form_radio_btn">
                            <input
                                className="form_radio_btn"
                                id="co-author"
                                type="radio"
                                name="author"
                                value="Соавтор"
                                {...register("Авторство")}
                            />
                            <label htmlFor="co-author">Соавтор</label>
                        </div>
                    </div>

                    <label className="form__label required form__label_max ">
                        <input
                            className="form__input"
                            type="text"
                            placeholder="Тема доклада"
                            {...register("Тема доклада")}
                        />
                    </label>

                    <label className="form__label form__label_max ">
                        <textarea
                            className="form__input form__input_summary "
                            placeholder="Краткое содержание доклада"
                            {...register("Краткое содержание доклада")}
                        />
                    </label>
                </> : null
            }

            {/* Участие */}
            <div className="role">
                <p className="role__text">Форма участия:</p>
                <div className="form__participation">
                    <div className="form_radio_btn">
                        <input
                            className="form_radio_btn"
                            id="intramural"
                            type="radio"
                            name="participation"
                            defaultChecked
                            value="Очная"
                            {...register("Форма участия")}

                        />
                        <label htmlFor="intramural">Очная</label>
                    </div>
                    <div className="form_radio_btn">
                        <input
                            className="form_radio_btn"
                            id="extramural"
                            type="radio"
                            name="participation"
                            value="Заочная"
                            {...register("Форма участия")}
                        />
                        <label htmlFor="extramural">Заочная (ВКС)</label>
                    </div>
                </div>
            </div>

            {/* Информация для связи */}
            <p className="form__info">Информация для связи:</p>
            <label className="form__label required">
                <input
                    className="form__input"
                    type="email"
                    placeholder="Адрес электронной почты"
                    required {...register("email")}
                />
            </label>
            <label className="form__label required">
                <input
                    className="form__input"
                    type="tel" placeholder="Рабочий телефон"
                    required {...register("office-phone")}
                />
            </label>
            <label className="form__label required">
                <input
                    className="form__input"
                    type="tel"
                    placeholder="Сотовый телефон"
                    required {...register("mobile-phone")}
                />
            </label>

            <div className="bottom-info">
                <p>Остались вопросы? Напиши нам: <a
                    href="mailto:seminar@igirgi.su?subject=Вопросы по семинару">seminar@igirgi.su</a></p>
                <div className="required">
                    <input
                        type="checkbox"
                        name="personal-data"
                        required
                        onClick={()=> setPersonalData(!personaldata)}
                    />
                    я согласен на <span onClick={props.openModal}>обработку персональных данных</span>
                </div>
            </div>

            <div className="form__submit">
                <input className="form__submit_btn" type="submit" value="Отправить заявку" disabled={!personaldata}/>
            </div>
        </form>

    );
}