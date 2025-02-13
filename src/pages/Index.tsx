
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { ChevronDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-marble-light">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
            <span className="inline-block bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium">
              Terpercaya di Tangerang Raya
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Jasa Pemasangan Plafon PVC & Renovasi
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
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
            <p className="text-gray-600">
              Integritas bukan sekadar kata-kata, tapi komitmen yang kami pegang dalam setiap proyek.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Kerja (SANGAT) keras",
              "Kerja cerdas",
              "Kerja tuntas",
              "Kerja ikhlas",
            ].map((principle, index) => (
              <div
                key={index}
                className="bg-marble p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                  {principle}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-marble-light">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Mengapa Memilih Kami?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gold/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ingin konsultasi lebih lanjut?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>
    </div>
  );
};

export default Index;
