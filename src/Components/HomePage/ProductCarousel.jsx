import React from 'react'

const ProductCarousel = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="flex space-x-4 overflow-x-auto">
          <div className="min-w-max">
            <div className="p-4 bg-white rounded-lg shadow-lg text-center">
              <img src="/burger.jpg" alt="Burger" className="h-16 mx-auto mb-4" />
              <p>Burger</p>
              <span className="text-red-500">$3.25</span>
            </div>
          </div>
          <div className="min-w-max">
            <div className="p-4 bg-white rounded-lg shadow-lg text-center">
              <img src="/cake.jpg" alt="Cake" className="h-16 mx-auto mb-4" />
              <p>Cake</p>
              <span className="text-red-500">$2.25</span>
            </div>
          </div>
          <div className="min-w-max">
            <div className="p-4 bg-white rounded-lg shadow-lg text-center">
              <img src="/salad.jpg" alt="Salad" className="h-16 mx-auto mb-4" />
              <p>Salad</p>
              <span className="text-red-500">$5.25</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export {ProductCarousel} 