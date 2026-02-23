import React, { useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import '../css/stars.css';


export default function Home() {

  return ( <>
  <div class="overlay"></div>
<div class="stars" aria-hidden="true"></div>
<div class="starts2" aria-hidden="true"></div>
<div class="stars3" aria-hidden="true"></div>
<main class="main">
	<section class="contact">
		<h1 class="title">Dhruvi Doshi</h1>
		<h2 class="sub-title">Site Under Construction</h2>
	</section>
</main> </>);

}


// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   const [displayedText, setDisplayedText] = useState('');
//   const fullText = 'Work in Progress';

//   // Typewriter effect
//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       if (index < fullText.length) {
//         setDisplayedText(fullText.slice(0, index + 1));
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 100);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Layout
//       title={`${siteConfig.title} - Coming Soon`}
//       description="Something amazing is being crafted">
//       <main className={styles.wipContainer}>
//         {/* Animated background elements */}
//         <div className={styles.floatingShapes}>
//           <div className={styles.shape1}></div>
//           <div className={styles.shape2}></div>
//           <div className={styles.shape3}></div>
//           <div className={styles.shape4}></div>
//         </div>

//         <div className={styles.wipContent}>
//           {/* Main heading with typewriter effect */}
//           <h1 className={styles.wipTitle}>
//             {displayedText}
//             <span className={styles.cursor}>|</span>
//           </h1>

//           {/* Quirky subtitle */}
//           <div className={styles.subtitleContainer}>
//             <p className={styles.wipSubtitle}>
//               🚀 Something amazing is brewing in this corner of the internet
//             </p>
//           </div>

//           {/* Fun messages that rotate */}
//           <div className={styles.messageBox}>
//             <p>✨ We're crafting something spectacular</p>
//             <p>🎨 Where creativity meets code</p>
//             <p>💡 Innovation in progress</p>
//           </div>

//           {/* Construction zone decoration */}
//           <div className={styles.constructionZone}>
//             <div className={styles.cone1}>🚧</div>
//             <div className={styles.cone2}>🚧</div>
//             <div className={styles.cone3}>🚧</div>
//           </div>

//           {/* Fun decorative text */}
//           <div className={styles.decorativeText}>
//             <p>Building the web, one line of code at a time...</p>
//           </div>

//           {/* Bouncing dots loader */}
//           <div className={styles.loader}>
//             <span className={styles.dot1}></span>
//             <span className={styles.dot2}></span>
//             <span className={styles.dot3}></span>
//           </div>

//           {/* Footer message */}
//           <p className={styles.footerMessage}>
//             Something exciting is coming soon! Stay tuned 👀
//           </p>
//         </div>
//       </main>
//     </Layout>
//   );
// }


