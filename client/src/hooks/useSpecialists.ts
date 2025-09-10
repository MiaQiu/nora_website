import { useMemo } from 'react';
import { 
  specialists, 
  getSpecialistsByCategory, 
  getSpecialistNames, 
  getSpecialistById, 
  getSpecialistByName,
  Specialist 
} from '@/data/specialists';

/**
 * Hook to get all specialists or filter by category
 */
export const useSpecialists = (category?: string): Specialist[] => {
  return useMemo(() => {
    return category ? getSpecialistsByCategory(category) : specialists;
  }, [category]);
};

/**
 * Hook to get a specific specialist by ID
 */
export const useSpecialistById = (id: string): Specialist | undefined => {
  return useMemo(() => {
    return getSpecialistById(id);
  }, [id]);
};

/**
 * Hook to get a specific specialist by name
 */
export const useSpecialistByName = (name: string): Specialist | undefined => {
  return useMemo(() => {
    return getSpecialistByName(name);
  }, [name]);
};

/**
 * Hook to get specialist names for dropdowns
 */
export const useSpecialistNames = (): string[] => {
  return useMemo(() => {
    return getSpecialistNames();
  }, []);
};

/**
 * Hook for specialist search and filtering
 */
export const useSpecialistSearch = (searchTerm: string, category?: string) => {
  return useMemo(() => {
    const baseSpecialists = category ? getSpecialistsByCategory(category) : specialists;
    
    if (!searchTerm) return baseSpecialists;
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    
    return baseSpecialists.filter(specialist =>
      specialist.name.toLowerCase().includes(lowerSearchTerm) ||
      specialist.title.toLowerCase().includes(lowerSearchTerm) ||
      specialist.specialties.some(specialty => 
        specialty.toLowerCase().includes(lowerSearchTerm)
      ) ||
      specialist.languages.some(language => 
        language.toLowerCase().includes(lowerSearchTerm)
      )
    );
  }, [searchTerm, category]);
};