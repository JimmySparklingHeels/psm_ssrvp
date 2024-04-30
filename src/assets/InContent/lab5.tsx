import * as React from 'react'
import {useForm} from 'react-hook-form'
import '../stuff.css'

const Lab5 = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isRegistered, setIsRegistered] = React.useState(false);

    const onSubmit = React.useCallback((data) => {
        console.log(data);
        // Здесь логика для отправки данных на сервер или их обработки

        setIsRegistered(true);
        reset();
    }, [reset]);

    const handleReset = React.useCallback(() => {
        reset();
    }, [reset]);

    return (
        <div className="registerbox">
            <h2>Форма регистрации</h2>
            {isRegistered && <p>Пользователь успешно зарегистрирован!</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h4>Имя</h4>
                    <input type="text" {...register("firstName", { required: true })} />
                    {errors.firstName && <div>Это поле обязательно</div>}
                </div>
                <div>
                    <h4>Фамилия</h4>
                    <input type="text" {...register("lastName", { required: true })} />
                    {errors.lastName && <div>Это поле обязательно</div>}
                </div>
                <div>
                    <h4>Email</h4>
                    <input type="email" {...register("email", { required: true })} />
                    {errors.email && <div>Это поле обязательно</div>}
                </div>
                <br></br>
                <button type="submit">Зарегистрироваться</button>
                <button type="button" onClick={handleReset}>Очистить</button>
            </form>
        </div>
    );
};

export default Lab5;