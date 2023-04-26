import "./MainPage.css";
import "../../animations/appearance/appearance.css";
import { Grid } from "@mui/material";
import Heading from "../../components/Heading";
import ProductBox from "../../components/Product/components/ProductBox";
import HeadElement from "../../components/HeadElement";
import About from "../../components/About";
import Reviews from "../../components/Reviews";
import Layout from "../../components/Layout";
import Links from "../../components/Links";

const MainPage = () => {
    return (
        <Layout>
            <div className="generalBox">
                <Grid
                    id="background"
                    sx={{
                        width: {
                            lg: `calc(90% - 20px)`,
                            md: `calc(90% - 20px)`,
                            sm: `calc(90% - 20px)`,
                            xs: `100%`
                        }
                    }}
                >
                    <HeadElement />
                    <Heading tytle="Кто я такой" />
                    <About description="Лалала" />
                    <Heading tytle="Мои штуки" subtytle="Ушки и прочее" />
                    <ProductBox />
                    <Heading tytle="Отзывы" />
                    <Reviews content={[{ username: "123", text: "123" }]} />
                    <Heading tytle="Ссылочки" />
                    <Links links={[{description: 'vk', link: '', source: 'VK'}, {description: 'wu', link: '', source: 'WU'}, {description: 'tg', link: '', source: 'TG'}]}/>
                </Grid>
            </div>
        </Layout>
    )
}
export default MainPage;