import React from "react";

interface LinkCardProps {
  title: string;
    link: string;
    isActive: boolean;
    onClick: () => void;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, link, isActive, onClick }) => {
    return (
      <a
        href={link}
        target="_blank"
        onClick={onClick}
        className={`group flex items-center w-full relative overflow-hidden border border-red-500/20 ${isActive ? 'bg-red-500/20' : 'bg-black/80'} backdrop-blur-md text-white p-4 rounded-xl transition-all duration-300 hover:bg-red-500/20 hover:shadow-lg hover:shadow-red-500/20`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-500/10 to-red-600/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        <div className="flex items-center justify-between w-full z-10">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-500 text-white transition-transform group-hover:translate-x-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </a>
    );
  };

export default LinkCard;
