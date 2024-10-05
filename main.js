
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const menuContainer = document.getElementById("menu-container");


registerLink.onclick = () => {
    wrapper.classList.add('active');
};

loginLink.onclick = () => {
    wrapper.classList.remove('active');
};
// Thêm chức năng hiển thị menu sau khi đăng nhập hoặc đăng ký thành công
function showMenu() {
    loginForm.style.display = "none";
    registerForm.style.display = "none";
    menuContainer.style.display = "block";
}

// Xử lý đăng ký
registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = registerForm.querySelector("input[type='text']").value;
    const email = registerForm.querySelector("input[type='email']").value;
    const password = registerForm.querySelector("input[type='password']").value;

    // Kiểm tra xem email đã được đăng ký chưa
    if (localStorage.getItem(email)) {
        alert("Email đã được đăng ký.");
    } else {
        // Lưu thông tin người dùng vào localStorage
        const user = { username: username, password: password };
        localStorage.setItem(email, JSON.stringify(user));
        alert("Đăng ký thành công! Vui lòng đăng nhập.");
        wrapper.classList.remove('active'); // Chuyển về đăng nhập
    }
});

// Xử lý đăng nhập
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = loginForm.querySelector("input[type='text']").value;
    const password = loginForm.querySelector("input[type='password']").value;

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        alert("Đăng nhập thành công!");
        showMenu(); // Hiển thị menu sau khi đăng nhập thành công
    } else {
        alert("Email hoặc mật khẩu không đúng.");
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', () => {
        if (sidebar.style.display === 'none' || sidebar.style.display === '') {
            sidebar.style.display = 'block';
        } else {
            sidebar.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home-link');
    const noteLink = document.getElementById('note-link');
    const qrLink = document.getElementById('qr-link');
    const noteSection = document.getElementById('note-section');
    const qrSection = document.getElementById('qr-section');
    const noteContent = document.getElementById('note-content');
    const saveNoteButton = document.getElementById('save-note');
    const qrType = document.getElementById('qr-type');
    const qrInput = document.getElementById('qr-input');
    const generateQrButton = document.getElementById('generate-qr');
    const toggleQrButton = document.getElementById('toggle-qr');
    const qrCodeContainer = document.getElementById('qrcode');

    
    noteContent.value = localStorage.getItem('note') || '';

    homeLink.addEventListener('click', () => {
        noteSection.style.display = 'none';
        qrSection.style.display = 'none';
    });

    noteLink.addEventListener('click', () => {
        noteSection.style.display = 'block';
        qrSection.style.display = 'none';
    });

    qrLink.addEventListener('click', () => {
        noteSection.style.display = 'none';
        qrSection.style.display = 'block';
    });

    saveNoteButton.addEventListener('click', () => {
        localStorage.setItem('note', noteContent.value);
        alert('Ghi chú đã được lưu!');
    });
     // Hiển thị QR code
    generateQrButton.addEventListener('click', () => {
        qrCodeContainer.innerHTML = ''; 
        new QRCode(qrCodeContainer, {
            text: qrInput.value,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        qrCodeContainer.style.display = 'block'; 
    });

    toggleQrButton.addEventListener('click', () => {
        if (qrCodeContainer.style.display === 'none' || qrCodeContainer.style.display === '') {
            qrCodeContainer.style.display = 'block';
        } else {
            qrCodeContainer.style.display = 'none';
        }
    });
});
document.getElementById("menu-toggle").addEventListener("click", function() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open"); // Thêm hoặc xóa lớp 'open' khi nhấp vào
});