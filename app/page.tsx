<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Services | Elite Finish</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;family=Inter:wght@300;400;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
              "navy": "#142B58",
              "teal-accent": "#008080",
              "vibrant-accent": "#F5A623",
              "surface": "#FFFFFF",
              "surface-variant": "#F8FAFC",
              "outline": "#E2E8F0",
              "on-surface": "#1E293B",
              "on-surface-variant": "#64748B"
            },
            "borderRadius": {
              "DEFAULT": "0.5rem",
              "lg": "0.75rem",
              "xl": "1rem",
              "full": "9999px"
            },
            "fontFamily": {
              "headline": ["Manrope", "sans-serif"],
              "body": ["Manrope", "sans-serif"],
              "label": ["Inter", "sans-serif"]
            }
          },
        },
      }
    </script>
<style>
        .glass-nav {
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(20, 43, 88, 0.1);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            font-family: 'Manrope', sans-serif;
            background-color: #FFFFFF;
            color: #1E293B;
        }
        h1, h2, h3, .font-headline {
            font-family: 'Manrope', sans-serif;
            font-weight: 800;
            color: #142B58;
        }
        .text-label {
            font-family: 'Inter', sans-serif;
            text-transform: uppercase;
            letter-spacing: 0.05rem;
            font-weight: 700;
        }
    </style>
</head>
<body class="selection:bg-vibrant-accent/30">
<!-- TopNavBar -->
<nav class="fixed top-0 left-0 w-full z-50 glass-nav">
<div class="flex justify-between items-center w-full px-8 py-5 max-w-screen-2xl mx-auto">
<a class="text-2xl font-headline tracking-tight text-navy" href="/">ELITE<span class="text-vibrant-accent">FINISH</span></a>
<div class="hidden md:flex items-center space-x-10">
<a class="text-navy font-bold border-b-2 border-vibrant-accent pb-1 text-label text-xs transition-all duration-300" href="#">Services</a>
<a class="text-on-surface-variant hover:text-navy transition-colors text-label text-xs" href="#">About</a>
<a class="text-on-surface-variant hover:text-navy transition-colors text-label text-xs" href="#">Portfolio</a>
<a class="text-on-surface-variant hover:text-navy transition-colors text-label text-xs" href="#">Process</a>
</div>
<button class="bg-navy text-white px-7 py-2.5 rounded-lg text-sm font-bold hover:bg-navy/90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all">
            Request Quote
        </button>
</div>
</nav>
<main class="pt-32 pb-20">
<!-- Hero Section -->
<header class="px-8 max-w-screen-2xl mx-auto mb-24">
<div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div class="md:col-span-7">
<span class="text-teal-accent text-label text-xs mb-4 block">Our Expertise</span>
<h1 class="text-5xl md:text-7xl font-headline leading-[1.1] mb-8 text-navy">Mastering the Art of <span class="text-vibrant-accent">Atmosphere.</span></h1>
<p class="text-xl text-on-surface-variant max-w-xl font-medium leading-relaxed">
                    From heritage conservation to avant-garde industrial textures, we curate surfaces that define architectural value and professional excellence.
                </p>
