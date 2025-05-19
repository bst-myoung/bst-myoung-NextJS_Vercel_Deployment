// app/page.tsx
import styles from "./styles.module.css"
import ContentBlock from "@/components/ContentBlock"

export default function Home() {  
  return (
     <main className={styles.main}>
     
       <section className={styles.section}>
         <h1 className="mb-12 font-bold font-display">
         「これが欲しかった」、<br />
         そう言われる<br />
         デザインとシステムを。
         </h1>
         <p>BSTは数百のWEBサイト・システム構築を成功させたプロフェッショナル集団です。規模の大きさや業種に関わらず、クライアントが直面する課題に対し最適なプランで成功に導きます。</p>
         <p>BSTのサービスをご紹介します。</p>
       </section>

       <ContentBlock
          title="オーダーメイドのウェブデザイン & 開発"
          text="BSTでは、ビジネスニーズに合わせたウェブサイトやシステムを提供しています。高性能なウェブサイトやCMSを構築し、デジタルプレゼンスを強化し、業務の効率化を実現します。"          
          images={[
            {
              path: "top_01.png",
              alt: "altテキスト"
            }
          ]}
          subtitle="01"          
       />

       <ContentBlock
          title="信頼できるITサポート & カスタムソリューション"
          text="ITサポートとデータ管理で、ビジネス運営をサポートします。トラブルシューティングやデータ入力、カスタムシステムの開発など、幅広いサービスを提供しています。"
          images={[
            {
              path: "top_02.png",
              alt: "alt テキスト"
            }
          ]}
          subtitle="02"
       />

       <ContentBlock
          title="スタッフの行動が会社の運営を決める"
          text="BSTでは、ビジネスニーズに合わせたウェブサイトやシステムを提供しています。高性能なウェブサイトやCMSを構築し、デジタルプレゼンスを強化し、業務の効率化を実現します。"
          images={[
            {
              path:"top_recruit_01.png",
              alt:"テキスト"
            },
            {
              path:"top_recruit_02.png",
              alt:"テキスト２"
            }
          ]}
          subtitle="Recruit"
       />
     </main>
     )
 }