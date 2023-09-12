import React, { useState } from 'react';
import Select from 'react-dropdown-select';
import { FadeIn } from 'react-anim-kit';

function AgeDropDown(props) {
  const [hidden, setHidden] = useState(false);
  const handleHide = () => setHidden(true);
  const onChange = (value) => {
    handleHide();
    props.actionProvider.handleUserAge();
  };
  const options = Array.from({ length: 23 }, (_, index) => {
    return {
      //array from 18 to 40
      value: 18 + index,
      label: 18 + index,
    };
  });

  return (
    <>
      {hidden ? (
        <></>
      ) : (
        <FadeIn right by={300}>
          <div className='flex items-center justify-center'>
            <Select
              dropdownPosition='auto'
              autoFocus
              dropdownGap={1}
              dropdownHeight={'100px'}
              style={{ width: '120px' }}
              options={options}
              onChange={(values) => onChange(values)}
            />
          </div>
        </FadeIn>
      )}
    </>
  );
}

export default AgeDropDown;