</div>
<div class="md:col-span-5">
<div class="w-full aspect-square relative rounded-xl overflow-hidden shadow-2xl">
<img class="object-cover w-full h-full transition-transform duration-700 hover:scale-105" data-alt="close-up of a high-end paintbrush applying deep teal oil paint to a textured canvas with dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa0_qpc3AN6n8oFksC2prE2jclgqh3QU6Na_RMs9Ds3iV5BFIGtZ1XwY18Elp2GaMlU5eb_GVoSDLTWfX7Op0dLCA52IqHSiekAqoZ9VmSS5dHYzK96On_moo-bzF9K2n4_HxW2zWBZAUJgcDDbMuZeWbE7iPE-zdlWUn6jTIK6ufpg9zMijUC_w0U-97WO5R1b4OOG5QCbcDgYoFgObkEw6emW8eh_MQm0sKxG5rX2Tc4nLYX9qgqOLyDnsbJ11hAwd-UwMMsKcA"/>
<div class="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
</div>
</div>
</div>
</header>
<div class="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-16">
<!-- Side Navigation (Sticky) -->
<aside class="hidden md:block md:col-span-3">
<div class="sticky top-32 space-y-10">
<nav class="flex flex-col space-y-6">
<a class="group flex items-center gap-4 text-navy font-bold text-lg hover:text-vibrant-accent transition-colors" href="#residential">
<span class="text-[10px] text-label text-teal-accent bg-teal-accent/10 px-2 py-1 rounded">01</span>
<span>Residential</span>
</a>
<a class="group flex items-center gap-4 text-on-surface-variant font-bold text-lg hover:text-vibrant-accent transition-colors" href="#commercial">
<span class="text-[10px] text-label text-on-surface-variant/40 bg-surface-variant px-2 py-1 rounded">02</span>
<span>Commercial</span>
</a>
<a class="group flex items-center gap-4 text-on-surface-variant font-bold text-lg hover:text-vibrant-accent transition-colors" href="#specialty">
<span class="text-[10px] text-label text-on-surface-variant/40 bg-surface-variant px-2 py-1 rounded">03</span>
<span>Specialty Finishes</span>
</a>
<a class="group flex items-center gap-4 text-on-surface-variant font-bold text-lg hover:text-vibrant-accent transition-colors" href="#industrial">
<span class="text-[10px] text-label text-on-surface-variant/40 bg-surface-variant px-2 py-1 rounded">04</span>
<span>Industrial Floors</span>
</a>
</nav>
<div class="pt-10 border-t border-outline">
<div class="p-8 bg-navy rounded-xl relative overflow-hidden text-white shadow-xl">
<div class="absolute -right-4 -top-4 w-24 h-24 bg-vibrant-accent rounded-full opacity-10"></div>
<h4 class="text-xl font-headline mb-3 text-white">Need Guidance?</h4>
<p class="text-sm text-white/70 mb-6 leading-relaxed">Our master consultants help you choose the perfect finish for your space.</p>
<a class="inline-flex items-center gap-2 bg-vibrant-accent text-navy px-5 py-2.5 rounded-lg font-bold text-sm hover:gap-3 transition-all" href="#">
                            Consult Now <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>
</aside>
<!-- Services Content -->
<div class="md:col-span-9 space-y-40">
<!-- 01 Residential -->
<section class="scroll-mt-32" id="residential">
<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div class="order-2 md:order-1">
<span class="text-teal-accent text-label text-xs mb-3 block">Interior &amp; Exterior</span>
<h2 class="text-4xl font-headline mb-6 text-navy">Residential Painting</h2>
<p class="text-on-surface-variant mb-8 text-lg leading-relaxed">
                            We treat your home as a living gallery. Our residential services encompass detailed interior woodwork finishing and durable, high-protection exterior coatings designed to withstand the elements.
                        </p>
<ul class="space-y-4 mb-10">
<li class="flex items-center gap-3 text-sm font-semibold">
<span class="material-symbols-outlined text-vibrant-accent text-xl font-bold">check_circle</span> Heritage Restoration &amp; Timber Care
                            </li>
<li class="flex items-center gap-3 text-sm font-semibold">
<span class="material-symbols-outlined text-vibrant-accent text-xl font-bold">check_circle</span> Zero-VOC Premium Interior Finishes
                            </li>
<li class="flex items-center gap-3 text-sm font-semibold">
<span class="material-symbols-outlined text-vibrant-accent text-xl font-bold">check_circle</span> Weather-Shield Exterior Systems
                            </li>
</ul>
<button class="bg-vibrant-accent text-navy px-8 py-3 rounded-lg font-bold hover:shadow-xl hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
                            Learn More <span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div class="order-1 md:order-2">
