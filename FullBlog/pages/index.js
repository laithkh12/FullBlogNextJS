import { Fragment } from "react"
import Hero from "../components/home-page/hero"
import FeaturedPosts from "../components/home-page/featured-posts"
import { getFeaturedPosts } from "../lib/posts-util"
import Head from "next/head"

function HomePage(props){
    return(
        <Fragment>
            <Head>
                <title>Latih's Blog</title>
                <meta name="description" content="I post about programing and web development." />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts}/>
        </Fragment>
    )
}

export function getStaticProps(){
    const featuredPosts = getFeaturedPosts()
    return {
        props: {
            posts: featuredPosts
        }
    }
}

export default HomePage