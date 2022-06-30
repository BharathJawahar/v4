import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
// import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hello Hooman! I’m</h1>;
  const two = <h2 className="big-heading">Bharath Jawahar</h2>;
  const three = <h3 className="small-heading">Aspiring Software Engineering Student</h3>;
  const four = (
    <>
      <p>
        I’m a final-year software engineering student from{' '}
        <a href="https://chennai.vit.ac.in/" target="_blank" rel="noreferrer">
          VIT, Chennai
        </a>
        {', '}
        currently interning as Student Trainee at{' '}
        <a href="https://www.nokia.com" target="_blank" rel="noreferrer">
          Nokia
        </a>{' '}
      </p>
      <p>
        I have smashed many keyboards to learn various like Android/Web Development, ML, Big Data,
        and others. But still looking for my niche and inner peace that makes me stop smashing the
        keyboard. Currently, I’m smashing my keyboards to learn Linux and Terminal. BTW, I use Arch
        (No, I can't hack your devices or accounts. Or can I?)
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="https://drive.google.com/file/d/1q85DyRuHpFmiKvGanPGONLie6-JXtg-3/view?usp=sharing"
      target="_blank"
      rel="noreferrer">
      Check out my Resume!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