<div class="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative group">
<img class="object-cover w-full h-full transition-all duration-700 group-hover:scale-110" data-alt="ultra-modern luxury living room with minimalist charcoal walls, soft ambient light, and high-end furniture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuIFSuyrkyz9nRmEzW-wTXVZDGkj7jmpFwpyJT-Wfs-fCu6hoNJXOk0Yco8aFMY41ySFxMVLZEjedUpyBSaCMkEz0ZmwhuGOQyo7I9x5DOwBCd3v9EVARu556PFfnaobrldzppNuA_KKyM99Y_ynEOlYP2NGHySBtTJDpkgMeG2HTmDEXLpLYxw7WYJU_-XeA7tnYtcQNP6wTcYWEqm3C-rzZ6qhvPfYcb_ecB9aJjY7zsSWYCDBh5LNQlLljcybdvf-0FddxHVUk"/>
<div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
</div>
</div>
</div>
</section>
<!-- 02 Commercial -->
<section class="scroll-mt-32" id="commercial">
<div class="bg-surface-variant p-10 md:p-20 rounded-[2.5rem] relative overflow-hidden border border-outline">
<div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
<div class="md:col-span-5">
<div class="aspect-square rounded-2xl overflow-hidden shadow-xl ring-8 ring-white">
<img class="object-cover w-full h-full" data-alt="spacious contemporary office lobby with architectural concrete walls and elegant linear lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqv1LHQyIwmcAoWdrFdEslydOm5kUhNK8bYN00Hu2x1UpC90PEJ6Ve0ndmgVfCZKCJMdtgvBISgRBAEKh5SYp2oasiJfuZK0g1jOLiREJ8241uW8ZqCfHrOBRhUP5eSzXExRgq-hpBwBX35lH8i-n3cS5vSe2LggU3RMoCPV7w4WuUJXkvdbUveucSCAQZchMEJDQ2e0KPmdMJ2x68Uesc9PyCjFrQW7I2qIWH-N5RgEsFOj5Yh9hvz9BV7EJHt8EaTOJ2k69fMl4"/>
</div>
</div>
<div class="md:col-span-7">
<span class="text-teal-accent text-label text-xs mb-3 block">Large Scale Projects</span>
<h2 class="text-4xl font-headline mb-6 text-navy">Commercial &amp; Industrial Coatings</h2>
<p class="text-on-surface-variant mb-10 text-lg leading-relaxed">
                                Efficiency meets excellence. We deliver high-performance coating solutions for corporate offices and retail flagships, ensuring minimal disruption with maximum longevity.
                            </p>
<div class="grid grid-cols-2 gap-6 mb-10">
<div class="p-6 bg-white rounded-xl shadow-sm border border-outline">
<p class="text-xs text-label text-teal-accent mb-2">Corporate</p>
<p class="text-sm font-bold text-navy">High-Traffic Precision</p>
</div>
<div class="p-6 bg-white rounded-xl shadow-sm border border-outline">
<p class="text-xs text-label text-teal-accent mb-2">Logistics</p>
<p class="text-sm font-bold text-navy">Protective Barriers</p>
</div>
</div>
<button class="bg-navy text-white px-8 py-3 rounded-lg font-bold hover:bg-vibrant-accent hover:text-navy transition-all inline-flex items-center gap-2">
                                Learn More <span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>
<!-- 03 Specialty -->
<section class="scroll-mt-32" id="specialty">
<div class="flex flex-col items-center text-center mb-16">
<span class="text-teal-accent text-label text-xs mb-3">The Master's Hand</span>
<h2 class="text-4xl md:text-5xl font-headline mb-6 text-navy">Specialty Artisan Finishes</h2>
<p class="max-w-2xl text-on-surface-variant text-lg font-medium">
                        Centuries-old techniques reimagined for modern luxury. Our master artisans create depth and texture through meticulous layering.
                    </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-10">
