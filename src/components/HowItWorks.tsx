import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Settings, Bell, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Подключите Telegram",
    description: "Добавьте нашего бота в Telegram и получите персональный токен для уведомлений"
  },
  {
    number: "02", 
    icon: Settings,
    title: "Настройте фильтры",
    description: "Укажите категорию, регион, диапазон цен и ключевые слова для поиска нужных объявлений"
  },
  {
    number: "03",
    icon: Bell,
    title: "Получайте уведомления",
    description: "Мгновенно получайте сообщения о новых объявлениях, соответствующих вашим критериям"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Как это работает?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Три простых шага до получения уведомлений о новых объявлениях
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="border-0 shadow-card bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-500 rounded-full flex items-center justify-center mx-auto">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-2 border-background">
                        <span className="text-xs font-bold text-accent-foreground">{step.number}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="telegram" className="group">
            Начать настройку
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};