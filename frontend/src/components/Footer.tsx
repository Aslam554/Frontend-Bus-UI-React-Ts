import { Bus, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Bus className="h-8 w-8" />
              <span className="font-bold text-xl">HostelBus</span>
            </div>
            <p className="mt-2 text-gray-400">
              Safe and comfortable bus service for hostel students.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+91 9696063912</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>support.hostelbus@tezu.ernet.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>TU Campus Drive</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="/rules" className="hover:text-indigo-400">Booking Rules</a></li>
              <li><a href="/privacy" className="hover:text-indigo-400">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-indigo-400">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HostelBus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;