/**
 * Comprehensive Alumni Database
 * Complete alumni data structure for dashboard
 */

const ALUMNI_DATABASE = {
    alumni: [
        // Batch 1: PharmD 2020 Graduates
        { id: 'ALM001', name: 'Dr. Ahmed Al-Rashid', graduationYear: 2020, program: 'PharmD', 
          email: 'ahmed.alrashid@email.com', phone: '+966501234567', linkedin: 'linkedin.com/in/ahmed-alrashid',
          city: 'Riyadh', country: 'Saudi Arabia',
          currentEmployer: 'King Abdulaziz Medical City', jobTitle: 'Clinical Pharmacist - Cardiology',
          mentorWilling: true, preceptorWilling: true, preceptorStatus: 'Active',
          certification: { bcps: true, specialty: 'Cardiology', year: 2022 },
          engagement: { guestLectures: 5, careerDays: 3, workshops: 2, panels: 4 },
          mentees: 3, mentoringDuration: '24 months'
        },
        { id: 'ALM002', name: 'Dr. Fatima Al-Suwaidi', graduationYear: 2020, program: 'PharmD',
          email: 'fatima.alsuwaidi@email.com', phone: '+966509876543', linkedin: 'linkedin.com/in/fatima-suwaidi',
          city: 'Abu Dhabi', country: 'United Arab Emirates',
          currentEmployer: 'Cleveland Clinic Abu Dhabi', jobTitle: 'Clinical Pharmacist - Internal Medicine',
          mentorWilling: true, preceptorWilling: false, preceptorStatus: 'N/A',
          certification: { bcps: true, specialty: 'Internal Medicine', year: 2021 },
          engagement: { guestLectures: 3, careerDays: 2, workshops: 3, panels: 2 },
          mentees: 2, mentoringDuration: '18 months'
        },
        { id: 'ALM003', name: 'Dr. Mohammad Al-Otaibi', graduationYear: 2020, program: 'PharmD',
          email: 'mohammad.alotaibi@email.com', phone: '+966505555555', linkedin: 'linkedin.com/in/mohammad-otaibi',
          city: 'Jeddah', country: 'Saudi Arabia',
          currentEmployer: 'Saudi German Hospital', jobTitle: 'Pharmacy Manager - Institutional',
          mentorWilling: false, preceptorWilling: true, preceptorStatus: 'Active',
          certification: { bcps: false, specialty: 'Management', year: null },
          engagement: { guestLectures: 2, careerDays: 1, workshops: 1, panels: 1 },
          mentees: 0, mentoringDuration: '0 months'
        },
        // Batch 2: PharmD 2021 Graduates
        { id: 'ALM004', name: 'Dr. Layan Al-Dossary', graduationYear: 2021, program: 'PharmD',
          email: 'layan.dosary@email.com', phone: '+966503333333', linkedin: 'linkedin.com/in/layan-dosary',
          city: 'Riyadh', country: 'Saudi Arabia',
          currentEmployer: 'National Guard Hospital', jobTitle: 'Residency Coordinator',
          mentorWilling: true, preceptorWilling: true, preceptorStatus: 'Pending',
          certification: { bcps: false, specialty: 'Residency (PGY1)', year: 2022 },
          engagement: { guestLectures: 1, careerDays: 2, workshops: 2, panels: 1 },
          mentees: 4, mentoringDuration: '12 months'
        },
        { id: 'ALM005', name: 'Dr. Sara Al-Zahrani', graduationYear: 2021, program: 'PharmD',
          email: 'sara.zahrani@email.com', phone: '+966502222222', linkedin: 'linkedin.com/in/sara-zahrani',
          city: 'Dammam', country: 'Saudi Arabia',
          currentEmployer: 'Johns Hopkins (Affiliate)', jobTitle: 'Clinical Pharmacist - Oncology',
          mentorWilling: true, preceptorWilling: true, preceptorStatus: 'Active',
          certification: { bcps: true, specialty: 'Oncology', year: 2023 },
          engagement: { guestLectures: 4, careerDays: 3, workshops: 4, panels: 3 },
          mentees: 5, mentoringDuration: '20 months'
        },
        // Batch 3: BPharm 2019 Graduates
        { id: 'ALM006', name: 'Rph. Noor Al-Mutairi', graduationYear: 2019, program: 'BPharm',
          email: 'noor.mutairi@email.com', phone: '+966514444444', linkedin: 'linkedin.com/in/noor-mutairi',
          city: 'Kuwait City', country: 'Kuwait',
          currentEmployer: 'Al-Sabah Hospital', jobTitle: 'Pharmacist - Community Practice',
          mentorWilling: true, preceptorWilling: false, preceptorStatus: 'N/A',
          certification: { bcps: false, specialty: 'Community', year: null },
          engagement: { guestLectures: 0, careerDays: 1, workshops: 1, panels: 0 },
          mentees: 1, mentoringDuration: '8 months'
        },
        { id: 'ALM007', name: 'Rph. Abdullah Al-Shehri', graduationYear: 2019, program: 'BPharm',
          email: 'abdullah.shehri@email.com', phone: '+966506666666', linkedin: 'linkedin.com/in/abdullah-shehri',
          city: 'Riyadh', country: 'Saudi Arabia',
          currentEmployer: 'Ministry of Health', jobTitle: 'Pharmacy Inspector - Regulatory',
          mentorWilling: false, preceptorWilling: false, preceptorStatus: 'N/A',
          certification: { bcps: false, specialty: 'Regulatory', year: null },
          engagement: { guestLectures: 0, careerDays: 0, workshops: 0, panels: 0 },
          mentees: 0, mentoringDuration: '0 months'
        },
        // Batch 4: PharmD 2022 Graduates (Recent)
        { id: 'ALM008', name: 'Dr. Hana Al-Harbi', graduationYear: 2022, program: 'PharmD',
          email: 'hana.harbi@email.com', phone: '+966507777777', linkedin: 'linkedin.com/in/hana-harbi',
          city: 'Riyadh', country: 'Saudi Arabia',
          currentEmployer: 'Undergoing Residency', jobTitle: 'PGY1 Resident - Internal Medicine',
          mentorWilling: true, preceptorWilling: false, preceptorStatus: 'N/A',
          certification: { bcps: false, specialty: 'Residency (PGY1)', year: 2023 },
          engagement: { guestLectures: 0, careerDays: 0, workshops: 0, panels: 0 },
          mentees: 0, mentoringDuration: '0 months'
        },
        { id: 'ALM009', name: 'Dr. Khalid Al-Dowaisan', graduationYear: 2022, program: 'PharmD',
          email: 'khalid.dowaisan@email.com', phone: '+966508888888', linkedin: 'linkedin.com/in/khalid-dowaisan',
          city: 'Kuwait City', country: 'Kuwait',
          currentEmployer: 'Mubarak Al-Kabir Hospital', jobTitle: 'Clinical Pharmacist',
          mentorWilling: true, preceptorWilling: true, preceptorStatus: 'Active',
          certification: { bcps: false, specialty: 'ICU', year: null },
          engagement: { guestLectures: 1, careerDays: 1, workshops: 1, panels: 0 },
          mentees: 2, mentoringDuration: '6 months'
        },
        { id: 'ALM010', name: 'Dr. Rana Al-Yousif', graduationYear: 2022, program: 'PharmD',
          email: 'rana.yousif@email.com', phone: '+966509999999', linkedin: 'linkedin.com/in/rana-yousif',
          city: 'Riyadh', country: 'Saudi Arabia',
          currentEmployer: 'KAMC', jobTitle: 'Pharmacy Specialist - Drug Information',
          mentorWilling: true, preceptorWilling: true, preceptorStatus: 'Approved',
          certification: { bcps: false, specialty: 'Drug Information', year: null },
          engagement: { guestLectures: 2, careerDays: 2, workshops: 2, panels: 1 },
          mentees: 3, mentoringDuration: '10 months'
        }
    ],
    
    employment_outcomes: {
        total_employed: 245,
        employed_6months: 218,
        employed_12months: 238,
        employment_rate_6m: 89,
        employment_rate_12m: 97,
        outcomes: [
            { outcome: 'Employed', count: 238, percentage: 65 },
            { outcome: 'Residency', count: 45, percentage: 12 },
            { outcome: 'Fellowship', count: 28, percentage: 8 },
            { outcome: "Master's/PhD", count: 22, percentage: 6 },
            { outcome: 'Military/Government', count: 18, percentage: 5 },
            { outcome: 'Entrepreneurship', count: 16, percentage: 4 }
        ],
        by_sector: {
            'Hospital': 128,
            'Community': 82,
            'Industry': 35,
            'Academia': 18,
            'Regulatory': 12,
            'Research': 8
        },
        by_program: {
            'PharmD': { employed: 215, rate: 98 },
            'BPharm': { employed: 18, rate: 92 },
            'Technician': { employed: 25, rate: 89 }
        },
        by_year: {
            2019: { employed: 45, rate: 95 },
            2020: { employed: 82, rate: 97 },
            2021: { employed: 78, rate: 96 },
            2022: { employed: 33, rate: 82 }
        }
    },

    postgraduate: [
        { id: 'PG001', name: 'Dr. Ahmed Al-Rashid', type: 'Board Certification', cert: 'BCPS', specialty: 'Cardiology', institution: 'ACPE', country: 'USA', year: 2022, status: 'Certified' },
        { id: 'PG002', name: 'Dr. Fatima Al-Suwaidi', type: 'Board Certification', cert: 'BCPS', specialty: 'Internal Medicine', institution: 'ACPE', country: 'USA', year: 2021, status: 'Certified' },
        { id: 'PG003', name: 'Dr. Layan Al-Dossary', type: 'Residency', cert: 'PGY1', specialty: 'Internal Medicine', institution: 'KAMC', country: 'Saudi Arabia', year: 2022, status: 'In Progress' },
        { id: 'PG004', name: 'Dr. Sara Al-Zahrani', type: 'Board Certification', cert: 'BCPS-AQ Oncology', specialty: 'Oncology', institution: 'ACPE', country: 'USA', year: 2023, status: 'Certified' },
        { id: 'PG005', name: 'Dr. Hana Al-Harbi', type: 'Residency', cert: 'PGY1', specialty: 'Internal Medicine', institution: 'KAAUH', country: 'Saudi Arabia', year: 2023, status: 'In Progress' },
    ],

    engagement: {
        guest_lectures: 25,
        career_days: 15,
        workshops: 18,
        panels: 12,
        conferences: 8,
        advisory_boards: 5,
        committees: 7,
        total_engagements: 90,
        active_alumni: 42
    },

    mentorship: {
        total_mentors: 42,
        total_mentees: 95,
        active_pairs: 68,
        avg_rating: 4.8,
        mentor_specialties: {
            'Clinical Practice': 18,
            'Residency Preparation': 15,
            'Career Development': 12,
            'Board Exam Prep': 8,
            'Research': 5,
            'Leadership': 4
        }
    },

    preceptorship: {
        total_preceptors: 38,
        active_preceptors: 32,
        training_sites: 28,
        site_coordinators: 12,
        total_capacity: 450,
        current_load: 315,
        utilization_rate: 70,
        pending_approval: 6,
        by_type: {
            'Hospital': 16,
            'Community': 8,
            'Institutional': 6,
            'Specialty': 8
        }
    },

    events: [
        { id: 'EVT001', title: 'Annual Reunion 2026', type: 'Reunion', date: '2026-03-15', location: 'King Saud University', attendees: 0, registered: 0, status: 'Upcoming' },
        { id: 'EVT002', title: 'Career Development Webinar', type: 'Webinar', date: '2026-02-28', location: 'Online', attendees: 0, registered: 85, status: 'Upcoming' },
        { id: 'EVT003', title: 'Alumni Networking Breakfast', type: 'Networking', date: '2026-01-30', location: 'Riyadh', attendees: 156, registered: 178, status: 'Upcoming' },
        { id: 'EVT004', title: 'Board Exam Prep Workshop', type: 'Workshop', date: '2025-12-10', location: 'Online', attendees: 234, registered: 245, status: 'Completed' },
        { id: 'EVT005', title: 'Residency Showcase', type: 'Career Day', date: '2025-11-15', location: 'KAMC', attendees: 189, registered: 210, status: 'Completed' }
    ],

    achievements: [
        { id: 'ACH001', name: 'Dr. Ahmed Al-Rashid', achievement: 'Excellence in Clinical Practice', type: 'Award', year: 2023 },
        { id: 'ACH002', name: 'Dr. Sara Al-Zahrani', achievement: '5 Publications in Peer-Reviewed Journals', type: 'Publication', year: 2023 },
        { id: 'ACH003', name: 'Dr. Fatima Al-Suwaidi', achievement: 'Elected to Hospital Ethics Committee', type: 'Leadership', year: 2023 },
        { id: 'ACH004', name: 'Dr. Layan Al-Dossary', achievement: 'Featured in National Health Magazine', type: 'Media', year: 2023 },
        { id: 'ACH005', name: 'Dr. Mohammad Al-Otaibi', achievement: 'Best Pharmacy Manager Award', type: 'Award', year: 2023 }
    ],

    feedback: {
        total_responses: 234,
        response_rate: 68,
        program_satisfaction: 4.5,
        curriculum_relevance: 4.3,
        practice_readiness: 4.6,
        employer_expectations: 4.4,
        skills_gaps: ['Advanced Pharmacokinetics', 'Clinical Research', 'Healthcare Economics'],
        survey_results: [
            { metric: 'Overall Program Satisfaction', score: 4.5, trend: '+0.2' },
            { metric: 'Curriculum Relevance', score: 4.3, trend: '+0.1' },
            { metric: 'Practice Readiness', score: 4.6, trend: '+0.3' },
            { metric: 'Mentorship Quality', score: 4.7, trend: '+0.4' },
            { metric: 'Faculty Support', score: 4.4, trend: '+0.1' }
        ]
    },

    documents: {
        consent_forms: 245,
        communication_history: 1250,
        cv_submissions: 156,
        certificates: 89,
        participation_letters: 67
    }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ALUMNI_DATABASE;
}
