import React from 'react';
import BaseContainer from '../../components/base-container/baseContainer';
import NavigationBar from '../../components/header/header';

const HomePage: React.FC = () => {
  return (
    <BaseContainer>
      <NavigationBar />
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-500">Welcome to</h1>
        <h2 className="text-5xl font-extrabold text-gray-800 mt-2">ishanlahiru.me</h2>
      </header>
    </BaseContainer>
  );
};

export default HomePage;
