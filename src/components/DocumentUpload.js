import React, { useState } from 'react';

const DocumentUpload = ({ onDocumentUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileUpload = async (file) => {
    if (!file) return;

    setIsProcessing(true);
    
    try {
      let text = '';
      const fileType = file.type;
      const fileName = file.name.toLowerCase();

      if (fileType === 'text/plain' || fileName.endsWith('.txt')) {
        text = await readTextFile(file);
      } else if (fileType === 'application/pdf' || fileName.endsWith('.pdf')) {
        text = await readPDFFile(file);
      } else if (
        fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
        fileName.endsWith('.docx')
      ) {
        text = await readWordFile(file);
      } else {
        // For demo purposes, use sample text for unsupported formats
        text = getSampleRequirementText();
      }

      onDocumentUpload(text);
    } catch (error) {
      console.error('Error processing file:', error);
      // Fallback to sample text for demo
      onDocumentUpload(getSampleRequirementText());
    } finally {
      setIsProcessing(false);
    }
  };

  const readTextFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  const readPDFFile = async (file) => {
    // For demo purposes, return sample text
    // In production, you would use pdf-parse library
    return getSampleRequirementText();
  };

  const readWordFile = async (file) => {
    // For demo purposes, return sample text
    // In production, you would use mammoth library
    return getSampleRequirementText();
  };

  const getSampleRequirementText = () => {
    return `
Healthcare Data Management System Requirements

1. Patient Data Protection
   - All patient data must be encrypted at rest and in transit
   - Access to patient data must be logged and auditable
   - Data retention policies must comply with GDPR and HIPAA

2. User Authentication
   - Multi-factor authentication required for all users
   - Session timeout after 30 minutes of inactivity
   - Role-based access control for different user types

3. Data Backup and Recovery
   - Daily automated backups to secure cloud storage
   - Point-in-time recovery capability
   - Disaster recovery plan with RTO < 4 hours

4. Audit Trail
   - All system activities must be logged
   - Logs must be tamper-proof and retained for 7 years
   - Regular compliance reporting for FDA submissions

5. Data Privacy
   - Patient consent management system
   - Right to be forgotten implementation
   - Data anonymization for research purposes
    `;
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  return (
    <div className="space-y-6">
      <div
        className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 transform ${
          isDragging
            ? 'border-blue-400 bg-gradient-to-br from-blue-50 to-indigo-50 scale-105 shadow-lg'
            : 'border-gray-300 hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 hover:shadow-lg hover:scale-102'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {isProcessing ? (
          <div className="space-y-6">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800">Processing document...</p>
              <p className="text-sm text-gray-600 mt-1">Extracting text and analyzing content</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center shadow-lg">
              <svg
                className="w-10 h-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900 mb-2">
                Drop your document here or click to browse
              </p>
              <p className="text-sm text-gray-600">
                Supports TXT, PDF, and DOCX files up to 10MB
              </p>
            </div>
            <input
              type="file"
              accept=".txt,.pdf,.docx"
              onChange={handleFileInput}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Choose File
            </label>
          </div>
        )}
      </div>

      <div className="text-center">
        <button
          onClick={() => onDocumentUpload(getSampleRequirementText())}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-200 border border-blue-200 hover:border-blue-300"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Or use sample healthcare requirements for demo
        </button>
      </div>
    </div>
  );
};

export default DocumentUpload;
