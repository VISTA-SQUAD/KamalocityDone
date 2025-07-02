import React from 'react';
import { X } from 'lucide-react';

interface PerfumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PerfumeModal = ({ isOpen, onClose }: PerfumeModalProps) => {
  const [activeCollection, setActiveCollection] = React.useState<'men' | 'women'>('men');

  if (!isOpen) return null;

  const mensPerfumes = {
    arabic: [
      "Arabic Musk",
      "Arabic Musk Al Whazir", 
      "Gucci Oud",
      "Sandal Rose",
      "Suzerain",
      "Sultan",
      "White Musk",
      "White Oudh"
    ],
    regular: [
      "Antonio Banderas", "Aramis Original", "Armani Code", "Armani Black Code",
      "Azzaro Chrome", "Azzaro Chrome Legend", "Boss Bottled", "Boss Element Aqua",
      "Bvlgari Aqua", "Bvlgari Blue", "Bvlgari Man in Black", "CK One",
      "Chanel Blue", "Cool Water", "Creed Adventus", "Dolce & Gabbana",
      "D&G Light Blue", "David Beckham Signature", "Diesel for Men", "Diesel Only the Brave",
      "Dior Sauvage", "DKNY", "Dunhill Blue", "Dunhill Desire", "Dunhill Red",
      "English Blazer", "Fahrenheit", "Ferrari Black", "Guerlain Homme", "Giorgio Armani",
      "Gucci Rush", "Hugo Boss Blue", "Hugo Boss", "Hugo Boss Orange", "Issey Miyake",
      "Issey Blue", "Jean Paul Gaultier", "Joop Original", "Kouros", "Lacoste Original",
      "Lacoste Blue", "M-7", "Michael Kors", "Mont Blanc Legend", "Old Spice",
      "Opium", "Paco R Black XS", "Paco R One Million", "Paco R Invictus", "Ted Lapidus",
      "Terre D'Hermes", "Tom Ford Noir", "Aramis Havana", "Tommy Boy", "Tsar",
      "Versace", "212 V.I.P", "Gianni Versace", "Black Musk", "Mr Burberry",
      "Escada", "Armani Emporio", "Angel", "Lacoste White", "Adidas",
      "Guess", "Tom Ford Unisex", "Armani Divine", "Euphoria", "Gucci Guilty Black",
      "Dunhill Fresh", "Givenchy (Gentlemen Only)", "Tsar Black"
    ]
  };

  const womensPerfumes = [
    "Armani Code", "Aromatics Elixir", "Angel", "Celine Dio-Magic", "Black Opium",
    "Britney Spears Curious", "Britney Spears Fantasy", "Bvlgari Omnia Crystalline", "Chloe", "Chloe Narcisse",
    "Coty Exclamation", "Chance Chanel", "Chanel No 5", "Chanel Allure", "Coco Mademoiselle",
    "Coppelia", "DKNY", "DKNY Be Delicious", "Dolce & Gabbana", "D&G Light Blue",
    "Elie Saab Le Parfum", "5th Avenue", "Far Away-Avon", "Giorgio Armani Si", "Gucci Rush",
    "Gucci Guilty", "So Good Girl", "Hugo Boss", "Happy Clinic", "Heat Beyoncé",
    "Hypnotic Poison", "Issey Miyake", "J'adore", "Jean Paul Gaultier", "JS",
    "Kenzo Flowers", "Knowing", "Lacoste Pour Ferme", "Lacoste Pink", "Lady One Million",
    "La Vie Est Belle", "Mediterranean", "Marc Jacobs Daisy Eau So Fresh", "Narcissi Rodriguez", "Nicky Minaj Pink Friday",
    "Paco R Olympea", "Panache", "Pleasure", "Poison", "Paris Hilton Teasen",
    "Provocative", "Ralph Lauren Blue", "Red Door", "Red Door Night", "Tommy Girl",
    "Thierry Mugler Alien", "Versace Bright Crystal", "YSL-Opium", "212 Carolina Herrera", "White Diamond",
    "Kim Kardashian Kim De Kim", "Jimmy Choo", "Little Black Dress", "I Do Life", "Victoria's Secret Bombshell",
    "Michael Kors", "Gucci Rush II", "DKNY Green Apple", "C.K Euphoria", "Versace Dylan Blue",
    "Baby Johnson", "Britney Fantasy Midnight", "Crazy Love by Armour", "First by Lee Van Cleef", "Narciso Rouge",
    "Our Moment", "Royal Desire", "Azaro Now", "Dunhill For Her", "CK One Unisex",
    "Bvlgari Blue", "Channel Premium", "Euphoria Gold", "Issey Miyaki Green", "Beautiful",
    "Versace Rose", "Versace Gold", "Shakira", "Escado Born in Paradise", "212 VIP Rose",
    "212 VIP", "Guess", "Black XS Vanilla", "Taboo"
  ];

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="bg-kamalo-dark border border-gray-700 rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-3xl font-bold text-white font-serif">Perfume Collection</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Collection Toggles */}
        <div className="flex border-b border-gray-700">
          <button
            onClick={() => setActiveCollection('men')}
            className={`flex-1 py-4 px-6 font-semibold text-lg transition-colors ${
              activeCollection === 'men' 
                ? 'bg-kamalo-red text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            🟦 Men's Collection
          </button>
          <button
            onClick={() => setActiveCollection('women')}
            className={`flex-1 py-4 px-6 font-semibold text-lg transition-colors ${
              activeCollection === 'women' 
                ? 'bg-kamalo-red text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            🟪 Women's Collection
          </button>
        </div>

        {/* Perfume Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeCollection === 'men' ? (
            <div className="space-y-8">
              {/* Arabic Scents */}
              <div>
                <h3 className="text-2xl font-bold text-kamalo-gold mb-4 font-serif">Arabic Scents</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {mensPerfumes.arabic.map((perfume, index) => (
                    <div key={index} className="bg-black/50 rounded-lg p-3 border border-gray-800 text-center">
                      <p className="text-white font-medium text-sm">{perfume}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regular Scents */}
              <div>
                <h3 className="text-2xl font-bold text-kamalo-gold mb-4 font-serif">Regular Scents</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {mensPerfumes.regular.map((perfume, index) => (
                    <div key={index} className="bg-black/50 rounded-lg p-3 border border-gray-800 text-center">
                      <p className="text-white font-medium text-sm">{perfume}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-2xl font-bold text-kamalo-gold mb-4 font-serif">Women's Collection</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {womensPerfumes.map((perfume, index) => (
                  <div key={index} className="bg-black/50 rounded-lg p-3 border border-gray-800 text-center">
                    <p className="text-white font-medium text-sm">{perfume}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pricing Section */}
          <div className="mt-8 bg-kamalo-red/20 rounded-lg p-6 border border-kamalo-red">
            <h3 className="text-2xl font-bold text-kamalo-gold mb-4 font-serif">🟡 Double Up Oil Prices</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-black/50 rounded-lg p-4">
                <p className="text-white font-bold text-lg">25ml</p>
                <p className="text-kamalo-gold font-bold text-xl">R35</p>
              </div>
              <div className="bg-black/50 rounded-lg p-4">
                <p className="text-white font-bold text-lg">50ml</p>
                <p className="text-kamalo-gold font-bold text-xl">R70</p>
              </div>
              <div className="bg-black/50 rounded-lg p-4">
                <p className="text-white font-bold text-lg">100ml</p>
                <p className="text-kamalo-gold font-bold text-xl">R150</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfumeModal;