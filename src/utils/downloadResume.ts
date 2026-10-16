import { RESUME_PDF_BASE64 } from './resumeData';

/**
 * Converts a base64 string to a Uint8Array byte buffer.
 */
function base64ToUint8Array(base64: string): Uint8Array {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

/**
 * Reliably downloads the genuine Subham Sahoo resume PDF as a pristine binary file.
 * Handles sandbox iframes, SPA fallbacks, and verifies PDF magic bytes to prevent corruption.
 */
export async function downloadResumePdf(filename = 'Subham_Sahoo_Resume.pdf'): Promise<boolean> {
  try {
    let pdfBlob: Blob | null = null;

    // 1. First attempt: fetch from public folder
    try {
      const response = await fetch('/Subham_Sahoo_Resume.pdf', {
        cache: 'no-cache',
        headers: {
          Accept: 'application/pdf',
        },
      });

      if (response.ok) {
        const arrayBuffer = await response.arrayBuffer();
        const headerCheck = new Uint8Array(arrayBuffer.slice(0, 5));
        const headerStr = String.fromCharCode(...headerCheck);

        // Only accept if it actually starts with %PDF
        if (headerStr.startsWith('%PDF')) {
          pdfBlob = new Blob([arrayBuffer], { type: 'application/pdf' });
        } else {
          console.warn('Fetched file is not a valid PDF (likely HTML SPA fallback). Using embedded binary PDF.');
        }
      }
    } catch (fetchErr) {
      console.warn('Fetch failed, falling back to embedded binary resume:', fetchErr);
    }

    // 2. If fetch didn't return a valid PDF, use our embedded byte-perfect PDF
    if (!pdfBlob) {
      const bytes = base64ToUint8Array(RESUME_PDF_BASE64);
      pdfBlob = new Blob([bytes], { type: 'application/pdf' });
    }

    // 3. Trigger clean binary file download via Blob URL
    const blobUrl = window.URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = blobUrl;
    link.setAttribute('download', filename);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    }, 15000);

    return true;
  } catch (err) {
    console.error('Download error:', err);
    // Absolute fallback: direct window open or anchor
    const fallbackLink = document.createElement('a');
    fallbackLink.href = '/Subham_Sahoo_Resume.pdf';
    fallbackLink.download = filename;
    fallbackLink.target = '_blank';
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    setTimeout(() => document.body.removeChild(fallbackLink), 1000);
    return false;
  }
}
