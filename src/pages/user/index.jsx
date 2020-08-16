import React from 'react';
import BackgroundContainer from '../../components/backgroundcontainer';

function User() {
  // useEffect(() => {
  //     effect
  //     return () => {
  //         cleanup
  //     }
  // }, [input])
  return (
    <BackgroundContainer
      justifyContent="normal"
      alignItems="center"
      overflow="normal"
    >
      <div className="User">
        <section className="User__profile">
          <div className="User__image" />
          <ul className="User__stats">
            <li className="User__numbers">
              <div className="User__label">75%</div>
              <p className="User__description">Hit rate</p>
            </li>
            <li className="User__numbers User__numbers--nowrap">
              <div className="User__label">11/24</div>
              <p className="User__description">Questions</p>
            </li>
          </ul>
        </section>
        <section className="User__played">
          <h4 className="User__title">Played recently</h4>
          <ul className="User__quizzes">
            <li className="User__item" />
            <li className="User__item" />
            <li className="User__item" />
            <li className="User__item" />
          </ul>
        </section>
        <section className="User__created">
          <h4 className="User__title">Created</h4>
          <ul className="User__quizzes">
            <li className="User__item" />
            <li className="User__item" />
            <li className="User__item" />
            <li className="User__item" />
          </ul>
        </section>
      </div>
    </BackgroundContainer>
  );
}

export default User;
