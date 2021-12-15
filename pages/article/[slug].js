import getDataFromJson from "../../utils/tools";
import Image from "next/image";
const articleContent = ({article})=>{
    return (
        <div>
            <Image 
            src={`/images/arts/${article.img}`}
            width="1920"
            height="1080"
            layout="responsive"
            alt="image"
            />
            <div className="article_container">
                <h1>{article.name}</h1>
                <div dangerouslySetInnerHTML={{__html:article.content}}></div>
            </div>
        </div>
    )

}

export const getStaticProps = async ({params})=>{
    const data = await getDataFromJson();
    const articleData = data.articles.find(article=>article.slug===params.slug);
    return {
        props:{
            article:articleData
        }
    }
}
export async function getStaticPaths() {
    const data = await getDataFromJson();
    const staticPaths = data.articles.map(article=>{
        return {params:{slug:`${article.slug}`}}
    })
    return { paths: staticPaths,fallback: false };
  }

export default articleContent