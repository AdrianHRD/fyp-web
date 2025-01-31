import React from 'react';
import { MdEdit } from 'react-icons/md';
import { BsFillEyeSlashFill } from 'react-icons/bs';
const HeadContainer = (props) => {
  const { title } = props;
  return (
    <React.Fragment>
      <div className="flex justify-between mb-5">
        <h2 className="font-bold">{title}</h2>
        <div className="flex gap-x-2">
          <BsFillEyeSlashFill />
          <MdEdit />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeadContainer;
