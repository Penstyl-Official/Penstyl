import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface ChallengeCardProps {
  id: number;
  title: string;
  category: string;
  points: number;
  solved: boolean;
  description: string;
}

const ChallengeCard: FC<ChallengeCardProps> = ({
  id,
  title,
  category,
  points,
  solved,
  description,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center space-x-2 mt-1">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {category}
            </span>
            <span className="text-sm text-gray-500">{points} points</span>
          </div>
        </div>
        {solved && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Solved
          </span>
        )}
      </div>
      <p className="text-sm text-gray-600">{description}</p>
      <button 
        onClick={() => navigate(`/challenge/${id}`)}
        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        View Challenge
      </button>
    </div>
  );
};

export default ChallengeCard;