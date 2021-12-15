import axios from "axios";
import Image from "next/image";
import Head from "next/head";
const bioPage = ({bioData})=>{
  return (
      <div className="row">
          <Head>
              <meta name="description" content="Biographie of hokusai"/>
          </Head>
          <div className="col-lg-8">
              <article>
                  <div className="mb-4">
                    <h1 className="fw-bold mb-1">Hokusai Bio</h1>
                  </div>
                  <section className="mb-5">
                    {
                        bioData.map((bioParagraph,i)=>{
                            return <p key={i} className="fs-5 mb-4">{bioParagraph}</p>
                        })
                    }
                  </section>
              </article>
          </div>
          <div className="col-lg-4">
              <div className="card mb-4">
                <Image 
                src={"/images/bio/bio.jpg"}
                alt="image"
                layout="responsive"
                width="712"
                height="1024"
                />
              </div>
          </div>
      </div>
  )
}

export const getStaticProps = async ()=>{
    const response = await axios.get("https://baconipsum.com/api/?type=all-meat&paras=5");
    if(!response.data){
        return {
            redirect:{
                desyination:"/",
                permanent:false
            }
        }
    }
    return {
        props:{
            bioData:response.data
        },
        revalidate:21600
    }
}

export default bioPage;