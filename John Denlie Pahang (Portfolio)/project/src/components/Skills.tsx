@@ .. @@
 export default function Skills() {
   return (
   )
 }
-    <section id="skills" className="py-20 bg-gray-50">
+    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
+      {/* Animated background pattern */}
+      <div className="absolute inset-0 opacity-5">
+        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 transform rotate-12 scale-150"></div>
+      </div>
+      
       <div className="container mx-auto px-6">
-        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Skills & Technologies</h2>
-        <div className="grid md:grid-cols-3 gap-8">
+        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 animate-fade-in-up">Skills & Technologies</h2>
+        <div className="grid md:grid-cols-3 gap-8 animate-stagger-in">
           <div className="bg-white p-8 rounded-xl shadow-lg">
-            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
-              <Code className="w-8 h-8 text-blue-600" />
+            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300 hover:rotate-12">
+              <Code className="w-8 h-8 text-blue-600 animate-pulse" />
             </div>
-            <h3 className="text-xl font-semibold mb-4 text-gray-800">Frontend Development</h3>
+            <h3 className="text-xl font-semibold mb-4 text-gray-800 hover:text-blue-600 transition-colors duration-300">Frontend Development</h3>
             <ul className="space-y-2 text-gray-600">
-              <li>React & Next.js</li>
-              <li>TypeScript</li>
-              <li>Tailwind CSS</li>
-              <li>Vue.js</li>
+              <li className="hover:text-blue-600 transition-colors duration-200 hover:translate-x-2 transform">React & Next.js</li>
+              <li className="hover:text-blue-600 transition-colors duration-200 hover:translate-x-2 transform">TypeScript</li>
+              <li className="hover:text-blue-600 transition-colors duration-200 hover:translate-x-2 transform">Tailwind CSS</li>
+              <li className="hover:text-blue-600 transition-colors duration-200 hover:translate-x-2 transform">Vue.js</li>
             </ul>
           </div>
           
           <div className="bg-white p-8 rounded-xl shadow-lg">
-            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
-              <Server className="w-8 h-8 text-green-600" />
+            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300 hover:rotate-12">
+              <Server className="w-8 h-8 text-green-600 animate-pulse animation-delay-300" />
             </div>
-            <h3 className="text-xl font-semibold mb-4 text-gray-800">Backend Development</h3>
+            <h3 className="text-xl font-semibold mb-4 text-gray-800 hover:text-green-600 transition-colors duration-300">Backend Development</h3>
             <ul className="space-y-2 text-gray-600">
-              <li>Node.js & Express</li>
-              <li>Python & Django</li>
-              <li>PostgreSQL & MongoDB</li>
-              <li>REST & GraphQL APIs</li>
+              <li className="hover:text-green-600 transition-colors duration-200 hover:translate-x-2 transform">Node.js & Express</li>
+              <li className="hover:text-green-600 transition-colors duration-200 hover:translate-x-2 transform">Python & Django</li>
+              <li className="hover:text-green-600 transition-colors duration-200 hover:translate-x-2 transform">PostgreSQL & MongoDB</li>
+              <li className="hover:text-green-600 transition-colors duration-200 hover:translate-x-2 transform">REST & GraphQL APIs</li>
             </ul>
           </div>
           
           <div className="bg-white p-8 rounded-xl shadow-lg">
-            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
-              <Palette className="w-8 h-8 text-purple-600" />
+            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300 hover:rotate-12">
+              <Palette className="w-8 h-8 text-purple-600 animate-pulse animation-delay-600" />
             </div>
-            <h3 className="text-xl font-semibold mb-4 text-gray-800">Design & Tools</h3>
+            <h3 className="text-xl font-semibold mb-4 text-gray-800 hover:text-purple-600 transition-colors duration-300">Design & Tools</h3>
             <ul className="space-y-2 text-gray-600">
-              <li>Figma & Adobe XD</li>
-              <li>Photoshop & Illustrator</li>
-              <li>Git & GitHub</li>
-              <li>Docker & AWS</li>
+              <li className="hover:text-purple-600 transition-colors duration-200 hover:translate-x-2 transform">Figma & Adobe XD</li>
+              <li className="hover:text-purple-600 transition-colors duration-200 hover:translate-x-2 transform">Photoshop & Illustrator</li>
+              <li className="hover:text-purple-600 transition-colors duration-200 hover:translate-x-2 transform">Git & GitHub</li>
+              <li className="hover:text-purple-600 transition-colors duration-200 hover:translate-x-2 transform">Docker & AWS</li>
             </ul>
           </div>
         </div>