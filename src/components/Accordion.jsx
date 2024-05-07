import { useState } from 'react';

const Accordion = ({question, answer}) => {
  const [openAccordion, setOpenAccordion] = useState(false);

  return (
    <div className=" mx-auto my-4">
      <div className="">
        <div className="w-full">
          <button
            onClick={() => setOpenAccordion(!openAccordion)}
            className="flex text-left items-center  justify-between px-4 py-2 w-full focus:outline-none"
          >
            <span className="font-semibold text-xl block mr-8">{question}</span>
            <span className="text-lg block">{openAccordion ? '-' : '+'}</span>
          </button>
        </div>
        {openAccordion && (
          <div className="px-4 text-sm py-2">
            <p className='text-left'>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
