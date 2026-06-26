/* =====================================================================
   MBC PREMIUM LAYER  (premium.js) — v2
   Progressive enhancement. If this file is removed, the original site
   works exactly as before. No existing markup is destroyed.
   ===================================================================== */
(function () {
  "use strict";

  /* ===================================================================
     EDIT YOUR SOCIAL LINKS HERE  ← replace the placeholder URLs
     =================================================================== */
  var SOCIAL = {
    facebook:  "https://www.facebook.com/share/1FxhtQv2ao/", // FACEBOOK_URL
    instagram: "INSTAGRAM_URL",   // ← paste your Instagram profile URL
    linkedin:  "LINKEDIN_URL",    // ← paste your LinkedIn page URL
    x:         "X_URL"            // ← paste your X (Twitter) profile URL
  };
  var WHATSAPP = "https://wa.me/919733329822?text=Hi%20Mukul%2C%20I%20found%20you%20on%20mukulbiz.in.";

  // Treat ALL-CAPS tokens as not-yet-configured (link stays inert but visible)
  function resolve(url){ return (/^[A-Z_]+$/.test(url)) ? null : url; }
  function hrefOf(url){ var r=resolve(url); return r ? r : "#"; }

  /* Mega-menu descriptions + icons, keyed by destination file ------------ */
  var META = {
    "services.html":            ["fa-grip", "Services Overview", "Full menu of MBC consulting services"],
    "business-consulting.html": ["fa-briefcase", "Business Consulting", "Diagnose bottlenecks, fix with a clear plan"],
    "procurement.html":         ["fa-handshake", "Procurement Consulting", "Source better, negotiate harder, cut cost"],
    "ai-automation.html":       ["fa-robot", "AI Automation", "Low-cost automation with ROI in weeks"],
    "sales-marketing.html":     ["fa-bullhorn", "Sales & Marketing", "WhatsApp, field campaigns, local visibility"],
    "market-research.html":     ["fa-magnifying-glass-chart", "Market Research", "Know your market before you invest"],
    "financial-modelling.html": ["fa-chart-line", "Financial Modelling", "Feasibility, projections & funding decks"],
    "manufacturing.html":       ["fa-industry", "Manufacturing (PVC/uPVC)", "Lower cost per unit, wider distribution"],
    "agriculture.html":         ["fa-seedling", "Agriculture & Agri-Business", "Dealer networks & seasonal demand planning"],
    "electronics.html":         ["fa-mobile-screen", "Electronics & Mobile", "Distribution & retail growth systems"],
    "plumbing.html":            ["fa-faucet", "Plumbing & Sanitary", "Channel expansion & pricing control"],
    "healthcare.html":          ["fa-stethoscope", "Healthcare", "Occupancy growth & bilingual outreach"],
    "edtech.html":              ["fa-graduation-cap", "EdTech", "Go-to-market for education products"],
    "dry-fruits.html":          ["fa-bowl-food", "Dry Fruits & Food Trading", "Sourcing, margins & brand building"],
    "for-buyers.html":          ["fa-cart-shopping", "For Buyers", "Source verified suppliers through MBC"],
    "for-suppliers.html":       ["fa-store", "For Suppliers", "Reach serious B2B buyers"],
    "procurement-process.html": ["fa-diagram-project", "Procurement Process", "How the MBC managed network works"],
    "marketplace-buyer.html":   ["fa-user-tie", "Buyer Portal", "Your buyer dashboard"],
    "marketplace-register.html":["fa-user-plus", "Supplier Registration", "Join the verified supplier network"],
    "products.html":            ["fa-boxes-stacked", "Products Catalogue", "Browse sourced product categories"],
    "services-marketplace.html":["fa-list-check", "Services Catalogue", "Browse managed services"],
    "featured-suppliers.html":  ["fa-handshake", "Supplier Network", "Apply for verification to join MBC"],
    "procurement-request.html": ["fa-file-signature", "Procurement Request", "Tell us what to source"],
    "savings-calculator.html":  ["fa-calculator", "Savings Calculator", "Estimate your cost savings"],
    "marketplace-faq.html":     ["fa-circle-question", "FAQ", "Common marketplace questions"],
    "contact.html":             ["fa-envelope", "Contact MBC", "Talk to us — first call is free"],
    "supplier-dashboard.html":  ["fa-gauge", "Supplier Area", "Manage your supplier profile"],
    "buyer-dashboard.html":     ["fa-gauge-high", "Buyer Area", "Manage your buying activity"],
    "admin.html":               ["fa-shield-halved", "Admin (MBC)", "Internal admin console"],
    "marketplace.html":         ["fa-network-wired", "Procurement Network", "Managed B2B procurement"]
  };

  /* Industry banner config (Phase 5) ----------------------------------- */
  // [ icon, title, description, fallbackGradient, imageFile, altText ]
  var IND = {
    "manufacturing.html": ["fa-industry",  "Manufacturing — PVC / uPVC", "Lower cost per unit, smoother production and a wider, better-managed dealer network.", "linear-gradient(120deg,#16294a,#2E75B6)", "assets/industry/manufacturing.jpg", "Modern PVC / uPVC pipe manufacturing plant and extrusion line"],
    "agriculture.html":   ["fa-seedling",  "Agriculture & Agri-Business", "Dealer-network development, credit control & recovery and seasonal demand planning.", "linear-gradient(120deg,#16294a,#1E7A3D)", "assets/industry/agriculture.jpg", "Modern agriculture operations and agri-input distribution network"],
    "healthcare.html":    ["fa-stethoscope","Healthcare", "Occupancy growth, data-driven marketing roadmaps and bilingual patient outreach.", "linear-gradient(120deg,#16294a,#3a7bd5)", "assets/industry/healthcare.jpg", "Modern hospital and healthcare management environment"],
    "electronics.html":   ["fa-mobile-screen","Electronics & Mobile", "Distribution, retail growth and channel systems for mobiles & accessories.", "linear-gradient(120deg,#16294a,#4b3f9e)", "assets/industry/electronics.jpg", "Mobile phone showroom and consumer electronics distribution network"],
    "plumbing.html":      ["fa-faucet",    "Plumbing & Sanitary", "Channel expansion, pricing control and stronger trade relationships.", "linear-gradient(120deg,#16294a,#2693a8)", "assets/industry/plumbing.jpg", "Premium sanitaryware showroom and plumbing solutions"],
    "edtech.html":        ["fa-graduation-cap","EdTech", "Go-to-market strategy and growth planning for education products & services.", "linear-gradient(120deg,#16294a,#7048a8)", "assets/industry/edtech.jpg", "Smart classroom and digital learning education technology"],
    "dry-fruits.html":    ["fa-bowl-food", "Dry Fruits & Food Trading", "Sourcing, margin control and brand building for food trading businesses.", "linear-gradient(120deg,#3a2616,#B8860B)", "assets/industry/dryfruits.jpg", "Premium dry fruits, food processing and distribution"]
  };

  /* Homepage slider config (Phase 4) ----------------------------------- */
  // Each slide = FULL-WIDTH background image (assets/hero/…) + a slide-specific
  // left-weighted overlay (dark navy on the left for white-text contrast,
  // fading toward the slide accent on the right so the photo stays visible).
  // pos = background-position for that slide's photo.
  var SLIDES = [
    {ey:"Business Consulting", h:"Practical consulting that ends in action — not advice", p:"Diagnose what's holding your business back and fix it with a clear, written, step-by-step plan.", cta:"business-consulting.html",
     img:"assets/hero/slide1-business.jpg", pos:"center center",
     ov:"linear-gradient(90deg,rgba(16,28,52,.40) 0%,rgba(18,34,62,.33) 50%,rgba(18,34,62,.30) 100%)"},
    {ey:"Procurement Consulting", h:"Buy smarter. Cut purchase costs without cutting quality.", p:"22 years of buy-side experience — strategic sourcing, hard negotiation and working-capital control.", cta:"procurement.html",
     img:"assets/hero/slide2-procurement.jpg", pos:"center center",
     ov:"linear-gradient(90deg,rgba(16,28,52,.40) 0%,rgba(19,64,52,.33) 55%,rgba(30,122,61,.28) 100%)"},
    {ey:"AI Automation Solutions", h:"Low-cost AI automation with ROI in weeks", p:"WhatsApp lead capture, follow-ups, dashboards and AI assistants — most pay back in 1–6 months.", cta:"ai-automation.html",
     img:"assets/hero/slide3-ai.jpg", pos:"center center",
     ov:"linear-gradient(90deg,rgba(16,28,52,.40) 0%,rgba(20,58,116,.33) 55%,rgba(46,117,182,.30) 100%)"},
    {ey:"Sales & Marketing Consulting", h:"Sell wider with marketing built for Indian B2B", p:"Field campaigns, WhatsApp outreach and local visibility that bring measurable enquiries.", cta:"sales-marketing.html",
     img:"assets/hero/slide4-sales.jpg", pos:"center center",
     ov:"linear-gradient(90deg,rgba(16,28,52,.40) 0%,rgba(74,52,18,.33) 55%,rgba(184,134,11,.30) 100%)"},
    {ey:"Industry Growth Solutions", h:"Sector-specific growth across 7+ industries", p:"Manufacturing, agri-business, healthcare, electronics, plumbing, EdTech and food trading.", cta:"manufacturing.html",
     img:"assets/hero/slide5-industries.jpg", pos:"center center",
     ov:"linear-gradient(90deg,rgba(16,28,52,.40) 0%,rgba(22,41,74,.34) 55%,rgba(46,117,182,.30) 100%)"}
  ];

  var WA_BTN = '<a class="btn btn-green" href="'+WHATSAPP+'"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>';

  function currentPage(){
    var p = location.pathname.split("/").pop();
    return (!p || p==="") ? "index.html" : p;
  }
  function el(html){ var d=document.createElement("div"); d.innerHTML=html.trim(); return d.firstChild; }

  /* ===================================================================
     PHASE 1 — MOBILE TWO-TAP MENU  +  click-outside close
     =================================================================== */
  function setupMenu(){
    var nav = document.querySelector("header.site nav .lvl1");
    if(!nav) return;
    var isMobile = function(){ return window.matchMedia("(max-width:1024px)").matches; };

    nav.querySelectorAll(":scope > li").forEach(function(li){
      var link = li.querySelector(":scope > a.navlink");
      var dd   = li.querySelector(":scope > .dd");
      if(!link || !dd) return;
      li.classList.add("mbc-has-sub");
      link.setAttribute("aria-haspopup","true");
      link.setAttribute("aria-expanded","false");

      link.addEventListener("click", function(e){
        if(!isMobile()) return;                 // desktop = hover, normal click navigates
        if(!li.classList.contains("mbc-open")){ // FIRST tap → open submenu only
          e.preventDefault();
          nav.querySelectorAll(":scope > li.mbc-open").forEach(function(o){
            if(o!==li){ o.classList.remove("mbc-open"); var l=o.querySelector(":scope>a.navlink"); if(l) l.setAttribute("aria-expanded","false"); }
          });
          li.classList.add("mbc-open");
          link.setAttribute("aria-expanded","true");
        }
        // SECOND tap → do nothing here, default navigation proceeds
      });
    });

    // close the whole menu + submenus when tapping outside
    document.addEventListener("click", function(e){
      var header = document.querySelector("header.site");
      if(header && !header.contains(e.target)){
        nav.classList.remove("open");
        nav.querySelectorAll(":scope > li.mbc-open").forEach(function(o){
          o.classList.remove("mbc-open");
          var l=o.querySelector(":scope>a.navlink"); if(l) l.setAttribute("aria-expanded","false");
        });
      }
    });

    // reset state when crossing the breakpoint
    window.addEventListener("resize", function(){
      if(!isMobile()){
        nav.classList.remove("open");
        nav.querySelectorAll("li.mbc-open").forEach(function(o){o.classList.remove("mbc-open");});
      }
    });
  }

  /* ===================================================================
     PHASE 2 — scroll navbar state + active page underline
     =================================================================== */
  function setupNavState(){
    var header = document.querySelector("header.site");
    if(header){
      var onScroll=function(){ header.classList.toggle("mbc-scrolled", window.scrollY>12); };
      onScroll(); window.addEventListener("scroll", onScroll, {passive:true});
    }
    var page = currentPage();
    document.querySelectorAll("header.site nav a.navlink").forEach(function(a){
      a.removeAttribute("style"); // drop old inline grey "active" pill
      var href=(a.getAttribute("href")||"").split("/").pop();
      if(href===page) a.classList.add("mbc-active");
    });
  }

  /* ===================================================================
     PHASE 6 — convert dropdowns into mega menus (icon + title + desc)
     =================================================================== */
  function setupMega(){
    document.querySelectorAll("header.site nav .dd").forEach(function(dd){
      var links = Array.prototype.slice.call(dd.querySelectorAll("a"));
      if(!links.length) return;
      dd.classList.add("mbc-mega");
      if(links.length<=4) dd.classList.add("mbc-cols-1");
      links.forEach(function(a){
        var file=(a.getAttribute("href")||"").split("/").pop();
        var m=META[file];
        var icon = m?m[0]:"fa-angle-right";
        var title= m?m[1]:a.textContent.trim();
        var desc = m?m[2]:"";
        a.classList.add("mbc-mi");
        a.innerHTML='<span class="mbc-ic"><i class="fa-solid '+icon+'"></i></span>'+
                    '<span class="mbc-txt"><span class="mbc-tt">'+title+'</span>'+
                    (desc?'<span class="mbc-ds">'+desc+'</span>':'')+'</span>';
      });
    });
  }

  /* ===================================================================
     PHASE 3 — social icons (header + footer + contact) + floating bar
     =================================================================== */
  function socialLinks(cls){
    function a(k,icon,label){
      var u=resolve(SOCIAL[k]);
      return '<a class="'+k.charAt(0)+(k==='x'?'':( k==='facebook'?'b':k==='instagram'?'g':'i'))+'" '+
             'href="'+hrefOf(SOCIAL[k])+'" aria-label="'+label+'" title="'+label+'"'+
             (u?' target="_blank" rel="noopener"':'')+'><i class="fa-brands '+icon+'"></i></a>';
    }
    return '<div class="mbc-social '+cls+'">'+
      a("facebook","fa-facebook-f","Facebook")+
      a("instagram","fa-instagram","Instagram")+
      a("linkedin","fa-linkedin-in","LinkedIn")+
      a("x","fa-x-twitter","X")+
    '</div>';
  }

  function setupSocial(){
    // header social icons intentionally removed (kept in footer + floating bar)
    // footer
    var fcols=document.querySelector("footer.site .cols");
    if(fcols && !fcols.querySelector(".mbc-social-footer")){
      var block=el('<div><h4>Follow MBC</h4><div class="mbc-social-footer">'+
        '<a class="fb" href="'+hrefOf(SOCIAL.facebook)+'" aria-label="Facebook" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>'+
        '<a class="ig" href="'+hrefOf(SOCIAL.instagram)+'" aria-label="Instagram" title="Instagram"><i class="fa-brands fa-instagram"></i></a>'+
        '<a class="li" href="'+hrefOf(SOCIAL.linkedin)+'" aria-label="LinkedIn" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>'+
        '<a class="x" href="'+hrefOf(SOCIAL.x)+'" aria-label="X" title="X"><i class="fa-brands fa-x-twitter"></i></a>'+
      '</div></div>');
      fcols.appendChild(block);
    }
    // contact page section
    if(currentPage()==="contact.html"){
      var main=document.querySelector("main .container") || document.querySelector("main");
      if(main && !document.querySelector(".mbc-contact-social")){
        main.appendChild(el('<div class="mbc-contact-social"><h3>Connect with us</h3>'+
          '<p>Follow Mukul Business Consultancy for tips, updates and case studies.</p>'+
          socialLinks("")+'</div>'));
      }
    }
    // floating contact bar
    if(!document.querySelector(".mbc-floatbar")){
      var bar=el('<div class="mbc-floatbar">'+
        '<a class="wa" href="'+WHATSAPP+'" aria-label="WhatsApp" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i><span class="mbc-tip">Chat on WhatsApp</span></a>'+
        '<a class="fb" href="'+hrefOf(SOCIAL.facebook)+'" aria-label="Facebook" target="_blank" rel="noopener"><i class="fa-brands fa-facebook-f"></i><span class="mbc-tip">Facebook</span></a>'+
        '<a class="li" href="'+hrefOf(SOCIAL.linkedin)+'" aria-label="LinkedIn" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin-in"></i><span class="mbc-tip">LinkedIn</span></a>'+
      '</div>');
      document.body.appendChild(bar);
    }
  }

  /* ===================================================================
     PHASE 4 — homepage hero slider (only on index.html)
     =================================================================== */
  function setupSlider(){
    if(currentPage()!=="index.html") return;
    var hero=document.querySelector("main section.hero");
    if(!hero) return;
    var slidesHTML=SLIDES.map(function(s,i){
      var heading = (i===0) ? ('<h1>'+s.h+'</h1>') : ('<h2>'+s.h+'</h2>'); // keep one H1 on homepage
      var textBlock='<span class="mbc-ey">'+s.ey+'</span>'+heading+'<p>'+s.p+'</p>'+
        '<div class="mbc-cta"><a class="btn btn-gold" href="'+s.cta+'">Learn more</a>'+WA_BTN+'</div>';
      if(i===0){
        // Slide 1 — ONE premium banner: founder large on the RIGHT (cover-cropped so the
        // window is removed naturally), photo's left edge dissolves into a clean navy text area.
        return '<div class="mbc-slide mbc-slide-hero active">'+
          '<img class="mbc-hero-photo" src="'+s.img+'" alt="Md Asfaqul Alam (Mukul), founder of Mukul Business Consultancy">'+
          '<div class="mbc-hero-ov"></div>'+
          '<div class="mbc-inner mbc-hero-inner"><div class="mbc-ptext">'+textBlock+'</div></div>'+
        '</div>';
      }
      // Slides 2-5: FULL-WIDTH cover background (lazy-loaded) + slide overlay + text LEFT.
      return '<div class="mbc-slide">'+
        '<div class="mbc-bg" data-bg="'+s.img+'" style="background-position:'+(s.pos||'center center')+'"></div>'+
        '<div class="mbc-ov" style="background:'+s.ov+'"></div>'+
        '<div class="mbc-inner">'+
          '<span class="mbc-ey">'+s.ey+'</span>'+heading+'<p>'+s.p+'</p>'+
          '<div class="mbc-cta"><a class="btn btn-gold" href="'+s.cta+'">Learn more</a>'+WA_BTN+'</div>'+
        '</div></div>';
    }).join("");
    var slider=el('<section class="mbc-slider" aria-label="Highlights">'+slidesHTML+
      '<button class="mbc-arrow prev" aria-label="Previous slide"><i class="fa-solid fa-chevron-left"></i></button>'+
      '<button class="mbc-arrow next" aria-label="Next slide"><i class="fa-solid fa-chevron-right"></i></button>'+
      '<div class="mbc-dots"></div></section>');
    hero.parentNode.replaceChild(slider, hero);

    var slides=slider.querySelectorAll(".mbc-slide");
    var dotsWrap=slider.querySelector(".mbc-dots");
    var idx=0, timer=null;
    slides.forEach(function(_,i){
      var b=document.createElement("button");
      if(i===0)b.className="active";
      b.setAttribute("aria-label","Go to slide "+(i+1));
      b.addEventListener("click",function(){go(i);reset();});
      dotsWrap.appendChild(b);
    });
    var dots=dotsWrap.querySelectorAll("button");
    // lazy background loader (perf): set a slide's image only when needed
    function loadBg(sl){ if(!sl) return; var b=sl.querySelector(".mbc-bg"); if(b&&b.dataset&&b.dataset.bg){ b.style.backgroundImage="url("+b.dataset.bg+")"; b.removeAttribute("data-bg"); } }
    loadBg(slides[0]); loadBg(slides[1]); // current + next ready
    // load the remaining hero images after the page has loaded (keeps first paint fast)
    if(document.readyState==="complete") slides.forEach(loadBg);
    else window.addEventListener("load", function(){ slides.forEach(loadBg); });
    function go(n){
      slides[idx].classList.remove("active"); dots[idx].classList.remove("active");
      idx=(n+slides.length)%slides.length;
      loadBg(slides[idx]); loadBg(slides[(idx+1)%slides.length]); // ensure current + next are loaded
      slides[idx].classList.add("active"); dots[idx].classList.add("active");
    }
    function next(){go(idx+1);} function prev(){go(idx-1);}
    function start(){timer=setInterval(next,6000);} function reset(){clearInterval(timer);start();}
    slider.querySelector(".next").addEventListener("click",function(){next();reset();});
    slider.querySelector(".prev").addEventListener("click",function(){prev();reset();});
    slider.addEventListener("mouseenter",function(){clearInterval(timer);});
    slider.addEventListener("mouseleave",start);
    start();
  }

  /* ===================================================================
     PHASE 5 — industry hero banners
     =================================================================== */
  function setupIndustryBanner(){
    var cfg=IND[currentPage()];
    if(!cfg) return;
    var main=document.querySelector("main");
    if(!main || document.querySelector(".mbc-ind-banner")) return;
    var img=cfg[4]||"", alt=cfg[5]||cfg[1];
    var bgLayer = img
      ? '<img class="mbc-ib-img" src="'+img+'" alt="'+alt+'" loading="lazy" decoding="async">'+
        '<div class="mbc-ib-ov"></div>'
      : '<div class="mbc-ib-ov" style="background:'+cfg[3]+'"></div>'; // fallback if image missing
    var banner=el('<section class="mbc-ind-banner" style="background:'+cfg[3]+'">'+
      bgLayer+
      '<div class="mbc-ib-inner">'+
        '<span class="mbc-ib-ic"><i class="fa-solid '+cfg[0]+'"></i></span>'+
        '<h2>'+cfg[1]+'</h2><p>'+cfg[2]+'</p>'+
        '<div class="mbc-ib-cta">'+
          '<a class="btn btn-gold" href="contact.html">Book a Free Consultation</a>'+WA_BTN+
        '</div>'+
      '</div></section>');
    // place banner right after the breadcrumb (if any) or at top of main
    var crumb=main.querySelector(".crumb");
    if(crumb && crumb.parentElement){ crumb.parentElement.insertAdjacentElement("afterend", banner); }
    else { main.insertBefore(banner, main.firstChild); }
  }

  /* ===================================================================
     Scroll reveal
     =================================================================== */
  function setupReveal(){
    var items=document.querySelectorAll("section .card, .steps .step, .trust .t");
    if(!("IntersectionObserver" in window) || !items.length) return;
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("mbc-in"); io.unobserve(e.target);} });
    },{threshold:.12});
    items.forEach(function(it){ it.classList.add("mbc-reveal"); io.observe(it); });
  }

  /* ===================================================================
     Init
     =================================================================== */
  function init(){
    try{ setupNavState(); }catch(e){}
    try{ setupMega(); }catch(e){}
    try{ setupMenu(); }catch(e){}
    try{ setupSocial(); }catch(e){}
    try{ setupSlider(); }catch(e){}
    try{ setupIndustryBanner(); }catch(e){}
    try{ setupReveal(); }catch(e){}
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
