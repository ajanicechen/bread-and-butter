'use client';

import Styles from "./Style.module.css";
import { useState } from 'react';

export default function InputField() {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');

    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        setError('');

        if (email.trim() === '') {
            setError('E-mail mag niet leeg zijn.');
            return;

        } else if (!emailPattern.test(email)) {
            setError('Ongeldig e-mailadres.');
            return;

        } else {
            setError('');
            event.target.submit();
        }
    };

    return (
        <form onSubmit={submitHandler} className={Styles.container} noValidate>
            <label className={Styles.label}>
                E-mail
                <input
                    className={`${Styles.field} ${error ? Styles.error : ''}`}
                    autoComplete="email"
                    type="email"
                    name="email"
                    placeholder="naam@domeinnaam.nl"
                    onChange={(e) => setEmail(e.target.value)}
                    aria-describedby={error ? 'email-error' : undefined}
                    required
                />
            </label>
            <div className={Styles['btn-wrap']}>
                <button className={Styles.button} type="submit">Sign up</button>
            </div>
            {error && (
                <span id="email-error" className={Styles['error-msg']}>
                    {error}
                </span>
            )}
        </form>
    );
}