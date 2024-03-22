import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';



type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};




const FeatureList = [
  {
    title: 'openSIMMO Setup',
    imageUrl: 'img/SIMMO_1.png',
    description: (
      <>
        Attach the SIM Module to your microscope.
      </>
    ),
  },
  {
    title: 'Multicolour Super-resolution Imaging',
    imageUrl: 'img/SIMMO_2.png',
    description: (
      <>
        Use coherent SIM with multiple wavelengths.
      </>
    ),
  },
  {
    title: 'TRP pixel aware',
    imageUrl: 'img/opensimmologo.png',
    description: (
      <>
        Use the tip-role pixels for creating patterns.
      </>
    ),
  }
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} height="200" src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}


export default function HomepageFeatures(): JSX.Element {
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
