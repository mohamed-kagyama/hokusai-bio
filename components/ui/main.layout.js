import Head from 'next/head';
import Header from '../navigation/header';
const MainLayout = (props)=>{
    return(
        <>
            <Head>
                <title>Hokusai tribute</title>
                <meta name='viewport'content='initial-scale=1.0, width=device-width' />
                <meta name='description' content='this is a tribute page to hokusi' />
                <meta name='keywords' content='art,paint,hokusai' />
                <meta name='author' content='Sasuke' />
            </Head>
            <Header/>
            <div className='container'>
                {props.children}
            </div>
        </>
    )
}

export default MainLayout;