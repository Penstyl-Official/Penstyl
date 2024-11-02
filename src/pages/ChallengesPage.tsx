import React, { useState } from 'react';
import ChallengeCard from '../components/ChallengeCard';
import { useAccount } from 'wagmi';
import { useNavigate } from 'react-router-dom';

const categories = ['Smart Contracts', 'Security Patterns', 'State Management'];

const challenges = [
  {
    id: 1,
    title: 'State Machine Implementation',
    category: 'State Management',
    points: 180,
    solved: false,
    description: 'Implement a state machine to manage transaction processing.',
  },
  {
    id: 2,
    title: 'Cross-Contract Interaction Vulnerability',
    category: 'Smart Contracts',
    points: 220,
    solved: false,
    description: 'Analyze and exploit vulnerabilities caused by cross-contract interactions.',
  },
  {
    id: 3,
    title: 'Secure Withdrawal Implementation',
    category: 'Security Patterns',
    points: 160,
    solved: false,
    description: 'Refactor a withdrawal function to follow the Checks-Effects-Interactions pattern.',
  },
  {
    id: 4,
    title: 'Access Control Testing',
    category: 'Smart Contracts',
    points: 130,
    solved: false,
    description: 'Test for access control vulnerabilities in contract functions.',
  },
  {
    id: 5,
    title: 'Implement Role-Based Access Control',
    category: 'Security Patterns',
    points: 170,
    solved: false,
    description: 'Add role-based access control to secure sensitive functions.',
  },
  {
    id: 6,
    title: 'Fix Integer Overflow',
    category: 'Smart Contracts',
    points: 140,
    solved: false,
    description: 'Identify and fix an integer overflow vulnerability in a contract function.',
  },
  {
    id: 7,
    title: 'Implement Time Lock',
    category: 'Security Patterns',
    points: 200,
    solved: false,
    description: 'Introduce a time-lock mechanism to delay sensitive operations.',
  },
  {
    id: 8,
    title: 'Avoid Self-Destruct Vulnerability',
    category: 'Smart Contracts',
    points: 150,
    solved: false,
    description: 'Mitigate risks associated with the self-destruct function.',
  },
  {
    id: 9,
    title: 'Implement Safe Math Library',
    category: 'Security Patterns',
    points: 160,
    solved: false,
    description: 'Integrate a safe math library to prevent overflow and underflow issues.',
  },
  {
    id: 10,
    title: 'Gas Optimization Techniques',
    category: 'Smart Contracts',
    points: 190,
    solved: false,
    description: 'Optimize gas usage by refactoring inefficient code segments.',
  },
  {
    id: 11,
    title: 'Event Logging for Audits',
    category: 'Security Patterns',
    points: 110,
    solved: false,
    description: 'Add appropriate event logging to support contract audits and tracking.',
  },
  {
    id: 12,
    title: 'Immutable Storage Pattern',
    category: 'Smart Contracts',
    points: 175,
    solved: false,
    description: 'Implement immutable storage to securely handle critical contract data.',
  },
  {
    id: 13,
    title: 'Upgradeability with Proxy Pattern',
    category: 'Smart Contracts',
    points: 250,
    solved: false,
    description: 'Implement a proxy pattern to enable safe upgradeability of a contract.',
  },
  {
    id: 14,
    title: 'Flash Loan Attack Defense',
    category: 'Security Patterns',
    points: 230,
    solved: false,
    description: 'Implement mechanisms to mitigate risks associated with flash loan attacks.',
  },
  {
    id: 15,
    title: 'Front-Running Attack Prevention',
    category: 'Security Patterns',
    points: 210,
    solved: false,
    description: 'Add measures to prevent front-running attacks in transaction handling.',
  },
  {
    id: 16,
    title: 'Multi-Signature Wallet',
    category: 'Smart Contracts',
    points: 280,
    solved: false,
    description: 'Design a multi-signature wallet to authorize critical transactions.',
  },
  {
    id: 17,
    title: 'Oracles and Price Feed Security',
    category: 'Security Patterns',
    points: 220,
    solved: false,
    description: 'Implement and secure oracle integration for fetching reliable price feeds.',
  },
  {
    id: 18,
    title: 'Whitelist Mechanism',
    category: 'Smart Contracts',
    points: 150,
    solved: false,
    description: 'Implement a whitelist to control access to certain functions in the contract.',
  },
  {
    id: 19,
    title: 'Rate Limiting Function Calls',
    category: 'Security Patterns',
    points: 170,
    solved: false,
    description: 'Implement a rate limit to prevent abuse of sensitive contract functions.',
  },
  {
    id: 20,
    title: 'Random Number Generation',
    category: 'Smart Contracts',
    points: 200,
    solved: false,
    description: 'Design a random number generator that is resistant to manipulation.',
  },
];

export default function ChallengesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { isConnected } = useAccount();
  const navigate = useNavigate();

  const filteredChallenges = selectedCategory === 'All'
    ? challenges
    : challenges.filter(challenge => challenge.category === selectedCategory);

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Connect Your Wallet</h2>
          <p className="mt-2 text-gray-600">Please connect your wallet to view challenges.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Challenges</h1>
          <p className="mt-2 text-sm text-gray-600">
            Test your skills with our collection of smart contract security challenges.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                selectedCategory === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredChallenges.map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              id={challenge.id}
              title={challenge.title}
              category={challenge.category}
              points={challenge.points}
              solved={challenge.solved}
              description={challenge.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