<!-- Wood Graining -->
<div class="group">
<div class="aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-lg border border-outline">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="macro detail of hand-painted faux wood grain finish on a classical architectural panel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrMnQK8rX3fIQWZrh5AylbsG12YONoybxVvM__OwC-m9UOOxbiCiuT8JtCumDxXVCCjKq2s_F9YFjflJR_7CKLVRugEvkg1Tbvd8Okzj-2xTcHqoQhaUiZDbCwYYFd61hX1XeBzOeQHyBNFdn7lv5Ri7J8DkW9KdbNwW64fqhgEzwmTcmQlfm5VMSHfrOssH5saqauPd1A0XMXYLe4xNc2fYpRVBRyP-Wr_rA2FmVCSXOaJZAxZpiPnGapPDdJatHc-DbIq5aQunI"/>
</div>
<h3 class="text-2xl font-headline mb-3 text-navy group-hover:text-vibrant-accent transition-colors">Wood Graining</h3>
<p class="text-on-surface-variant leading-relaxed mb-6">Reproducing the warmth of rare hardwoods on any surface with hand-painted precision.</p>
<a class="text-vibrant-accent font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all" href="#">Learn More <span class="material-symbols-outlined text-sm">east</span></a>
</div>
<!-- Marbling -->
<div class="group">
<div class="aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-lg border border-outline">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="exquisite faux marble finish with soft grey veins on a white plaster column" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOWkSyTJXu_dGLS6dyF7zfnF7VyKMJWOP0ByjsFGr0cvMoTg-Q88xfrxBtiGdaCPOn_ihwzygWZ495aaX8PFfwQe0tbHCTkLuK7Rgg8CPcE3-wfN23N4Hwq_H54vbE6emqu8R861y3Z2EkICTaCCnb2oB3kSBdIfXW05n8Wx7vnX2NdLEgZym6H-JX5hYiyvLpwuE0GQFUq5ReXYeRy_3XvG7MjYUMIp20uqDx6yW_tI4xtH3RMPFnXTyM9DPeJw5CzOTcSSlQW40"/>
</div>
<h3 class="text-2xl font-headline mb-3 text-navy group-hover:text-vibrant-accent transition-colors">Marbling</h3>
<p class="text-on-surface-variant leading-relaxed mb-6">Ethereal stone effects including Carrara, Nero Marquina, and bespoke mineral textures.</p>
<a class="text-vibrant-accent font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all" href="#">Learn More <span class="material-symbols-outlined text-sm">east</span></a>
</div>
<!-- Rag Rolling -->
<div class="group">
<div class="aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-lg border border-outline">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="vibrant abstract plaster wall texture with rich depth and layered tonal variations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7mea_6IMIdEeEV-gkTMTjsSGzRkgA1IQFURgzZWy1_wdHME4ibzi51AF-bSfLVWU63MklEGoo1gCOzil8YDWkFxB-ElX38NUBYkmElP5V85JGOHBvs1ag2GdUMUKlgQ0OPeB-xH5wMge09z6ENpIbOWbKY0eNbcQuSIJHehw-Itr9dlfJWXiOgx6jPtSXmBNd7NAV8_5aaZ1m9UTRDJeAgmv4XpIiXmjBSpdVm52xR_chDGU9ly0zX-9YjDyBQS0_0HS-NsLZ8E8"/>
</div>
<h3 class="text-2xl font-headline mb-3 text-navy group-hover:text-vibrant-accent transition-colors">Textured Glazing</h3>
<p class="text-on-surface-variant leading-relaxed mb-6">Dimensional depth through rag rolling, sponging, and contemporary metallic washes.</p>
<a class="text-vibrant-accent font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all" href="#">Learn More <span class="material-symbols-outlined text-sm">east</span></a>
</div>
</div>
</section>
<!-- 04 Industrial Floor -->
<section class="scroll-mt-32" id="industrial">
<div class="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-[2.5rem] bg-navy text-white shadow-2xl">
<div class="p-12 md:p-20 relative">
<div class="absolute top-0 right-0 p-8 opacity-10">
<span class="material-symbols-outlined text-8xl">architecture</span>
</div>
<span class="text-vibrant-accent text-label text-xs mb-3 block">Durable Performance</span>
<h2 class="text-4xl font-headline mb-6 text-white">Industrial Floor Finishes</h2>
<p class="text-white/70 mb-10 text-lg leading-relaxed">
                            Our floor coatings are engineered for the intersection of aesthetics and utility. From high-gloss epoxy resins to heavy-duty polyurethane systems.
                        </p>
<div class="space-y-8">
<div class="flex gap-5">
<span class="text-vibrant-accent material-symbols-outlined text-3xl">architecture</span>
<div>
<h4 class="font-bold text-base mb-1">Resin Systems</h4>
<p class="text-sm text-white/60">Seamless, hygienic, and impact-resistant.</p>
</div>
</div>
<div class="flex gap-5">
<span class="text-vibrant-accent material-symbols-outlined text-3xl">security</span>
<div>
<h4 class="font-bold text-base mb-1">Safety Linemarking</h4>
<p class="text-sm text-white/60">Oversized graphics and OSHA-compliant safety paths.</p>
</div>
</div>
</div>
<div class="mt-14">
<button class="group flex items-center gap-3 px-10 py-4 bg-vibrant-accent text-navy font-extrabold rounded-lg hover:shadow-[0_0_30px_rgba(245,166,35,0.4)] transition-all">
                                View Floor Systems <span class="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_outward</span>
