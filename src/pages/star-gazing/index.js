import '../../css/stars.css';
import Link from '@docusaurus/Link';
export default function Home() {

  return ( <>
  <div class="overlay"></div>
<div class="stars"></div>
<div class="starts2"></div>
<div class="stars3"></div>
<main class="main">
        <Link to="/" style={{ marginLeft: '20px', marginTop: '20px' }}> <svg width="48" height="48" viewBox="0 0 48 48" fill="white">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg> </Link>
	<section class="contact">
        
		{/* <h1 class="title">Dhruvi R. Doshi</h1> */}
		{/* <h2 class="sub-title">Site Under Construction</h2> */}
	</section>
</main> 

</>);

}