function openWindowContent(buttonClicked) {
    // Clear existing content in both windows
    document.getElementById('window2-content').innerHTML = "";
    document.getElementById('window3-content').innerHTML = "";

    // Clear the content of the last window (Steps)
    document.querySelector('.window .content').innerHTML = "";

    if (buttonClicked === 'button1') {
        // Populate Window 2 with a form containing 3 fields (for RSA)
        document.getElementById('window2-content').innerHTML = `
            <form id="form1" onsubmit="submitRSAForm(event)">
                <h4>RSA</h4>
                <label for="input1">Plain Text:</label>
                <input type="text" id="input1" name="input1"><br>

                <label for="input2">Prime Number(p):</label>
                <input type="text" id="input2" name="input2"><br>

                <label for="input3">Prime Number(q):</label>
                <input type="text" id="input3" name="input3"><br>

                <input type="submit" value="Submit">
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

        // Populate the Steps section for RSA
        document.querySelector('.window .content').innerHTML = `
            <h4>RSA Steps:</h4>
            <ul>
                <li>Step 1: Choose two prime numbers p and q.</li>
                <li>Step 2: Calculate n = p * q.</li>
                <li>Step 3: Calculate φ(n) = (p-1) * (q-1).</li>
                <li>Step 4: Choose public key exponent e such that 1 < e < φ(n), and gcd(e, φ(n)) = 1.</li>
                <li>Step 5: Calculate private key exponent d such that e * d ≡ 1 (mod φ(n)).</li>
                <li>Step 6: Encrypt the plaintext using the public key (n, e).</li>
                <li>Step 7: Decrypt the ciphertext using the private key (n, d).</li>
            </ul>
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

        // Populate the Steps section for AES
        document.querySelector('.window .content').innerHTML = `
            <h4>AES Steps:</h4>
            <ul>
                <li><strong>Step 1: Generate an initial round key from the secret key.</strong></li>
                <p>Before the AES encryption process begins, an initial round key is generated from the encryption key using a key expansion algorithm. This key will be used for the initial AddRoundKey step and subsequent rounds.</p>

                <li><strong>Step 2: Divide the plaintext into blocks of 128 bits (16 bytes).</strong></li>
                <p>The plaintext is divided into blocks of 128 bits (16 bytes), which are processed one by one in AES. Each block will undergo a series of transformations (SubBytes, ShiftRows, MixColumns, and AddRoundKey).</p>

                <li><strong>Step 3: Perform initial round key addition (AddRoundKey).</strong></li>
                <p>The first transformation in AES is AddRoundKey, where the initial block of plaintext is XORed with the initial round key. This adds the key material to the state and ensures the plaintext is mixed with the key from the very beginning.</p>

                <li><strong>Step 4: Perform multiple rounds of SubBytes, ShiftRows, MixColumns, and AddRoundKey.</strong></li>
                <p>The AES algorithm undergoes multiple rounds of transformations. For each round, the following steps are applied:</p>
                <ul>
                    <li><strong>SubBytes:</strong> Each byte of the state matrix is substituted using a fixed substitution table called the S-box. This substitution step introduces confusion by making the relationship between the plaintext and ciphertext more complex.</li>
                    <li><strong>ShiftRows:</strong> The rows of the state matrix are shifted cyclically. Row 1 is shifted by 1 byte, row 2 by 2 bytes, and row 3 by 3 bytes. This step ensures that the information is spread across the matrix, providing additional diffusion.</li>
                    <li><strong>MixColumns:</strong> Each column of the state matrix is mixed using a fixed matrix multiplication in the finite field GF(2^8). This step provides diffusion by spreading the influence of each byte across the entire column.</li>
                    <li><strong>AddRoundKey:</strong> The state is XORed with the round key derived from the original encryption key. This step mixes the key into the state again, ensuring that the key is applied at every round of encryption.</li>
                </ul>

                <li><strong>Step 5: In the final round, omit the MixColumns step.</strong></li>
                <p>In the last round of AES encryption, the MixColumns step is skipped. However, the other transformations (SubBytes, ShiftRows, and AddRoundKey) are still applied to ensure the final ciphertext is as complex as possible.</p>

                <li><strong>Step 6: The final output is the ciphertext.</strong></li>
                <p>After completing all the rounds (including the last round), the output of the final round is the ciphertext. This is the encrypted version of the original plaintext.</p>
            </ul>
        `;
    }

    if (buttonClicked === 'button3') {
        // Populate Window 2 with a form for Affine Cipher encryption
        document.getElementById('window2-content').innerHTML = `
            <form id="form1" onsubmit="submitAffineCipherForm(event)">
                <h4>Affine Cipher</h4>
                <label for="input1">Plain Text:</label><br>
                <input type="text" id="input1" name="input1"><br><br>
                <input type="submit" value="Submit">
            </form>
        `;

        // Populate Window 3 with Affine Cipher Decryption form
        document.getElementById('window3-content').innerHTML = `
            <form id="form2">
                <h4>Affine Cipher</h4>
                <label for="input4">Decrypted Text:</label><br>
                <input type="text" id="input4" name="input4" disabled><br><br>
                <input type="submit" value="Submit" disabled>
            </form>
        `;

        // Populate the Steps section for Affine Cipher
        document.querySelector('.window .content').innerHTML = `
            <h4>Affine Cipher Steps:</h4>
            <ul>
                <li>Step 1: Choose two values 'a' and 'b' for the encryption function.</li>
                <li>Step 2: The encryption function is: E(x) = (a * x + b) mod 26.</li>
                <li>Step 3: For decryption, use the inverse of 'a' modulo 26.</li>
                <li>Step 4: Decrypt the ciphertext using the decryption function: D(x) = a^-1 * (x - b) mod 26.</li>
            </ul>
        `;
    }
}

