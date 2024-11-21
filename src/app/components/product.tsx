import Image from "next/image";

function ProductCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 ">
      {/* Product 1 and 2 */}
      <div className="flex flex-col items-center">
        <div className="border border-black-900 py-10 px-12">
          <Image
            src="/Dior Lip Gloss.png"
            width={200}
            height={100}
            alt="Lip Gloss"
          />
          <p className="text-center py-2">Lip Gloss</p>
          <p className="text-center py-2">Rs 6000</p>
          <div className="flex justify-center">
          <button className="text-center bg-slate-500 text-white py-1 px-8 rounded-xl">
            Buy Now
          </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="border border-black-500 py-10 px-12">
          <Image
            src="/blush on.png"
            width={200}
            height={100}
            alt="Blush on"
          />
          <p className="text-center py-2">Blush on</p>
          <p className="text-center py-2">Rs 8000</p>
          <div className="flex justify-center">
          <button className="bg-slate-500 text-white py-1 px-8 rounded-xl">
            Buy Now
          </button>
          </div>
        </div>
      </div>

      {/* Product 3 */}
      <div className="flex flex-col items-center ">
        <div className="border border-black-500 py-10 px-12">
          <Image
            src="/foundation.png"
            width={200}
            height={100}
            alt="Foundation"
          />
          <p className="text-center py-2">Foundation</p>
          <p className="text-center py-2">Rs 10000</p>
          <div className="flex justify-center">
          <button className="bg-slate-500 text-white py-1 px-8 rounded-xl">
            Buy Now
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;