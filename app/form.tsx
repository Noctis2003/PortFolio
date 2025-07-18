"use client";

import { useState } from "react";
import sendMail from "./actions";
import { Poppins } from "next/font/google";
import { Send, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function Form() {
  const [value, setValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!value.trim()) return;
    
    setIsSubmitting(true);
    setStatus('idle');
    
    try {
      const formData = new FormData(e.currentTarget);
      setValue("");
      
      await sendMail(formData);
      
      setStatus('success');
      
      // Reset status after delay
      setTimeout(() => {
        setStatus('idle');
      }, 4000);
      
    } catch (error) {
      setStatus('error');
      console.error("Form submission error:", error);
      
      // Reset status after delay
      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case 'success':
        return 'Message sent successfully! 🎉';
      case 'error':
        return 'Failed to send message. Please try again.';
      default:
        return 'Send me a message...';
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'success':
        return 'text-emerald-600';
      case 'error':
        return 'text-red-600';
      default:
        return 'text-slate-600';
    }
  };

  return (
    <section className="md:mx-3 mt-6 mb-8 mx-2">
      <div className="rounded-2xl p-4 md:p-8 w-full bg-gradient-to-br from-slate-50 to-slate-100/50 backdrop-blur-sm border border-slate-200/50 shadow-xl">
        <div className="mb-4 md:mb-6">
          <div className="flex items-center gap-2 md:gap-3 mb-2">
            <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-blue-600 flex-shrink-0" />
            <h2 className="font-black text-2xl md:text-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
              Get In Touch
            </h2>
          </div>
          <p className={`${getStatusColor()} text-base md:text-lg font-medium transition-colors duration-300`}>
            {getStatusMessage()}
          </p>
        </div>

        <form
          className={`${poppins.className} relative`}
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 p-4 md:p-6">
                <div className="flex-1 relative">
                  <input
                    name="text"
                    className="w-full bg-transparent text-slate-900 placeholder-slate-500 text-base md:text-lg font-medium focus:outline-none resize-none py-2 md:py-0"
                    value={value}
                    placeholder="Type your message here..."
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    required
                    disabled={isSubmitting}
                    autoComplete="off"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
                </div>
                
                <button
                  className={`
                    relative px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed w-full md:w-auto md:min-w-[120px] flex items-center justify-center gap-2
                    ${isSubmitting 
                      ? 'bg-gradient-to-r from-slate-400 to-slate-500 text-white' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                    }
                  `}
                  type="submit"
                  disabled={isSubmitting || !value.trim()}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4 md:w-5 md:h-5" />
                      <span>Send</span>
                    </div>
                  )}
                  
                  {/* Button hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Status indicator */}
          {status !== 'idle' && (
            <div className={`mt-3 md:mt-4 flex items-start md:items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all duration-300 ${
              status === 'success' 
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              {status === 'success' ? (
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 flex-shrink-0 mt-0.5 md:mt-0" />
              ) : (
                <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-red-600 flex-shrink-0 mt-0.5 md:mt-0" />
              )}
              <span className="font-medium text-sm md:text-base">
                {status === 'success' 
                  ? 'Your message has been sent successfully!' 
                  : 'There was an error sending your message. Please try again.'
                }
              </span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Form;