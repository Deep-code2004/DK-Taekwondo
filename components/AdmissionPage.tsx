import React, { useState } from 'react';
import { AdmissionFormData } from '../types';
import Button from './Button';
import emailjs from '@emailjs/browser';

const AdmissionPage: React.FC = () => {
  const [formData, setFormData] = useState<AdmissionFormData>({
    studentName: '', dateOfBirth: '', gender: '', email: '', phone: '', address: '',
    emergencyContactName: '', emergencyContactPhone: '',
    trainingType: '',
    program: '',
    previousExperience: '', agreedToTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
        // If trainingType changes, reset the program selection.
        if (name === 'trainingType') {
            setFormData(prev => ({
                ...prev,
                [name]: value as 'in-person' | 'online',
                // Pre-fill program for online, clear it for in-person to force a choice.
                program: value === 'online' ? 'Online Training (All Ages & Ranks)' : ''
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_email: 'deepkhatri050@gmail.com',
        from_name: formData.studentName,
        student_name: formData.studentName,
        date_of_birth: formData.dateOfBirth,
        gender: formData.gender,
        training_type: formData.trainingType === 'in-person' ? 'In-Person' : 'Online',
        program: formData.program,
        previous_experience: formData.previousExperience || 'None',
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        emergency_contact_name: formData.emergencyContactName,
        emergency_contact_phone: formData.emergencyContactPhone,
        agreed_to_terms: formData.agreedToTerms ? 'Yes' : 'No',
      };

      await emailjs.send(
        'service_pqzgm19',
        'template_5h1qpgv',
        templateParams,
        'R6qL8tYwAY6PhzIFV'
      );

      setSubmitted(true);
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('There was an error submitting your application. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-16 bg-slate-900 text-center flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="bg-slate-800 p-8 sm:p-10 rounded-lg shadow-2xl border border-slate-700 max-w-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-3xl font-bold text-white mb-4">Application Submitted!</h1>
            <div className="text-slate-300 space-y-4 text-left">
              <p>
                Thank you for your interest in our Taekwondo Academy! Your application has been successfully submitted.
              </p>
              <p className="bg-slate-900 p-4 rounded-md border border-slate-700">
                We will review your application and contact you within 2-3 business days at the email address you provided.
              </p>
              <p className="text-sm text-slate-400">
                If you have any questions, feel free to reach out to us at <a href="mailto:deepkhatri050@gmail.com" className="font-bold text-red-400 underline">deepkhatri050@gmail.com</a>.
              </p>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Join Our Academy</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">
            Complete the form below to take the first step on your Taekwondo journey.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-slate-800 p-6 sm:p-8 rounded-lg shadow-2xl border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <h3 className="md:col-span-2 text-xl font-bold text-red-500 border-b border-slate-700 pb-2 mb-2">Student Information</h3>
            <input type="text" name="studentName" placeholder="Student's Full Name" required onChange={handleChange} className="bg-slate-700 text-white p-3 rounded-md border border-slate-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none" />
            <input type="date" name="dateOfBirth" required onChange={handleChange} className="bg-slate-700 text-white p-3 rounded-md border border-slate-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none" />
            <select name="gender" onChange={handleChange} required className="bg-slate-700 text-white p-3 rounded-md border border-slate-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none">
              <option value="">Select Gender</option><option>Male</option><option>Female</option><option>Other</option>
            </select>
            <input type="email" name="email" placeholder="Parent/Guardian Email" required onChange={handleChange} className="bg-slate-700 text-white p-3 rounded-md border border-slate-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none" />
            <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} className="bg-slate-700 text-white p-3 rounded-md border border-slate-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none" />
            <input type="text" name="address" placeholder="Home Address" required onChange={handleChange} className="bg-slate-700 text-white p-3 rounded-md border border-slate-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none" />

            <h3 className="md:col-span-2 text-xl font-bold text-red-500 border-b border-slate-700 pb-2 mb-2 mt-4">Emergency Contact</h3>
            <input type="text" name="emergencyContactName" placeholder="Emergency Contact Name" required onChange={handleChange} className="bg-slate-700 text-white p-3 rounded-md border border-slate-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none" />
            <input type="tel" name="emergencyContactPhone" placeholder="Emergency Contact Phone" required onChange={handleChange} className="bg-slate-700 text-white p-3 rounded-md border border-slate-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none" />

            <h3 className="md:col-span-2 text-xl font-bold text-red-500 border-b border-slate-700 pb-2 mb-2 mt-4">Program Details</h3>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-300 mb-2">How would you like to train?</label>
              <div className="flex flex-col sm:flex-row gap-4">
                  <label className="flex-1 flex items-center p-3 rounded-md border bg-slate-700 border-slate-600 has-[:checked]:bg-red-900/50 has-[:checked]:border-red-500 cursor-pointer transition-all">
                      <input type="radio" name="trainingType" value="in-person" required checked={formData.trainingType === 'in-person'} onChange={handleChange} className="h-4 w-4 text-red-600 bg-gray-700 border-gray-600 focus:ring-red-500" />
                      <span className="ml-2 text-white">In-Person (At our Dojang)</span>
                  </label>
                  <label className="flex-1 flex items-center p-3 rounded-md border bg-slate-700 border-slate-600 has-[:checked]:bg-red-900/50 has-[:checked]:border-red-500 cursor-pointer transition-all">
                      <input type="radio" name="trainingType" value="online" required checked={formData.trainingType === 'online'} onChange={handleChange} className="h-4 w-4 text-red-600 bg-gray-700 border-gray-600 focus:ring-red-500" />
                      <span className="ml-2 text-white">Online (Live-Stream)</span>
                  </label>
              </div>
            </div>

            {formData.trainingType === 'in-person' && (
                <select name="program" value={formData.program} onChange={handleChange} className="bg-slate-700 text-white p-3 rounded-md border border-slate-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none md:col-span-2" required>
                    <option value="">Select an In-Person Program</option>
                    <option value="Little Tigers">Little Tigers (Ages 4-6)</option>
                    <option value="Beginner Kids">Beginner Kids (Ages 7-12)</option>
                    <option value="Intermediate Kids">Intermediate Kids (Ages 7-12)</option>
                    <option value="Adult All Ranks">Adult All Ranks (Ages 13+)</option>
                    <option value="Family Class">Family Class (All Ages)</option>
                </select>
            )}

            {formData.trainingType === 'online' && (
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-300 mb-2">Program</label>
                    <input type="text" name="program" value="Online Training (All Ages & Ranks)" readOnly className="w-full bg-slate-900 text-slate-400 p-3 rounded-md border border-slate-600 cursor-default" />
                </div>
            )}

            <textarea name="previousExperience" placeholder="Any previous martial arts experience? (Optional)" rows={3} onChange={handleChange} className="bg-slate-700 text-white p-3 rounded-md border border-slate-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none md:col-span-2"></textarea>

            <div className="flex items-start md:col-span-2 mt-4">
              <input id="terms" name="agreedToTerms" type="checkbox" required checked={formData.agreedToTerms} onChange={handleChange} className="h-4 w-4 text-red-600 bg-gray-700 border-gray-600 rounded focus:ring-red-500 mt-1" />
              <label htmlFor="terms" className="ml-3 block text-sm text-slate-300">
                I agree to the <a href="#" className="font-medium text-red-500 hover:underline">terms and conditions</a> and acknowledge the waiver of liability.
              </label>
            </div>
          </div>
          <div className="mt-8 text-center">
             <Button
                type="submit"
                size="lg"
                variant="primary"
                disabled={!formData.agreedToTerms || !formData.trainingType || (formData.trainingType === 'in-person' && !formData.program) || isSubmitting}
             >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionPage;
