const PDFDocument = require('pdfkit');
const fs = require('fs');

router.get('/generate-auth-code-pdf/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const doc = new PDFDocument();
    const filePath = `./authCodes/${user.username}_authCode.pdf`;

    doc.pipe(fs.createWriteStream(filePath));
    doc.fontSize(25).text('Your Authentication Code', { align: 'center' });
    doc.fontSize(16).text(`Authentication Code: ${user.authCodes[0]}`, { align: 'center' });
    doc.end();

    // Wait for the PDF to finish writing
    doc.on('finish', () => {
      res.download(filePath, `${user.username}_authCode.pdf`, (err) => {
        if (err) {
          console.error('Error while sending the file:', err);
        }
        // Optionally delete the file after download
        fs.unlink(filePath, (err) => {
          if (err) console.error('Error deleting the file:', err);
        });
      });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error generating PDF', error });
  }
});
