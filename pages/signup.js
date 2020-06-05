import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import userApi from '../services/user-api';
import styles from './Auth-form.module.css';


export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_password] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submited');
  }

  return (
    <Layout title="Sign Up">
      <div className={styles.loginContainer}>
        <h1 className={styles.title}>quantum ecommerce</h1>
        <form onSubmit={handleSubmit}>
          <h3 className={styles.formTitle}>sign up</h3>
          <div className={styles.inputs}>
            <div className={styles.inputRow}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className={styles.inputRow}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <input
                type="password"
                name="confirm_password"
                placeholder="Repeat Password"
                onChange={(e) => setConfirm_password(e.target.value)}
                value={confirm_password}
              />
            </div>
          </div>
          <button type="submit">Sign Up</button>
          <Link href="/login">
            <a className={styles.switchForm}>I already have a account</a>
          </Link>
        </form>
      </div>
    </Layout>
  );
}
