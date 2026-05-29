import type { Meta, StoryObj } from "@storybook/react-vite";
import ImageGallery from "./ImageGallery";

const meta: Meta<typeof ImageGallery> = {
  title: "Data Display/ImageGallery",
  component: ImageGallery,
};

export default meta;
type Story = StoryObj<typeof ImageGallery>;

// Using public picsum photos for placeholder images
const images = [
  { src: "https://picsum.photos/seed/a/600/600", alt: "Forest path",     caption: "Forest path" },
  { src: "https://picsum.photos/seed/b/600/600", alt: "Mountain lake",   caption: "Mountain lake" },
  { src: "https://picsum.photos/seed/c/600/600", alt: "City skyline",    caption: "City skyline" },
  { src: "https://picsum.photos/seed/d/600/600", alt: "Ocean waves",     caption: "Ocean waves" },
  { src: "https://picsum.photos/seed/e/600/600", alt: "Desert dunes",    caption: "Desert dunes" },
  { src: "https://picsum.photos/seed/f/600/600", alt: "Autumn leaves",   caption: "Autumn leaves" },
];

export const Default: Story = {
  render: () => <ImageGallery images={images} cols={3} gap="md" />,
};

export const TwoColumns: Story = {
  render: () => <ImageGallery images={images} cols={2} gap="lg" />,
};

export const FourColumns: Story = {
  render: () => <ImageGallery images={images} cols={4} gap="sm" />,
};

export const VideoAspect: Story = {
  render: () => <ImageGallery images={images} cols={3} aspectRatio="video" />,
};

export const NoLightbox: Story = {
  render: () => <ImageGallery images={images} cols={3} lightbox={false} />,
};
