export const excelFileProcessorData = {
  title: 'Excel File Processor',
  category: 'Data processing utility',
  description: 'Node.js utility for processing and manipulating Excel files. Handles file uploads, data extraction, and Excel file operations with a clean web interface for file management.',
  tech: ['Node.js', 'JavaScript', 'HTML', 'CSS'],
  githubUrl: 'https://github.com/rwumors/Excel-File-Processor',
  codeExcerpts: [
    {
      title: 'Excel File Processing',
      language: 'javascript',
      code: `// Excel file processing logic
const excelProcessor = require('./excelProcessor');
const fs = require('fs');
const path = require('path');

async function processExcelFile(filePath) {
    try {
        const workbook = await excelProcessor.readFile(filePath);
        const data = excelProcessor.extractData(workbook);
        return {
            success: true,
            data: data,
            rows: data.length
        };
    } catch (error) {
        console.error('Error processing Excel file:', error);
        return {
            success: false,
            error: error.message
        };
    }
}`,
    },
    {
      title: 'File Upload Handling',
      language: 'javascript',
      code: `// Express route for file upload
app.post('/upload', upload.single('excelFile'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    
    const filePath = req.file.path;
    const result = await processExcelFile(filePath);
    
    if (result.success) {
        res.json({
            message: 'File processed successfully',
            rows: result.rows,
            data: result.data
        });
    } else {
        res.status(500).json({ error: result.error });
    }
});`,
    },
    {
      title: 'Data Extraction & Processing',
      language: 'javascript',
      code: `// Extract and process Excel data
function extractData(workbook) {
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(worksheet);
    
    return data.map(row => {
        // Process and normalize data
        return {
            ...row,
            processed: true,
            timestamp: new Date().toISOString()
        };
    });
}`,
    },
  ],
  features: {
    'File Processing': [
      'Excel file upload and parsing',
      'Data extraction from multiple sheets',
      'File validation and error handling',
    ],
    'Data Management': [
      'Row-by-row data processing',
      'Data normalization and transformation',
      'Export processed data to various formats',
    ],
    'User Interface': [
      'Clean web interface for file uploads',
      'Real-time processing feedback',
      'Download processed results',
    ],
  },
  patterns: [
    'File upload handling',
    'Data transformation',
    'Error handling & validation',
  ],
};

