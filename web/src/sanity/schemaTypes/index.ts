import { defineType, defineField, defineArrayMember } from "sanity";

const localeString = defineField({
  name: "localeString",
  title: "Localized string",
  type: "object",
  fields: [
    defineField({ name: "en", type: "string", title: "English" }),
    defineField({ name: "th", type: "string", title: "Thai" }),
    defineField({ name: "zh", type: "string", title: "Chinese" }),
  ],
});

const localeText = defineField({
  name: "localeText",
  title: "Localized text",
  type: "object",
  fields: [
    defineField({ name: "en", type: "text", title: "English" }),
    defineField({ name: "th", type: "text", title: "Thai" }),
    defineField({ name: "zh", type: "text", title: "Chinese" }),
  ],
});

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", initialValue: "W1@Bangkoknoi" }),
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "phoneDirect", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "emailHm", type: "string" }),
    defineField({ name: "emailSales", type: "string" }),
    defineField({ name: "whatsapp", type: "string" }),
    defineField({ name: "address", type: "text" }),
    defineField({ name: "bookDirectUrl", type: "url" }),
    defineField({ name: "logo", type: "image", options: { hotspot: true } }),
  ],
});

export const room = defineType({
  name: "room",
  title: "Room",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", type: "number" }),
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "descriptionTh", type: "text", title: "Description (TH)" }),
    defineField({ name: "descriptionZh", type: "text", title: "Description (ZH)" }),
    defineField({
      name: "amenities",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({ name: "bookUrl", type: "url" }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});

export const treatment = defineType({
  name: "treatment",
  title: "Treatment",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "duration", type: "string" }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "descriptionTh", type: "text" }),
    defineField({ name: "descriptionZh", type: "text" }),
    defineField({ name: "order", type: "number" }),
    defineField({ name: "image", type: "image" }),
  ],
});

export const wellnessPackage = defineType({
  name: "wellnessPackage",
  title: "Wellness Package",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "summary", type: "text" }),
    defineField({ name: "factsheet", type: "file" }),
    defineField({ name: "brochure", type: "file" }),
    defineField({ name: "image", type: "image" }),
  ],
});

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({ name: "category", type: "string", options: { list: ["boat", "activity", "culture"] } }),
    defineField({ name: "summary", type: "text" }),
    defineField({ name: "summaryTh", type: "text" }),
    defineField({ name: "summaryZh", type: "text" }),
    defineField({ name: "image", type: "image" }),
    defineField({ name: "order", type: "number" }),
  ],
});

export const galleryImage = defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    defineField({
      name: "album",
      type: "string",
      options: { list: ["weddings", "events", "spa", "dining"] },
    }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "caption", type: "string" }),
    defineField({ name: "order", type: "number" }),
  ],
});

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroEyebrow",
      type: "string",
    }),
    defineField({ name: "heroTitle", type: "string" }),
    defineField({ name: "heroTitleTh", type: "string" }),
    defineField({ name: "heroTitleZh", type: "string" }),
    defineField({ name: "heroSubtitle", type: "text" }),
    defineField({ name: "heroSubtitleTh", type: "text" }),
    defineField({ name: "heroSubtitleZh", type: "text" }),
    defineField({ name: "heroImage", type: "image" }),
    defineField({ name: "heroVideoUrl", type: "url", description: "Public video URL or path" }),
    defineField({
      name: "body",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({ type: "image", options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: "sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "contentSection",
          fields: [
            defineField({ name: "heading", type: "string" }),
            defineField({ name: "headingTh", type: "string" }),
            defineField({ name: "headingZh", type: "string" }),
            defineField({ name: "body", type: "text" }),
            defineField({ name: "bodyTh", type: "text" }),
            defineField({ name: "bodyZh", type: "text" }),
            defineField({ name: "image", type: "image" }),
            defineField({ name: "ctaLabel", type: "string" }),
            defineField({ name: "ctaHref", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({ name: "seoTitle", type: "string" }),
    defineField({ name: "seoDescription", type: "text" }),
  ],
});

export const legalPage = defineType({
  name: "legalPage",
  title: "Legal Page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});

export const schemaTypes = [
  siteSettings,
  page,
  room,
  treatment,
  wellnessPackage,
  experience,
  galleryImage,
  legalPage,
];

// silence unused if tree-shaken oddly
void localeString;
void localeText;
