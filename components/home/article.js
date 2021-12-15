import Masonry from "react-masonry-css";
import CardItem from "../ui/card";

const Article = ({articles})=>{
    const breakpoints={
        default:3,
        768:2,
        500:1
    }
    return (
        <>
            <Masonry 
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
                {
                    articles.map((article)=>{
                        return <CardItem key={article.id} article={article} />
                    })
                }
            </Masonry>
        </>
    )
}

export default Article;