<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#142B58", // Navy
              "secondary": "#0D9488", // Teal
              "accent": "#F97316", // Orange
              "surface": "#FFFFFF",
              "background": "#F8FAFC",
              "on-surface": "#0F172A",
              "on-surface-variant": "#475569",
              "outline": "#E2E8F0",
              "primary-container": "#E2E8F0",
              "on-primary-container": "#142B58"
            },
            borderRadius: {
              "DEFAULT": "0.5rem",
              "lg": "0.75rem",
              "xl": "1rem",
              "full": "9999px"
            },
            fontFamily: {
              "headline": ["Manrope", "sans-serif"],
              "body": ["Manrope", "sans-serif"],
              "label": ["Manrope", "sans-serif"]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .form-shadow {
            box-shadow: 0 20px 50px -12px rgba(20, 43, 88, 0.08);
        }
        .vibrant-gradient {
            background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body selection:bg-accent/20">
<!-- TopNavBar -->
<nav class="top-0 sticky z-50 bg-white/80 backdrop-blur-md border-b border-outline">
<div class="flex justify-between items-center w-full px-6 py-4 max-w-screen-xl mx-auto">
<div class="text-xl font-extrabold tracking-tight text-primary">Elite Finish</div>
<div class="hidden md:flex items-center gap-8">
<a class="text-on-surface-variant hover:text-primary transition-colors font-medium text-sm" href="#">Services</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-medium text-sm" href="#">About</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-medium text-sm" href="#">Portfolio</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-medium text-sm" href="#">Process</a>
</div>
<button class="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all shadow-sm">
            Request Quote
        </button>
</div>
</nav>
<main>
<!-- Contact Hero Section -->
<section class="max-w-screen-xl mx-auto px-6 pt-16 pb-24">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
<!-- Left Column: Modern Editorial Content -->
<div class="lg:col-span-5 space-y-10">
<div class="space-y-4">
<div class="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-wider">
<span class="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></span>
                        Contact &amp; Consultation
                    </div>
<h1 class="font-headline text-5xl md:text-6xl font-extrabold text-primary leading-[1.1] tracking-tight">
                        Elevate your <span class="text-secondary">vision</span> to reality.
                    </h1>
<p class="text-on-surface-variant text-lg leading-relaxed max-w-md">
                        From heritage Hobart restorations to high-tech commercial spaces, our master craftspeople deliver elite finishes that stand the test of time.
                    </p>
</div>
<div class="space-y-6">
<div class="flex items-center gap-5 p-4 rounded-xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
<div class="w-12 h-12 flex items-center justify-center rounded-lg bg-primary text-white group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">call</span>
</div>
<div>
<p class="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Direct Line</p>
<p class="text-lg font-bold text-primary">+61 3 6200 0000</p>
</div>
</div>
<div class="flex items-center gap-5 p-4 rounded-xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
<div class="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary text-white group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">mail</span>
</div>
<div>
<p class="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Email Inquiry</p>
<p class="text-lg font-bold text-primary">hello@elitefinish.com.au</p>
</div>
</div>
</div>
<div class="p-6 bg-white rounded-2xl border border-outline form-shadow">
<h3 class="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
<span class="material-symbols-outlined text-sm">schedule</span> Studio Hours
                    </h3>
<div class="space-y-3">
<div class="flex justify-between text-sm">
<span class="text-on-surface-variant font-medium">Weekdays</span>
<span class="text-primary font-bold">08:00 — 18:00</span>
</div>
<div class="flex justify-between text-sm">
<span class="text-on-surface-variant font-medium">Saturday</span>
<span class="text-primary font-bold">09:00 — 14:00</span>
</div>
<div class="pt-2 border-t border-outline flex justify-between items-center">
<span class="text-on-surface-variant text-xs italic">Sunday</span>
<span class="px-2 py-0.5 bg-slate-100 rounded text-[10px] font-bold uppercase text-on-surface-variant">By Appointment</span>
</div>
</div>
</div>
</div>
<!-- Right Column: Sleek Form -->
<div class="lg:col-span-7">
<div class="bg-white p-8 md:p-12 rounded-3xl border border-outline form-shadow">
<div class="mb-10">
<h2 class="font-headline text-3xl font-extrabold text-primary mb-2">Request a Project Quote</h2>
<p class="text-on-surface-variant text-sm">Complete the details below and our team will provide a tailored estimate within 24 hours.</p>
</div>
<form class="space-y-8">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="space-y-2">
<label class="block text-xs font-bold uppercase tracking-wider text-primary">Full Name</label>
<input class="w-full bg-slate-50 border-0 border-b-2 border-slate-200 py-3 focus:ring-0 focus:border-secondary transition-all text-on-surface placeholder:text-slate-400" placeholder="Julian Vane" type="text"/>
</div>
<div class="space-y-2">
<label class="block text-xs font-bold uppercase tracking-wider text-primary">Project Type</label>
<select class="w-full bg-slate-50 border-0 border-b-2 border-slate-200 py-3 focus:ring-0 focus:border-secondary transition-all text-on-surface cursor-pointer appearance-none">
<option>Residential Painting</option>
<option>Commercial Services</option>
<option>Heritage Restoration</option>
<option>Industrial Coatings</option>
</select>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="space-y-2">
<label class="block text-xs font-bold uppercase tracking-wider text-primary">Project Location</label>
<input class="w-full bg-slate-50 border-0 border-b-2 border-slate-200 py-3 focus:ring-0 focus:border-secondary transition-all text-on-surface placeholder:text-slate-400" placeholder="e.g. Sandy Bay, TAS" type="text"/>
</div>
<div class="space-y-2">
<label class="block text-xs font-bold uppercase tracking-wider text-primary">Timeline</label>
<select class="w-full bg-slate-50 border-0 border-b-2 border-slate-200 py-3 focus:ring-0 focus:border-secondary transition-all text-on-surface cursor-pointer appearance-none">
<option>Immediate</option>
<option>1-3 Months</option>
<option>Next Season</option>
</select>
</div>
</div>
<div class="space-y-2">
<label class="block text-xs font-bold uppercase tracking-wider text-primary">Project Description</label>
<textarea class="w-full bg-slate-50 border-0 border-b-2 border-slate-200 py-3 focus:ring-0 focus:border-secondary transition-all text-on-surface placeholder:text-slate-400 resize-none" placeholder="Tell us about your project vision..." rows="3"></textarea>
</div>
<div class="pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div class="flex items-center gap-2 text-on-surface-variant text-xs font-semibold">
<span class="material-symbols-outlined text-secondary fill-1" style="font-variation-settings: 'FILL' 1;">verified_user</span>
                                MPA Accredited Master Painters
                            </div>
<button class="w-full md:w-auto px-10 py-4 vibrant-gradient text-white rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 active:translate-y-0 transition-all" type="submit">
                                Submit Request
                            </button>
</div>
</form>
</div>
</div>
</div>
</section>
<!-- Map Section -->
<section class="bg-white py-24 border-t border-outline">
<div class="max-w-screen-xl mx-auto px-6">
<div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
<div class="max-w-xl">
<span class="text-secondary font-bold uppercase tracking-[0.2em] text-xs block mb-3">Service Regions</span>
<h2 class="font-headline text-4xl font-extrabold text-primary mb-4">Elite Mastery Across Tasmania</h2>
<p class="text-on-surface-variant leading-relaxed">
                        Based in Hobart, we service all surrounding regions including Glenorchy, Sandy Bay, and Kingston. For major commercial projects, we operate statewide.
                    </p>
</div>
<div class="flex flex-wrap gap-2">
<span class="px-4 py-2 bg-slate-50 rounded-full border border-outline text-[10px] font-bold uppercase tracking-widest text-primary">Hobart</span>
<span class="px-4 py-2 bg-slate-50 rounded-full border border-outline text-[10px] font-bold uppercase tracking-widest text-primary">Glenorchy</span>
<span class="px-4 py-2 bg-slate-50 rounded-full border border-outline text-[10px] font-bold uppercase tracking-widest text-primary">Kingston</span>
</div>
</div>
<div class="relative h-[450px] w-full rounded-3xl overflow-hidden border border-outline shadow-sm group">
<img alt="Hobart Tasmania Map" class="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv4cKa_rQOSfWrXcvH-2h0rYG4ugE50VnGJMKbWDmU2kvgvaYohNXhE1H8xStSfTJ59qxotQ23f75yeHs6T79LvTk7PnPSRguelltaAgFfDsjmGlp9KE7SFUlXn878dcnmICjySKx2BgyeYPGKG7BIlAavJYNWtad_WRvlQLb2Ni_WKXX-ScQUosg9xVmkYBX9WViRXdP1UgAPs5V303wIq05qpDuzXL2eXOdRbv1g0q155U0Y0Xm4nplB3o62L4OxwwizI_MzJqQ"/>
<div class="absolute inset-0 bg-primary/5 pointer-events-none"></div>
<!-- Interactive Pin -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div class="relative flex items-center justify-center">
<div class="absolute w-12 h-12 bg-accent/20 rounded-full animate-ping"></div>
<div class="w-4 h-4 bg-accent rounded-full border-2 border-white shadow-lg relative z-10"></div>
<div class="absolute top-full mt-3 bg-white px-3 py-1.5 rounded-lg shadow-xl text-[10px] font-extrabold text-primary uppercase tracking-tighter whitespace-nowrap border border-outline">
                            Elite Finish Studio
                        </div>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-primary text-white py-20">
<div class="max-w-screen-xl mx-auto px-6">
<div class="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-8">
<div class="space-y-6">
<div class="text-2xl font-extrabold tracking-tighter">Elite Finish</div>
<p class="text-white/60 text-sm leading-relaxed">
                    Setting the gold standard for Hobart's architectural painting and surface restoration since 1979.
                </p>
</div>
<div class="space-y-4">
<h4 class="text-xs font-bold uppercase tracking-widest text-secondary">Expertise</h4>
<nav class="flex flex-col gap-2.5">
<a class="text-white/60 hover:text-white text-sm transition-colors" href="#">Residential Painting</a>
<a class="text-white/60 hover:text-white text-sm transition-colors" href="#">Commercial Services</a>
<a class="text-white/60 hover:text-white text-sm transition-colors" href="#">Heritage Care</a>
<a class="text-white/60 hover:text-white text-sm transition-colors" href="#">Colour Strategy</a>
</nav>
</div>
<div class="space-y-4">
<h4 class="text-xs font-bold uppercase tracking-widest text-secondary">Studio</h4>
<nav class="flex flex-col gap-2.5">
<a class="text-white/60 hover:text-white text-sm transition-colors" href="#">Case Studies</a>
<a class="text-white/60 hover:text-white text-sm transition-colors" href="#">About the Brand</a>
<a class="text-white/60 hover:text-white text-sm transition-colors" href="#">Privacy</a>
<a class="text-white/60 hover:text-white text-sm transition-colors" href="#">Terms</a>
</nav>
</div>
<div class="space-y-4">
<h4 class="text-xs font-bold uppercase tracking-widest text-secondary">Certification</h4>
<div class="flex gap-3">
<div class="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
<span class="material-symbols-outlined text-white/50">verified</span>
</div>
<div class="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
<span class="material-symbols-outlined text-white/50">architecture</span>
</div>
</div>
<p class="text-[10px] text-white/40 font-bold uppercase tracking-widest leading-tight">
                    © 2024 Elite Finish. <br/>Master Painters Association Accredited.
                </p>
</div>
</div>
</div>
</footer>
</body></html>