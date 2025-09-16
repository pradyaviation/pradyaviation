
# AIRAVATH Cinematic Video Background Specifications

## Video Requirements

### Technical Specifications
- **Format**: MP4 (H.264) and WebM (VP9) for cross-browser compatibility
- **Resolution**: 1920×1080 minimum, 4K preferred for high-DPI displays
- **Frame Rate**: 24-30 FPS for cinematic feel
- **Duration**: 10-30 seconds for seamless loop
- **File Size**: Under 10MB for optimal loading

### Visual Style
- **Theme**: Dark, atmospheric, premium
- **Subject**: AIRAVATH air taxi in flight
- **Environment**: Night cityscape, cloud layer, or atmospheric flight
- **Lighting**: Edge lighting on aircraft, soft lens flares, realistic grading
- **Color Palette**: Deep blacks, dark blues, minimal warm accents
- **Camera Movement**: Subtle dolly, pan, or fly-through motion

### Content Guidelines
- **Realism**: Must look like actual footage, not CGI
- **Loop**: Seamless beginning-to-end transition
- **No Text**: Video should be purely visual
- **Sound**: Video will be muted (no audio needed)

### Placement
- Primary: `/public/videos/AIRAVATHa-cinematic-hero.mp4`
- Fallback: `/public/videos/AIRAVATHa-cinematic-hero.webm`
- Poster: `/public/images/AIRAVATHa-hero-poster.jpg`

### Mobile Considerations
- Reduced resolution version for mobile
- Static fallback image for low-bandwidth scenarios
- Respect `prefers-reduced-motion` setting
