import React from 'react';
import FirstComponent from './first-component';
import SecondComponent from './second-component';
import ThirdComponent from './third-component';
import ComponentNeedingProps from './component-needing-props';

const MainApp = () => {
  const content = 'Who needs me?';
  return (
    <>
      <div>
        <FirstComponent>
          <SecondComponent>
            <ThirdComponent>
              <ComponentNeedingProps content={content} />
            </ThirdComponent>
          </SecondComponent>
        </FirstComponent>
      </div>
    </>
  );
};

export default MainApp;
