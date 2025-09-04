# AI TestOps Assistant

**Automating Test Case Generation for Healthcare Software**

A hackathon prototype that demonstrates how AI can help healthcare QA teams automatically generate compliance-focused test cases from requirement documents.

## 🚀 Features

- **Document Upload**: Support for TXT, PDF, and DOCX files with text extraction
- **AI Test Case Generation**: Mock AI integration (ready for Google Gemini API)
- **Compliance Mapping**: Automatic tagging with FDA, HIPAA, GDPR, ISO standards
- **Export Functionality**: Export test cases to Jira/Azure DevOps with success feedback
- **Modern UI**: Clean, professional design with blue accent color and Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React.js + Tailwind CSS
- **AI Integration**: Ready for Google Gemini (Vertex AI API)
- **File Processing**: PDF and Word document parsing
- **Styling**: Modern, responsive design with professional healthcare aesthetics

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🎯 Demo Flow

1. **Upload Document**: Use the sample healthcare requirements or upload your own document
2. **Generate Test Cases**: Click "Generate Test Cases with AI" (uses mock data by default)
3. **Review Results**: View 3 comprehensive test cases with compliance tags
4. **Export**: Click "Export to Jira/Azure" to see the success popup

## 🔧 Configuration

### AI Integration
To use real AI generation instead of mock data:
1. Uncheck "Use mock data for demo" in the Test Case Generation section
2. Implement Google Gemini API integration in `src/components/TestCaseGenerator.js`

### File Processing
The app includes basic text extraction. For production:
- PDF: Integrate `pdf-parse` library
- Word: Integrate `mammoth` library
- Cloud Vision: Add Google Cloud Vision API for OCR

## 📋 Sample Test Cases

The demo generates 3 test cases covering:
- **Patient Data Encryption** (HIPAA, GDPR, ISO 27001)
- **Multi-Factor Authentication** (FDA, ISO 27001, SOC 2)
- **Audit Trail Logging** (FDA, HIPAA, ISO 27001)

## 🎨 Design Features

- **Primary Color**: Blue (#0000FF) as specified
- **Modern Cards**: Rounded corners with soft shadows
- **Compliance Tags**: Color-coded badges for different standards
- **Responsive**: Works on desktop and mobile
- **Professional**: Healthcare-appropriate styling

## 🚀 Deployment

For hackathon demo:
```bash
npm run build
```

The built files in the `build` folder can be deployed to any static hosting service.

## 🔮 Future Enhancements

- Real Google Gemini API integration
- Advanced file parsing with Cloud Vision
- User authentication and project management
- Integration with actual Jira/Azure DevOps APIs
- Test case templates and customization
- Compliance reporting dashboard

## 📝 License

This is a hackathon prototype. Feel free to use and modify for your projects.

---

**Built for Healthcare Innovation Hackathon** 🏥✨
