@@ .. @@
                  {/* Report Image */}
                  <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-white border border-purple-200/50">
                    <img
                      src="/reportOVAI.png"
                      alt="OvAI Implantation Score Report - Sample showing patient data, score of 7.8, and analysis charts"
-                     className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
+                     className="w-full h-full object-contain transition-all duration-500 hover:scale-105"
                      onError={(e) => {
                        console.log('OvAI report image failed to load');
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.classList.remove('hidden');
                          fallback.classList.add('flex');
                        }
                      }}
                      onLoad={() => {
                        console.log('OvAI report image loaded successfully');
                      }}
                    />
-                   <div className="hidden w-full h-full bg-gradient-to-br from-purple-50 to-blue-50 items-center justify-center border-2 border-purple-200">
+                   <div className="hidden w-full h-full bg-gradient-to-br from-purple-50 to-blue-50 items-center justify-center border-2 border-purple-200 flex">
                      <div className="text-center p-8">
+                       {/* Try to show the image in fallback too */}
+                       <img
+                         src="/reportOVAI.png"
+                         alt="OvAI Report"
+                         className="w-full h-auto max-h-64 object-contain mb-4 rounded-lg"
+                         onError={(e) => {
+                           // If image fails here too, hide it and show placeholder
+                           const target = e.currentTarget as HTMLImageElement;
+                           target.style.display = 'none';
+                         }}
+                       />
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                          <Brain className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">OvAI Report</h3>
                        <p className="text-gray-600 text-sm">Sample Implantation Score Report</p>
                      </div>
                    </div>
                  </div>