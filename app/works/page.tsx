import styles from "@/app/styles.module.css"
import stylesWorks from "./stylesWorks.module.css"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

export default async function Page({ searchParams }) {

    const { page = "1" } = await searchParams
    // console.log(`page: ${page}`)

    const endpoint = 'https://bstinc.co.jp/wp-json/wp/v2/works/'
    const filterEmbed = '_embed=true'
    const filterPerPage = 'per_page=5'
    const filterPage = `page=${page}`

    const fetchUrl = endpoint + '?' + filterEmbed + "&" + filterPerPage + "&" + filterPage

    const data = await fetch(fetchUrl)
    const posts = await data.json()

    console.log(data)

    //TODO: Better Error Check
    if(data.status != 200) {
        notFound()
    }
    
    const wpTotalPages = data.headers.get('x-wp-totalpages')
    console.log(`wpTotalPages: ${wpTotalPages}`)

    const postPages = []

    for(let i = 1; i <= Number(wpTotalPages); i++) {
        postPages.push(i)
    }


    // console.log(posts[0]._embedded['wp:featuredmedia'][0])

    

    // posts.forEach((post) => {
    //     console.log(post.title.rendered)
    // })

    return (
    <main className={`${styles.main} ${stylesWorks.mainWorks}`}>
     
     <section className={styles.section}>
       <h1 className="font-bold font-display">制作実績</h1>       
     </section>

     <section className={styles.section}>
        <ol className={stylesWorks.listWorks}>
        {
            posts.map((post) => (                
                <li key={post.title.rendered}
                    className={stylesWorks.itemWorks}
                >
                    <Link
                        href={`works/${post.id}`}
                    >   
                        {/* TODO: アイキャッチがない場合の処理 */}
                        <figure className={stylesWorks.figure}>
                            <Image
                                src={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
                                width={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.width}
                                height={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.height}
                                alt={post._embedded['wp:featuredmedia'][0].caption.rendered}
                            ></Image>                        
                        </figure>
                                    
                        <div className={stylesWorks.textWrapper}>
                            <h3>{post.title.rendered}</h3>
                            <p>{post.acf.description_text}</p>
                            <time dateTime={post.date}>{post.date}</time>
                        </div>
                    </Link>                    
                </li>
            ))
        }
        </ol>
        <ol className={stylesWorks.listPages}>

            {
                Number(page) > 1 && (
                    <li>
                        <Link href={`?page=${Number(page) - 1}`} className={stylesWorks.pageLink}>
                            Prev
                        </Link>
                    </li>
                )
            }

            {
                postPages.map((postPage) => (
                    <li key={postPage + "pagination"}>
                        <Link
                            href={`?page=${postPage}`}
                            className={stylesWorks.pageLink}
                        >{postPage}</Link>
                    </li>   
                ))
            }
            
            {
                Number(page) < Number(wpTotalPages) && (
                    <li>
                        <Link href={`?page=${Number(page) + 1}`} className={stylesWorks.pageLink}>
                            Next
                        </Link>
                    </li>
                )
            }            

        </ol>

     </section>

    </main>
    )
}