// AES Start

// Function to create a 4x4 table from a 2D array with a line after each row
function createTable(array) {
    return `
        <table border="1" style="border-collapse: collapse; margin-bottom: 10px;">
            ${array.map((row, index) => `
                <tr>
                    ${row.map(cell => `<td style="padding: 5px; text-align: center;">${cell}</td>`).join('')}
                </tr>
                ${index < array.length - 1 ? '<tr><td colspan="4"><hr style="margin: 0; border-top: 1px solid #000;"></td></tr>' : ''}
            `).join('')}
        </table>
    `;
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
            let encry = JSON.stringify(aesData.encryption_result);
            encry = JSON.parse(encry);

            // Display default (Round 0 and Round 10)
            let roundContent = `
                <h4>Encryption Results</h4>
                <p><strong>Key:</strong> ${aesData.key}</p>
                <p><strong>Ciphertext (Hex):</strong> ${aesData.ciphertext}</p>
                <h5>Round Selection</h5>
                <select id="roundSelector">
                    ${encry.map((round, index) => `<option value="${round.round}">Block ${Math.floor(index / 11) + 1}: Round ${round.round}</option>`).join('')}
                </select>
                <div id="roundDisplay">
                    ${createRoundDisplay(encry, [0, 10])} <!-- Always show Round 0 and Round 10 -->
                </div>
            `;

            // Insert the content into the window
            document.getElementById('window2-content').innerHTML = roundContent;

            // Add event listener to the round selector
            document.getElementById('roundSelector').addEventListener('change', (event) => {
                const selectedRound = parseInt(event.target.value);
                document.getElementById('roundDisplay').innerHTML = createRoundDisplay(encry, [selectedRound]);
            });





                        // Handle decryption display similarly
                        let decry = JSON.stringify(aesData.decryption_result);
                        decry = JSON.parse(decry);

                        decry.pop()

                        console.log(decry)

                        // Display default (Round 0 and Round 10) for decryption
                        let decryptionContent = `
                            <h4>Decryption Results</h4>
                            <p><strong>Key:</strong> ${aesData.key}</p>
                            <p><strong>Message:</strong> ${aesData.decrypted}</p>
                            <h5>Round Selection</h5>
                            <select id="decryptionRoundSelector">
                                ${decry.map((round, index) => `<option value="${round.round}">Block ${Math.floor(index / 10) + 1}: Round ${round.round}</option>`).join('')}
                            </select>
                            <div id="decryptionRoundDisplay">
                                ${createRoundDisplay(decry, [0, 10])} <!-- Always show Round 0 and Round 10 -->
                            </div>
                        `;

                        // Insert the content into window3-content (Decryption Results)
                        document.getElementById('window3-content').innerHTML = decryptionContent;

                        // Add event listener to the round selector for decryption
                        document.getElementById('decryptionRoundSelector').addEventListener('change', (event) => {
                            const selectedRound = parseInt(event.target.value);
                            document.getElementById('decryptionRoundDisplay').innerHTML = createRoundDisplayDecry(decry, [selectedRound]);
                        });



        } else {
            alert('Error: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Function to generate the display for selected rounds
// Function to generate the display for selected rounds
function createRoundDisplay(rounds, selectedRounds) {
    return selectedRounds.map(roundNumber => {
        const round = rounds.find(r => r.round === roundNumber);
        if(round){
            return `
            <div class="round">
                <h6>Round ${round.round}</h6>
                <p><strong>Input:</strong></p>
                ${createTable(round.input)}
                <p><strong>Round Key:</strong></p>
                ${createTable(round.round_key)}
                ${round.sub_bytes ? `<p><strong>Sub Bytes:</strong></p>${createTable(round.sub_bytes)}` : ''}
                ${round.shift_row ? `<p><strong>Shift Row:</strong></p>${createTable(round.shift_row)}` : ''}
                ${round.mix_column ? `<p><strong>Mix Column:</strong></p>${createTable(round.mix_column)}` : ''}
                <p><strong>Output after addRoundKey:</strong></p>
                ${createTable(round.output)}
            </div>
        `;
        }
        return ``
    }).join('');
}

// Function to generate the display for selected rounds
function createRoundDisplayDecry(rounds, selectedRounds) {
    return selectedRounds.map(roundNumber => {
        const round = rounds.find(r => r.round === roundNumber);
        return `
            <div class="round">
                <h6>Round ${round.round}</h6>
                <p><strong>Input:</strong></p>
                ${createTable(round.input)}
                <p><strong>Round Key:</strong></p>
                ${createTable(round.round_key)}
                ${round.sub_bytes ? `<p><strong>Inv Sub Bytes:</strong></p>${createTable(round.sub_bytes)}` : ''}
                ${round.shift_row ? `<p><strong>Inv Shift Row:</strong></p>${createTable(round.shift_row)}` : ''}
                ${round.mix_column ? `<p><strong>Inv Mix Column:</strong></p>${createTable(round.mix_column)}` : ''}
                <p><strong>Output after addRoundKey:</strong></p>
                ${createTable(round.output)}
            </div>
        `;
    }).join('');
}

// AES END









// RSA



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





// Affine
function submitAffineCipherForm(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form data
    const plaintext = document.getElementById('input1').value;
    const a = 5;
    const b = 11;

    // Send AJAX request to the Flask /affinecipher route
    fetch(`/affinecipher?plaintext=${encodeURIComponent(plaintext)}&a=${encodeURIComponent(a)}&b=${encodeURIComponent(b)}`, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const affineData = data.data;

            // Display Encryption Results in Window 2
            document.getElementById('window2-content').innerHTML = `
                <h4>Encryption Results</h4>
                <p><strong>Encrypted Text:</strong> ${affineData.encrypted_text}</p>

                <h5>Character-by-Character Encryption</h5>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Plaintext Character</th>
                            <th>Encrypted Ciphertext</th>
                            <th>Encrypted ASCII</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${displayAffineCharacterCipher(plaintext, affineData.encryption_steps)}
                    </tbody>
                </table>
            `;

            // Display Decryption Results in Window 3
            document.getElementById('window3-content').innerHTML = `
                <h4>Decryption Results</h4>
                <p><strong>Decrypted Text:</strong> ${affineData.decrypted_text}</p>

                <h5>Character-by-Character Decryption</h5>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Ciphertext Character</th>
                            <th>Decrypted Plaintext</th>
                            <th>Decrypted ASCII</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${displayAffineDecryptedCharacter(affineData.encrypted_text, affineData.decryption_steps)}
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

// Helper function to display each character and its corresponding encrypted text for Affine Cipher
function displayAffineCharacterCipher(plaintext, encryptionSteps) {
    let result = '';

    // Iterate over each character of the plaintext and show its encryption steps
    for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i];
        const encryptedChar = encryptionSteps[i] || '';  // Get encryption step for the character

        result += `
            <tr>
                <td>${char}</td>
                <td>${JSON.stringify(encryptedChar["encrypted_char"])}</td>
                <td>${JSON.stringify(encryptedChar["encrypted_value"])}</td>
            </tr>
        `;
    }

    return result;
}

// Helper function to display each character of the ciphertext and its decrypted value for Affine Cipher
function displayAffineDecryptedCharacter(ciphertext, decryptionSteps) {
    let result = '';

    // Iterate over each character of the ciphertext and show its decryption steps
    for (let i = 0; i < ciphertext.length; i++) {
        const cipherChar = ciphertext[i];
        const decryptedChar = decryptionSteps[i] || '';  // Get decrypted character from the steps

        result += `
            <tr>
                <td>${cipherChar}</td>
                <td>${JSON.stringify(decryptedChar["decrypted_char"])}</td>
                <td>${JSON.stringify(decryptedChar["decrypted_value"])}</td>
            </tr>
        `;
    }

    return result;
}
