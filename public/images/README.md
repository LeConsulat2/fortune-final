# Images Folder

This folder contains images that will be randomly displayed on your website.

## Naming Conventions

You can name your images however you want! The system is flexible. Here are some suggested naming patterns:

### Option 1: Simple numbered names

```
1.jpg
2.jpg
3.jpg
4.jpg
5.jpg
```

### Option 2: Descriptive names

```
fortune-theme-1.jpg
mystical-background.png
cosmic-decoration.jpg
```

### Option 3: Category-based names

```
background-1.jpg
background-2.jpg
theme-1.png
theme-2.png
decoration-1.jpg
```

## Supported Formats

- JPG/JPEG
- PNG
- GIF
- WebP

## How to Use

1. **Add images to this folder**
2. **Update the image list** in `lib/image-utils.ts` to include your new image names
3. **Or use dynamic loading** - the system can automatically detect all images in this folder

## Example Usage

```tsx
// Show random image from any category
<RandomImage />

// Show random background image
<RandomImage category="background" />

// Show random theme image
<RandomImage category="theme" />
```

## Tips

- Keep image sizes consistent for better visual experience
- Use descriptive alt text for accessibility
- Optimize images for web (compress them)
- Consider using WebP format for better performance
