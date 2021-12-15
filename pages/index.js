import getDataFromJson from "../utils/tools";
import CarouselComponent from "../components/ui/carousel";
import Article from "../components/home/article";

const Home = ({data})=>{
  return (
    <>
      <CarouselComponent data={data.carrousel} />
      <Article articles = {data.articles} />
    </>
  )
}

export async function getStaticProps(){
  const jsonData = await getDataFromJson();
  return {
      props:{
          data:jsonData
      }
  }
}


export default Home;