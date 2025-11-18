// Global tool data for search functionality
const allTools = [
    // AI Image Tools
    { name: 'AI Image Upscaler', url: 'ai-image-upscaler.html', category: 'AI Image Tools', image: 'AI Image Upscaler.jpeg' },
    { name: 'AI Image Uncrop', url: 'ai-image-uncrop.html', category: 'AI Image Tools', image: 'Image Uncrop.jpeg' },
    { name: 'AI Image Background Remover', url: 'ai-image-background-remover.html', category: 'AI Image Tools', image: 'Image Background Remover.jpeg' },
    { name: 'AI Image Sharpener', url: 'ai-image-sharpener.html', category: 'AI Image Tools', image: 'Image Sharpener.jpeg' },
    { name: 'AI Image Watermark Remover', url: 'ai-image-watermark-remover.html', category: 'AI Image Tools', image: 'Watermark Remover.jpeg' },
    { name: 'AI Image Enhancer', url: 'ai-image-enhancer.html', category: 'AI Image Tools', image: 'Enhancer.jpeg' },
    { name: 'AI Image Enlarger', url: 'ai-image-enlarger.html', category: 'AI Image Tools', image: 'Enlarger.jpg' },
    { name: 'AI Image Resizer', url: 'ai-image-resizer.html', category: 'AI Image Tools', image: 'Resizer.jpeg' },
    { name: 'AI Image Crop', url: 'ai-image-crop.html', category: 'AI Image Tools', image: 'Resizer.jpeg' },
    { name: 'AI Image Denoiser', url: 'ai-image-denoiser.html', category: 'AI Image Tools', image: 'Denoiser.jpeg' },
    
    // Image Converter Tools
    { name: 'JPG to PNG Converter', url: 'jpg-to-png.html', category: 'Image Converters', image: 'JPG to PNG.jpeg' },
    { name: 'JPG to PSD Converter', url: 'jpg-to-psd.html', category: 'Image Converters', image: 'JPG to PSD.jpeg' },
    { name: 'JPG to TIFF Converter', url: 'jpg-to-tiff.html', category: 'Image Converters', image: 'JPG to TIFF.jpeg' },
    { name: 'JPG to HEIC Converter', url: 'jpg-to-heic.html', category: 'Image Converters', image: 'JPG to HEIC.jpeg' },
    { name: 'JPG to BMP Converter', url: 'jpg-to-bmp.html', category: 'Image Converters', image: 'JPG to BMP.jpeg' },
    { name: 'JPG to GIF Converter', url: 'jpg-to-gif.html', category: 'Image Converters', image: 'JPG to GIF.jpeg' },
    { name: 'JPG to WEBP Converter', url: 'jpg-to-webp.html', category: 'Image Converters', image: 'JPG to WEBP.jpeg' },
    { name: 'JPG to JPEG Converter', url: 'jpg-to-jpeg.html', category: 'Image Converters', image: 'JPG to JPEG.jpeg' },
    { name: 'JPG to AVIF Converter', url: 'jpg-to-avif.html', category: 'Image Converters', image: 'JPG to AVIF.jpeg' },
    
    // Vector Converter Tools
    { name: 'JPG to EPS Converter', url: 'jpg-to-eps.html', category: 'Vector Converters', image: 'JPG to EPS.jpeg' },
    { name: 'JPG to AI Converter', url: 'jpg-to-ai.html', category: 'Vector Converters', image: 'JPG to AI.jpeg' },
    { name: 'JPG to SVG Converter', url: 'jpg-to-svg.html', category: 'Vector Converters', image: 'JPG to SVG.jpeg' },
    { name: 'JPG to CGM Converter', url: 'jpg-to-cgm.html', category: 'Vector Converters', image: 'JPG to CGM.jpeg' },
    { name: 'JPG to WMF Converter', url: 'jpg-to-wmf.html', category: 'Vector Converters', image: 'JPG to WMF.jpeg' },
    { name: 'JPG to EMF Converter', url: 'jpg-to-emf.html', category: 'Vector Converters', image: 'JPG to EMF.jpeg' },
    { name: 'JPG to PDF Converter', url: 'jpg-to-pdf.html', category: 'Vector Converters', image: 'JPG to PDF.jpeg' },
    { name: 'JPG to DXF Converter', url: 'jpg-to-dxf.html', category: 'Vector Converters', image: 'JPG to DXF.jpeg' },
    { name: 'JPG to CDR Converter', url: 'jpg-to-cdr.html', category: 'Vector Converters', image: 'JPG to CDR.jpeg' },
    
    // AI Video Tools
    { name: 'AI Video Watermark Remover', url: 'ai-video-watermark-remover.html', category: 'AI Video Tools', image: 'Video Watermark Remover.jpeg' },
    { name: 'AI Video Upscaler', url: 'ai-video-upscaler.html', category: 'AI Video Tools', image: 'Video Upscaler.jpeg' },
    { name: 'AI Video Background Remover', url: 'ai-video-background-remover.html', category: 'AI Video Tools', image: 'Video Background Remover.jpeg' },
    { name: 'AI Video Stabilizer', url: 'ai-video-stabilizer.html', category: 'AI Video Tools', image: 'Video Stabilizer.jpeg' },
    { name: 'AI Video Denoiser', url: 'ai-video-denoiser.html', category: 'AI Video Tools', image: 'Video Denoiser.jpeg' },
    { name: 'AI Video Translator', url: 'ai-video-translator.html', category: 'AI Video Tools', image: 'Video Translator.jpeg' },
    { name: 'AI Video Enhancer', url: 'ai-video-enhancer.html', category: 'AI Video Tools', image: 'Video Enhancer.jpeg' },
    { name: 'AI Video Crop', url: 'ai-video-crop.html', category: 'AI Video Tools', image: 'Video Crop.jpeg' },
    { name: 'AI Video Compressor', url: 'ai-video-compressor.html', category: 'AI Video Tools', image: 'Video Compressor.jpeg' },
    
    // Video Converter Tools
    { name: 'Video to MP4', url: 'video-to-mp4.html', category: 'Video Converters', image: 'MP4.jpeg' },
    { name: 'Video to MOV', url: 'video-to-mov.html', category: 'Video Converters', image: 'MOV.jpeg' },
    { name: 'Video to AVI', url: 'video-to-avi.html', category: 'Video Converters', image: 'AVI.jpeg' },
    { name: 'Video to WMV', url: 'video-to-wmv.html', category: 'Video Converters', image: 'WMV.jpeg' },
    { name: 'Video to MKV', url: 'video-to-mkv.html', category: 'Video Converters', image: 'MKV.jpeg' },
    { name: 'Video to FLV', url: 'video-to-flv.html', category: 'Video Converters', image: 'FLV.jpeg' },
    { name: 'Video to WEBM', url: 'video-to-webm.html', category: 'Video Converters', image: 'WEBM.jpeg' },
    { name: 'Video to AVCHD', url: 'video-to-avchd.html', category: 'Video Converters', image: 'AVCHD.jpeg' },
    { name: 'Video to 3GP', url: 'video-to-3gp.html', category: 'Video Converters', image: '3GP.jpeg' },
    
    // Audio Converter Tools
    { name: 'Video to MP3 Converter', url: 'video-to-mp3.html', category: 'Audio Converters', image: 'Video to MP3.jpeg' },
    { name: 'Video to WAV Converter', url: 'video-to-wav.html', category: 'Audio Converters', image: 'Video to WAV.jpeg' },
    { name: 'Video to AAC Converter', url: 'video-to-aac.html', category: 'Audio Converters', image: 'Video to AAC.jpeg' },
    { name: 'Video to FLAC Converter', url: 'video-to-flac.html', category: 'Audio Converters', image: 'Video to FLAC.jpeg' },
    { name: 'Video to M4A Converter', url: 'video-to-m4a.html', category: 'Audio Converters', image: 'Video to M4A.jpeg' },
    { name: 'Video to OGG Converter', url: 'video-to-ogg.html', category: 'Audio Converters', image: 'Video to OGG.jpg' },
    { name: 'Video to WMA Converter', url: 'video-to-wma.html', category: 'Audio Converters', image: 'Video to WMA.jpeg' },
    { name: 'Video to ALAC Converter', url: 'video-to-alac.html', category: 'Audio Converters', image: 'Video to ALAC.jpeg' },
    { name: 'Video to AIFF Converter', url: 'video-to-aiff.html', category: 'Audio Converters', image: 'Video to AIFF.jpeg' }
];

