'use strict';
/**
 * Interface for a Job object
 */
export interface Job {
  /**
   * Optional accomplishments
   */
  accomplishments?: string;
  /**
   * Job description
   */
  content: string;
  /**
   * Place of work details
   */
  institution: {
    /**
     * Location of Employer office
     */
    location: string;
    /**
     * Name of employer
     */
    name: string;
    /**
     * Optional Employer web address
     */
    url?: string;
  };
  /**
   * Job title
   */
  title: string;
  /**
   * Optional YouTube video id
   */
  video?: string;
  /**
   * Years of service
   */
  year: {
    /**
     * Start year
     */
    from: string;
    /**
     * End year
     */
    to: string;
  };
}
