import Link from "next/link"
import Image from "next/image"
       
export default function Footer() {
      const currentYear = new Date().getFullYear()    
  
      const siteLinks = [
          {
              path: "/",
              label: "BST Co.,Ltd."
          },
          {
              path: "/about",
              label: "About"
          },
          {
              path: "/recruit",
              label: "Recruit"
          },
      ]
  
      const snsLinks = [
          {
              path: "https://bstinc.co.jp/contact/privacy-policy/",
              label: "Privacy Policy"
          },
          {
              path: "https://www.instagram.com/bst_web/",
              label: "Instagram"
          },
          {
              path: "https://www.youtube.com/@BST_web",
              label: "YouTube"
          },
          {
              path: "https://x.com/bst_web",
              label: "Twitter"
          }
      ]
  
      return (
          <footer
              className="bg-[rgba(100,100,100,1)] text-white px-[3%] pt-[96px] pb-[64px] text-sm flex flex-col gap-60 bg-blend-multiply"
              style={{
                  backgroundImage:`url('/footer_bg.png')`
              }}
          >
              <div className="flex w-full justify-between items-center">
                  <Link href="/">
                      <Image
                          src="/bst_logo_white.png"
                          alt="BSTのロゴ"
                          width={268}
                          height={102}
                          className="w-30"
                      />
                  </Link>     
                  <ul className="flex gap-8">
                      <li>
                          <Link href="/" className="hover:opacity-70">BST Co.,Ltd.</Link>
                      </li>
                      <li>
                          <Link href="/about" className="hover:opacity-70">About</Link>
                      </li>
                      <li>
                          <Link href="/recruit" className="hover:opacity-70">Recruit</Link>
                      </li>
                  </ul>
              </div>
              <div className="flex w-full justify-between opacity-70">
                  <p>Copyright {currentYear} BST Co.,Ltd.</p>
                  <ul className="flex gap-8">
                      {
                          snsLinks.map((link,index) => (
                              <li key={link.path}>
                                  <Link href={link.path} className="hover:opacity-70">{link.label}</Link>
                              </li>   
                          ))
                      }                    
                  </ul>
              </div>
          </footer>
      )
  }