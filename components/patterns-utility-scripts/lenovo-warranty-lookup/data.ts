export const lenovoWarrantyLookupData = {
  title: 'Lenovo Warranty Lookup Utility',
  category: 'API integration utility',
  description: 'Node.js/Express backend utility that queries Lenovo\'s support API to retrieve model and warranty status for device serial numbers. Demonstrates external API consumption with defensive parsing and error handling.',
  tech: ['Node.js', 'Express', 'JavaScript'],
  githubUrl: '', // Update with your actual GitHub URL
  codeExcerpts: [
    {
      title: 'External API Integration',
      language: 'javascript',
      code: `async function fetchProductInfo(serialNumber) {
    const url = 'https://pcsupport.lenovo.com/ca/en/api/v4/upsell/redport/getIbaseInfo';
    const headers = { 'Content-Type': 'application/json' };
    const body = { serialNumber };
    
    try {
        const response = await axios.post(url, body, { headers });
        const data = response.data;
        const machineInfo = data?.data?.machineInfo;
        
        if (!machineInfo) {
            return { error: 'No machine information found for this serial number.' };
        }
        
        const model = machineInfo.productName?.split('(')[0].trim() || 'Unknown';
        const warrantyDetails = data.data.currentWarranty;
        const warrantyEndDate = warrantyDetails?.endDate || null;
        
        return {
            serialNumber,
            model,
            warrantyEndDate: warrantyEndDate || 'No warranty info available',
            underWarranty: isUnderWarranty(warrantyEndDate),
        };
    } catch (error) {
        console.error('Error fetching product info:', error.message);
        return { error: 'Failed to fetch product info.' };
    }
}`,
    },
    {
      title: 'Warranty Status Logic',
      language: 'javascript',
      code: `function isUnderWarranty(warrantyEndDate) {
    if (!warrantyEndDate) {
        return false;
    }
    const currentDate = new Date();
    const endDate = new Date(warrantyEndDate);
    return currentDate <= endDate;
}

// API endpoint with validation
app.post('/api/product-info', async (req, res) => {
    const { serialNumber } = req.body;
    if (!serialNumber) {
        return res.status(400).json({ error: 'Serial number is required.' });
    }
    const productInfo = await fetchProductInfo(serialNumber);
    if (productInfo.error) {
        return res.status(500).json(productInfo);
    }
    res.json(productInfo);
});`,
    },
    {
      title: 'Frontend API Consumption',
      language: 'javascript',
      code: `async function fetchProductInfo(serialNumber) {
    const apiUrl = 'https://product-info-api-production.up.railway.app/api/product-info';
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ serialNumber }),
        });
        
        if (!response.ok) {
            throw new Error(\`API call failed with status: \${response.status}\`);
        }
        
        const data = await response.json();
        // Display results with proper error handling
    } catch (error) {
        resultDiv.innerHTML = \`<p style="color: red;">Error: \${error.message}</p>\`;
    }
}`,
    },
  ],
  features: {
    'External API Integration': [
      'Queries Lenovo support API for device information',
      'Defensive parsing with optional chaining and fallbacks',
      'Comprehensive error handling for API failures',
    ],
    'Warranty Logic': [
      'Date-based warranty status evaluation',
      'Normalized warranty end date handling',
      'Clear boolean warranty status output',
    ],
    'Service Design': [
      'Clear separation between backend logic and frontend UI',
      'RESTful API endpoint with proper HTTP status codes',
      'Lightweight Express server with static file serving',
    ],
  },
  patterns: [
    'Upstream API consumption',
    'Error handling & data validation',
    'Simple service-oriented design',
  ],
};

