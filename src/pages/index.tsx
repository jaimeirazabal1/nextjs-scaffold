import * as React from 'react';
import { useDispatch,useSelector } from 'react-redux';

import Layout from '@/components/layout/Layout';
import Login from '@/components/Login';
import Seo from '@/components/Seo';

import { LoginObject } from '@/interfaces/LoginObject';
import { LoginRequest } from '@/services/Login';

import { RootState } from '../store'
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.



export default function HomePage() {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = async (ObjetoLogin:LoginObject) => {
    const data = await LoginRequest(ObjetoLogin)
    console.log('data',data)
    dispatch({ type: 'LOGIN', payload: data });
  }

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <Login handleLogin={handleLogin} />
      </main>
    </Layout>
  );
}
