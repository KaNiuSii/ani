document.getElementById('animateBtn').addEventListener('click', function() {
    const text = `
    ******       ******\n
************* *************\n
***************************\n
    *******************\n
        ***********\n
            ***\n
             *
             To juz dwa lata\n
             Kocham Cie Julcia`;
    const typingElement = document.getElementById('text');
    typingElement.innerHTML = '<pre></pre>'; // Update the innerHTML to include a <pre> tag
    const pre = typingElement.querySelector('pre'); // Select the <pre> element
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            pre.textContent += text.charAt(i); // Use textContent to preserve whitespace
            i++;
            setTimeout(typeWriter, 20);
        }
    }
    typeWriter();
});
