<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = 'info';
$message = $_POST["message"];

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

// $mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = 'marincervinschi3@gmail.com';
$mail->Password = 'xkds kggo zjpj jkef';

$mail->setFrom($email ,$name, $auto = true);
$mail->addAddress('leo.cossu03@gmail.com', 'Cossu');

$mail->Subject = $subject;
$mail->Body = $email . "\n\n" . $message;

$mail->send() or die ('Error!');

echo "
<!DOCTYPE html>
<html lang='it'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link rel='icon' type='image/x-svg' href='CSS/media/assets/logo.svg'>
    <title>Home</title>
    <link rel='preconnect' href='https://fonts.googleapis.com'>
    <link rel='preconnect' href='https://fonts.fonts.gstatic.com' crossorigin>
    <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Poppins&family=Bungee+Outline&dispaly=swap'>
    <link rel='stylesheet' href='../CSS/home.css'>
    <link rel='stylesheet' href='../CSS/footer.css'>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body style='background: url(../CSS/media/galleria/IMG_4.jpeg) no-repeat; background-position: center; background-size: cover;'>
    <header class='menu__wrapper'>
        <div class='menu__bar'>
            <a href='home.html' title='Logo'>
                <img src='../CSS/media/assets/logo.svg' alt='logo' class='logo' width='180' height='180'>
            </a>
            <img class='menu-icon' src='../CSS/media/assets/burger-menu.svg' title='Burger Menu' alt='Burger Menu' onclick='toggleMenu(this)'>
            <ul class='navigation'>
                <li>
                    <a href='about.html' title='ChiSiamo'><i class='bx bx-info-circle'></i> Chi Siamo</a>
                </li>
                <li>
                    <a href='menu.html' title='Menu'><i class='bx bx-restaurant'></i> Menú</a>
                </li>
                <li>
                    <a href='galleria.html' title='Galeria'><i class='bx bx-photo-album' ></i> Galleria</a>
                </li>
                <li>
                    <a href='contatti.html' title='Contattaci'><i class='bx bxs-contact' ></i> Contatti</a>
                </li>
            </ul>
        </div>
    </header>
    <main >
        <section>
            <h1 class='lunatika' style='font-size: 4rem;'>Grazie per il tuo messaggio!</h1>
            <h3 style='display: flex; justify-content: center;'>Ti contatteremo il prima possibile!</h3>
        </section>
        <ul>
            <a href='home.html'>
                <button id='prenota'>Torna indietro</button>
            </a>
        </ul>
    </main>
   <footer>
        <div class='footer-weapper'>
            <section class='footer-top'>
                <a href='home.html' title='Logo'>
                    <img src='../CSS/media/assets/logo.svg' alt='bishop' class='logoF'>
                </a>
                <span class='social-links'>
                    <a href='#'>
                        <img src='../CSS/media/assets/instagram.svg' alt='instagram'>
                    </a>
                    <a href='#'>
                        <img src='../CSS/media/assets/twitterx.svg' alt='twitter'>
                    </a>
                    <a href='#'>
                        <img src='../CSS/media/assets/linkedin.svg' alt='linkedin' style='color: white;'>
                    </a>
                    <a href='#'>
                        <img src='../CSS/media/assets/facebook.svg' alt='facebook' style='color: white;'>
                    </a>
                </span>
            </section>
            <section class='footer-collumns'>
                <section>
                    <ul>
                        <h3>Menú:</h3>
                        <a href='pizze.html'>
                            <li>Pizze</li>
                        </a>
                        <a href='antipasti.html'>
                            <li>Antipasti</li>
                        </a>
                        <a href='primi.html'>
                            <li>Primi</li>
                        </a>
                        <a href='secondi.html'>
                            <li>Secondi</li>
                        </a>
                        <a href='bevande.html'>
                            <li>Bevande</li>
                        </a>
                        <a href='vini.html'>
                            <li>Vini</li>
                        </a>
                        <a href='dolci.html'>
                            <li>Dolci</li>
                        </a>
                    </ul>
                </section>
                <section>
                    <ul>
                        <h3>Orari:</h3>
                        <li>Lunedí 18:30-00</li>
                        <li>Martedí 18:30-00</li>
                        <li>Mercoledí 18:30-00</li>
                        <li>Giovedí 18:30-00</li>
                        <li>Venerdí 18:30-04</li>
                        <li>Sabato 18:30-02</li>
                        <li>Domenica 18:30-00</li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <h3>Contatti:</h3>
                        <li><i class='bx bxs-phone' ></i> 059634276</li>
                        <li> <i class='bx bx-envelope' ></i>escape@matrix.it</li>
                        <li><i class='bx bx-location-plus' ></i> Via Abà, 238, 41021 Fanano MO</li>
                    </ul>
                </section>
            </section>
            <section class='footer-bottom'>
                <small>@ CConsulting. <span id='year'></span>, All right reserved</small>
                <span class='footer-bottom-links'>
                    <a href='#' title='Terms and services'>Terms and Services</a>
                    <a href='#' title='Privacy Policy'>Privacy Policy</a>
                </span>
            </section>
        </div>
   </footer>
   <a href='https://api.whatsapp.com/send?phone=3515711373&text=Escape the matrix' class='wa-link'>
    <img src='../CSS/media/assets/whatsapp.svg' alt='whatsapp'>
  </a>
   <script src='../JS/script.js'></script>
</body>
</html>
";