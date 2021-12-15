import { Card,CardContent,CardActionArea,Button } from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const CardItem = ({article})=>{
    return (
        <Fade>
            <Card>
            <Image 
            src={`/images/arts/${article.img}`}
            width="1920"
            height="1080"
            layout="responsive"
            alt="image"
            />
                <CardContent>
                    <h5>{article.name}</h5>
                    <p>{article.excerpt}</p>
                </CardContent>
                <CardActionArea>
                    <Link href={`/article/${article.slug}`} passHref>
                        <Button color="primary" variant="contained">
                            Link
                        </Button>
                    </Link>
                </CardActionArea>
            </Card>
        </Fade>
    )
}

export default CardItem;