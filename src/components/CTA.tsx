import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import techBg from "@/assets/tech-bg.png";

export const CTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={techBg} 
          alt="Tech background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-background/80 to-primary/20" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Готовы быть первыми на Авито?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам пользователей, которые уже получают преимущество 
            с мгновенными уведомлениями от AvitoBot
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="hero" className="group">
              Начать бесплатно прямо сейчас
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button size="lg" variant="outline" className="group">
              <MessageCircle className="w-5 h-5" />
              Написать в Telegram
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm">
              <div className="text-2xl font-bold text-primary mb-2">⚡</div>
              <div className="text-sm text-muted-foreground">
                Мгновенная настройка за 5 минут
              </div>
            </div>
            
            <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm">
              <div className="text-2xl font-bold text-primary mb-2">🔒</div>
              <div className="text-sm text-muted-foreground">
                Безопасность и конфиденциальность
              </div>
            </div>
            
            <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm">
              <div className="text-2xl font-bold text-primary mb-2">📱</div>
              <div className="text-sm text-muted-foreground">
                Работает на всех устройствах
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};