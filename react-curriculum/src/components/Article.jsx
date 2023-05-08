import React, { useState } from 'react';

const Article = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={handleToggle}
      className="cursor-pointer text-1xl max-h-40 p-4 max-w-full bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full sm:w-[calc(100%/3)] md:w-auto"
    >
      <div className="list-none text-2xl font-bold text-gray-900 dark:text-white pb-4">{title}</div>
      <div
        className={`${
          isOpen ? 'max-h-40' : 'max-h-0'
        } overflow-hidden transition-all duration-700 ease-in-out`}
      >
        {content}
      </div>
    </div>
  );
};

export default Article;