// Load header and footer dynamically
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            initializeHeader();
        })
        .catch(err => console.error('Error loading header:', err));
}

function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
            initializeFooter();
        })
        .catch(err => console.error('Error loading footer:', err));
}

// Initialize header functionality
function initializeHeader() {
    // Search functionality
    const searchInput = document.getElementById('headerSearch');
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase().trim();
            
            if (query.length === 0) {
                searchResults.style.display = 'none';
                return;
            }
            
            const filtered = allTools.filter(tool => 
                tool.name.toLowerCase().includes(query) || 
                tool.category.toLowerCase().includes(query)
            );
            
            if (filtered.length > 0) {
                searchResults.innerHTML = filtered.slice(0, 8).map(tool => `
                    <div class="search-result-item" onclick="window.location.href='${tool.url}'">
                        <strong>${tool.name}</strong>
                        <div class="text-muted small">${tool.category}</div>
                    </div>
                `).join('');
                searchResults.style.display = 'block';
            } else {
                searchResults.innerHTML = '<div class="search-result-item text-muted">No results found</div>';
                searchResults.style.display = 'block';
            }
        });
        
        // Hide search results when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }
    
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    
    if (darkModeToggle) {
        // Check for saved theme preference or default to light mode
        const currentTheme = localStorage.getItem('theme') || 'light';
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
            if (darkModeIcon) darkModeIcon.className = 'bi bi-sun-fill';
        }
        
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            if (darkModeIcon) {
                darkModeIcon.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
            }
        });
    }
}

