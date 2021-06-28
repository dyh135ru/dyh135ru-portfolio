import React from 'react';
import styled from 'styled-components';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineArrowDown,
} from 'react-icons/ai';
import PText from '../components/PText';
import AboutImg from '../assets/images/aboutme.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

const AboutPageStyles = styled.div`
  span {
    color: black;
  }
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }

  .hero__social {
    left: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 3rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -20%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles className="background-class-color">
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Dylan Javier Ruiz Herrera</span>
              </p>
              <h2 className="about__heading">A computer science engineer</h2>
              <div className="about__info">
                <PText>
                  I am from Mazatlan, Sinaloa. A colonial-modern city with
                  beautiful sunsets. Since my childhood, I love computers. I
                  always try to learn more about different programs and to
                  understand how a computer works. I also love using my
                  creativity to create something that makes other people happy..
                  <br /> <br />
                  I started coding since I was in high school. Coding is also an
                  art for me. I always see a challenge when coding, and the part
                  that I love the most is when all the pieces finally are
                  integrated as a final product.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://github.com/dyh135ru"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/DylanRu61564512"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillTwitterCircle />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/dylan-javier-ruiz-herrera-a3a40b205/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Instituto Cultural de Occidente']}
              />
              <AboutInfoItem
                title="University"
                items={['Universidad Politécnica de Sinaloa ']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'SQL', 'PHP', 'JAVA']}
              />
              <AboutInfoItem title="Programming" items={['R', 'Python', 'C']} />
              <AboutInfoItem title="Methodology" items={['Scrum']} />
              <AboutInfoItem title="Languages" items={['Spanish', 'English']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2018"
                items={['Sixbell: Internship software development']}
              />
              <AboutInfoItem title="2020" items={['ERP System Water Lake ']} />
              <AboutInfoItem
                title="2020"
                items={['proreactware, Ingolstadt Germany.']}
              />
              <AboutInfoItem
                title="2021-2022"
                items={['MIT xPRO FullStack Certification']}
              />
              <AboutInfoItem
                title="2021-"
                items={['Intern Tata Consultancy Services']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
        <Footer />
      </AboutPageStyles>
    </>
  );
}
