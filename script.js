const button = document.querySelector('#copy-citation');
button.addEventListener('click', async () => {
  const citation = document.querySelector('#bibtex').textContent;
  const status = document.querySelector('#copy-status');
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(citation);
    } else {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(document.querySelector('#bibtex'));
      selection.removeAllRanges();
      selection.addRange(range);
      if (!document.execCommand('copy')) throw new Error('Copy unavailable');
      selection.removeAllRanges();
    }
    button.textContent = 'Copied';
    status.textContent = 'BibTeX copied to clipboard.';
    setTimeout(() => { button.textContent = 'Copy BibTeX'; }, 2500);
  } catch {
    status.textContent = 'Select the citation above and copy it manually.';
  }
});
