import { Button } from "@/components/ui/button";
import { ArrowRight, Bell, Zap } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/20 to-primary/10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center gap-2 bg-accent px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-accent-foreground">
                  Мониторинг в реальном времени
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                AvitoBot
              </span>
              <br />
              Парсер Авито с уведомлениями в Telegram
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Получайте мгновенные уведомления о новых объявлениях на Авито по вашим параметрам. 
              Настройте фильтры один раз и будьте первыми среди покупателей.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="hero" className="group">
                Начать бесплатно
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Как это работает
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Мониторинг</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">&lt;30с</div>
                <div className="text-sm text-muted-foreground">Уведомления</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Пользователей</div>
              </div>
            </div>
          </div>
          
          {/* Phone mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-3xl transform rotate-6" />
              <img 
                src={heroPhone} 
                alt="AvitoBot на телефоне" 
                className="relative z-10 max-w-sm w-full h-auto drop-shadow-2xl"
              />
              {/* Floating notification */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg animate-bounce">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  <span className="text-sm font-medium">Новое объявление!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};