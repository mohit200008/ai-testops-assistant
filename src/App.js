import React, { useState } from 'react';
import DocumentUpload from './components/DocumentUpload';
import TestCaseGenerator from './components/TestCaseGenerator';
import TestCaseDisplay from './components/TestCaseDisplay';
import ExportButton from './components/ExportButton';

function App() {
  const [documentText, setDocumentText] = useState('');
  const [testCases, setTestCases] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDocumentUpload = (text) => {
    setDocumentText(text);
    setTestCases([]); // Reset test cases when new document is uploaded
  };

  const handleTestCasesGenerated = (generatedTestCases) => {
    setTestCases(generatedTestCases);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  AI TestOps Assistant
                </h1>
                <p className="mt-2 text-lg text-gray-600 font-medium">
                  Automating Test Case Generation for Healthcare Software
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-green-50 px-4 py-2 rounded-full border border-green-200">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-700">System Ready</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Document Upload Section */}
          <section className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Upload Requirement Document
              </h2>
            </div>
            <DocumentUpload onDocumentUpload={handleDocumentUpload} />
          </section>

          {/* Test Case Generation Section */}
          {documentText && (
            <section className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Generate Test Cases
                </h2>
              </div>
              <TestCaseGenerator
                documentText={documentText}
                onTestCasesGenerated={handleTestCasesGenerated}
                isGenerating={isGenerating}
                setIsGenerating={setIsGenerating}
              />
            </section>
          )}

          {/* Test Cases Display Section */}
          {testCases.length > 0 && (
            <section className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Generated Test Cases
                  </h2>
                </div>
                <ExportButton testCases={testCases} />
              </div>
              <TestCaseDisplay testCases={testCases} />
            </section>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm border-t border-blue-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 font-medium">
              AI TestOps Assistant - Hackathon Prototype
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Built with React, Tailwind CSS, and AI-powered test case generation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
