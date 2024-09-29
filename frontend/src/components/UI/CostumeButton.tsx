import React from 'react'

interface CostumeButton {
  onClick: () => void;
  children: React.ReactNode;
};

const CostumeButton: React.FC<CostumeButton> = ({ onClick, children }) => {
  return (
    <div onClick={onClick} className={' btn-1 float-end '}>
      {children}
    </div>
  )
}

export default CostumeButton