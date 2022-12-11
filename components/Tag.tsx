import React from 'react';

interface Props {
  tagName: string;
  stylesString?: string;
}
function Tag({ tagName, stylesString = '' }: Props) {
  return (
    <div
      className={`flex items-center font-labelleCursive text-tagColor text-[24px] font-md ${stylesString}`}
    >
      {tagName}
    </div>
  );
}

export default Tag;
