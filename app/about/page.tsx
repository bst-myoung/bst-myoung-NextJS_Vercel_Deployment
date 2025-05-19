import styles from '../styles.module.css'
import Image from 'next/image'
import ContentBlock from '@/components/ContentBlock'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "BSTについて",
    description: "BSTは創業から順調に成長を続けています。20代から30代のスタッフが多く、年齢や性別に関係なく望む方にはスキルアップ・キャリアアップできる機会があります。"
    
}

// export async function generateMetadata({params}) {
//     return {
//         title: "About"
//     }
// }

function ItemFeature({title, content}: {title:string, content:string}) {

    return (
        <div className={styles.itemFeature}>
            <h3 className="font-display mb-2">{title}</h3>
            <p className={styles.grey}>{content}</p>
        </div>
    )
}

export default function Page() {

    const listFeatures = [
        {
            title: "成果物に対する方向性",
            content: "私たちは、単なる成果物を追求するのではなく、お客様の長期的な目標に沿った大局的な視点で努力を集中させています。"
        },
        {
            title: "手続きよりもスピード",
            content: "製品の開発速度は非常に重要です。私たちは、創業者が迅速なイテレーションと競争力のある文化を築く手助けをします。"
        },
        {
            title: "取引よりも協力",
            content: "私たちは、単なるビジネスのやり取りではなく、長期的なパートナーシップとお互いの成長を重視しています。"
        },
        {
            title: "量よりも質",
            content: "ただ数を増やすのではなく、本当に価値のある製品を作り上げます。"
        }
    ]

    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <h1 className='font-display font-bold'>
                BSTについて
                </h1>
                <Image
                    src="/about_01.png"
                    width={620}
                    height={300}
                    alt='BSTメインオフィス'
                    className='w-full'
                />
                <p className={styles.grey}>BSTは創業から順調に成長を続けています。20代から30代のスタッフが多く、年齢や性別に関係なく望む方にはスキルアップ・キャリアアップできる機会があります。</p>
                <p>プロジェクトの中心メンバーとして若手スタッフが活躍するケースも多く見られます。</p>
            </section>

            <ContentBlock
                subtitle='Our Strengths'
                title='私達の強み'
            >          
                {listFeatures.map((feature) => (
                    <ItemFeature key={feature.title} title={feature.title} content={feature.content} />
                ))}
            </ContentBlock>

        </main>
    )
}