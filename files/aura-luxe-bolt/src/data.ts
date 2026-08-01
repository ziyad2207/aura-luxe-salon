import type { Service, Stylist, Package, Product, Review, FaqItem } from '@/types';

export const SERVICES: Service[] = [
  { id: 'haircut', name: 'Hair Cut', description: 'Precision cuts tailored to your face shape and lifestyle by master stylists.', price: '₹1,200+', duration: '45 min', icon: 'scissors' },
  { id: 'styling', name: 'Hair Styling', description: 'Red-carpet ready blowouts, curls, and editorial finishes for every occasion.', price: '₹1,800+', duration: '60 min', icon: 'wind' },
  { id: 'coloring', name: 'Hair Coloring', description: 'Balayage, highlights, and bespoke color crafted with premium ammonia-free lines.', price: '₹3,500+', duration: '120 min', icon: 'palette' },
  { id: 'keratin', name: 'Keratin Treatment', description: 'Frizz-taming, mirror-shine smoothening that lasts up to five months.', price: '₹6,000+', duration: '150 min', icon: 'sparkles' },
  { id: 'spa', name: 'Hair Spa', description: 'Deep-nourishing rituals with scalp massage and restorative masques.', price: '₹2,200+', duration: '75 min', icon: 'droplet' },
  { id: 'facial', name: 'Luxury Facial', description: 'Bespoke facials using gold, caviar, and botanical actives for visible radiance.', price: '₹3,800+', duration: '90 min', icon: 'sun' },
  { id: 'bridal', name: 'Bridal Makeup', description: 'Full bridal artistry — trials, HD makeup, hair, and draping for your big day.', price: '₹25,000+', duration: '180 min', icon: 'crown' },
  { id: 'nails', name: 'Nail Art', description: 'Gel extensions, chrome, and hand-painted couture nail designs.', price: '₹1,500+', duration: '75 min', icon: 'hand' },
  { id: 'waxing', name: 'Waxing', description: 'Silky-smooth waxing with hypoallergenic premium waxes for sensitive skin.', price: '₹800+', duration: '30 min', icon: 'leaf' },
  { id: 'massage', name: 'Massage Therapy', description: 'Aromatherapy and deep-tissue rituals to melt away tension and restore calm.', price: '₹2,800+', duration: '60 min', icon: 'heart' },
  { id: 'skin', name: 'Skin Treatment', description: 'Medically-backed facials targeting acne, pigmentation, and aging concerns.', price: '₹4,200+', duration: '90 min', icon: 'shield' },
  { id: 'brow', name: 'Eyebrow Shaping', description: 'Architectural brow design, tinting, and lamination for a polished frame.', price: '₹900+', duration: '30 min', icon: 'eye' },
];

export const STYLISTS: Stylist[] = [
  {
    id: 'aria',
    name: 'Aria Malhotra',
    role: 'Creative Director & Master Colorist',
    experience: '15 years',
    image: 'https://images.pexels.com/photos/3993458/pexels-photo-3993458.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    specialties: ['Balayage', 'Color Correction', 'Editorial'],
    instagram: '@aria.luxe',
  },
  {
    id: 'kabir',
    name: 'Kabir Shah',
    role: 'Senior Stylist & Barbering Lead',
    experience: '12 years',
    image: 'https://images.pexels.com/photos/8468140/pexels-photo-8468140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    specialties: ['Precision Cuts', 'Men\'s Grooming', 'Texture'],
    instagram: '@kabir.cuts',
  },
  {
    id: 'sienna',
    name: 'Sienna Rao',
    role: 'Bridal Artist & Makeup Lead',
    experience: '10 years',
    image: 'https://images.pexels.com/photos/8834020/pexels-photo-8834020.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    specialties: ['Bridal', 'HD Makeup', 'Updos'],
    instagram: '@sienna.beauty',
  },
  {
    id: 'noor',
    name: 'Noor Khan',
    role: 'Spa & Skin Specialist',
    experience: '9 years',
    image: 'https://images.pexels.com/photos/3993302/pexels-photo-3993302.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    specialties: ['Facials', 'Skincare', 'Aromatherapy'],
    instagram: '@noor.glow',
  },
];

export const PACKAGES: Package[] = [
  {
    id: 'silver',
    name: 'Silver',
    price: '₹4,999',
    period: 'per visit',
    description: 'An elevated essentials ritual for your monthly refresh.',
    features: ['Signature Hair Cut', 'Hair Spa Ritual', 'Classic Manicure', 'Complimentary beverage'],
  },
  {
    id: 'gold',
    name: 'Gold',
    price: '₹9,999',
    period: 'per visit',
    description: 'Our most-loved transformation for a complete glow-up.',
    features: ['Cut + Blow-dry', 'Global Color or Balayage', 'Luxury Facial', 'Nail Art', '10% off products'],
    popular: true,
    badge: 'Most Popular',
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: '₹19,999',
    period: 'per visit',
    description: 'Full-day head-to-toe artistry for the ultimate indulgence.',
    features: ['Keratin Treatment', 'Bridal Trial Makeup', 'Spa + Massage', 'Skin Treatment', 'Lunch included', '20% off products'],
  },
  {
    id: 'bridal',
    name: 'Bridal Couture',
    price: '₹49,999',
    period: 'package',
    description: 'A complete bridal journey from trial to the wedding morning.',
    features: ['2 Trial Sessions', 'Wedding-day HD Makeup', 'Hair + Draping', 'Mehendi & Sangeet looks', 'Touch-up kit', 'Dedicated artist'],
    badge: 'Bridal',
  },
];

export const PRODUCTS: Product[] = [
  { id: 'p1', name: 'Gold Infusion Serum', category: 'Skincare', price: 3200, image: 'https://images.pexels.com/photos/3750640/pexels-photo-3750640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', description: '24K gold and peptides for luminous, firm skin.' },
  { id: 'p2', name: 'Botanical Repair Oil', category: 'Haircare', price: 1800, image: 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', description: 'Argan and marula blend for deep nourishment and shine.' },
  { id: 'p3', name: 'Velvet Matte Lipstick', category: 'Makeup', price: 1450, image: 'https://images.pexels.com/photos/7664873/pexels-photo-7664873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', description: 'Long-wear nude-toned matte in a couture bullet.' },
  { id: 'p4', name: 'Champagne Eye Palette', category: 'Makeup', price: 2600, image: 'https://images.pexels.com/photos/30634963/pexels-photo-30634963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', description: 'Twelve gilded neutrals from soft satin to molten foil.' },
  { id: 'p5', name: 'Hydra Glow Cream', category: 'Skincare', price: 2400, image: 'https://images.pexels.com/photos/7810600/pexels-photo-7810600.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', description: '72-hour hydration with niacinamide and squalane.' },
  { id: 'p6', name: 'Couture Lip Set', category: 'Makeup', price: 3900, image: 'https://images.pexels.com/photos/6527704/pexels-photo-6527704.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', description: 'A curated trio of our most-wanted nude mattes.' },
];

export const REVIEWS: Review[] = [
  { id: 'r1', name: 'Priya Sharma', service: 'Bridal Makeup', rating: 5, text: 'Sienna made me feel like the most beautiful version of myself on my wedding day. Every detail was flawless and lasted through tears, dancing, and everything in between.', avatar: 'https://images.pexels.com/photos/15507425/pexels-photo-15507425.jpeg?auto=compress&cs=tinysrgb&h=120&w=120', date: '2 weeks ago' },
  { id: 'r2', name: 'Arjun Mehta', service: 'Hair Cut & Styling', rating: 5, text: 'Kabir understands hair like no one else. The best cut I have had in years — clean, modern, and effortless. The whole experience feels like a five-star hotel.', avatar: 'https://images.pexels.com/photos/26832816/pexels-photo-26832816.jpeg?auto=compress&cs=tinysrgb&h=120&w=120', date: '1 month ago' },
  { id: 'r3', name: 'Leila Fernandez', service: 'Keratin Treatment', rating: 5, text: 'My hair has never been this smooth and manageable. Aria is a true artist with color. Worth every rupee and the salon is absolutely stunning.', avatar: 'https://images.pexels.com/photos/696287/pexels-photo-696287.jpeg?auto=compress&cs=tinysrgb&h=120&w=120', date: '3 weeks ago' },
  { id: 'r4', name: 'Sneha Iyer', service: 'Luxury Facial', rating: 5, text: 'Noor transformed my skin in one session. The gold facial left me glowing for days. The ambiance, the products, the care — pure luxury.', avatar: 'https://images.pexels.com/photos/3916358/pexels-photo-3916358.jpeg?auto=compress&cs=tinysrgb&h=120&w=120', date: '5 days ago' },
  { id: 'r5', name: 'Rohan Kapoor', service: 'Spa & Massage', rating: 5, text: 'Came in stressed, left floating. The aromatherapy massage was transcendent and the space is so calming. This is my new monthly ritual.', avatar: 'https://images.pexels.com/photos/4783292/pexels-photo-4783292.jpeg?auto=compress&cs=tinysrgb&h=120&w=120', date: '2 months ago' },
  { id: 'r6', name: 'Ananya Gupta', service: 'Hair Coloring', rating: 5, text: 'The balayage Aria created is a work of art. Natural, dimensional, and exactly what I wanted. Aura Luxe is in a league of its own.', avatar: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&h=120&w=120', date: '6 days ago' },
];

export const FAQS: FaqItem[] = [
  { q: 'How early should I book my appointment?', a: 'We recommend booking 3–5 days in advance, and 4–6 weeks ahead for bridal packages and senior stylists, as weekends fill quickly.' },
  { q: 'What is your cancellation policy?', a: 'Appointments can be rescheduled free of charge up to 24 hours before your slot. Late cancellations may incur a 25% fee of the booked service.' },
  { q: 'Do you offer consultations before treatments?', a: 'Yes — complimentary 15-minute consultations are available for color, keratin, and bridal services so we can design the perfect plan for you.' },
  { q: 'Are your products cruelty-free and vegan?', a: 'Our curated product lines are predominantly vegan and cruelty-free. Your stylist will happily share the full ingredient philosophy.' },
  { q: 'Do you provide services for large bridal parties?', a: 'Absolutely. Our Bridal Couture package can be extended to family and the bridal party with dedicated artists and a private suite.' },
  { q: 'Is parking available at the salon?', a: 'Yes, valet parking is complimentary for all guests, and we are steps from the metro station for your convenience.' },
];

export const GALLERY_IMAGES = [
  { before: 'https://images.pexels.com/photos/7755216/pexels-photo-7755216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', after: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Color Transformation' },
  { before: 'https://images.pexels.com/photos/4783292/pexels-photo-4783292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', after: 'https://images.pexels.com/photos/14615063/pexels-photo-14615063.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Blow-Dry Finish' },
  { before: 'https://images.pexels.com/photos/12774463/pexels-photo-12774463.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', after: 'https://images.pexels.com/photos/15507425/pexels-photo-15507425.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Bridal Updo' },
  { before: 'https://images.pexels.com/photos/3916358/pexels-photo-3916358.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', after: 'https://images.pexels.com/photos/30809943/pexels-photo-30809943.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Facial Glow' },
];

export const INSTAGRAM_IMAGES = [
  'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/3750640/pexels-photo-3750640.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/14615063/pexels-photo-14615063.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/15507425/pexels-photo-15507425.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/7810600/pexels-photo-7810600.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/6171/hairstyle-hair-wedding-bride.jpg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/13068377/pexels-photo-13068377.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
];

export const TIME_SLOTS = [
  '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
  '6:00 PM', '7:00 PM',
];