</button>
</div>
</div>
<div class="relative h-full min-h-[500px]">
<img class="absolute inset-0 w-full h-full object-cover" data-alt="sleek dark polished epoxy floor in a high-end garage reflecting industrial lighting overhead" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwhwpC8X9rB6-EAEOPwc8TcX9ffRNLyNSbOIYzIP-srvET6Z7AMnUP0XCvhInAH3sdHksPFOu_4ip2xF_m5Dkl3sViCDO0KzlVTjX6xbeW3Px40gi2085-IP5WZusXKn5DbmrjNn8UkWhzZYRmTji3te8ZhgcCe1kcJeCuj1CYzFa692x50fMueFETfO03K3kof-r95m8TEQdPvfWUecj8NgSXrFbbbK1Dc6yFJj-W1TVarT15QtJgKdjsMZKsL5TwV0Qz2Y_7lR8"/>
<div class="absolute inset-0 bg-navy/20 mix-blend-multiply"></div>
</div>
</div>
</section>
</div>
</div>
</main>
<!-- Footer -->
<footer class="bg-navy text-white pt-24 pb-12">
<div class="max-w-screen-2xl mx-auto px-8">
<div class="grid grid-cols-1 md:grid-cols-4 gap-16 pb-16 border-b border-white/10">
<div class="space-y-8">
<a class="text-2xl font-headline tracking-tight text-white" href="/">ELITE<span class="text-vibrant-accent">FINISH</span></a>
<p class="text-sm text-white/60 leading-relaxed font-medium">
                    Master Painters Association Accredited. <br/>Crafting exceptional spaces for over 45 years with professional excellence.
                </p>
<div class="flex space-x-5">
<a class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-vibrant-accent hover:border-vibrant-accent hover:text-navy transition-all" href="#"><span class="material-symbols-outlined text-lg">public</span></a>
<a class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-vibrant-accent hover:border-vibrant-accent hover:text-navy transition-all" href="#"><span class="material-symbols-outlined text-lg">share</span></a>
</div>
</div>
<div class="space-y-6">
<p class="text-xs font-bold text-label text-vibrant-accent">Services</p>
<ul class="space-y-4 text-sm font-semibold">
<li><a class="text-white/60 hover:text-white transition-colors" href="#">Residential Painting</a></li>
<li><a class="text-white/60 hover:text-white transition-colors" href="#">Commercial Services</a></li>
<li><a class="text-white/60 hover:text-white transition-colors" href="#">Industrial Coatings</a></li>
<li><a class="text-white/60 hover:text-white transition-colors" href="#">Artisan Finishes</a></li>
</ul>
</div>
<div class="space-y-6">
<p class="text-xs font-bold text-label text-vibrant-accent">Company</p>
<ul class="space-y-4 text-sm font-semibold">
<li><a class="text-white/60 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a class="text-white/60 hover:text-white transition-colors" href="#">Portfolio</a></li>
<li><a class="text-white/60 hover:text-white transition-colors" href="#">Process</a></li>
<li><a class="text-white/60 hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div class="space-y-6">
<p class="text-xs font-bold text-label text-vibrant-accent">Contact</p>
<div class="space-y-5 text-sm font-medium text-white/80">
<p class="flex items-center gap-3"><span class="material-symbols-outlined text-vibrant-accent text-lg">call</span> +1 (555) 890 2341</p>
<p class="flex items-center gap-3"><span class="material-symbols-outlined text-vibrant-accent text-lg">mail</span> hello@elitefinish.com</p>
<p class="flex items-center gap-3"><span class="material-symbols-outlined text-vibrant-accent text-lg">location_on</span> 44 Artisan Way, Melbourne VIC</p>
</div>
</div>
</div>
<div class="pt-12">
<p class="text-xs text-white/40 text-center font-bold tracking-widest uppercase">© 2024 ELITE FINISH. All Rights Reserved.</p>
</div>
</div>
</footer>
</body></html>