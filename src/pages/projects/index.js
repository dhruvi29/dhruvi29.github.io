import clsx from 'clsx';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './styles.module.css';
import projectsData from './project_list.json';
import octocat from '@site/static/img/github-mascot-octocat.png';

const Projects = projectsData;

function getCategoryClass(category) {
  const categoryMap = {
    'C++': styles.categoryCpp,
    'Python': styles.categoryPython,
    'JavaScript': styles.categoryJavascript,
    'Java': styles.categoryJava,
  };
  return categoryMap[category] || styles.categoryDefault;
}

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4', styles.cardColumn)}>
      <div className="card">
        <div className="card__image text--center padding-top--sm">
          <img src={octocat} alt="GitHub Mascot" className={styles.featureSvg} />
        </div>
        <div className={clsx('card__body', styles.cardBody)}>
          <div className="text--center padding-horiz--md">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomepageFeatures({ProjectList}) {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {ProjectList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {

  return ( <Layout>

{
  Object.entries(Projects).map(([category, projectList]) => (
    <div key={category} className={clsx(styles.categorySection, getCategoryClass(category))}>
    <h2 className={styles.categoryHeading}>{category}</h2>
    <HomepageFeatures ProjectList={projectList}/>
    </div>
  ))
}
</Layout>);

}