import React, { useState } from 'react';
import { useResponsive } from '@/hooks/use-responsive';
import { cn } from '@/lib/utils';
import ResponsiveContainer from './ResponsiveContainer';
import ResponsiveText from './ResponsiveText';
import ResponsiveButton from './ResponsiveButton';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  rows?: number;
}

interface ResponsiveFormProps {
  title: string;
  subtitle?: string;
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => Promise<void>;
  submitButtonText?: string;
  className?: string;
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
}

/**
 * Enhanced responsive form component for AIRAVATH
 * Handles contact forms, newsletter signups, etc. with optimal UX across devices
 */
export const ResponsiveForm: React.FC<ResponsiveFormProps> = ({
  title,
  subtitle,
  fields,
  onSubmit,
  submitButtonText = 'Send Message',
  className = '',
  contactInfo,
}) => {
  const responsive = useResponsive();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    fields.forEach(field => {
      const value = formData[field.name] || '';
      
      if (field.required && !value.trim()) {
        newErrors[field.name] = `${field.label} is required`;
      } else if (field.type === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
        newErrors[field.name] = 'Please enter a valid email address';
      } else if (field.type === 'tel' && value && !/^[\+]?[\d\s\-\(\)]{10,}$/.test(value)) {
        newErrors[field.name] = 'Please enter a valid phone number';
      }
    });
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      setFormData({});
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClasses = (hasError: boolean) => {
    const baseClasses = [
      'w-full px-4 py-3 bg-gray-900/50 border rounded-lg',
      'text-white placeholder-gray-400',
      'transition-all duration-200 ease-in-out',
      'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
      'backdrop-blur-sm',
    ];

    if (hasError) {
      baseClasses.push('border-red-500 focus:ring-red-500 focus:border-red-500');
    } else {
      baseClasses.push('border-gray-600 hover:border-gray-500');
    }

    // Responsive sizing
    if (responsive.isVerySmall || responsive.isExtraSmall) {
      baseClasses.push('text-base min-h-[48px]'); // Prevent zoom on iOS
    } else {
      baseClasses.push('text-lg min-h-[52px]');
    }

    return baseClasses.join(' ');
  };

  const renderField = (field: FormField) => {
    const hasError = !!errors[field.name];
    const value = formData[field.name] || '';

    if (field.type === 'textarea') {
      return (
        <div key={field.name} className="space-y-2">
          <label htmlFor={field.name} className="block text-sm font-medium text-gray-300">
            {field.label} {field.required && <span className="text-red-400">*</span>}
          </label>
          <textarea
            id={field.name}
            name={field.name}
            value={value}
            onChange={handleInputChange}
            placeholder={field.placeholder}
            required={field.required}
            maxLength={field.maxLength}
            rows={field.rows || (responsive.isVerySmall ? 3 : responsive.isExtraSmall ? 4 : 5)}
            className={getInputClasses(hasError)}
            style={{ resize: 'vertical', minHeight: responsive.isVerySmall ? '120px' : '140px' }}
          />
          {hasError && (
            <p className="text-red-400 text-sm">{errors[field.name]}</p>
          )}
          {field.maxLength && (
            <p className="text-gray-500 text-xs text-right">
              {value.length}/{field.maxLength}
            </p>
          )}
        </div>
      );
    }

    return (
      <div key={field.name} className="space-y-2">
        <label htmlFor={field.name} className="block text-sm font-medium text-gray-300">
          {field.label} {field.required && <span className="text-red-400">*</span>}
        </label>
        <input
          id={field.name}
          name={field.name}
          type={field.type}
          value={value}
          onChange={handleInputChange}
          placeholder={field.placeholder}
          required={field.required}
          maxLength={field.maxLength}
          className={getInputClasses(hasError)}
          autoComplete={
            field.type === 'email' ? 'email' :
            field.type === 'tel' ? 'tel' :
            field.name === 'name' ? 'name' : 'off'
          }
        />
        {hasError && (
          <p className="text-red-400 text-sm">{errors[field.name]}</p>
        )}
      </div>
    );
  };

  return (
    <ResponsiveContainer
      className={cn('py-16', className)}
      padding="lg"
      safeArea={responsive.hasNotch}
    >
      <div className={cn(
        'grid gap-12',
        responsive.isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2',
        'max-w-6xl mx-auto'
      )}>
        {/* Form Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <ResponsiveText
              variant="title"
              align="left"
              weight="bold"
              clamp={true}
              className="text-white"
            >
              {title}
            </ResponsiveText>
            
            {subtitle && (
              <ResponsiveText
                variant="body"
                align="left"
                className="text-gray-300"
              >
                {subtitle}
              </ResponsiveText>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {fields.map(renderField)}
            
            <ResponsiveButton
              type="submit"
              variant="primary"
              size={responsive.isVerySmall ? 'md' : 'lg'}
              fullWidth={true}
              disabled={isSubmitting}
              icon={isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
              className="mt-8"
            >
              {isSubmitting ? 'Sending...' : submitButtonText}
            </ResponsiveButton>
          </form>
        </div>

        {/* Contact Info Section */}
        {contactInfo && (
          <div className="space-y-8 lg:pl-8">
            <div className="space-y-6">
              <ResponsiveText
                variant="subtitle"
                align="left"
                weight="semibold"
                className="text-white"
              >
                Get in Touch
              </ResponsiveText>

              <div className="space-y-4">
                {contactInfo.email && (
                  <div className="flex items-center space-x-4 text-gray-300">
                    <Mail size={responsive.isVerySmall ? 18 : 20} className="text-blue-400 flex-shrink-0" />
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="hover:text-white transition-colors break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                )}

                {contactInfo.phone && (
                  <div className="flex items-center space-x-4 text-gray-300">
                    <Phone size={responsive.isVerySmall ? 18 : 20} className="text-blue-400 flex-shrink-0" />
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="hover:text-white transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                )}

                {contactInfo.address && (
                  <div className="flex items-start space-x-4 text-gray-300">
                    <MapPin size={responsive.isVerySmall ? 18 : 20} className="text-blue-400 flex-shrink-0 mt-1" />
                    <span className="leading-relaxed">{contactInfo.address}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Additional content area */}
            <div className="p-6 bg-gray-900/30 rounded-lg backdrop-blur-sm border border-gray-700">
              <ResponsiveText
                variant="body"
                className="text-gray-300"
              >
                Ready to revolutionize your travel experience? Contact AIRAVATH today to learn more about our cutting-edge air taxi services and be part of the future of urban mobility.
              </ResponsiveText>
            </div>
          </div>
        )}
      </div>
    </ResponsiveContainer>
  );
};

export default ResponsiveForm;