// Initialize footer functionality
function initializeFooter() {
    // Add click handlers for modals
    const aboutLinks = document.querySelectorAll('a[href="#about"]');
    const privacyLinks = document.querySelectorAll('a[href="#privacy"]');
    const termsLinks = document.querySelectorAll('a[href="#terms"]');
    
    aboutLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const modal = new bootstrap.Modal(document.getElementById('aboutModal'));
            modal.show();
        });
    });
    
    privacyLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const modal = new bootstrap.Modal(document.getElementById('privacyModal'));
            modal.show();
        });
    });
    
    termsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const modal = new bootstrap.Modal(document.getElementById('termsModal'));
            modal.show();
        });
    });
}

// FAQ Toggle functionality
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active', !isActive);
            });
        }
    });
}

// File upload handler (for tool pages)
function handleFileUpload(inputId, previewId, callback) {
    const fileInput = document.getElementById(inputId);
    const preview = document.getElementById(previewId);
    
    if (!fileInput || !preview) return;
    
    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
                if (callback) callback(file);
            };
            reader.readAsDataURL(file);
        }
    });
}

// Drag and drop handler
function setupDragAndDrop(dropZoneId, previewId, callback) {
    const dropZone = document.getElementById(dropZoneId);
    if (!dropZone) return;
    
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
    });
    
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => {
            dropZone.classList.add('dragover');
        });
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => {
            dropZone.classList.remove('dragover');
        });
    });
    
    dropZone.addEventListener('drop', function(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        
        if (files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = function(e) {
                const preview = document.getElementById(previewId);
                if (preview) {
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                }
                if (callback) callback(file);
            };
            reader.readAsDataURL(file);
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('header-placeholder')) {
        loadHeader();
    }
    if (document.getElementById('footer-placeholder')) {
        loadFooter();
    }
    initializeFAQ();
    
    // Apply saved theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

