import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/ruaruaruaruax8.svg').default,
    description: (
      <>
        Godot Engine was designed with simplicity in mind, offering a 
        clean interface and a gentle learning curve, especially for beginners with little or no programming experience.
      </>
    ),
  },
  {
    title: 'Scene-Based Design',
    Svg: require('@site/static/img/boboix8.svg').default,
    description: (
      <>
        Godot uses a flexible scene system that lets you build games 
        by composing reusable pieces, making it easy to organize projects and scale them over time.
      </>
    ),
  },
  {
    title: 'Free and Open Source',
    Svg: require('@site/static/img/wiuwiux8.svg').default,
    description: (
      <>
        Godot is completely free with no royalties or licensing fees, 
        giving you full access to the engine’s source code and total control over your projects.
      </>
    ),
  },

  {
    title: 'Lightweight and Fast',
    Svg: require('@site/static/img/Godot-x8.svg').default,
    description: (
      <>
        The engine is small in size and runs efficiently even on modest hardware, 
        allowing quick downloads and smooth performance during development.
      </>
    ),
  },
  {
    title: 'Cross-Platform Deployment',
    Svg: require('@site/static/img/Godot-x8.svg').default,
    description: (
      <>
        Export your games to multiple platforms including PC, mobile, and web from a single project without major changes.
      </>
    ),
  },
  {
    title: 'Active Community',
    Svg: require('@site/static/img/Godot-x8.svg').default,
    description: (
      <>
        A growing global community contributes tutorials, plugins, and support, making it easier to find help and resources when needed.
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
