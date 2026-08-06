import React from 'react'

interface SchemaMarkupProps {
  schema: Record<string, unknown>
}

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ schema }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const getBaseKnowledgeGraphSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Physician',
        '@id': 'https://draceciliataboada.com.ar/#physician',
        'name': 'Dra. María Cecilia Taboada',
        'givenName': 'María Cecilia',
        'familyName': 'Taboada',
        'jobTitle': 'Médica Especialista en Oftalmología',
        'medicalSpecialty': 'Ophthalmology',
        'url': 'https://draceciliataboada.com.ar',
        'image': 'https://draceciliataboada.com.ar/opengraph-image.png',
        'telephone': '+5491171121934',
        'email': 'institutotaboada@gmail.com',
        'sameAs': [
          'https://www.instagram.com/draceciliataboada',
          'https://www.linkedin.com/in/dra-cecilia-taboada/',
        ],
        'knowsAbout': [
          'Oftalmología',
          'Cirugía de Cataratas',
          'Glaucoma',
          'Tratamiento de Ojo Seco',
          'Salud Visual Preventiva',
          'Cirugía Refractiva',
        ],
      },
      {
        '@type': 'MedicalClinic',
        '@id': 'https://draceciliataboada.com.ar/#clinic',
        'name': 'Consultorio Oftalmológico Dra. Cecilia Taboada',
        'url': 'https://draceciliataboada.com.ar',
        'telephone': '+5491171121934',
        'email': 'institutotaboada@gmail.com',
        'medicalSpecialty': 'Ophthalmology',
        'priceRange': '$$$',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Buenos Aires',
          'addressCountry': 'AR',
        },
        'medicalDirector': {
          '@id': 'https://draceciliataboada.com.ar/#physician',
        },
      },
    ],
  }
}
