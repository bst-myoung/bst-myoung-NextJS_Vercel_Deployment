import styles from "@/app/styles.module.css"
import ContentBlock from "@/components/ContentBlock"

export default function Page() {
    return (
    <main className={styles.main}>
     
       <section className={styles.section}>
         <h1 className="font-bold font-display">採用情報</h1>
         <img src="/recruit_01.png" alt="打ち合わせの風景" />
         <p>BST創業メンバーは、ブラック企業や傲岸不遜なワンマン社長らの元で艱難辛苦を味わってきました。出身企業は様々ですが、経営が傾いたり事業撤退の憂き目も見ています。</p>
         <p>その艱難辛苦の中、日々スキルを研鑽し独立も可能になった同志により、同じような想いを持った人たちが働く幸せを感じることができる会社を目指し設立されました。</p>
         
       </section>

       <ContentBlock 
        subtitle="Xさんインタビュー"
        title="良い意味で「小さな会社」を探し、BSTに入社を決める。"
        text="<strong>入社した経緯は？</strong><br/>
以前は数百名のスタッフが働く企業に勤めていたんですが、自分の担当している領域が狭かったこともあって、あまり日々の充実感はありませんでした…。<br>
なので転職先の候補として、良い意味で「小さな会社」を探していました。<br>
BSTでは経営者との距離が近く、直接ビジョンや仕事に対する見解を聞くことができる環境でしたので、入社を決めました。"
       images={
        [
        {
            path: "recruit_02.png",
            alt: "ウェブデザイナーXさん"
        }
       ]
        }
       />
    </main>
    )
}