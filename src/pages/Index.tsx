import { useState, useEffect } from "react";
import { ChevronDown, MapPin, Phone, Wrench, Calendar, Shield, DollarSign, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { title } from "process";

const images = import.meta.glob('../assets/*.{png,jpg,jpeg}', { eager: true }) as Record<string, { default: string }>;

const faqItems = [
  {
    question: "Berapa lama pengerjaan plafon biasanya?",
    answer: "Waktu pengerjaan bervariasi tergantung luas area dan kompleksitas desain. Rata-rata 3-7 hari kerja untuk rumah standar."
  },
  {
    question: "Apakah bisa request desain custom?",
    answer: "Ya, kami menerima request desain custom. Tim kami akan membantu memvisualisasikan ide Anda dengan layout 2D menggunakan SketchUp."
  },
  {
    question: "Apakah ada garansi pemasangan?",
    answer: "Ya, kami memberikan garansi pemasangan untuk memastikan kepuasan pelanggan."
  },
  {
    question: "Bagaimana cara pembayaran?",
    answer: "Kami menerima pembayaran bertahap: DP di awal dan pelunasan setelah pengerjaan selesai."
  }
];

const Index = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/cursor-effects@l  atest/dist/browser.js";
    script.onload = () => {
      // @ts-ignore
      new cursoreffects.followingDotCursor();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    console.log("Available images:", images);
    // Coba log satu path spesifik
    console.log("Lamiwood-1 path:", getImageUrl('../assets/lamiwood-1.jpg'));
  }, []);

  const getImageUrl = (path: string) => {
    return images[path]?.default || '';
  };

  return (
    <div className="min-h-screen bg-marble-light">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
            <span className="inline-block bg-gold/20 text-gold-dark px-10 py-2 rounded-full text-sm font-medium">
              Terpercaya di Tangerang Raya dan Jakarta Sekitar
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gold-dark leading-tight">
              Jasa Pemasangan Plafon PVC & Renovasi
            </h1>
            <p className="text-gold-dark text-lg md:text-xl max-w-2xl mx-auto">
              Mengutamakan kualitas, kerapihan, dan ketepatan dalam setiap proyek, dengan harga yang tetap transparan dan terjangkau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://wa.me/+6281318835034"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
              >
                Hubungi Kami
              </a>
              <a
                href="#services"
                className="border border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
              >
                Lihat Layanan
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gold" />
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prinsip Utama Kami
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Integritas bukan sekadar kata-kata, tapi komitmen yang kami pegang dalam setiap proyek. kami selalu mengedepankan kepuasan client dengan berpegang pada 4 prinsip utama:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Kerja (SANGAT) Keras",
              "Kerja Cerdas",
              "Kerja Tuntas",
              "Kerja Ikhlas",
            ].map((principle, index) => (
              <div
                key={index}
                className="border-2 border-dark-20 hover:bg-dark p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="font-playfair text-xl font-bold text-dark mb-3 hover:text-dark py-3">
                  {principle}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="plafon" className="py-16 bg-marble-light">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Mengapa Memilih Kami?
          </h2>

          <div className="font-semibold text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              "Material plafon berkualitas tinggi (LAMIWOOD & JAVAFON)",
              "Tim profesional berpengalaman",
              "Harga transparan, tanpa biaya tersembunyi",
              "Terjamin dan termurah se-Tangerang Raya",
            ].map((reason, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <p className="text-gray-800">{reason}</p>
              </div>
            ))}
          </div>
          
          {/* Material Panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Dialog>
              <DialogTrigger className="group">
                <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src={getImageUrl('../assets/lamiwood-1.jpg')}
                      alt="Lamiwood PVC"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                    LAMIWOOD PVC
                  </h3>
                  <p className="text-gray-600">Plafon PVC berkualitas dengan harga terjangkau</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="font-playfair text-2xl">LAMIWOOD PVC</DialogTitle>
                  <DialogDescription>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <img
                          key={num}
                          src={getImageUrl(`../assets/lamiwood-${num}.jpg`)}
                          alt={`Lamiwood Sample ${num}`}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                    <div className="mt-6 flex justify-center">
                      <a
                        href="https://fliphtml5.com/onnpq/ifrf/E-BROSUR_LAMIWOOD/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gold hover:bg-gold-dark text-white px-6 py-2 rounded-full font-medium transition-colors duration-300 flex items-center gap-2"
                      >
                        Lihat Brosur Lengkap
                      </a>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger className="group">
                <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src={getImageUrl('../assets/javafon-1.jpg')}
                      alt="Javafon PVC"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                    JAVAFON PVC
                  </h3>
                  <p className="text-gray-600">Plafon PVC premium dengan berbagai motif elegan</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="font-playfair text-2xl">JAVAFON PVC</DialogTitle>
                  <DialogDescription>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <img
                          key={num}
                          src={getImageUrl(`../assets/javafon-${num}.jpg`)}
                          alt={`Javafon Sample ${num}`}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                    <div className="mt-6 flex justify-center">
                      <a
                        href="https://fliphtml5.com/onnpq/xknx/BROSUR_JAVAFON/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gold hover:bg-gold-dark text-white px-6 py-2 rounded-full font-medium transition-colors duration-300 flex items-center gap-2"
                      ></a>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Layanan Kami
          </h2>

          {/* Main Service Panel */}
          <div className="flex justify-center"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Dialog>
              <DialogTrigger className="col-span-full md:col-span-3 group mx-auto" style={{ width: '100%', maxWidth: '800px', height: 'auto' }}>
                <div className="bg-marble-light p-4 rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src={getImageUrl('../assets/plafon-main.png')}
                      alt="Jasa Pemasangan Plafon"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">
                    JASA PEMASANGAN PLAFON & RENOVASI
                  </h3>
                  <p className="text-gray-600">
                    Pemasangan plafon PVC & Gypsum untuk rumah, kos, kios, dan lainnya
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="font-playfair text-2xl">JASA PEMASANGAN PLAFON & RENOVASI</DialogTitle>
                  <DialogDescription>
                    <div className="space-y-2 mt-2">
                    <img
                      src={getImageUrl('../assets/plafon-main.png')}
                      alt="Preview Pemasangan Plafon"
                      className="w-full h-auto rounded-lg mb-4"
                    />
                      <p>Pemasangan Plafon PVC & Gypsum untuk rumah, kantor, kios, dan lainnya.</p>
                      <p className="font-medium">Harga mulai dari Rp140.000 per meter lari (termasuk pemasangan Plafon PVC flat dan Lis Plafon).</p>
                      <p>Hanya menerima proyek di Tangerang Raya & Sekitarnya.</p>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            {/* Additional Services */}
            {[
              {
                title: "Plafon Spesial",
                description: "Plafon Motif, Drop Ceiling, LED Drop Ceiling",
                image: "../assets/plafon-special.jpeg"
              },
              {
                title: "Partisi",
                description: "Pemasangan Sekat Partisi Gypsum, GRC, dan PVC (1 muka/2 muka)",
                image: "../assets/partisi.jpg"
              },
              {
                title: "Vinyl & SPC Flooring",
                description: "Pemasangan Vinyl dan SPC flooring",
                image: "../assets/vinyl.jpeg"
              },
              {
                title: "Peredam Suara",
                description: "Pemasangan Peredam Suara (bisa request Rockwool)",
                image: "../assets/soundproof.jpg"
              },
              {
                title: "Pembuatan Rangka Besi",
                description: "Las Rangka Besi Rak, Lemari, Jendela, dan Lain nya",
                image: "../assets/door.jpg"
              },
              {
                title: "Kanopi",
                description: "Pemasangan Kanopi/Spandek (+Bubble Aluminium peredam panas)",
                image: "../assets/canopy.jpg"
              },
              {
                title: "CCTV",
                description: "Pemasangan CCTV (IP Camera Xiaomi C-Series)",
                image: "../assets/cctv.jpeg"
              },
              {
                title: "Meteran PLN",
                description: "Pengurusan Meteran PLN (NIDI dan SLO)",
                image: "../assets/pln.jpg"
              },
              {
                title: "Panel Surya",
                description: "COMING SOON",
                image: "../assets/solar.jpeg"
              }
            ].map((service, index) => (
              <Dialog key={index}>
                <DialogTrigger className="group">
                  <div className="bg-marble-light p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                      <img
                        src={getImageUrl(service.image)}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="font-playfair text-2xl">{service.title}</DialogTitle>
                    <DialogDescription>
                      <div className="space-y-4 mt-4">
                        <img
                          src={getImageUrl(service.image)}
                          alt={service.title}
                          className="w-full rounded-lg"
                        />
                        <p>{service.description}</p>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section id="workflow" className="py-16 bg-marble-light">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Sistem Pengerjaan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Wrench className="w-12 h-12 text-gold" />,
                title: "Survey & Pengukuran",
                description: "Kami akan datang ke lokasi pengerjaan untuk mengukur dan menghitung spesifikasi proyek yang akan dikerjakan"
              },
              {
                icon: <Calendar className="w-12 h-12 text-gold" />,
                title: "Pembuatan Layout",
                description: "Mendesain layout 2D lokasi pengerjaan menggunakan SketchUp agar mendapatkan pengukuran harga yang sesuai dan transparan"
              },
              {
                icon: <Shield className="w-12 h-12 text-gold" />,
                title: "Pengerjaan & Garansi",
                description: "Pengerjaan anti ribet dan profesional dengan garansi kepuasan"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Pertanyaan Umum
          </h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 bg-marble-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Lokasi Kami
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-4">
            Jalan Raya Kutabumi, RT 06 RW 02, Kampung Sondol, Kuta Bumi, Kecamatan Pasar Kemis, Kab.Tangerang.
          </p>
          <a
            href="https://maps.app.goo.gl/wjQvRNvB36KtpVjw6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
          >
            <MapPin className="w-5 h-5" />
            Buka di Google Maps
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <section id="kontak" className="py-16 bg-gold/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ingin konsultasi lebih lanjut?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://wa.me/+6281318835034"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
            >
              WhatsApp (081318835034)
            </a>
            <a
              href="https://wa.me/+6288291903448"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
            >
              WhatsApp (088291903448)
            </a>
          </div>

          {/* Platform Lainnya */}
          <div className="mt-8">
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Kunjungi juga platform lainnya:
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://www.olx.co.id/profile/119954964"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
              >
                OLX
              </a>
              <a
                href="https://id.carousell.com/u/jayaplafon/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
              >
                Carousell
              </a>
              <a
                href="https://www.facebook.com/marketplace/profile/100077316346037"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
              >
                Facebook Marketplace
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Layanan Tambahan
          </h2>
          <div className="max-w-2xl mx-auto bg-marble-light p-8 rounded-lg">
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
              Jasa Angkut Barang / Sewa Pick Up Carry
            </h3>
            <ul className="space-y-4 text-gray-600 mb-6">
              <li>• Menggunakan mobil pick up curry (plat ganjil)</li>
              <li>• Dimensi carry: 2,200 mm x 1,480 mm</li>
              <li>• Melayani area Tangerang Raya</li>
              <li>• Harga menyesuaikan lokasi, jarak, dan muatan</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">   
              <a
                href="https://wa.me/+6285175240440"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-gold text-gold hover:bg-gold hover:text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                085175240440
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;