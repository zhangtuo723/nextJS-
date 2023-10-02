import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { useEffect, useState } from 'react';

export default function Home({a}) {
  const [state,setState] = useState()
  useEffect(()=>{
    setTimeout(()=>{
      setState(111111)
      console.log('xx')
    },3000)
  },[])
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      {/* <ul>
      {allPostData.map((item)=><li>
      {item.title}
     </li>)}
      </ul> */}
      {a}---{state}
      <button onClick={()=>{setState((state)=>state+1)}}>++1</button>
    </Layout>
  );
}


// import {getSortedPostsData} from '../lib/posts'

// export async function getStaticProps(){
//   const allPostData = getSortedPostsData();
  
//   return {
//     props:{
//       allPostData
//     }
//   }
// }

// getstaticprops he getserversidprops只能用一个
export async function getServerSideProps(context){
  const a = 100
  return {
    props:{
a
    }
  }
}