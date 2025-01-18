function openWindowContent(buttonClicked) {
    // Clear existing content in both windows
    document.getElementById('window2-content').innerHTML = "";
    document.getElementById('window3-content').innerHTML = "";

    if (buttonClicked === 'button1') {
        // Populate Window 2 with a form containing 3 fields (for RSA)
        document.getElementById('window2-content').innerHTML = `
            <form id="form1" onsubmit="submitRSAForm(event)">
                <h4>RSA</h4>
                <label for="input1">Plain Text:</label><br>
                <input type="text" id="input1" name="input1"><br><br>

                <label for="input2">Prime Number(p):</label><br>
                <input type="text" id="input2" name="input2"><br><br>

                <label for="input3">Prime Number(q):</label><br>
                <input type="text" id="input3" name="input3"><br><br>

                <input type="submit" value="Submit" >
            </form>
        `;

        // Populate Window 3 with RSA Decryption form
        document.getElementById('window3-content').innerHTML = `
            <form id="form2">
                <h4>RSA - Decryption</h4>
                <label for="input4">Decrypted Text:</label><br>
                <input type="text" id="input4" name="input4"><br><br>

                <label for="input5">Prime Number(p):</label><br>
                <input type="text" id="input5" name="input5"><br><br>

                <label for="input6">Prime Number(q):</label><br>
                <input type="text" id="input6" name="input6"><br><br>

                <input type="submit" value="Submit">
            </form>
        `;
    }

    // Implement similar logic for AES and AffineCipher
    // ...
}

// Handle form submission for RSA
function submitRSAForm(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form data
    const plaintext = document.getElementById('input1').value;
    const p = document.getElementById('input2').value;
    const q = document.getElementById('input3').value;

    // Send AJAX request to the Flask /rsa route
    fetch(`/rsa?p=${encodeURIComponent(p)}&q=${encodeURIComponent(q)}&plaintext=${encodeURIComponent(plaintext)}&auto=false`, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Populate Window 2 with the RSA encryption results
            const rsaData = data.data;
            document.getElementById('window2-content').innerHTML = `
                <h4>Encryption Results</h4>
                <p><strong>Public Key:</strong> ${rsaData.public_key}</p>
                <p><strong>Private Key:</strong> ${rsaData.private_key}</p>
                <p><strong>Ciphertext:</strong> ${rsaData.ciphertext}</p>
            `;

            // Populate Window 3 with the RSA decryption results
            document.getElementById('window3-content').innerHTML = `
                <h4>Decryption Results</h4>
                <p><strong>Decrypted Text:</strong> ${rsaData.decrypted_text}</p>
                <p><strong>Public Key:</strong> ${rsaData.public_key}</p>
                <p><strong>Private Key:</strong> ${rsaData.private_key}</p>
            `;
        } else {
            alert('Error: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
