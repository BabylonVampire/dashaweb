import "../styles/Main.css";
import { Grid } from "@mui/material";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Heading from "./Heading.jsx";
import ProductBox from "./ProductBox";
import HeadElement from "./HeadElement";
import UpButton from "./UpButton";
import About from "./About";
import Reviews from "./Reviews";

const Main = () => {
    return(
        <div className="generalBox">
            <Header
                header="Гыгыгы"
                navButtons={[]}
            />
            <Grid
                id="background"
                sx={{width: {
                    lg: `calc(90% - 20px)`, 
                    md: `calc(90% - 20px)`, 
                    sm: `calc(90% - 20px)`, 
                    xs: `100%`
                }
            }}
            >
                <HeadElement/>
                <Heading tytle="Кто я такой"/>
                <About description="Лалала"/>
                <Heading tytle="Мои штуки" subtytle="Ушки и прочее"/>
                <ProductBox/>
                <Heading tytle="Отзывы"/>
                <Reviews content={[{username: "123", text: "123"}]}/>
            </Grid>
            <UpButton/>
            <Footer links=""/>
        </div>
    )
}
export default Main;