const puppeteer = require('puppeteer');
const generatePdf = require('../pdf-templates/generatePdf');

const createPdfFromHtml = async (userName, pdfPath) => {
  try {
    // Generate HTML from the template
    const htmlTemplate = await generatePdf(userName);
    if (!htmlTemplate) {
      throw new Error("Generated HTML template is empty or invalid.");
    }

    // Launch Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set HTML content
    await page.setContent(htmlTemplate, { waitUntil: 'load' });

    // Generate PDF
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
    });

    console.log(`PDF created successfully at: ${pdfPath}`);
    
    // Close the browser
    await browser.close();
  } catch (error) {
    console.error(`Error generating PDF: ${error.message}`);
  }
};

module.exports = createPdfFromHtml;
