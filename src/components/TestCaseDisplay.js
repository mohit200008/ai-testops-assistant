import React from 'react';

const TestCaseDisplay = ({ testCases }) => {
  const getComplianceTagColor = (tag) => {
    const colors = {
      'HIPAA': 'bg-red-100 text-red-800',
      'GDPR': 'bg-blue-100 text-blue-800',
      'FDA': 'bg-green-100 text-green-800',
      'ISO 27001': 'bg-purple-100 text-purple-800',
      'SOC 2': 'bg-yellow-100 text-yellow-800'
    };
    return colors[tag] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'High': 'bg-red-100 text-red-800',
      'Medium': 'bg-yellow-100 text-yellow-800',
      'Low': 'bg-green-100 text-green-800'
    };
    return colors[priority] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Security': 'bg-red-50 border-red-200',
      'Authentication': 'bg-blue-50 border-blue-200',
      'Compliance': 'bg-green-50 border-green-200',
      'Performance': 'bg-yellow-50 border-yellow-200'
    };
    return colors[category] || 'bg-gray-50 border-gray-200';
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-8">
        {testCases.map((testCase, index) => (
          <div
            key={testCase.id}
            className={`border-2 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-102 ${getCategoryColor(testCase.category)}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start space-x-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-white font-bold text-lg">TC</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {testCase.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {testCase.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-3">
                <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold ${getPriorityColor(testCase.priority)}`}>
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {testCase.priority} Priority
                </span>
                <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-lg">
                  {testCase.category}
                </span>
              </div>
            </div>

            {/* Compliance Tags */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Compliance Standards
              </h4>
              <div className="flex flex-wrap gap-3">
                {testCase.complianceTags.map((tag) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold shadow-sm ${getComplianceTagColor(tag)}`}
                  >
                    <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Test Steps */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Test Steps
              </h4>
              <div className="bg-white/50 rounded-xl p-6 border border-gray-200">
                <ol className="space-y-3">
                  {testCase.steps.map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Expected Result */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Expected Result
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {testCase.expectedResult}
              </p>
            </div>

            {/* Test Case ID */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-600">Test Case ID:</span>
                  <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">TC-{testCase.id.toString().padStart(3, '0')}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Generated by AI TestOps Assistant</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-900">Test Case Summary</h4>
              <p className="text-gray-600 mt-1">
                Generated {testCases.length} comprehensive test cases covering multiple compliance standards
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{testCases.length}</div>
            <div className="text-sm font-medium text-gray-600">Test Cases</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/70 rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-red-600 mb-1">
              {testCases.filter(tc => tc.priority === 'High').length}
            </div>
            <div className="text-sm font-medium text-gray-700">High Priority</div>
          </div>
          <div className="bg-white/70 rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {new Set(testCases.flatMap(tc => tc.complianceTags)).size}
            </div>
            <div className="text-sm font-medium text-gray-700">Compliance Standards</div>
          </div>
          <div className="bg-white/70 rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {testCases.filter(tc => tc.category === 'Security').length}
            </div>
            <div className="text-sm font-medium text-gray-700">Security Tests</div>
          </div>
          <div className="bg-white/70 rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-purple-600 mb-1">
              {testCases.filter(tc => tc.category === 'Authentication').length}
            </div>
            <div className="text-sm font-medium text-gray-700">Authentication Tests</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCaseDisplay;
