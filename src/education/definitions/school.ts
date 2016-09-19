'use strict';
/**
 * Interface for a School object
 */
export interface School {
  /**
   * Years attended
   */
  year: {
    /**
     * Start year
     */
    from: number;
    /**
     * End year
     */
    to: number;
  };
  /**
   * School details
   */
  institution: {
    /**
     * School name
     */
    name: string;
    /**
     * Optional School web address
     */
    url?: string;
    /**
     * School location
     */
    location: string;
  };
  /**
   * Highest qualification
   */
  qualification: string;
  /**
   * Blurb about school
   */
  content: string;
}
