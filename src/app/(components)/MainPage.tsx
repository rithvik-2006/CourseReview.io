"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Star, ChevronLeft, ChevronRight } from 'lucide-react'

export default function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    { id: 1, text: "This platform helped me choose the perfect courses for my major!", author: "Sarah J., Computer Science" },
    { id: 2, text: "I love how easy it is to find honest reviews about professors and courses.", author: "Mike T., Business Administration" },
    { id: 3, text: "The detailed course breakdowns saved me from taking classes that wouldn't fit my learning style.", author: "Emily R., Psychology" },
  ]

  const featuredCourses = [
    { id: 1, name: "Introduction to Machine Learning", professor: "Dr. Alan Turing", rating: 4.8 },
    { id: 2, name: "Advanced Organic Chemistry", professor: "Dr. Marie Curie", rating: 4.7 },
    { id: 3, name: "Modern World History", professor: "Dr. Howard Zinn", rating: 4.9 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">CourseReview</h1>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Courses</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Professors</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Log In</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">Sign Up</button>
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Find Your Perfect Course</h2>
            <p className="text-xl mb-8">Read reviews, compare professors, and make informed decisions about your education.</p>
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search for courses or professors..."
                className="w-full px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600">
                <Search size={24} />
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8 text-center">Recent Reviews</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((review) => (
                <motion.div
                  key={review}
                  className="bg-gray-100 p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: review * 0.1 }}
                >
                  <h4 className="font-bold mb-2">Introduction to Psychology</h4>
                  <p className="text-gray-600 mb-4">Professor: Dr. Jane Smith</p>
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-gray-600">5.0</span>
                  </div>
                  <p className="text-gray-700">"Great introductory course! Dr. Smith explains complex concepts in an easy-to-understand way."</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8 text-center">What Students Are Saying</h3>
            <div className="relative max-w-3xl mx-auto">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <p className="text-xl mb-4">"{testimonials[currentTestimonial].text}"</p>
                <p className="text-gray-600">- {testimonials[currentTestimonial].author}</p>
              </motion.div>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-md"
              >
                <ChevronLeft size={24} className="text-blue-600" />
              </button>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-md"
              >
                <ChevronRight size={24} className="text-blue-600" />
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8 text-center">Featured Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  className="bg-gray-100 p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="font-bold mb-2">{course.name}</h4>
                  <p className="text-gray-600 mb-4">Professor: {course.professor}</p>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className={`${star <= Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="ml-2 text-gray-600">{course.rating.toFixed(1)}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">CourseReview</h4>
              <p>Helping students make informed decisions about their education since 2023.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <p>Email: support@coursereview.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 CourseReview. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}