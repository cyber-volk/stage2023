import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from './dialog';
import { Button } from './button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Dialog key={index} open={isOpen && currentImageIndex === index} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <div className="relative aspect-video cursor-pointer group overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  onClick={() => setCurrentImageIndex(index)}
                  loading="lazy"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <div className="relative aspect-video">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                  priority
                />
                {image.caption && (
                  <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center">
                    {image.caption}
                  </p>
                )}
              </div>
              <div className="flex justify-between items-center mt-4">
                <Button variant="ghost" size="icon" onClick={previousImage}>
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <span className="text-sm">
                  {currentImageIndex + 1} / {images.length}
                </span>
                <Button variant="ghost" size="icon" onClick={nextImage}>
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
