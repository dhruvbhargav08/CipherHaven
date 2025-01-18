from flask import Flask, request, jsonify, render_template
import RSA
import AES
import AffineCipher

app = Flask(__name__)


# RSA Route
@app.route("/rsa", methods = ["GET"])
def rsa():
    p = RSA.generate_large_prime()
    q = RSA.generate_large_prime()
    while p == q:
        q = RSA.generate_large_prime()
    auto = request.args.get("auto", type = bool)  # Query parameter
    if not auto:
        p = int(request.args.get("p"))
        q = int(request.args.get("q"))
    public_key, private_key, n, phi, d, e = RSA.generate_keys(p, q)
    plaintext = request.args.get("plaintext")
    ciphertext = RSA.encrypt(public_key, plaintext)
    decrypted_text = RSA.decrypt(private_key, ciphertext)
    data = {
        "p": p,
        "q": q,
        "n": n,
        "phi": phi,
        "d": d,
        "e": e,
        "public_key": public_key,
        "private_key": private_key,
        "ciphertext": ciphertext,
        "decrypted_text": decrypted_text,
        "plaintext": plaintext
    }
    response = {
        "success": True,
        "data": data,
    }
    return jsonify(response), 200


# AES Route
@app.route("/aes", methods = ["GET"])
def aes():
    key = request.args.get("key")  # Get the key
    message = request.args.get("plaintext")  # Get the message
    aes128 = AES.AES()
    encryption_result = aes128.encrypt(key, message)
    ciphertext = encryption_result['encrypted']
    decryption_result = aes128.decrypt(key, ciphertext)
    data = {
        "key": key,
        "message": message,
        "ciphertext": ciphertext,
        "decryption_result": decryption_result
    }
    response = {
        "success": True,
        "data": data,
    }
    return jsonify(response), 200


# AffineCipher Route
@app.route("/affinecipher", methods = ["GET"])
def affine_cipher():
    a, b = 5, 11
    plaintext = request.args.get("plaintext")  # Get the plaintext
    encrypted_text, encryption_steps = AffineCipher.affine_encrypt(plaintext, a, b)
    decrypted_text, decryption_steps = AffineCipher.affine_decrypt(encrypted_text, a, b)
    data = {
        "encrypted_text": encrypted_text,
        "decrypted_text": decrypted_text,
        "encryption_steps": encryption_steps,
        "decryption_steps": decryption_steps
    }
    response = {
        "success": True,
        "data": data,
    }
    return jsonify(response), 200


@app.route("/")
def index():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug = True)
