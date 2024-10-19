import Header from './components/Header';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import HomeSection from './components/Home'
import Footer from './components/Footer';
import AboutSection from './components/About'
import FAQSection from './components/Faqs'
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <HomeSection/>
        <AboutSection/>
        <Services />
        <FAQSection/>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;