import Image from 'next/image'
import Link from 'next/link'
import styles from "../../styles.module.css"
import stylesWorks from "../stylesWorks.module.css"

interface Post {
    id: number,
    
    fv: {
        title: string, //'catch_copy'
        clientName: string, //project_title
        date: string,
        image: string,            
    },
    
    sections?: {
        index: number,
        title?: string,
        blocks?: {
            title?: string,
            text?: string,                
        }[],
        image?: string
    }[],

    jobContent: string,
    jobUrl: string,    
}


function transformPostData(wpPost:any): Post {
    const sections = Array.from({ length: 4 }, ( _, i ) => {        
        const index = i + 1

        const blocks = [
            {
                title: wpPost.acf[`s_headline0${index}_01`] || undefined,
                text: wpPost.acf[`txt0${index}_01`] || undefined,
            },
            {
                title: wpPost.acf[`s_headline0${index}_02`] || undefined,
                text: wpPost.acf[`txt0${index}_02`] || undefined,
            },
        ].filter( block => block.title || block.text ) // remove empty blocks

        const section = {
            index,
            title: wpPost.acf[`b_headline0${index}`],
            blocks: blocks.length > 0 ? blocks : undefined,
            image: wpPost.acf[`image0${index}`],
        }

        return section
        
    }).filter( section => section.title || section.blocks || section.image ) // remove empty sections

    return {
        id: wpPost.id,

        fv: {
            title: wpPost.acf['catch-copy'],
            clientName: wpPost.acf.project_title,
            date: new Date(wpPost.date).toISOString().split('T')[0],
            image: wpPost.acf.fv_image,
        },
        
        sections: sections,

        jobContent: wpPost.acf.handle,
        jobUrl: wpPost.acf.url,
    }
}

function transformPostDat2(wpPost: any): Post {
	const { acf, id, date } = wpPost;

	const getBlock = (index: number, subIndex: number) => {
		const title = acf[`s_headline0${index}_0${subIndex}`];
		const text = acf[`txt0${index}_0${subIndex}`];

		return title || text ? { title, text } : undefined;
	};

	const sections = Array.from({ length: 4 }, (_, i) => {
		const index = i + 1;

		const blocks = [1, 2]
			.map(subIndex => getBlock(index, subIndex))
			.filter(Boolean) as { title?: string; text?: string }[];

		const sectionTitle = acf[`b_headline0${index}`];
		const sectionImage = acf[`image0${index}`];

		return sectionTitle || blocks.length || sectionImage
			? {
					index,
					title: sectionTitle,
					blocks: blocks.length ? blocks : undefined,
					image: sectionImage,
			  }
			: undefined;
    //TODO: see if I want to define a Section type
	}).filter(Boolean) as Section[]; // Assuming Section is the appropriate type

	return {
		id,
		fv: {
			title: acf['catch-copy'],
			clientName: acf.project_title,
			date: new Date(date).toISOString().split('T')[0],
			image: acf.fv_image,
		},
		sections,
		jobContent: acf.handle,
		jobUrl: acf.url,
	};
}

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params

    if(!process.env.API_ENDPOINT) {
        throw new Error("Assign a value for NEXT_PUBLIC_API_ENDPOINT in .env.local")
    }    
    const fetchUrl = new URL(process.env.API_ENDPOINT + id)    

    const request = await fetch(fetchUrl)
    const data = await request.json()

    const post = transformPostDat2(data)
    // console.dir(post, { depth: null })

    return (
        
    <main className={`${styles.main} ${stylesWorks.mainWorks}`}>
        <section>
            <h1>{ post.fv.title }</h1>
            <p dangerouslySetInnerHTML={{__html: post.fv.clientName}} />
            <time dateTime={post.fv.date}>{post.fv.date}</time>
            <Image
                src={post.fv.image}
                alt={post.fv.title}
                width={1200}
                height={720}
            />                        
        </section>
        {
            post.sections?.map((section) => (
                // <section key={JSON.stringify(section)}>
                <section key={`works-section-${section.index}`}>

                    {section.title && (<h2>{section.title}</h2>)}
                    
                    {section.blocks?.map((block, index) => (
                        <article key={`works-section-${section.index}-block-${index}`}>
                            {block.title && (<h3>{block.title}</h3>)}
                            {block.text && (<p dangerouslySetInnerHTML={{__html: block.text}}/> )}
                        </article>
                    ))}

                    {section.image && (
                        <Image
                            src={section.image}
                            alt={post.fv.title}
                            width={1200}
                            height={720}
                        />
                    )}

                </section>
            ))
        }

        <dl>
            <dt>担当領域</dt>
            <dd dangerouslySetInnerHTML={{__html: post.jobContent}} />
        </dl>
        <Link href={post.jobUrl}>{post.jobUrl}</Link>
    </main>
    )
}