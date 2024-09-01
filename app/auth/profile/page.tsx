import React from 'react';

const Page: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-100 to-green-100">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Welcome to the World of NFTs</h1>
                <span>
                    &quot;Discover unique digital assets with NFT technology.&quot;,<br />
                    &quot;Participate in exclusive collections and events.&quot;,<br />
                    &quot;Earn rewards and bonuses through active engagement.&quot;,<br />
                    &quot;Uncover a new realm of digital ownership and creativity.&quot;
                </span>
            </div>
            <div className="max-w-3xl w-full text-center mt-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">What is an NFT?</h2>
                <p className="text-lg text-gray-600 mb-4">
                    NFT stands for Non-Fungible Token, a unique digital asset representing ownership of a specific item or piece of art in digital format. Unlike cryptocurrencies such as Bitcoin or Ethereum, each NFT is unique and cannot be exchanged on a one-to-one basis with another token.
                </p>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Opportunities for Users</h2>
                <ul className="list-disc list-inside text-lg text-gray-600">
                    <li>Explore personalized NFT collections</li>
                    <li>Engage in exclusive events and experiences</li>
                    <li>Receive bonuses and rewards for your activity</li>
                    <li>Participate in a vibrant community of creators and collectors</li>
                </ul>
            </div>
        </div>
    );
};

export default Page;
