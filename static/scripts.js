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
                <h4>RSA</h4>
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

    if (buttonClicked === 'button2') {
        // Populate Window 2 with a form for AES encryption
        document.getElementById('window2-content').innerHTML = `
            <form id="form1" onsubmit="submitAESForm(event)">
                <h4>AES</h4>
                <label for="input1">Plain Text:</label><br>
                <input type="text" id="input1" name="input1"><br><br>

                <label for="input2">Key:</label><br>
                <input type="text" id="input2" name="input2"><br><br>

                <input type="submit" value="Submit">
            </form>
        `;

        // Populate Window 3 with AES Decryption form
        document.getElementById('window3-content').innerHTML = `
            <form id="form2">
                <h4>AES</h4>
                <label for="input4">Decrypted Text:</label><br>
                <input type="text" id="input4" name="input4" disabled><br><br>

                <label for="input5">Key:</label><br>
                <input type="text" id="input5" name="input5" disabled><br><br>

                <input type="submit" value="Submit" disabled>
            </form>
        `;
    }

    if (buttonClicked === 'button3') {
        // Populate Window 2 with a form for Affine Cipher encryption
        document.getElementById('window2-content').innerHTML = `
            <form id="form1" onsubmit="submitAffineCipherForm(event)">
                <h4>Affine Cipher</h4>
                <label for="input1">Plain Text:</label><br>
                <input type="text" id="input1" name="input1"><br><br>

                <label for="input2">Key (a, b):</label><br>
                <input type="text" id="input2" name="input2"><br><br>

                <input type="submit" value="Submit">
            </form>
        `;

        // Populate Window 3 with Affine Cipher Decryption form
        document.getElementById('window3-content').innerHTML = `
            <form id="form2">
                <h4>Affine Cipher</h4>
                <label for="input4">Decrypted Text:</label><br>
                <input type="text" id="input4" name="input4" disabled><br><br>

                <label for="input5">Key (a, b):</label><br>
                <input type="text" id="input5" name="input5" disabled><br><br>

                <input type="submit" value="Submit" disabled>
            </form>
        `;
    }
}

// Handle form submission for AES
function submitAESForm(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form data
    const plaintext = document.getElementById('input1').value;
    const key = document.getElementById('input2').value;

    // Send AJAX request to the Flask /aes route
    fetch(`/aes?key=${encodeURIComponent(key)}&plaintext=${encodeURIComponent(plaintext)}`, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const aesData = data.data;

            // Display Encryption Results in Window 2
            document.getElementById('window2-content').innerHTML = `
                <h4>Encryption Results</h4>
                <p><strong>Key:</strong> ${aesData.key}</p>
                <p><strong>Ciphertext (Hex):</strong> ${aesData.ciphertext}</p>

                <h5>Character-by-Character Encryption</h5>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Plaintext Character</th>
                            <th>Encrypted Ciphertext (Hex)</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${displayAESEncryption(plaintext, aesData.ciphertext)}
                    </tbody>
                </table>
            `;

            // Display Decryption Results in Window 3
            document.getElementById('window3-content').innerHTML = `
                <h4>Decryption Results</h4>
                <p><strong>Decrypted Text:</strong> ${aesData.decryption_result}</p>

                <h5>Character-by-Character Decryption</h5>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Ciphertext Character (Hex)</th>
                            <th>Decrypted Plaintext</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${displayAESDecryption(aesData.ciphertext, aesData.decryption_result)}
                    </tbody>
                </table>
            `;
        } else {
            alert('Error: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


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
            const rsaData = data.data;

            // Display Encryption Results in Window 2
            document.getElementById('window2-content').innerHTML = `
                <h4>Encryption Results</h4>
                <p><strong>Public Key:</strong> ${rsaData.public_key}</p>
                <p><strong>Private Key:</strong> ${rsaData.private_key}</p>
                <p><strong>Ciphertext:</strong> ${rsaData.ciphertext}</p>

                <h5>Character-by-Character Encryption</h5>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Plaintext Character</th>
                            <th>Encrypted Ciphertext</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${displayCharacterCipher(plaintext, rsaData)}
                    </tbody>
                </table>
            `;

            // Display Decryption Results in Window 3
            document.getElementById('window3-content').innerHTML = `
                <h4>Decryption Results</h4>
                <p><strong>Decrypted Text:</strong> ${rsaData.decrypted_text}</p>

                <h5>Character-by-Character Decryption</h5>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Ciphertext Character</th>
                            <th>Decrypted Plaintext</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${displayDecryptedCharacter(rsaData.ciphertext, rsaData)}
                    </tbody>
                </table>
            `;
        } else {
            alert('Error: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Helper function to display each character and its corresponding cipher text
function displayCharacterCipher(plaintext, rsaData) {
    let result = '';

    // Iterate over each character of the plaintext and encrypt it
    for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i];
        const charCiphertext = rsaData.ciphertext[i] || '';  // Get encrypted text for the character

        result += `
            <tr>
                <td>${char}</td>
                <td>${charCiphertext}</td>
            </tr>
        `;
    }

    return result;
}

// Helper function to display each character of the ciphertext and its decrypted value
function displayDecryptedCharacter(ciphertext, rsaData) {
    let result = '';

    // Iterate over each character of the ciphertext and decrypt it
    for (let i = 0; i < ciphertext.length; i++) {
        const cipherChar = ciphertext[i];
        const decryptedChar = rsaData.decrypted_text[i] || '';  // Get decrypted text for the character

        result += `
            <tr>
                <td>${cipherChar}</td>
                <td>${decryptedChar}</td>
            </tr>
        `;
    }

    return result;
}

// Helper function to display AES encryption character-by-character
function displayAESEncryption(plaintext, ciphertext) {
    let result = '';

    // Iterate over each character of the plaintext
    for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i]; // Character from plaintext
        const charCiphertext = ciphertext[i] || '';  // Corresponding encrypted character in ciphertext (Hex)

        result += `
            <tr>
                <td>${char}</td>
                <td>${charCiphertext}</td>
            </tr>
        `;
    }

    return result;
}

// Helper function to display AES decryption character-by-character
function displayAESDecryption(ciphertext, decryptedText) {
    let result = '';

    // Iterate over each character of the ciphertext
    for (let i = 0; i < ciphertext.length; i++) {
        const cipherChar = ciphertext[i]; // Character from ciphertext
        const decryptedChar = decryptedText[i] || '';  // Corresponding decrypted character

        result += `
            <tr>
                <td>${cipherChar}</td>
                <td>${decryptedChar}</td>
            </tr>
        `;
    }

    return result;
}

