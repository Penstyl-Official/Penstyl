import React from 'react';
import { useParams } from 'react-router-dom';

interface Challenge {
  id: number;
  title: string;
  category: string;
  points: number;
  description: string;
  content: string;
  solved: boolean;
}

const challengesData: Record<string, Challenge> = {
  '4': {
    id: 4,
    title: 'Access Control Testing',
    category: 'Smart Contracts',
    points: 130,
    solved: false,
    description: 'Test for access control vulnerabilities in contract functions.',
    content: `
      <div>
        <p>Identify access control vulnerabilities in provided contract functions.</p>
        <ul>
          <li>Review permissions of all functions.</li>
          <li>Find cases where unauthorized users may call sensitive functions.</li>
        </ul>
      </div>
    `,
  },
  '5': {
    id: 5,
    title: 'Implement Role-Based Access Control',
    category: 'Security Patterns',
    points: 170,
    solved: false,
    description: 'Add role-based access control to secure sensitive functions.',
    content: `
      <div>
        <p>Implement role-based access control in the contract to secure functions.</p>
        <ul>
          <li>Define roles such as admin and user.</li>
          <li>Restrict access to certain functions based on role.</li>
        </ul>
      </div>
    `,
  },
  '6': {
    id: 6,
    title: 'Fix Integer Overflow',
    category: 'Smart Contracts',
    points: 140,
    solved: false,
    description: 'Identify and fix an integer overflow vulnerability in a contract function.',
    content: `
      <div>
        <p>Find integer overflow vulnerabilities in provided code.</p>
        <ul>
          <li>Review arithmetic operations that can cause overflow.</li>
          <li>Fix the vulnerabilities by implementing checks or using safe math functions.</li>
        </ul>
      </div>
    `,
  },
  '7': {
    id: 7,
    title: 'Implement Time Lock',
    category: 'Security Patterns',
    points: 200,
    solved: false,
    description: 'Introduce a time-lock mechanism to delay sensitive operations.',
    content: `
      <div>
        <p>Add a time-lock mechanism to secure sensitive contract operations.</p>
        <ul>
          <li>Set a waiting period before critical operations are executed.</li>
          <li>Ensure that only authorized users can initiate the time-lock.</li>
        </ul>
      </div>
    `,
  },
  '8': {
    id: 8,
    title: 'Avoid Self-Destruct Vulnerability',
    category: 'Smart Contracts',
    points: 150,
    solved: false,
    description: 'Mitigate risks associated with the self-destruct function.',
    content: `
      <div>
        <p>Identify and mitigate self-destruct vulnerabilities in a contract.</p>
        <ul>
          <li>Ensure only authorized users can trigger self-destruct.</li>
          <li>Consider alternative mechanisms for cleaning up the contract.</li>
        </ul>
      </div>
    `,
  },
  // More challenge data can be added here as needed for all the new challenges
};

export default function ChallengePage() {
  const { id } = useParams<{ id: string }>();
  const challenge = id ? challengesData[id] : null;

  if (!challenge) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Challenge not found</h2>
          <p className="mt-2 text-gray-600">The challenge you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{challenge.title}</h1>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {challenge.category}
                  </span>
                  <span className="text-sm text-gray-500">{challenge.points} points</span>
                </div>
              </div>
              {challenge.solved && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Solved
                </span>
              )}
            </div>
            <p className="mt-4 text-gray-600">{challenge.description}</p>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <div dangerouslySetInnerHTML={{ __html: challenge.content }} />
          </div>
        </div>
      </div>
    </div>
  );
}
