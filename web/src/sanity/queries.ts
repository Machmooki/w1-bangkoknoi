export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  title, tagline, phone, phoneDirect, email, emailHm, emailSales, whatsapp, address, bookDirectUrl, logo
}`;

export const roomsQuery = `*[_type == "room"]|order(order asc){
  name, "slug": slug.current, tagline, description, descriptionTh, descriptionZh, amenities, images, bookUrl, order
}`;

export const treatmentsQuery = `*[_type == "treatment"]|order(order asc){
  name, duration, description, descriptionTh, descriptionZh, image
}`;

export const pageBySlugQuery = `*[_type == "page" && slug.current == $slug][0]{
  title, heroEyebrow, heroTitle, heroTitleTh, heroTitleZh,
  heroSubtitle, heroSubtitleTh, heroSubtitleZh,
  heroImage, heroVideoUrl, body, sections, seoTitle, seoDescription
}`;

export const galleryByAlbumQuery = `*[_type == "galleryImage" && album == $album]|order(order asc){
  caption, image, order
}`;

export const experiencesQuery = `*[_type == "experience"]|order(order asc){
  title, "slug": slug.current, category, summary, summaryTh, summaryZh, image
}`;

export const legalBySlugQuery = `*[_type == "legalPage" && slug.current == $slug][0]{
  title, body
}`;
