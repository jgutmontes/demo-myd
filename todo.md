# AgroClub Website Copy - MVP Implementation Plan

## Overview
Creating a copy of https://agroclub.pe/ - an agricultural education platform offering online courses.

## Key Features Observed
1. **Header Navigation**: Logo, menu items (¿Quiénes somos?, Cursos, Servicios, etc.), login/register buttons
2. **Hero Section**: Welcome message, main heading about agricultural courses, CTA button
3. **Why Choose Section**: 4 feature cards with icons and descriptions
4. **Course Carousel**: Sliding course cards with images and titles
5. **Membership Section**: Call-to-action for subscriptions
6. **Experts Section**: Profile cards of agricultural specialists
7. **Footer**: Social links, contact info, navigation links

## Files to Create (Max 8 files)
1. **src/pages/Index.tsx** - Main homepage (rewrite existing)
2. **src/components/Header.tsx** - Navigation header
3. **src/components/HeroSection.tsx** - Welcome and main CTA section
4. **src/components/WhyChooseSection.tsx** - Features section with 4 cards
5. **src/components/CourseCarousel.tsx** - Course cards carousel
6. **src/components/ExpertsSection.tsx** - Specialists profiles
7. **src/components/Footer.tsx** - Footer with links and contact
8. **src/data/mockData.ts** - Mock data for courses and experts

## Design Approach
- Green agricultural theme (matching original)
- Modern, professional layout
- Responsive design with Tailwind CSS
- Smooth animations and hover effects
- Course cards with images (placeholder images)
- Expert profile cards
- Social media icons

## Technical Implementation
- React components with TypeScript
- Tailwind CSS for styling
- Shadcn/ui components where applicable
- Mock data for courses and experts
- Responsive carousel for courses
- Smooth scrolling and animations

## Content (Spanish, matching original)
- Hero: "¡Bienvenido a Agro Club!" / "Cursos agrícolas grabados desde el campo"
- Features: Expert instructors, innovative courses, online education, certification
- Sample courses: Arándanos, Palta, Capsicum, etc.
- Expert profiles with agricultural specializations