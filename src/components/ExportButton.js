import React, { useState } from 'react';

const ExportButton = ({ testCases }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    
    // Simulate export process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsExporting(false);
    setShowSuccess(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const exportToJira = () => {
    // In a real implementation, this would format the test cases for Jira
    const jiraFormat = testCases.map(tc => ({
      summary: tc.title,
      description: `${tc.description}\n\n**Test Steps:**\n${tc.steps.map((step, i) => `${i + 1}. ${step}`).join('\n')}\n\n**Expected Result:**\n${tc.expectedResult}`,
      issuetype: { name: 'Test' },
      labels: tc.complianceTags,
      priority: { name: tc.priority },
      customfield_10001: tc.category // Assuming custom field for category
    }));
    
    console.log('Jira Export Format:', jiraFormat);
    return jiraFormat;
  };

  const exportToAzure = () => {
    // In a real implementation, this would format the test cases for Azure DevOps
    const azureFormat = testCases.map(tc => ({
      title: tc.title,
      description: tc.description,
      steps: tc.steps.map((step, i) => ({
        order: i + 1,
        action: step,
        expectedResult: i === tc.steps.length - 1 ? tc.expectedResult : ''
      })),
      tags: tc.complianceTags,
      priority: tc.priority,
      areaPath: tc.category
    }));
    
    console.log('Azure DevOps Export Format:', azureFormat);
    return azureFormat;
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-3">
        <button
          onClick={handleExport}
          disabled={isExporting}
          className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-white shadow-lg transition-all duration-200 transform ${
            isExporting
              ? 'bg-gray-400 cursor-not-allowed scale-95'
              : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 hover:scale-105 hover:shadow-xl'
          }`}
        >
          {isExporting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Exporting...
            </>
          ) : (
            <>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export to Jira/Azure
            </>
          )}
        </button>

        <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="font-medium">{testCases.length} test cases ready</span>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="absolute top-full right-0 mt-3 z-50 animate-in slide-in-from-top-2 duration-300">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 shadow-2xl min-w-96">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-green-800 mb-2">
                  Export Successful! 🎉
                </h3>
                <div className="text-sm text-green-700 space-y-1">
                  <p>Test cases have been exported to your project management system.</p>
                  <p className="font-semibold">
                    <span className="bg-green-100 px-2 py-1 rounded text-green-800">{testCases.length}</span> test cases exported to Jira/Azure DevOps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Export Options (Hidden for now, but ready for future enhancement) */}
      <div className="hidden">
        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 min-w-48">
          <button
            onClick={() => {
              exportToJira();
              handleExport();
            }}
            className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
          >
            Export to Jira
          </button>
          <button
            onClick={() => {
              exportToAzure();
              handleExport();
            }}
            className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
          >
            Export to Azure DevOps
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportButton;
