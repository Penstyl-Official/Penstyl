import { useState } from'react';
import { useParams } from'react-router-dom';
import Editor from "@monaco-editor/react";

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
  '1': {
    id: 1,
    title: 'State Machine Implementation',
    category: 'State Management',
    points: 180,
    solved: false,
    description: 'Implement a state machine to manage transaction processing.',
    content: `
      <div>
        <p>Develop a state machine to efficiently manage transaction states within the contract.</p>
        <ul>
          <li>Define the various states the transaction can be in (e.g., Pending, Completed, Canceled).</li>
          <li>Implement transitions between states based on specified conditions.</li>
          <li>Ensure that state transitions are secure and prevent unauthorized changes.</li>
        </ul>
      </div>
    `,
  },
  '2': {
    id: 2,
    title: 'Cross-Contract Interaction Vulnerability',
    category: 'Smart Contracts',
    points: 220,
    solved: false,
    description: 'Analyze and exploit vulnerabilities caused by cross-contract interactions.',
    content: `
      <div>
        <p>Investigate and demonstrate potential vulnerabilities arising from interactions between multiple contracts.</p>
        <ul>
          <li>Identify scenarios where one contract’s behavior can adversely affect another.</li>
          <li>Develop test cases that exploit these vulnerabilities.</li>
          <li>Propose strategies to mitigate the identified risks.</li>
        </ul>
      </div>
    `,
  },
  '3': {
    id: 3,
    title: 'Secure Withdrawal Implementation',
    category: 'Security Patterns',
    points: 160,
    solved: false,
    description: 'Refactor a withdrawal function to follow the Checks-Effects-Interactions pattern.',
    content: `
      <div>
        <p>Refactor the withdrawal function to ensure it adheres to the Checks-Effects-Interactions pattern.</p>
        <ul>
          <li>Check conditions before making any state changes.</li>
          <li>Update the contract state (e.g., balances) after validation.</li>
          <li>Finally, execute the transfer of funds to avoid reentrancy attacks.</li>
        </ul>
      </div>
    `,
  },
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
          <li>Propose fixes for identified vulnerabilities.</li>
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
          <li>Ensure role management is secure and auditable.</li>
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
          <li>Test the fixed code for correctness and security.</li>
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
          <li>Provide transparency on time-lock durations to all users.</li>
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
          <li>Implement checks to prevent misuse of self-destruct functionality.</li>
        </ul>
      </div>
    `,
  },
  '9': {
    id: 9,
    title: 'Implement Safe Math Library',
    category: 'Security Patterns',
    points: 160,
    solved: false,
    description: 'Integrate a safe math library to prevent overflow and underflow issues.',
    content: `
      <div>
        <p>Incorporate a safe math library into your contract to handle arithmetic operations safely.</p>
        <ul>
          <li>Use the library for all arithmetic calculations to prevent overflows.</li>
          <li>Ensure compatibility with existing contract functions.</li>
          <li>Document the changes and test thoroughly for security and performance.</li>
        </ul>
      </div>
    `,
  },
  '10': {
    id: 10,
    title: 'Gas Optimization Techniques',
    category: 'Smart Contracts',
    points: 190,
    solved: false,
    description: 'Optimize gas usage by refactoring inefficient code segments.',
    content: `
      <div>
        <p>Review and refactor the contract code to optimize gas consumption.</p>
        <ul>
          <li>Identify functions that are expensive in terms of gas usage.</li>
          <li>Apply best practices for gas optimization in Solidity.</li>
          <li>Benchmark gas costs before and after optimizations to quantify improvements.</li>
        </ul>
      </div>
    `,
  },
  '11': {
    id: 11,
    title: 'Event Logging for Audits',
    category: 'Security Patterns',
    points: 110,
    solved: false,
    description: 'Add appropriate event logging to support contract audits and tracking.',
    content: `
      <div>
        <p>Enhance the contract by implementing event logging for critical actions.</p>
        <ul>
          <li>Identify key actions that should be logged for audit purposes.</li>
          <li>Define and emit events for those actions.</li>
          <li>Ensure logs are structured and provide necessary details for auditing.</li>
        </ul>
      </div>
    `,
  },
  '12': {
    id: 12,
    title: 'Immutable Storage Pattern',
    category: 'Smart Contracts',
    points: 175,
    solved: false,
    description: 'Implement immutable storage to securely handle critical contract data.',
    content: `
      <div>
        <p>Utilize the immutable storage pattern to protect critical data in your contract.</p>
        <ul>
          <li>Define variables as immutable to prevent unwanted changes post-construction.</li>
          <li>Consider implications for contract upgradeability and functionality.</li>
          <li>Document the design choices and their security benefits.</li>
        </ul>
      </div>
    `,
  },
  '13': {
    id: 13,
    title: 'Upgradeability with Proxy Pattern',
    category: 'Smart Contracts',
    points: 250,
    solved: false,
    description: 'Implement a proxy pattern to enable safe upgradeability of a contract.',
    content: `
      <div>
        <p>Design and implement a proxy pattern for contract upgradeability.</p>
        <ul>
          <li>Define how the proxy will delegate calls to the implementation contract.</li>
          <li>Ensure secure and controlled upgrade mechanisms for the implementation.</li>
          <li>Test the upgradeability to ensure it works as intended without losing state.</li>
        </ul>
      </div>
    `,
  },
  '14': {
    id: 14,
    title: 'Flash Loan Attack Defense',
    category: 'Security Patterns',
    points: 230,
    solved: false,
    description: 'Implement mechanisms to mitigate risks associated with flash loan attacks.',
    content: `
      <div>
        <p>Develop strategies to protect your contract from flash loan attacks.</p>
        <ul>
          <li>Analyze potential vulnerabilities in your contract’s logic that could be exploited by flash loans.</li>
          <li>Implement safeguards such as price oracles and time delays.</li>
          <li>Test the contract against simulated flash loan attacks to validate effectiveness.</li>
        </ul>
      </div>
    `,
  },
  '15': {
    id: 15,
    title: 'Front-Running Attack Prevention',
    category: 'Security Patterns',
    points: 210,
    solved: false,
    description: 'Add measures to prevent front-running attacks in transaction handling.',
    content: `
      <div>
        <p>Implement strategies to protect against front-running attacks on your transactions.</p>
        <ul>
          <li>Evaluate potential areas where front-running could occur.</li>
          <li>Incorporate techniques such as commit-reveal schemes to deter attackers.</li>
          <li>Test your implementation under simulated front-running scenarios.</li>
        </ul>
      </div>
    `,
  },
  '16': {
    id: 16,
    title: 'Multi-Signature Wallet',
    category: 'Smart Contracts',
    points: 280,
    solved: false,
    description: 'Design a multi-signature wallet to authorize critical transactions.',
    content: `
      <div>
        <p>Create a multi-signature wallet to enhance security for managing funds.</p>
        <ul>
          <li>Define the required number of signatures for transaction approval.</li>
          <li>Implement the wallet functionality and ensure proper validation of signatures.</li>
          <li>Test the wallet with multiple users to confirm its robustness.</li>
        </ul>
      </div>
    `,
  },
  '17': {
    id: 17,
    title: 'Oracles and Price Feed Security',
    category: 'Security Patterns',
    points: 220,
    solved: false,
    description: 'Implement and secure oracle integration for fetching reliable price feeds.',
    content: `
      <div>
        <p>Integrate oracles into your contract to fetch external data securely.</p>
        <ul>
          <li>Evaluate different oracle solutions and choose one that suits your needs.</li>
          <li>Implement the integration while ensuring data integrity and availability.</li>
          <li>Test the oracle mechanism under different scenarios to confirm reliability.</li>
        </ul>
      </div>
    `,
  },
  '18': {
    id: 18,
    title: 'Whitelist Mechanism',
    category: 'Smart Contracts',
    points: 150,
    solved: false,
    description: 'Implement a whitelist to control access to certain functions in the contract.',
    content: `
      <div>
        <p>Design a whitelist mechanism to restrict access to specific functions in your contract.</p>
        <ul>
          <li>Determine which functions require restricted access.</li>
          <li>Implement checks to validate addresses against the whitelist.</li>
          <li>Document the process for adding and removing addresses from the whitelist.</li>
        </ul>
      </div>
    `,
  },
  '19': {
    id: 19,
    title: 'Rate Limiting Function Calls',
    category: 'Security Patterns',
    points: 170,
    solved: false,
    description: 'Implement a rate limit to prevent abuse of sensitive contract functions.',
    content: `
      <div>
        <p>Establish a rate limiting mechanism for sensitive functions in your contract.</p>
        <ul>
          <li>Define acceptable limits for function calls from a single address.</li>
          <li>Implement checks to track and enforce the limits.</li>
          <li>Test the rate limit functionality to ensure it is effective and fair.</li>
        </ul>
      </div>
    `,
  },
  '20': {
    id: 20,
    title: 'Random Number Generation',
    category: 'Smart Contracts',
    points: 200,
    solved: false,
    description: 'Design a random number generator that is resistant to manipulation.',
    content: `
      <div>
        <p>Implement a secure random number generator for your contract.</p>
        <ul>
          <li>Evaluate various methods of generating random numbers in Solidity.</li>
          <li>Ensure the method chosen is resistant to manipulation and predictable outputs.</li>
          <li>Test the random number generation to ensure it meets security and functionality requirements.</li>
        </ul>
      </div>
    `,
  },
};

export default function ChallengePage() {
  const { id } = useParams<{ id: string }>();
  const challenge = id? challengesData[id] : null;
  const [code, setCode] = useState('');
  const [submitted] = useState(false);

  if (!challenge) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold text-white">task not found</h2>
          <p className="mt-2 text-white">The task you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  /*
  const handleSubmit = () => {
    const submissionData = {
      taskName: challenge.title,
      timestamp: new Date().toISOString(),
      taskId: challenge.id,
      code: code,
    };

    const submissionFolder = path.join(__dirname,'submissions');
    const submissionFile = path.join(submissionFolder, `${challenge.id}_${new Date().toISOString()}.json`);

    fs.mkdirSync(submissionFolder, { recursive: true });
    fs.writeFileSync(submissionFile, JSON.stringify(submissionData, null, 2));

    console.log('Submission sent to queue!');
    setSubmitted(true);
  };
  */

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          <div className="mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-white">{challenge.title}</h1>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {challenge.category}
                  </span>
                  <span className="text-sm text-gray-400">{challenge.points} points</span>
                </div>
              </div>
              {challenge.solved && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-white">
                  Solved
                </span>
              )}
            </div>
            <p className="mt-4 text-gray-300">{challenge.description}</p>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <div dangerouslySetInnerHTML={{ __html: challenge.content }} className="text-gray-300" />
          </div>

          {/* Monaco Editor */}
          <div className="mt-6">
            <h2 className="text-xl font-bold text-white">Your Code</h2>
            <div
              style={{
                width: '100%',
                height: '500px',
                border: '1px solid #ccc',
              }}
            >
              <Editor
                height="100%"
                defaultLanguage="rust"
                theme="vs-dark"
                value={code}
                onChange={(value) => setCode(value || '')}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                }}
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              //onClick={handleSubmit}
            >
              Submit
            </button>
            {submitted && (
              <p className="text-green-500 mt-2">Code submitted successfully!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}