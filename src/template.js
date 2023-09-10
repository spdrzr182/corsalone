class MyNav extends HTMLElement {
    connectedCallback () {
        this.innerHTML =
    '<nav><a href="../index.html"><div class="logo"><img src="../src/images/cor.salon-logo (1).png" alt="corsalone-logo"></div></a><div class="nav-items"><a href="../index.html">Inicio</a><a href="../pages/about.html">Acerca de Nosotros</a><a href="../pages/blog.html">Blog</a><a href="../pages/contact.html">Contacto</a></div> <div class="burger"><div class="line1"></div><div class="line2"></div><div class="line3"></div></div></nav>'
    }
}

customElements.define('my-nav', MyNav)


class MyFooter extends HTMLElement {
    connectedCallback () {
        this.innerHTML =
    '<footer><div class="left-footer"><h3>Visítanos y deja que tu corte hable de perfección</h3><div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.806259589879!2d-115.44753985922128!3d32.63798247383135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d771cec2dca461%3A0xf26e77ccab10fe4f!2sCor.%20Salone!5e0!3m2!1sen!2sus!4v1694223494743!5m2!1sen!2sus" width="60%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div><div class="right-footer"><div class="rf-left"><h3>Contactanos</h3><div class="tel-footer"><h4>TELEFONO</h4><p>(686) 4072162</p></div><div class="hours"><h4>HORARIO</h4><p>Lunes a Viernes 10am-7pm<br>Sábado 10am-5pm</p></div></div><div class="rf-right"><span>spdrzr182 &copy;2023</span></div></div></footer>'
    }
}

customElements.define('my-footer', MyFooter)