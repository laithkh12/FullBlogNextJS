import Image from 'next/image'
import classes from './post-content.module.css'
import PostHeader from './post-header'
import ReactMarkdown from 'react-markdown'
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)

function PostContent(props){
    const {post} = props
    const imagePath = `/images/posts/${post.slug}/${post.image}`
    const customComponents = {
        img(image){
            return (
                <div className={classes.image}>
                    <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300}/>
                </div>
            )
        },
        // code(code){
        //     const {language, value} = code
        //     return <SyntaxHighlighter style={atomDark} language={language} children={value}/>
        // }
        // paragraph(paragraph) {
        //     const {node} = paragraph
        //     if(node.children[0].type === 'image'){
        //         const image = node.children[0]
        //         return(
        //             <div className={classes.image}>
        //                 <Image src={`/public/images/posts/${post.slug}/${image.jpg}`} alt={image.alt} width={600} height={300}/>
        //             </div>
        //         )
        //     }
        //     return(
        //         <p>{paragraph.children}</p>
        //     )
        // }
    } 

    return(
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath}/>
            <ReactMarkdown components={customComponents}>{post.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent
