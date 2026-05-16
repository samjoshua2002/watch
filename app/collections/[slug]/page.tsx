import CollectionPageClient, { CollectionInfo, Product } from './CollectionPageClient'

const allProducts: Product[] = [
  { id: 1, brand: 'Cyrus', name: 'KLEPCYS DICE', price: '₹ 49,00,000', originalPrice: '₹ 52,00,000', tag: 'New' },
  { id: 2, brand: 'Cyrus', name: 'KLEPCYS GMT', price: '₹ 26,00,000', originalPrice: '₹ 28,00,000', tag: null },
  { id: 3, brand: 'H. Moser & Cie.', name: 'STREAMLINER', price: '₹ 39,40,000', originalPrice: '₹ 42,00,000', tag: 'Limited' },
  { id: 4, brand: 'Rolex', name: 'Submariner Date', price: '₹ 12,50,000', originalPrice: '₹ 13,20,000', tag: 'Best Seller' },
  { id: 5, brand: 'Omega', name: 'Speedmaster Moonwatch', price: '₹ 6,80,000', originalPrice: '₹ 7,20,000', tag: null },
  { id: 6, brand: 'Cartier', name: 'Santos de Cartier', price: '₹ 8,90,000', originalPrice: '₹ 9,50,000', tag: 'Sale' },
  { id: 7, brand: 'TAG Heuer', name: 'Carrera Chronograph', price: '₹ 5,40,000', originalPrice: null, tag: null },
  { id: 8, brand: 'Breitling', name: 'Navitimer B01', price: '₹ 7,20,000', originalPrice: null, tag: null },
  { id: 9, brand: 'IWC', name: "Pilot's Watch", price: '₹ 6,10,000', originalPrice: null, tag: null },
  { id: 10, brand: 'Patek Philippe', name: 'Nautilus 5711', price: '₹ 85,00,000', originalPrice: null, tag: 'Rare' },
  { id: 11, brand: 'Audemars Piguet', name: 'Royal Oak', price: '₹ 42,50,000', originalPrice: null, tag: null },
  { id: 12, brand: 'Frederique Constant', name: 'Classics Index', price: '₹ 1,80,000', originalPrice: '₹ 2,00,000', tag: 'Sale' },
]

const collectionInfo: Record<string, CollectionInfo> = {
  'new-arrivals': { title: 'New Arrivals', description: 'The latest timepieces to arrive at our boutiques. Be the first to discover these exceptional watches.' },
  'featured': { title: 'Featured Watches', description: 'Our handpicked selection of the most exceptional timepieces available now.' },
  'special-offers': { title: 'Special Offers', description: 'Exclusive deals on luxury watches. Limited time offers on selected timepieces.' },
  'pre-owned': { title: 'Pre-Owned Watches', description: 'Certified pre-owned luxury watches, meticulously inspected and authenticated.' },
  'jewellery': { title: 'Jewellery Watches', description: 'Exquisite timepieces adorned with precious stones and metals.' },
  'lifestyle': { title: 'Lifestyle', description: 'Luxury accessories and lifestyle products for the discerning collector.' },
}

export function generateStaticParams() {
  return Object.keys(collectionInfo).map((slug) => ({ slug }))
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const info = collectionInfo[params.slug] || { title: 'Collection', description: 'Browse our curated collection of luxury timepieces.' }

  return <CollectionPageClient allProducts={allProducts} info={info} />
}
