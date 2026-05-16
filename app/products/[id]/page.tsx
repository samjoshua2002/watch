import ProductPageClient, { Product } from './ProductPageClient'

const products: Product[] = [
  { id: 1, brand: 'Cyrus', name: 'KLEPCYS DICE', price: '₹ 49,00,000', originalPrice: '₹ 52,00,000', rating: 4.8, reviews: 12, sku: 'CY-539-508-TT-A', movement: 'Automatic', case: 'Titanium 42mm', water: '100m', warranty: '2 Years', description: 'The Klepcys Dice is a groundbreaking timepiece featuring a unique dual-time display with retrograde hours and minutes. Crafted in titanium with a striking blue dial, this watch represents the pinnacle of Cyrus innovation.' },
  { id: 2, brand: 'Cyrus', name: 'KLEPCYS GMT', price: '₹ 26,00,000', originalPrice: '₹ 28,00,000', rating: 4.6, reviews: 8, sku: 'CY-539-508-TT-B', movement: 'Automatic GMT', case: 'Steel 42mm', water: '100m', warranty: '2 Years', description: 'The Klepcys GMT combines elegant design with practical dual-time functionality. Perfect for the modern traveler who appreciates fine watchmaking.' },
  { id: 3, brand: 'H. Moser & Cie.', name: 'STREAMLINER', price: '₹ 39,40,000', originalPrice: '₹ 42,00,000', rating: 4.9, reviews: 15, sku: 'HM-6200-1200', movement: 'Automatic Flyback', case: 'Steel 42.3mm', water: '120m', warranty: '2 Years', description: "The Streamliner Flyback Chronograph features Moser's signature fumé dial and integrated bracelet design. A modern classic that pushes the boundaries of contemporary watchmaking." },
  { id: 7, brand: 'Rolex', name: 'Submariner Date', price: '₹ 12,50,000', originalPrice: '₹ 13,20,000', rating: 4.9, reviews: 245, sku: 'RL-126610LN', movement: 'Automatic 3235', case: 'Steel 41mm', water: '300m', warranty: '5 Years', description: 'The Rolex Submariner Date is the quintessential dive watch. With its Oystersteel case, Cerachrom bezel, and Chromalight display, it represents the perfect blend of form and function.' },
  { id: 8, brand: 'Omega', name: 'Speedmaster Moonwatch', price: '₹ 6,80,000', originalPrice: '₹ 7,20,000', rating: 4.8, reviews: 189, sku: 'OM-310.30.42.50.01.001', movement: 'Manual 3861', case: 'Steel 42mm', water: '50m', warranty: '5 Years', description: 'The legendary Moonwatch, worn on all six lunar landings. This Co-Axial Master Chronometer features the iconic hesalite crystal and manual-winding movement.' },
]

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id.toString() }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const id = Number(params.id)
  const product = products.find((p) => p.id === id) || products[0]

  return <ProductPageClient product={product} products={products} id={id} />
}
