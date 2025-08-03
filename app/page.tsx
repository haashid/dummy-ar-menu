import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Clock, Star } from "lucide-react"

export default function FastFoodMenu() {
  const pizzaItems = [
    { name: "CHOCLATE", price: "9.99$", popular: true, link: "https://ar-code.com/dHlZCOsCS" },
    { name: "MARGARITA", price: "7.99$", popular: false },
    { name: "CARBONARA", price: "7.99$", popular: false },
    { name: "4 CHEESES", price: "7.99$", popular: false },
    { name: "VEGETARIAN", price: "5.99$", popular: false },
    { name: "CALZONE", price: "5.99$", popular: false },
    { name: "DONUTS", price: "1.99$", popular: false },
    { name: "VEGETABLES", price: "5.99$", popular: false },
    { name: "RUSTIC POTATOES", price: "2.99$", popular: false },
  ]

  const burgerItems = [
    { name: "CHATS", price: "1.99$", popular: true, link: "https://ar-code.com/ZmtBU6T2p" },
    { name: "CHEESEBURGER", price: "1.99$", popular: false },
    { name: "CHICKENBURGER", price: "2.99$", popular: false },
    { name: "FISHBURGER", price: "2.99$", popular: false },
    { name: "SANDWICHES", price: "3.99$", popular: false },
    { name: "CHICKEN NUGGETS", price: "5.99$", popular: false },
    { name: "DONNER", price: "2.99$", popular: false },
    { name: "SHRIMP", price: "7.99$", popular: false },
    { name: "FRENCH FRIES", price: "1.99$", popular: true },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold">FastFood</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#menu" className="hover:text-orange-400 transition-colors">Menu</a>
              <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600">Order Now</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-white">FASTFOOD</span><br />
            <span className="text-orange-500">MENU</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Delicious fast food delivered fresh to your door. From crispy pizzas to juicy burgers, we've got all your favorites!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-3">View Menu</Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-lg px-8 py-3 bg-transparent"
            >
              Order Online
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Pizza Section */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-4xl font-bold text-orange-500">CHOCOLATE</h2>
                  <Image src="/placeholder.svg?height=60&width=60" alt="Chocolate" width={60} height={60} className="rounded-full" />
                </div>
                <div className="space-y-4">
                  {pizzaItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-slate-700 last:border-b-0">
                      <div className="flex items-center space-x-3">
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`font-semibold underline ${item.popular ? "text-orange-400" : "text-white"}`}
                          >
                            {item.name}
                          </a>
                        ) : (
                          <span className={`font-semibold ${item.popular ? "text-orange-400" : "text-white"}`}>
                            {item.name}
                          </span>
                        )}
                        {item.popular && <Badge className="bg-orange-500 text-xs">Popular</Badge>}
                      </div>
                      <div className="flex-1 mx-4 border-b border-dotted border-slate-600"></div>
                      <span className="font-bold text-orange-400">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Burger Section */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-4xl font-bold text-white">BURGER</h2>
                  <Image src="/placeholder.svg?height=60&width=60" alt="Burger" width={60} height={60} className="rounded-full" />
                </div>
                <div className="space-y-4">
                  {burgerItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-slate-700 last:border-b-0">
                      <div className="flex items-center space-x-3">
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`font-semibold underline ${item.popular ? "text-orange-400" : "text-white"}`}
                          >
                            {item.name}
                          </a>
                        ) : (
                          <span className={`font-semibold ${item.popular ? "text-orange-400" : "text-white"}`}>
                            {item.name}
                          </span>
                        )}
                        {item.popular && <Badge className="bg-orange-500 text-xs">Popular</Badge>}
                      </div>
                      <div className="flex-1 mx-4 border-b border-dotted border-slate-600"></div>
                      <span className="font-bold text-orange-400">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-700 border-slate-600 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                <p className="text-gray-300">Hot food delivered in 30 minutes or less</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-700 border-slate-600 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Food</h3>
                <p className="text-gray-300">Fresh ingredients and authentic recipes</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-700 border-slate-600 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Service</h3>
                <p className="text-gray-300">Order anytime, we're always open</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-orange-500" />
                  <span className="text-lg">(555) 123-FOOD</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-orange-500" />
                  <span className="text-lg">123 Food Street, Tasty City, TC 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-orange-500" />
                  <span className="text-lg">Open 24/7</span>
                </div>
              </div>
            </div>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Order Now</h3>
                <p className="text-gray-300 mb-6">Ready to satisfy your cravings? Place your order now!</p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-lg py-3">Start Your Order</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">F</span>
            </div>
            <span className="text-xl font-bold">FastFood</span>
          </div>
          <p className="text-gray-400">© 2024 FastFood Restaurant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
