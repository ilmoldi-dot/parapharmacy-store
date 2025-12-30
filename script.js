// بيانات المنتجات الأولية (345 منتج متنوع)
let products = [
    // فيتامينات (70 منتج)
    {id: 1, name: "فيتامين سي 1000 ملغ", category: "vitamins", price: 850, image: "https://images.unsplash.com/photo-1584308666741-ee7dcbf75621?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "مكمل غذائي لفيتامين سي"},
    {id: 2, name: "فيتامين د3 1000 وحدة", category: "vitamins", price: 1200, image: "https://images.unsplash.com/photo-1584308666741-ee7dcbf75621?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "مكمل فيتامين د3"},
    {id: 3, name: "فيتامين ب المركب", category: "vitamins", price: 950, image: "https://images.unsplash.com/photo-1584308666741-ee7dcbf75621?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "مجموعة فيتامينات ب"},
    {id: 4, name: "أوميغا 3 كبسولات", category: "vitamins", price: 1800, image: "https://images.unsplash.com/photo-1584308666741-ee7dcbf75621?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "زيت السمك أوميغا 3"},
    {id: 5, name: "فيتامين إي 400 وحدة", category: "vitamins", price: 750, image: "https://images.unsplash.com/photo-1584308666741-ee7dcbf75621?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "مضاد للأكسدة"},
    
    // عناية البشرة (70 منتج)
    {id: 101, name: "مرطب الوجه نيفيا", category: "skincare", price: 1250, image: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "مرطب يومي للبشرة"},
    {id: 102, name: "واقي شمس SPF 50", category: "skincare", price: 1800, image: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "حماية من الأشعة فوق البنفسجية"},
    {id: 103, name: "غسول الوجه سيرافي", category: "skincare", price: 950, image: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "لجميع أنواع البشرة"},
    {id: 104, name: "كريم مضاد للبثور", category: "skincare", price: 2200, image: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "علاج حب الشباب"},
    {id: 105, name: "مصل فيتامين سي للبشرة", category: "skincare", price: 3200, image: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "تفتيح وتجديد البشرة"},
    
    // فراشات الأسنان والعناية بالفم (50 منتج)
    {id: 201, name: "فرشاة أسنان كهربائية", category: "oral", price: 4500, image: "https://images.unsplash.com/photo-1625832011042-e6c50df0d3b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "فرشاة كهربائية مع رؤوس متعددة"},
    {id: 202, name: "معجون أسنان كولجيت", category: "oral", price: 650, image: "https://images.unsplash.com/photo-1625832011042-e6c50df0d3b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "حماية من التسوس"},
    {id: 203, name: "غسول الفم ليسترين", category: "oral", price: 1200, image: "https://images.unsplash.com/photo-1625832011042-e6c50df0d3b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "قتل البكتيريا"},
    {id: 204, name: "خيط أسنان", category: "oral", price: 400, image: "https://images.unsplash.com/photo-1625832011042-e6c50df0d3b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "50 متر"},
    {id: 205, name: "فرشاة أسنان ناعمة", category: "oral", price: 300, image: "https://images.unsplash.com/photo-1625832011042-e6c50df0d3b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "لثة حساسة"},
    
    // حفاضات وعناية الأطفال (50 منتج)
    {id: 301, name: "حفاضات حجم 1 (2-5 كغ)", category: "baby", price: 1200, image: "https://images.unsplash.com/photo-1584839404041-94c3c5dd70a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "32 حفاضة"},
    {id: 302, name: "حفاضات حجم 3 (5-9 كغ)", category: "baby", price: 1500, image: "https://images.unsplash.com/photo-1584839404041-94c3c5dd70a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "28 حفاضة"},
    {id: 303, name: "حفاضات حجم 5 (11-25 كغ)", category: "baby", price: 2200, image: "https://images.unsplash.com/photo-1584839404041-94c3c5dd70a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "22 حفاضة"},
    {id: 304, name: "مناديل مبللة للأطفال", category: "baby", price: 850, image: "https://images.unsplash.com/photo-1584839404041-94c3c5dd70a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "72 منديل"},
    {id: 305, name: "كريم طفح الحفاض", category: "baby", price: 950, image: "https://images.unsplash.com/photo-1584839404041-94c3c5dd70a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "لطفح الحفاضات"},
    
    // العناية بالشعر (30 منتج)
    {id: 401, name: "شامبو ضد القشرة", category: "hair", price: 1100, image: "https://images.unsplash.com/photo-1560743173-567a3b5658b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "للقشرة والشعر الدهني"},
    {id: 402, name: "بلسم ترطيب عميق", category: "hair", price: 1250, image: "https://images.unsplash.com/photo-1560743173-567a3b5658b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "للشعر الجاف والمجعد"},
    {id: 403, name: "زيت الأرجان للشعر", category: "hair", price: 1800, image: "https://images.unsplash.com/photo-1560743173-567a3b5658b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "تغذية وترطيب"},
    {id: 404, name: "مصل إنبات الشعر", category: "hair", price: 3500, image: "https://images.unsplash.com/photo-1560743173-567a3b5658b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "لمكافحة التساقط"},
    {id: 405, name: "رغوة تثبيت الشعر", category: "hair", price: 850, image: "https://images.unsplash.com/photo-1560743173-567a3b5658b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "تثبيت وتصفيف"},
    
    // العناية الشخصية (40 منتج)
    {id: 501, name: "صابون الجلسرين", category: "personal", price: 350, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "للبشرة الحساسة"},
    {id: 502, name: "مزيل عرق رول أون", category: "personal", price: 750, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "حماية 48 ساعة"},
    {id: 503, name: "شفرات حلاقة", category: "personal", price: 450, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "4 شفرات"},
    {id: 504, name: "معقم اليدين", category: "personal", price: 600, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "100 مل"},
    {id: 505, name: "قطن طبي", category: "personal", price: 300, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "100 قطعة"},
    
    // مستلزمات طبية (35 منتج)
    {id: 601, name: "مقياس حرارة رقمي", category: "medical", price: 1800, image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "قياس سريع ودقيق"},
    {id: 602, name: "جهاز قياس الضغط", category: "medical", price: 6500, image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "ذراعي آلي"},
    {id: 603, name: "لصقات طبية", category: "medical", price: 250, image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "40 لصقة"},
    {id: 604, name: "قفازات طبية", category: "medical", price: 800, image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "100 قفاز"},
    {id: 605, name: "كمامات طبية", category: "medical", price: 450, image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "50 كمامة"}
];

// توليد المزيد من المنتجات تلقائياً ليصبح المجموع 345 منتج
function generateMoreProducts() {
    const categories = [
        {id: "vitamins", name: "فيتامينات", count: 70},
        {id: "skincare", name: "عناية البشرة", count: 70},
        {id: "oral", name: "فراشات الأسنان والعناية بالفم", count: 50},
        {id: "baby", name: "حفاضات وعناية الأطفال", count: 50},
        {id: "hair", name: "العناية بالشعر", count: 30},
        {id: "personal", name: "العناية الشخصية", count: 40},
        {id: "medical", name: "مستلزمات طبية", count: 35}
    ];
    
    // صور افتراضية لكل فئة
    const categoryImages = {
        vitamins: "https://images.unsplash.com/photo-1584308666741-ee7dcbf75621?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        skincare: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        oral: "https://images.unsplash.com/photo-1625832011042-e6c50df0d3b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        baby: "https://images.unsplash.com/photo-1584839404041-94c3c5dd70a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        hair: "https://images.unsplash.com/photo-1560743173-567a3b5658b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        personal: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        medical: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    };
    
    // أسماء منتجات افتراضية لكل فئة
    const productNames = {
        vitamins: ["فيتامين أ", "فيتامين ك", "فيتامين ب12", "مكمل زنك", "مكمل مغنيسيوم", "مكمل حديد", "مكمل كالسيوم", "مكمل سيلينيوم", "مكمل كروم", "مكمل نحاس"],
        skincare: ["تونر الوجه", "مقشر الوجه", "قناع الطين", "كريم العيون", "مصل الهيالورونيك", "كريم الليل", "مصل النياسيناميد", "جل تنظيف المسام", "مصل الريتينول", "مرطب مع SPF"],
        oral: ["غسول الفم بالأعشاب", "معجون أسنان للأطفال", "معجون أسنان للتبييض", "فرشاة أسنان كهربائية", "فرشاة أسنان ناعمة", "فرشاة أسنان متوسطة", "خيط أسنان مشمع", "خلة أسنان", "غسول الفم للثة الحساسة", "معجون أسنان للثة"],
        baby: ["حفاضات ليلية", "حفاضات سباحة", "حفاضات قابلة لإعادة الاستخدام", "كريم ترطيب الأطفال", "شامبو أطفال", "صابون أطفال", "زيت تدليك الأطفال", "بودرة أطفال", "غسول ملابس الأطفال", "مناديل معقمة"],
        hair: ["شامبو للشعر الجاف", "شامبو للشعر الدهني", "بلسم بدون شطف", "مصل الانفصال", "زيت جوز الهند", "زيت الخروع", "رغوة تصفيف", "جيل تثبيت", "شامبو للشعر الملون", "علاج الشعر التالف"],
        personal: ["مزيل عرق بخاخ", "مزيل عرق كريم", "صابون سائل", "صابون مضاد للبكتيريا", "شفرات حلاقة نسائية", "موس حلاقة", "كريم حلاقة", "مزيل رائحة القدمين", "مزيل شعر كريم", "مقشر الجسم"],
        medical: ["شرائط اختبار السكر", "حقن الأنسولين", "أجهزة الاستنشاق", "ضمادات شاش", "رباط ضاغط", "مقص طبي", "ملقط", "مقياس الأكسجين", "سماعة طبية", "مصباح يدوي طبي"]
    };
    
    let nextId = products.length + 1;
    
    categories.forEach(category => {
        // حساب عدد المنتجات المطلوب إضافتها
        const existingCount = products.filter(p => p.category === category.id).length;
        const toAdd = category.count - existingCount;
        
        for (let i = 0; i < toAdd; i++) {
            const nameIndex = i % productNames[category.id].length;
            const price = Math.floor(Math.random() * 5000) + 500; // سعر بين 500 و 5500 دج
            
            products.push({
                id: nextId++,
                name: `${productNames[category.id][nameIndex]} ${i + 1}`,
                category: category.id,
                price: price,
                image: categoryImages[category.id],
                description: `منتج ${category.name} عالي الجودة`
            });
        }
    });
}

// استدعاء الدالة لتوليد المنتجات
generateMoreProducts();

// سلة التسوق
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// عناصر DOM
const productsContainer = document.getElementById('productsContainer');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const totalItems = document.getElementById('totalItems');
const totalPrice = document.getElementById('totalPrice');
const categoryButtons = document.querySelectorAll('.category-btn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const clearCartBtn = document.getElementById('clearCartBtn');
const addProductForm = document.getElementById('addProductForm');
const adminProductsList = document.getElementById('adminProductsList');
const pagination = document.getElementById('pagination');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// المتغيرات العامة
let currentCategory = 'all';
let currentSearch = '';
let currentPage = 1;
const productsPerPage = 12;

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    displayCart();
    displayAdminProducts();
    setupEventListeners();
    updateCartCount();
    
    // إظهار موجه تثبيت التطبيق إذا كان المتصفح يدعمه
    if ('serviceWorker' in navigator && 'BeforeInstallPromptEvent' in window) {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            const installPrompt = document.getElementById('installPrompt');
            const installPromptBtn = document.getElementById('installPromptBtn');
            const installCancelBtn = document.getElementById('installCancelBtn');
            
            installPrompt.style.display = 'flex';
            
            installPromptBtn.addEventListener('click', () => {
                e.prompt();
                installPrompt.style.display = 'none';
            });
            
            installCancelBtn.addEventListener('click', () => {
                installPrompt.style.display = 'none';
            });
        });
    }
});

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // أزرار الفئات
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.getAttribute('data-category');
            currentPage = 1;
            displayProducts();
        });
    });
    
    // البحث
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') performSearch();
    });
    
    // إتمام الطلب عبر واتساب
    checkoutBtn.addEventListener('click', checkout);
    
    // إفراغ السلة
    clearCartBtn.addEventListener('click', clearCart);
    
    // إضافة منتج جديد
    addProductForm.addEventListener('submit', addNewProduct);
    
    // القائمة المتنقلة
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // زر تثبيت التطبيق
    const installBtn = document.getElementById('installBtn');
    if (installBtn) {
        installBtn.addEventListener('click', function() {
            if ('serviceWorker' in navigator && 'BeforeInstallPromptEvent' in window) {
                window.dispatchEvent(new Event('beforeinstallprompt'));
            } else {
                alert('لتثبيت التطبيق، افتح قائمة المتصفح واختر "إضافة إلى الشاشة الرئيسية"');
            }
        });
    }
}

// عرض المنتجات
function displayProducts() {
    // تصفية المنتجات حسب الفئة والبحث
    let filteredProducts = products;
    
    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
    }
    
    if (currentSearch) {
        const searchTerm = currentSearch.toLowerCase();
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // حساب عدد الصفحات
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    // تحديد المنتجات للصفحة الحالية
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    // إنشاء عناصر المنتجات
    productsContainer.innerHTML = '';
    
    if (productsToShow.length === 0) {
        productsContainer.innerHTML = '<p class="empty-cart">لا توجد منتجات متاحة</p>';
    } else {
        productsToShow.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'">
                </div>
                <div class="product-info">
                    <span class="product-category">${getCategoryName(product.category)}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">${product.price.toFixed(2)} دج</div>
                    <div class="product-actions">
                        <button class="add-to-cart" data-id="${product.id}">
                            <i class="fas fa-cart-plus"></i> إضافة للسلة
                        </button>
                        <button class="remove-product" data-id="${product.id}">
                            <i class="fas fa-trash"></i> حذف
                        </button>
                    </div>
                </div>
            `;
            productsContainer.appendChild(productCard);
        });
        
        // إضافة مستمعي الأحداث للأزرار الجديدة
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                addToCart(productId);
            });
        });
        
        document.querySelectorAll('.remove-product').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                removeProduct(productId);
            });
        });
    }
    
    // عرض أزرار الترقيم
    displayPagination(totalPages);
}

// عرض أزرار الترقيم
function displayPagination(totalPages) {
    pagination.innerHTML = '';
    
    if (totalPages <= 1) return;
    
    // زر الصفحة السابقة
    if (currentPage > 1) {
        const prevButton = document.createElement('button');
        prevButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
        prevButton.addEventListener('click', () => {
            currentPage--;
            displayProducts();
            window.scrollTo({top: productsContainer.offsetTop - 100, behavior: 'smooth'});
        });
        pagination.appendChild(prevButton);
    }
    
    // أزرار الصفحات
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.className = i === currentPage ? 'active' : '';
            pageButton.addEventListener('click', () => {
                currentPage = i;
                displayProducts();
                window.scrollTo({top: productsContainer.offsetTop - 100, behavior: 'smooth'});
            });
            pagination.appendChild(pageButton);
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.padding = '0.5rem';
            pagination.appendChild(ellipsis);
        }
    }
    
    // زر الصفحة التالية
    if (currentPage < totalPages) {
        const nextButton = document.createElement('button');
        nextButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
        nextButton.addEventListener('click', () => {
            currentPage++;
            displayProducts();
            window.scrollTo({top: productsContainer.offsetTop - 100, behavior: 'smooth'});
        });
        pagination.appendChild(nextButton);
    }
}

// البحث عن المنتجات
function performSearch() {
    currentSearch = searchInput.value.trim();
    currentPage = 1;
    displayProducts();
}

// الحصول على اسم الفئة بالعربية
function getCategoryName(categoryId) {
    const categories = {
        vitamins: 'فيتامينات',
        skincare: 'عناية البشرة',
        oral: 'فراشات الأسنان والعناية بالفم',
        baby: 'حفاضات وعناية الأطفال',
        hair: 'العناية بالشعر',
        personal: 'العناية الشخصية',
        medical: 'مستلزمات طبية'
    };
    return categories[categoryId] || categoryId;
}

// إضافة منتج إلى السلة
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    saveCart();
    displayCart();
    updateCartCount();
    
    // إشعار بصري
    showNotification(`تم إضافة ${product.name} إلى السلة`);
}

// إزالة منتج من السلة
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    displayCart();
    updateCartCount();
    
    // إشعار بصري
    showNotification('تم إزالة المنتج من السلة');
}

// تحديث كمية المنتج في السلة
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        displayCart();
        updateCartCount();
    }
}

// عرض السلة
function displayCart() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">سلة التسوق فارغة</p>';
        totalItems.textContent = '0';
        totalPrice.textContent = '0.00';
        return;
    }
    
    let itemsCount = 0;
    let priceTotal = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'">
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <div class="cart-item-price">${item.price.toFixed(2)} دج</div>
            </div>
            <div class="cart-item-actions">
                <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn increase" data-id="${item.id}">+</button>
                <button class="remove-item" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItems.appendChild(cartItem);
        
        itemsCount += item.quantity;
        priceTotal += item.price * item.quantity;
    });
    
    // تحديث الملخص
    totalItems.textContent = itemsCount;
    totalPrice.textContent = priceTotal.toFixed(2);
    
    // إضافة مستمعي الأحداث
    document.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateQuantity(productId, -1);
        });
    });
    
    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateQuantity(productId, 1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

// تحديث عداد السلة
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
}

// حفظ السلة في التخزين المحلي
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// إتمام الطلب عبر واتساب
function checkout() {
    if (cart.length === 0) {
        showNotification('سلة التسوق فارغة', 'error');
        return;
    }
    
    let message = `مرحبًا، أريد طلب المنتجات التالية من شبه صيدلية صابر عبد الكريم:\n\n`;
    
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ${item.quantity} × ${item.price.toFixed(2)} دج = ${(item.quantity * item.price).toFixed(2)} دج\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\nالمجموع: ${total.toFixed(2)} دج\n`;
    message += `\nالاسم: ____________\nالهاتف: ____________\nالعنوان: ____________\n\nملاحظة: الأسعار لا تشمل تكاليف التوصيل - الاستلام من المتجر فقط`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/213674086646?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// إفراغ السلة
function clearCart() {
    if (cart.length === 0) {
        showNotification('سلة التسوق فارغة بالفعل', 'error');
        return;
    }
    
    if (confirm('هل أنت متأكد من إفراغ سلة التسوق؟')) {
        cart = [];
        saveCart();
        displayCart();
        updateCartCount();
        showNotification('تم إفراغ سلة التسوق');
    }
}

// إضافة منتج جديد
function addNewProduct(e) {
    e.preventDefault();
    
    const name = document.getElementById('productName').value;
    const category = document.getElementById('productCategory').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const image = document.getElementById('productImage').value;
    const description = document.getElementById('productDescription').value;
    
    // التحقق من صحة البيانات
    if (!name || !category || !price || !image) {
        showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
    }
    
    // إنشاء معرف فريد للمنتج
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    
    // إضافة المنتج إلى المصفوفة
    const newProduct = {
        id: newId,
        name: name,
        category: category,
        price: price,
        image: image,
        description: description || 'منتج جديد'
    };
    
    products.push(newProduct);
    
    // حفظ المنتجات في التخزين المحلي
    saveProducts();
    
    // إعادة تعيين النموذج
    addProductForm.reset();
    
    // تحديث العرض
    displayProducts();
    displayAdminProducts();
    
    showNotification(`تم إضافة ${name} بنجاح`);
}

// عرض المنتجات في لوحة الإدارة
function displayAdminProducts() {
    adminProductsList.innerHTML = '';
    
    if (products.length === 0) {
        adminProductsList.innerHTML = '<p class="empty-cart">لا توجد منتجات مضافة</p>';
        return;
    }
    
    // عرض أحدث المنتجات أولاً
    const reversedProducts = [...products].reverse().slice(0, 20);
    
    reversedProducts.forEach(product => {
        const adminProduct = document.createElement('div');
        adminProduct.className = 'admin-product-item';
        adminProduct.innerHTML = `
            <div class="admin-product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'">
            </div>
            <div class="admin-product-details">
                <h4 class="admin-product-name">${product.name}</h4>
                <div class="admin-product-category">${getCategoryName(product.category)}</div>
                <div class="admin-product-price">${product.price.toFixed(2)} دج</div>
            </div>
            <button class="delete-product" data-id="${product.id}">
                <i class="fas fa-trash"></i> حذف
            </button>
        `;
        adminProductsList.appendChild(adminProduct);
    });
    
    // إضافة مستمعي الأحداث لأزرار الحذف
    document.querySelectorAll('.delete-product').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            deleteProduct(productId);
        });
    });
}

// حذف منتج
function deleteProduct(productId) {
    if (confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
        products = products.filter(p => p.id !== productId);
        saveProducts();
        displayProducts();
        displayAdminProducts();
        showNotification('تم حذف المنتج بنجاح');
    }
}

// إزالة منتج من القائمة الرئيسية
function removeProduct(productId) {
    if (confirm('هل أنت متأكد من حذف هذا المنتج من المتجر؟')) {
        deleteProduct(productId);
    }
}

// حفظ المنتجات في التخزين المحلي
function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

// تحميل المنتجات من التخزين المحلي
function loadProducts() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
        const parsedProducts = JSON.parse(savedProducts);
        // دمج المنتجات المحفوظة مع المنتجات الأولية
        // (تجنب التكرار بناءً على المعرف)
        parsedProducts.forEach(savedProduct => {
            if (!products.some(p => p.id === savedProduct.id)) {
                products.push(savedProduct);
            }
        });
    }
}

// إشعارات
function showNotification(message, type = 'success') {
    // إنشاء عنصر الإشعار
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideDown 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // إزالة الإشعار بعد 3 ثوانٍ
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// إضافة أنيميشن للإشعارات
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { top: -100px; opacity: 0; }
        to { top: 20px; opacity: 1; }
    }
    @keyframes slideUp {
        from { top: 20px; opacity: 1; }
        to { top: -100px; opacity: 0; }
    }
`;
document.head.appendChild(style);

// تحميل المنتجات المحفوظة عند البدء
loadProducts();